import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

const StatBox = memo(({ label, value, index }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: 'var(--accent-primary)', transition: { duration: 0.2 } }}
            style={{
                background: 'var(--bg-secondary)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                position: 'relative',
                zIndex: 1,
                transition: 'border-color 0.3s ease'
            }}
        >
            <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ 
                    opacity: 1,
                    x: [0, -2, 2, -1, 1, 0],
                }}
                transition={{ 
                    opacity: { duration: 0.8, delay: index * 0.1 + 0.3 },
                    x: { duration: 0.2, repeat: Infinity, repeatDelay: 3, delay: index * 0.1 + 1 }
                }}
                style={{ fontSize: '2.5rem', margin: 0, color: 'var(--accent-primary)', position: 'relative' }}
            >
                {value}
                <motion.span
                    animate={{ 
                        opacity: [0, 0.5, 0],
                        x: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 0.1, 
                        repeat: Infinity, 
                        repeatDelay: 5,
                        delay: index * 0.1 + 2
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        color: '#ff00ff',
                        zIndex: -1,
                        opacity: 0
                    }}
                >
                    {value}
                </motion.span>
            </motion.h4>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>{label}</span>
        </motion.div>
    );
});


const StatsSection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Text */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.015, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '25vw',
                    fontWeight: 900,
                    color: '#fff', 
                    fontFamily: 'var(--font-heading)',
                    pointerEvents: 'none',
                    letterSpacing: '-0.05em'
                }}
            >SYSX</motion.div>
            
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    
                    <div>
                        <Reveal>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Bridging<br />Complexity</h2>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                                Software is the infrastructure of modern business. We treat code with the 
                                same precision as physical construction, ensuring every system is scalable, 
                                maintainable, and built for the long term.
                            </p>
                        </Reveal>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <StatBox index={0} label="API EFFICIENCY" value="99.9%" />
                            <StatBox index={1} label="DB SCHEMA OPT." value="85+" />
                            <StatBox index={2} label="LATENCY REDUCTION" value="12ms" />
                            <StatBox index={3} label="SCALABILITY" value="∞" />
                        </div>
                    </div>
                    
                    {/* Terminal Mockup */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            background: '#0a1120',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            padding: '1.5rem',
                            fontFamily: "'Fira Code', monospace, sans-serif",
                            fontSize: '0.8rem',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            <span style={{ fontSize: '0.65rem', color: '#445', marginLeft: '1rem' }}>zsh - architect_cli --status</span>
                        </div>
                        
                        <div style={{ color: '#abb2bf' }}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}
                            >
                                // SYSTEM_INITIALIZATION_SUCCESS
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                                style={{ color: 'var(--accent-primary)', marginBottom: '0.2rem' }}
                            >
                                ^ architect deploy [- environment 'production' ]
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5, staggerChildren: 0.1 }}
                            >
                                <div style={{ marginBottom: '0.2rem' }}>RUNTIME: Cluster_node-A1</div>
                                <div style={{ marginBottom: '0.2rem' }}>INTEGRITY: [2849-1]</div>
                                <div style={{ color: '#27c93f', marginBottom: '0.2rem' }}>STATUS: [READY // ACTIVE]</div>
                                <div style={{ marginBottom: '1rem' }}>&gt; performance_optimized::true</div>
                            </motion.div>
                            
                            <motion.hr 
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 2.0, duration: 0.5 }}
                                style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '1rem 0' }} 
                            />
                                
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 2.5 }}
                                style={{ fontSize: '0.75rem', lineHeight: '1.6' }}
                            >
                                INFRASTRUCTURE AS NEW LAYER. ALL nodes responding at peak capacity. 
                                Monitoring established. [v2.4.9]
                            </motion.div>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
});

export default StatsSection;

