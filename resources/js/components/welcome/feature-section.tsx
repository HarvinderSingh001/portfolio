import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import {
    SiHtml5, SiCss, SiJavascript, SiJquery, SiReact,
    SiPhp, SiLaravel, SiNodedotjs, SiExpress,
    SiMysql, SiMongodb,
    SiDocker, SiNginx, SiLinux, SiGit,
} from 'react-icons/si';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useVelocity } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

// ─── Brand icons (real react-icons/si) ────────────────────────────────────────
const SZ = 40;
const SkillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
    HTML:          { icon: <SiHtml5      size={SZ} />, color: '#e34f26' },
    CSS:           { icon: <SiCss        size={SZ} />, color: '#1572b6' },
    JS:            { icon: <SiJavascript size={SZ} />, color: '#f7df1e' },
    JQUERY:        { icon: <SiJquery     size={SZ} />, color: '#0769ad' },
    REACT:         { icon: <SiReact      size={SZ} />, color: '#61dafb' },
    PHP:           { icon: <SiPhp        size={SZ} />, color: '#8993be' },
    LARAVEL:       { icon: <SiLaravel    size={SZ} />, color: '#ff2d20' },
    NODE:          { icon: <SiNodedotjs  size={SZ} />, color: '#68a063' },
    EXPRESS:       { icon: <SiExpress    size={SZ} />, color: '#e0e0e0' },
    MYSQL:         { icon: <SiMysql      size={SZ} />, color: '#00758f' },
    MONGODB:       { icon: <SiMongodb    size={SZ} />, color: '#4db33d' },
    'SCHEMA OPT.': { icon: <SiMysql      size={SZ} />, color: '#f59e0b' },
    DOCKER:        { icon: <SiDocker     size={SZ} />, color: '#2496ed' },
    NGINX:         { icon: <SiNginx      size={SZ} />, color: '#009639' },
    LINUX:         { icon: <SiLinux      size={SZ} />, color: '#f5c518' },
    GIT:           { icon: <SiGit        size={SZ} />, color: '#f05032' },
};

// ─── Card data ─────────────────────────────────────────────────────────────────
const cards = [
    {
        id: 0,
        category: '01 — Frontend',
        title: 'Frontend Innovation',
        description:
            'Crafting high-fidelity, reactive interfaces that prioritize user experience and performance consistency.',
        accent: '#00f5ff',
        skills: ['HTML', 'CSS', 'JS', 'JQUERY', 'REACT'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
    },
    {
        id: 1,
        category: '02 — Backend',
        title: 'Backend Logic & APIs',
        description:
            'Engineered for throughput and security. Building the robust neural networks that power digital businesses.',
        accent: '#a78bfa',
        skills: ['PHP', 'LARAVEL', 'NODE', 'EXPRESS'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        id: 2,
        category: '03 — Database',
        title: 'Database Architecture',
        description:
            'Data integrity at scale. Designing schema structures that allow for rapid growth and millisecond queries.',
        accent: '#f59e0b',
        skills: ['MYSQL', 'MONGODB', 'SCHEMA OPT.'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
    },
];

// ─── Global Skills Box ─────────────────────────────────────────────────────────
const SkillsBox = memo(() => {
    const allSkills = Object.keys(SkillIcons);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Advanced 3D Box Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3.5deg", "-3.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3.5deg", "3.5deg"]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });

        // 3D Tilt Math
        const width = rect.width;
        const height = rect.height;
        const mouseXLocal = e.clientX - rect.left;
        const mouseYLocal = e.clientY - rect.top;
        x.set(mouseXLocal / width - 0.5);
        y.set(mouseYLocal / height - 0.5);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        setIsHovering(false);
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <div style={{
            marginTop: '7rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            perspective: '1500px', // Add perspective to the parent container
        }}>
            <Reveal>
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                    }}>
                        Technological Arsenal
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
                        The core suite of tools, languages, and frameworks I leverage to architect and deploy modern digital solutions.
                    </p>
                </div>
                
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        rotateX,
                        rotateY,
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '24px',
                        padding: '4rem 3rem',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2.5rem',
                        width: '100%',
                        margin: '0 auto'
                    }}
                >
                    {/* Advanced ambient atmospheric glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle at center, rgba(167,139,250,0.03) 0%, transparent 60%)',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }} />

                    {/* Dynamic Mouse Tracking Light */}
                    <motion.div
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            x: mousePos.x - 400,
                            y: mousePos.y - 400,
                        }}
                        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 50%)',
                            pointerEvents: 'none',
                            zIndex: 0,
                            borderRadius: '50%',
                        }}
                    />

                    {allSkills.map((skill, i) => {
                        const entry = SkillIcons[skill];
                        if (!entry) return null;
                        
                        // Professional Subtle Floating
                        const dur = 5 + (i % 4); 
                        const yFloat = (i % 2 === 0) ? -6 : 6;
                        
                        return (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.04,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 12
                                }}
                                whileHover={{ 
                                    scale: 1.15, 
                                    zIndex: 10,
                                }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    cursor: 'pointer',
                                }}
                            >
                                {/* Advanced continuous hovering & elastic drag animation */}
                                <motion.div
                                    drag
                                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                    whileTap={{ cursor: "grabbing", scale: 0.95 }}
                                    animate={{ 
                                       y: [0, yFloat, 0]
                                    }}
                                    transition={{
                                        duration: dur,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: (i % 5) * 0.5,
                                    }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Icon container with theme match perfectly emulating FeatureCards */}
                                    <motion.div 
                                        style={{ 
                                            position: 'relative', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            width: '68px',
                                            height: '68px',
                                            borderRadius: '16px',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.04)',
                                            transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s',
                                        }}
                                        whileHover={{
                                            background: `${entry.color}16`,
                                            borderColor: `${entry.color}35`,
                                            boxShadow: `0 10px 25px -10px ${entry.color}60`,
                                        }}
                                    >
                                        <div style={{ color: entry.color }}>
                                            {entry.icon}
                                        </div>
                                    </motion.div>
                                </motion.div>
                                    
                                <motion.span
                                    style={{
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap',
                                        transition: 'color 0.3s ease',
                                    }}
                                    whileHover={{ color: entry.color }}
                                >
                                    {skill}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Reveal>
        </div>
    );
});

