import React, { memo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Magnetic } from '../motion/Magnetic';
import { RevealCharacters } from '../motion/RevealCharacters';
import { portfolioData } from '../../data/portfolio';

/* ─── Compass-point dot markers (N / E / S / W) ─────── */
const COMPASS = [
    { angle: -90, label: 'N' },
    { angle:   0, label: 'E' },
    { angle:  90, label: 'S' },
    { angle: 180, label: 'W' },
];

/* ─── HUD corner bracket ─────────────────────────────── */
const Bracket = ({
    corner, size = 18, delay,
}: {
    corner: 'tl' | 'tr' | 'bl' | 'br';
    size?: number;
    delay: number;
}) => {
    const isTop    = corner === 'tl' || corner === 'tr';
    const isLeft   = corner === 'tl' || corner === 'bl';
    const pos: React.CSSProperties = {
        position: 'absolute',
        ...(isTop  ? { top:    '-8px' } : { bottom: '-8px' }),
        ...(isLeft ? { left:   '-8px' } : { right:  '-8px' }),
        width:  `${size}px`,
        height: `${size}px`,
        borderTop:    isTop  ? '2px solid rgba(0,245,255,0.7)' : 'none',
        borderBottom: !isTop ? '2px solid rgba(0,245,255,0.7)' : 'none',
        borderLeft:   isLeft ? '2px solid rgba(0,245,255,0.7)' : 'none',
        borderRight:  !isLeft ? '2px solid rgba(0,245,255,0.7)' : 'none',
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
            style={pos}
        />
    );
};

/* ─── SVG Ring Decoration ────────────────────────────── */
const SIZE = 340;
const CX   = SIZE / 2;
const R1   = 158; // outer track radius
const R2   = 132; // inner track radius

