import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

const CaseStudySection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ position: 'relative' }}
                    >
                        {/* Dashboard Image Mockup */}
                        <motion.div 
                            whileHover={{ 
                                scale: 1.02,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { duration: 0.3 }
                            }}
                            style={{
                                width: '100%',
                                background: 'var(--bg-tertiary)',
                                borderRadius: '12px',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                padding: '10px',
                                position: 'relative',
                                perspective: '1000px',
                                overflow: 'hidden'
                            }}
                        >
                            <img 
                                src="/dashboard.png" 
                                alt="Astra Enterprise Platform" 
                                style={{ width: '100%', borderRadius: '6px', opacity: 0.9 }}
                            />
                            {/* Scanning Sweep Mask */}
                            <motion.div 
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.2), transparent)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}
                            />
                        </motion.div>
                        
                        {/* Uptime Badge - matching image style */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ y: -5 }}
                            style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'var(--bg-tertiary)',
                                padding: '1.5rem',
                                borderRadius: '4px',
                                borderLeft: '4px solid var(--accent-primary)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                zIndex: 10
                            }}
                        >
                             <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Uptime Guarantee</span>
                             <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>99.99%</span>
                        </motion.div>
                    </motion.div>
                    
                    <div>
                        <Reveal>
                            <span className="label-mini">FEATURED CASE STUDY</span>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Enterprise<br />Dashboard</h2>
                        </Reveal>
                        <Reveal delay={0.5}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                                A high-fidelity visualization platform built for global logistics tracking. 
                                The architecture supports real-time data streaming from 10k+ IoT sensors 
                                with zero perceptible latency.
                            </p>
                        </Reveal>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                            {['Node.js', 'Express', 'MySQL', 'PHP Laravel'].map((tag, i) => (
                                <motion.span 
                                    key={tag} 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    whileHover={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)' }}
                                    style={{ 
                                        background: 'rgba(255,255,255,0.05)', 
                                        padding: '0.4rem 1rem', 
                                        borderRadius: '4px', 
                                        fontSize: '0.75rem',
                                        color: 'var(--text-dim)',
                                        cursor: 'default',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        
                        <Reveal delay={1}>
                            <motion.a 
                                whileHover={{ x: 5 }}
                                href="#case" 
                                style={{ 
                                    color: 'var(--accent-primary)', 
                                    textDecoration: 'none', 
                                    fontWeight: 600, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem' 
                                }}
                            >
                                Deep Dive Into Architecture 
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </motion.a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default CaseStudySection;