// ─── Feature Card ──────────────────────────────────────────────────────────────
const FeatureCard = memo(({ card, index }: { card: typeof cards[0]; index: number }) => {
    const [hovered, setHovered] = useState(false);

    // Advanced 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            onHoverStart={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                flex: '1 1 0', 
                minWidth: '260px',
                perspective: '1200px'
            }}
        >
            <motion.div
                animate={{
                    borderColor: hovered ? `${card.accent}55` : 'var(--border-color)',
                    boxShadow: hovered
                        ? `0 20px 60px -15px ${card.accent}20`
                        : '0 0 0 transparent',
                    y: hovered ? -4 : 0,
                }}
                style={{
                    rotateX,
                    rotateY,
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                }}
            >
                {/* Accent top bar on hover */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                        borderRadius: '16px 16px 0 0',
                    }}
                />

                {/* Glow blob */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    style={{
                        position: 'absolute', top: '-28px', right: '-28px',
                        width: '110px', height: '110px',
                        background: `radial-gradient(circle, ${card.accent}18, transparent 70%)`,
                        borderRadius: '50%', pointerEvents: 'none',
                    }}
                />

                {/* Category badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '3px 10px', borderRadius: '20px',
                    background: `${card.accent}14`,
                    border: `1px solid ${card.accent}30`,
                    marginBottom: '1.5rem', width: 'fit-content',
                }}>
                    <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: card.accent,
                        boxShadow: `0 0 6px ${card.accent}`,
                        display: 'block',
                    }} />
                    <span style={{
                        fontSize: '0.6rem', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: card.accent, fontWeight: 600,
                    }}>{card.category}</span>
                </div>

                {/* Icon */}
                <motion.div
                    animate={{
                        color: hovered ? card.accent : 'var(--text-dim)',
                        y: hovered ? -2 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    style={{
                        width: '52px', height: '52px', borderRadius: '12px',
                        background: hovered ? `${card.accent}16` : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${hovered ? card.accent + '35' : 'rgba(255,255,255,0.07)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '1.5rem',
                        transition: 'background 0.3s, border 0.3s',
                    }}
                >
                    {card.icon}
                </motion.div>

                {/* Title */}
                <h3 style={{
                    fontSize: '1.15rem', fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: '0.65rem',
                    lineHeight: 1.25,
                }}>{card.title}</h3>

                {/* Description */}
                <p style={{
                    fontSize: '0.875rem', color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                }}>{card.description}</p>

            </motion.div>
        </motion.div>
    );
});

// ─── Feature Section ───────────────────────────────────────────────────────────
const FeatureSection = memo(() => {
    const { scrollYProgress, scrollY } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
    
    // Advanced Scroll Velocity Parallax
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-15, 15]);
    const skewX = useTransform(skewVelocity, (v) => `${v}deg`);

    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
            <div className="container">
                <Reveal>
                    <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem', lineHeight: '1.1',
                            marginBottom: '1.5rem', color: 'var(--text-primary)',
                        }}>
                            Architectural Layers
                        </h2>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            A multi-tiered approach to software engineering, ensuring every component —
                            from the user interface to the database schema — is optimised for speed and reliability.
                        </p>
                    </div>
                </Reveal>

                {/* 3-card full-width flex row */}
                <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'stretch', flexWrap: 'wrap' }}>
                    {cards.map((card, i) => (
                        <FeatureCard key={card.id} card={card} index={i} />
                    ))}
                </div>
            </div>

            <div style={{ padding: '0 2vw', width: '100%', margin: '0 auto', maxWidth: '1920px' }}>
                <SkillsBox />
            </div>

            {/* Decorative background text */}
            <div style={{
                position: 'relative', width: '100%',
                marginTop: '-30px', pointerEvents: 'none', overflow: 'hidden',
            }}>
                <motion.span
                    style={{
                        x, skewX, display: 'block',
                        fontSize: '12rem', fontWeight: 900,
                        color: 'rgba(255,255,255,0.02)',
                        letterSpacing: '-20px',
                        fontFamily: 'var(--font-heading)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    01//STACK
                </motion.span>
            </div>
        </section>
    );
});

export default FeatureSection;
