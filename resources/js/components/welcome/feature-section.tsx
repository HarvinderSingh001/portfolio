import React, { memo, useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
    SiPhp, SiLaravel, SiNodedotjs, SiExpress,
    SiMysql, SiPostgresql, SiMongodb, SiRedis,
    SiDocker, SiGit, SiLinux, SiNginx
} from 'react-icons/si';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useVelocity, useAnimationFrame } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

// ─── Constants & Data ─────────────────────────────────────────────────────────

const SZ = 32;
const SkillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
    HTML:      { icon: <SiHtml5      size={SZ} />, color: '#E34F26' },
    CSS:       { icon: <SiCss        size={SZ} />, color: '#1572B6' },
    JS:        { icon: <SiJavascript size={SZ} />, color: '#F7DF1E' },
    TS:        { icon: <SiTypescript size={SZ} />, color: '#3178C6' },
    REACT:     { icon: <SiReact      size={SZ} />, color: '#61DAFB' },
    PHP:       { icon: <SiPhp        size={SZ} />, color: '#777BB4' },
    LARAVEL:   { icon: <SiLaravel    size={SZ} />, color: '#FF2D20' },
    NODE:      { icon: <SiNodedotjs  size={SZ} />, color: '#339933' },
    EXPRESS:   { icon: <SiExpress    size={SZ} />, color: '#ffffff' },
    MYSQL:     { icon: <SiMysql      size={SZ} />, color: '#4479A1' },
    POSTGRES:  { icon: <SiPostgresql size={SZ} />, color: '#336791' },
    MONGODB:   { icon: <SiMongodb    size={SZ} />, color: '#47A248' },
    REDIS:     { icon: <SiRedis      size={SZ} />, color: '#DC382D' },
    DOCKER:    { icon: <SiDocker     size={SZ} />, color: '#2496ED' },
    GIT:       { icon: <SiGit        size={SZ} />, color: '#F05032' },
    LINUX:     { icon: <SiLinux      size={SZ} />, color: '#FCC624' },
    NGINX:     { icon: <SiNginx      size={SZ} />, color: '#009639' },
};

const SKILL_CONNECTIONS = [
    // Frontend internal
    { from: 'HTML', to: 'CSS', color: '#E34F26' },
    { from: 'CSS', to: 'JS', color: '#1572B6' },
    { from: 'JS', to: 'TS', color: '#F7DF1E' },
    { from: 'TS', to: 'REACT', color: '#3178C6' },

    // Frontend -> Backend
    { from: 'REACT', to: 'NODE', color: '#61DAFB' },
    { from: 'REACT', to: 'LARAVEL', color: '#61DAFB' },

    // Backend internal
    { from: 'NODE', to: 'EXPRESS', color: '#339933' },
    { from: 'PHP', to: 'LARAVEL', color: '#777BB4' },

    // Backend -> Database
    { from: 'EXPRESS', to: 'MONGODB', color: '#ffffff' },
    { from: 'LARAVEL', to: 'MYSQL', color: '#FF2D20' },
    { from: 'NODE', to: 'REDIS', color: '#339933' },
    { from: 'LARAVEL', to: 'POSTGRES', color: '#FF2D20' },

    // Connectivity & DevOps
    { from: 'GIT', to: 'NODE', color: '#F05032' },
    { from: 'GIT', to: 'LARAVEL', color: '#F05032' },
    { from: 'NGINX', to: 'LARAVEL', color: '#009639' },
    { from: 'NGINX', to: 'NODE', color: '#009639' },
    { from: 'DOCKER', to: 'LINUX', color: '#2496ED' },
    { from: 'NGINX', to: 'DOCKER', color: '#009639' },
];