const RingDecoration = () => (
    <svg
        width={SIZE} height={SIZE}
        style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
    >
        <defs>
            {/* Radar sweep gradient */}
            <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
                <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.9" />
            </linearGradient>

            {/* Arc glow filter */}
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>

        {/* ── Outer base track ── */}
        <circle cx={CX} cy={CX} r={R1}
            fill="none"
            stroke="rgba(0,245,255,0.08)"
            strokeWidth="1"
        />

        {/* ── Segmented outer ring (8 arcs with gaps) ── */}
        {Array.from({ length: 8 }, (_, i) => {
            const circumference = 2 * Math.PI * R1;
            const segLen  = circumference / 8 * 0.72;
            const gapLen  = circumference / 8 * 0.28;
            const offset  = (circumference / 8) * i;
            return (
                <circle key={i} cx={CX} cy={CX} r={R1}
                    fill="none"
                    stroke="rgba(0,245,255,0.22)"
                    strokeWidth="1.5"
                    strokeDasharray={`${segLen} ${circumference - segLen}`}
                    strokeDashoffset={-offset}
                    strokeLinecap="round"
                    filter="url(#glow)"
                />
            );
        })}

        {/* ── Rotating radar sweep arc ── */}
        <motion.circle
            cx={CX} cy={CX} r={R1}
            fill="none"
            stroke="url(#sweep)"
            strokeWidth="2.5"
            strokeDasharray={`${2 * Math.PI * R1 * 0.22} ${2 * Math.PI * R1 * 0.78}`}
            strokeLinecap="round"
            filter="url(#glow)"
            style={{ transformOrigin: `${CX}px ${CX}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />

        {/* ── Inner track ── */}
        <circle cx={CX} cy={CX} r={R2}
            fill="none"
            stroke="rgba(124,58,237,0.12)"
            strokeWidth="1"
        />

        {/* ── Inner rotating segmented ring (purple) ── */}
        {Array.from({ length: 6 }, (_, i) => {
            const circ    = 2 * Math.PI * R2;
            const segLen  = circ / 6 * 0.6;
            const offset  = (circ / 6) * i;
            return (
                <motion.circle key={i} cx={CX} cy={CX} r={R2}
                    fill="none"
                    stroke="rgba(124,58,237,0.3)"
                    strokeWidth="1"
                    strokeDasharray={`${segLen} ${circ - segLen}`}
                    strokeDashoffset={-offset}
                    strokeLinecap="round"
                    style={{ transformOrigin: `${CX}px ${CX}px` }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
            );
        })}

        {/* ── Compass-point diamond markers on outer ring ── */}
        {COMPASS.map(({ angle, label }) => {
            const rad = (angle * Math.PI) / 180;
            const mx  = CX + Math.cos(rad) * R1;
            const my  = CX + Math.sin(rad) * R1;
            return (
                <g key={label}>
                    {/* Diamond */}
                    <motion.rect
                        x={mx - 4} y={my - 4}
                        width={8} height={8}
                        fill="#00f5ff"
                        opacity={0.9}
                        style={{ transformOrigin: `${mx}px ${my}px` }}
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: COMPASS.indexOf({ angle, label }) * 0.4 }}
                        transform={`rotate(45, ${mx}, ${my})`}
                        filter="url(#glow)"
                    />
                    {/* Tiny cross-hair lines */}
                    <line x1={mx - 10} y1={my} x2={mx - 6} y2={my}
                        stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
                    <line x1={mx + 6}  y1={my} x2={mx + 10} y2={my}
                        stroke="rgba(0,245,255,0.4)" strokeWidth="1" />
                </g>
            );
        })}

        {/* ── Tick marks around outer ring (every 30°) ── */}
        {Array.from({ length: 12 }, (_, i) => {
            const a   = ((360 / 12) * i - 90) * (Math.PI / 180);
            const isMain = i % 3 === 0;
            const r1  = R1 + 4;
            const r2  = R1 + (isMain ? 12 : 8);
            return (
                <line key={i}
                    x1={CX + Math.cos(a) * r1} y1={CY + Math.sin(a) * r1}
                    x2={CX + Math.cos(a) * r2} y2={CY + Math.sin(a) * r2}
                    stroke={isMain ? 'rgba(0,245,255,0.5)' : 'rgba(0,245,255,0.2)'}
                    strokeWidth={isMain ? 1.5 : 1}
                />
            );
        })}
    </svg>
);

/* CY alias for tick marks (same as CX since it's a square) */
const CY = CX;

/* ─── Main section ───────────────────────────────────── */
const HeroSection = memo(() => {

    /* 3-D tilt on hover */
    const cardRef  = useRef<HTMLDivElement>(null);
    const mouseX   = useMotionValue(0);
    const mouseY   = useMotionValue(0);
    const springX  = useSpring(mouseX, { stiffness: 100, damping: 22 });
    const springY  = useSpring(mouseY, { stiffness: 100, damping: 22 });
    const rotateX  = useTransform(springY, [-140, 140], [8, -8]);
    const rotateY  = useTransform(springX, [-140, 140], [-8, 8]);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - r.left  - r.width  / 2);
        mouseY.set(e.clientY - r.top   - r.height / 2);
    };
    const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

    const containerVariants = {
        hidden : { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const itemVariants = {
        hidden : { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    };

    return (
        <section className="section-padding"
            style={{ paddingTop: '180px', position: 'relative', overflow: 'hidden' }}>

            {/* Grid bg */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `linear-gradient(rgba(0,245,255,0.03) 1px,transparent 1px),
                                  linear-gradient(90deg,rgba(0,245,255,0.03) 1px,transparent 1px)`,
                backgroundSize: '50px 50px', zIndex: -2,
                maskImage: 'radial-gradient(ellipse at center,black,transparent 80%)',
            }} />

            {/* Vertical scanner stripe */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1 }}>
                <motion.div
                    animate={{ y: ['0%', '-50%'] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    style={{
                        width: '100%', height: '200%',
                        background: 'linear-gradient(180deg,transparent 0%,var(--accent-primary) 25%,transparent 50%,var(--accent-primary) 75%,transparent 100%)',
                        backgroundSize: '100% 50%', opacity: 0.07,
                    }}
                />
            </div>

            {/* Ambient glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{
                    position: 'absolute', top: '10%', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle,rgba(0,245,255,0.05) 0%,transparent 60%)',
                    zIndex: -1, filter: 'blur(50px)',
                }}
            />

            <div className="container">
                <div className="hero-layout">

                    {/* ══ LEFT ══ */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible"
                        style={{ maxWidth: '800px' }}>

                        <motion.span variants={itemVariants} className="label-mini"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ width: '40px', height: '1px', background: 'var(--accent-primary)' }} />
                            {portfolioData.hero.label}
                        </motion.span>

                        <h1 style={{ margin: 0, padding: 0, fontSize: 'inherit', fontWeight: 'normal', lineHeight: 'normal' }}>
                            <RevealCharacters text={portfolioData.hero.heading1}
                                style={{ fontSize: 'clamp(3rem,10vw,5.5rem)', lineHeight: '1',
                                    letterSpacing: '-0.02em', color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-heading)', fontWeight: 800 }} />
                            <RevealCharacters text={portfolioData.hero.heading2} delay={0.6}
                                style={{ fontSize: 'clamp(3rem,10vw,5.5rem)', lineHeight: '1',
                                    letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                                className="text-gradient" />
                        </h1>

                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)',
                            marginBottom: '3rem', maxWidth: '650px', lineHeight: '1.8' }}>
                            {portfolioData.hero.description}
                        </p>

                        <motion.div variants={itemVariants}
                            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Magnetic>
                                <motion.a whileTap={{ scale: 0.98 }}
                                    href={portfolioData.hero.primaryButtonLink}
                                    className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                    {portfolioData.hero.primaryButtonText}
                                </motion.a>
                            </Magnetic>
                            <Magnetic>
                                <motion.a whileTap={{ scale: 0.98 }}
                                    href={portfolioData.hero.secondaryButtonLink}
                                    className="btn btn-outline"
                                    style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.03)' }}>
                                    {portfolioData.hero.secondaryButtonText}
                                </motion.a>
                            </Magnetic>
                        </motion.div>
                    </motion.div>

                    {/* ══ RIGHT: Profile ══ */}
                    <motion.div
                        className="hero-profile-col"
                        initial={{ opacity: 0, x: 60, scale: 0.88 }}
                        animate={{ opacity: 1, x: 0,  scale: 1    }}
                        transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'relative', flexShrink: 0,
                            width: `${SIZE}px`, height: `${SIZE + 60}px`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        {/* ── SVG decorative rings ── */}
                        <RingDecoration />

                        {/* ── Soft glow bloom behind photo ── */}
                        <motion.div
                            animate={{ opacity: [0.18, 0.32, 0.18] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                width: '210px', height: '210px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(0,245,255,0.2) 0%, rgba(124,58,237,0.12) 55%, transparent 80%)',
                                filter: 'blur(16px)',
                            }}
                        />

                        {/* ══ Photo card — 3-D tilt ══ */}
                        <motion.div
                            ref={cardRef}
                            onMouseMove={onMouseMove}
                            onMouseLeave={onMouseLeave}
                            style={{
                                position: 'relative', zIndex: 2,
                                rotateX, rotateY,
                                transformStyle: 'preserve-3d',
                                perspective: '900px',
                            }}
                        >
                            {/* HUD corner brackets */}
                            <Bracket corner="tl" delay={1.4} />
                            <Bracket corner="tr" delay={1.5} />
                            <Bracket corner="bl" delay={1.6} />
                            <Bracket corner="br" delay={1.7} />

                            {/* Spinning conic border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute', inset: '-3px',
                                    borderRadius: '50%',
                                    background: 'conic-gradient(from 0deg, #00f5ff 0%, #7c3aed 30%, transparent 50%, #7c3aed 72%, #00f5ff 100%)',
                                    zIndex: -1,
                                }}
                            />

                            {/* Separator ring */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                borderRadius: '50%',
                                background: 'var(--bg-primary)',
                                zIndex: -1, margin: '3px',
                            }} />

                            {/* Photo */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                                style={{
                                    width: '200px', height: '200px',
                                    borderRadius: '50%', overflow: 'hidden',
                                    boxShadow: '0 0 30px rgba(0,245,255,0.15), 0 0 60px rgba(124,58,237,0.10)',
                                }}
                            >
                                <img
                                    src="/profile.png"
                                    alt="Harvinder Singh – Full-Stack Developer"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            </motion.div>

                            {/* ── Available badge ── */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0,  scale: 1   }}
                                transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
                                style={{
                                    position: 'absolute', bottom: '-26px', left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg,rgba(5,5,16,0.97),rgba(14,14,34,0.97))',
                                    border: '1px solid rgba(0,245,255,0.3)',
                                    borderRadius: '20px', padding: '5px 16px',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    backdropFilter: 'blur(16px)',
                                    boxShadow: '0 4px 20px rgba(0,245,255,0.14), inset 0 0 12px rgba(0,245,255,0.04)',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <motion.span
                                    animate={{ opacity: [1, 0.15, 1], scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.4, repeat: Infinity }}
                                    style={{
                                        width: '6px', height: '6px', borderRadius: '50%',
                                        background: '#00f5ff', display: 'inline-block',
                                        boxShadow: '0 0 8px #00f5ff', flexShrink: 0,
                                    }}
                                />
                                <span style={{
                                    fontSize: '0.58rem', letterSpacing: '0.16em',
                                    color: 'var(--accent-primary)', fontWeight: 700,
                                    textTransform: 'uppercase',
                                }}>
                                    Available for Hire
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* ── Profile label — top of rings ── */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1,  y: 0   }}
                            transition={{ delay: 2.0, duration: 0.6 }}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontSize: '0.55rem',
                                letterSpacing: '0.22em',
                                color: 'rgba(0,245,255,0.45)',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            ◈ {portfolioData.name} ◈
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
});

export default HeroSection;