const cards = [
    {
        id: 0,
        title: 'Neural Interfaces',
        description: 'Building sentient UIs that anticipate user intent through motion, physics, and cognitive design patterns.',
        accent: '#00f5ff',
        label: 'LAYER_ONE',
        icon: '01'
    },
    {
        id: 1,
        title: 'Elastic Architecture',
        description: 'Fault-tolerant distributed systems engineered for extreme scale and sub-millisecond orchestration.',
        accent: '#7c3aed',
        label: 'LAYER_TWO',
        icon: '02'
    },
    {
        id: 2,
        title: 'Quantum Strategy',
        description: "Data persistence and algorithmic optimization strategies that redefine what's possible in real-time.",
        accent: '#f59e0b',
        label: 'LAYER_THREE',
        icon: '03'
    },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

const BackgroundParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    size: Math.random() * 2,
                    color: Math.random() > 0.5 ? 'rgba(0, 245, 255, 0.08)' : 'rgba(124, 58, 237, 0.08)'
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Connect nearby particles
                particles.forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 245, 255, ${0.03 * (1 - dist/100)})`;
                        ctx.stroke();
                    }
                });
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'plus-lighter' }} />;
};

const SkillNode = memo(({ skill, entry, isActive, isConnected, onHover }: any) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - (rect.left + rect.width / 2)) * 0.4);
        mouseY.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); onHover(null); }}
            onMouseEnter={() => onHover(skill)}
            style={{ x: springX, y: springY, position: 'relative', cursor: 'pointer', zIndex: isActive ? 50 : 1 }}
        >
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: -50 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        style={{
                            position: 'absolute', left: '50%', x: '-50%',
                            padding: '4px 12px', background: 'rgba(0, 0, 0, 0.8)',
                            border: `1px solid ${entry.color}`, borderRadius: '4px',
                            fontSize: '0.5rem', fontWeight: 900, color: entry.color,
                            whiteSpace: 'nowrap', backdropFilter: 'blur(10px)',
                            textShadow: `0 0 10px ${entry.color}`, pointerEvents: 'none'
                        }}
                    >
                        [ SYSTEM_REVEAL: {Math.floor(Math.random() * 20 + 80)}%_OP ]
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                animate={{
                    borderColor: isActive ? entry.color : (isConnected ? `${entry.color}80` : 'rgba(255,255,255,0.05)'),
                    scale: isActive ? 1.15 : (isConnected ? 1.05 : 1),
                    background: isActive ? `${entry.color}15` : 'rgba(10, 10, 12, 0.6)',
                    rotateY: isActive ? 20 : 0,
                    rotateX: isActive ? -20 : 0,
                    boxShadow: isActive ? `0 0 40px ${entry.color}40, inset 0 0 20px ${entry.color}20` : 'none',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                    width: 76, height: 76, borderRadius: '22px',
                    border: '1px solid', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden'
                }}
            >
                {/* Holographic Scanline */}
                {isActive && (
                    <motion.div
                        initial={{ y: -80 }}
                        animate={{ y: 80 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: `linear-gradient(90deg, transparent, ${entry.color}, transparent)`, opacity: 0.5 }}
                    />
                )}
                
                <div style={{ color: isActive ? '#fff' : (isConnected ? `${entry.color}` : `${entry.color}cc`), transition: 'all 0.4s', filter: isActive ? `drop-shadow(0 0 12px ${entry.color})` : 'none' }}>
                    {entry.icon}
                </div>
            </motion.div>
            
            <motion.span
                animate={{ 
                    opacity: isActive ? 1 : 0.9, 
                    y: isActive ? 8 : 0,
                    color: isActive ? '#fff' : (isConnected ? entry.color : '#fff'),
                    scale: isActive ? 1.25 : 1,
                    textShadow: isActive ? `0 0 15px ${entry.color}` : 'none'
                }}
                style={{
                    position: 'absolute', bottom: -32, left: '50%', x: '-50%',
                    fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px',
                    whiteSpace: 'nowrap', transition: 'all 0.4s'
                }}
            >
                {skill}
            </motion.span>
        </motion.div>
    );
});

const ConnectionLayer = ({ nodeCoords, hoveredSkill }: any) => {
    return (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="white" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
            {SKILL_CONNECTIONS.map((conn, i) => {
                const from = nodeCoords[conn.from];
                const to = nodeCoords[conn.to];
                if (!from || !to) return null;

                const isDirectlyActive = hoveredSkill === conn.from || hoveredSkill === conn.to;
                // Propagate activity: if any connected node is hovered
                const isActive = isDirectlyActive;
                const color = conn.color;

                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const path = `M ${from.x} ${from.y} C ${from.x + dx/2} ${from.y}, ${from.x + dx/2} ${to.y}, ${to.x} ${to.y}`;

                return (
                    <g key={i}>
                        <motion.path
                            d={path}
                            fill="none"
                            stroke={color}
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                                pathLength: 1, 
                                opacity: isActive ? 1 : 0.12,
                                strokeWidth: isActive ? 4 : 1.5
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        {/* Animated Data Packets */}
                        <motion.path
                            d={path}
                            fill="none"
                            stroke={color}
                            strokeWidth="4"
                            strokeDasharray="2, 60"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: -100 }}
                            transition={{ duration: isActive ? 1.5 : 4, repeat: Infinity, ease: 'linear' }}
                            style={{ 
                                filter: isActive ? 'url(#glow)' : 'none', 
                                opacity: isActive ? 1 : 0.2,
                                strokeWidth: isActive ? 5 : 2
                            }}
                        />
                        {/* High-speed flare */}
                        {isActive && (
                            <motion.path
                                d={path}
                                fill="none"
                                stroke="rgba(255,255,255,0.8)"
                                strokeWidth="1"
                                strokeDasharray="1, 200"
                                initial={{ strokeDashoffset: 200 }}
                                animate={{ strokeDashoffset: -200 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'circOut' }}
                            />
                        )}
                    </g>
                );
            })}
        </svg>
    );
};

const FeatureSection = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [nodeCoords, setNodeCoords] = useState<Record<string, { x: number; y: number }>>({});
    const nodeRefs = useRef<Record<string, any>>({});

    const updateCoords = useCallback(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newCoords: any = {};
        Object.entries(nodeRefs.current).forEach(([id, el]) => {
            if (el) {
                const elRect = el.getBoundingClientRect();
                newCoords[id] = {
                    x: elRect.left - rect.left + elRect.width / 2,
                    y: elRect.top - rect.top + elRect.height / 2
                };
            }
        });
        setNodeCoords(newCoords);
    }, []);

    useEffect(() => {
        updateCoords();
        window.addEventListener('resize', updateCoords);
        return () => window.removeEventListener('resize', updateCoords);
    }, [updateCoords]);

    const { scrollYProgress } = useScroll();
    const bgTextX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    
    // Advanced 3D Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });
    
    const rotateX = useTransform(springY, [-500, 500], [8, -8]);
    const rotateY = useTransform(springX, [-500, 500], [-8, 8]);

    const handleContainerMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
    };

    const handleContainerMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const skillGroups = [
        { name: 'Frontend Layer', skills: ['HTML', 'CSS', 'JS', 'TS', 'REACT'] },
        { name: 'Backend Engine', skills: ['PHP', 'LARAVEL', 'NODE', 'EXPRESS'] },
        { name: 'Data Vault', skills: ['MYSQL', 'POSTGRES', 'MONGODB', 'REDIS'] },
        { name: 'Infrastructure & Server', skills: ['GIT', 'NGINX', 'DOCKER', 'LINUX'] },
    ];

    const isConnected = (s1: string, s2: string) => SKILL_CONNECTIONS.some(c => (c.from === s1 && c.to === s2) || (c.from === s2 && c.to === s1));

    return (
        <section style={{ backgroundColor: '#050507', padding: '180px 0', overflow: 'hidden', position: 'relative' }}>
            <BackgroundParticles />
            
            {/* Top Spotlight */}
            <div style={{ position: 'absolute', top: '-20%', left: '50%', x: '-50%', width: '1000px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(0,245,255,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <Reveal>
                        <motion.div
                            animate={{ letterSpacing: ['0.4em', '0.6em', '0.4em'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ fontSize: '0.75rem', fontWeight: 900, color: '#00f5ff', textTransform: 'uppercase', marginBottom: '2rem' }}
                        >
                            [ TECHNICAL_ARCHITECTURE_V3.0 ]
                        </motion.div>
                        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: '#fff', lineHeight: 0.85, letterSpacing: '-0.04em' }}>
                            A Stack Built for <br /> <span style={{ color: '#00f5ff' }}>Extreme Scale.</span>
                        </h2>
                    </Reveal>
                </div>

                {/* 3D Feature Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '10rem' }}>
                    {cards.map((card, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '4rem 3rem', borderRadius: '40px',
                                    background: 'rgba(255,255,255,0.01)',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    backdropFilter: 'blur(40px)', position: 'relative', overflow: 'hidden'
                                }}
                            >
                                <div style={{ fontSize: '3rem', fontWeight: 900, opacity: 0.05, position: 'absolute', top: '10%', right: '10%', color: card.accent }}>{card.icon}</div>
                                <div style={{ fontSize: '0.6rem', fontWeight: 900, color: card.accent, letterSpacing: '4px', marginBottom: '1.5rem' }}>{card.label}</div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>{card.title}</h3>
                                <p style={{ fontSize: '1.05rem', color: '#777', lineHeight: 1.6 }}>{card.description}</p>
                                <motion.div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }} />
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                {/* Neural Connectivity Visualizer */}
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleContainerMouseMove}
                    onMouseLeave={handleContainerMouseLeave}
                    style={{
                        position: 'relative', padding: '12rem 4rem',
                        background: 'radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.02) 0%, transparent 70%)',
                        borderRadius: '60px', border: '1px solid rgba(255,255,255,0.03)',
                        boxShadow: '0 80px 150px -40px rgba(0,0,0,0.8)',
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformStyle: 'preserve-3d',
                        perspective: '1200px'
                    }}
                >
                    <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
                    <ConnectionLayer nodeCoords={nodeCoords} hoveredSkill={hoveredSkill} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
                        {skillGroups.map((group, gi) => (
                            <motion.div 
                                key={gi} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: gi * 0.1 }}
                                style={{ 
                                    position: 'relative',
                                    padding: '6rem 3rem 4rem',
                                    background: 'rgba(255,255,255,0.015)',
                                    borderRadius: '40px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(20px)',
                                    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.2)'
                                }}
                            >
                                {/* Group Heading Wrapper */}
                                <motion.div style={{ 
                                    position: 'absolute', top: 0, left: '50%', x: '-50%', y: '-50%',
                                    padding: '10px 40px', background: '#050507',
                                    border: '1px solid rgba(255,255,255,0.15)', borderRadius: '15px',
                                    zIndex: 20, boxShadow: '0 0 40px rgba(0,245,255,0.1)'
                                }}>
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        style={{ 
                                            fontSize: '1rem', fontWeight: 900, color: '#fff',
                                            letterSpacing: '0.6em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                                            textShadow: '0 0 20px rgba(0,245,255,0.5)',
                                        }}
                                    >
                                        {group.name}
                                    </motion.div>
                                </motion.div>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap', zIndex: 1 }}>
                                    {group.skills.map((skill) => {
                                        const entry = SkillIcons[skill];
                                        if (!entry) return null;
                                        const isActive = hoveredSkill === skill;
                                        const isConnectedToActive = hoveredSkill && isConnected(hoveredSkill, skill);
                                        
                                        return (
                                            <div key={skill} ref={el => nodeRefs.current[skill] = el}>
                                                <SkillNode 
                                                    skill={skill} 
                                                    entry={entry} 
                                                    isActive={isActive} 
                                                    isConnected={isConnectedToActive}
                                                    onHover={setHoveredSkill}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Hyper-Drammatic Background Text */}
            <div style={{ position: 'absolute', bottom: '-5%', left: 0, width: '200%', pointerEvents: 'none', mixBlendMode: 'overlay' }}>
                <motion.div style={{ x: bgTextX, display: 'flex', gap: '10vw' }}>
                    {[1, 2].map(i => (
                        <span key={i} style={{ fontSize: '30rem', fontWeight: 900, color: 'rgba(255,255,255,0.015)', whiteSpace: 'nowrap', letterSpacing: '-0.04em' }}>
                            SYSTEM ARCHITECTURE SYSTEM ARCHITECTURE
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
});

export default FeatureSection;
