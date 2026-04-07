import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from '../motion/Magnetic';

const Footer = memo(() => {
    return (
        <footer style={{ 
            background: 'var(--bg-primary)', 
            padding: '6rem 0 2rem 0', 
            borderTop: '1px solid var(--border-color)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Technical Grid for Footer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `linear-gradient(rgba(0, 245, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.02) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                zIndex: 0,
                maskImage: 'linear-gradient(to bottom, black, transparent)'
            }} />

            {/* Infinite Looping Scanner Border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '1px',
                overflow: 'hidden',
                zIndex: 1
            }}>
                <motion.div 
                    animate={{ 
                        x: ['0%', '-50%']
                    }}
                    transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    style={{
                        width: '200%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, var(--accent-primary) 25%, transparent 50%, var(--accent-primary) 75%, transparent 100%)',
                        backgroundSize: '50% 100%'
                    }}
                />
            </div>


            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '300px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }} 
                                transition={{ duration: 4, repeat: Infinity }}
                                style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px' }}
                            ></motion.div>
                            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
                                ARCHITECT<span style={{ color: 'var(--accent-primary)' }}>.DEV</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Building the next generation of digital infrastructure. 
                            Specialized in high-performance software systems and 
                            advanced digital architecture.
                        </p>
                    </motion.div>
                    
                    <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigation</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Expertise', 'Projects', 'Process', 'Terminal'].map(item => (
                                    <li key={item}>
                                        <Magnetic>
                                            <motion.a 
                                                whileHover={{ x: 5, color: 'var(--accent-primary)' }}
                                                href={`#${item.toLowerCase()}`} 
                                                style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem', display: 'block', transition: 'color 0.2s', padding: '0.2rem 0.5rem' }}
                                            >
                                                {item}
                                            </motion.a>
                                        </Magnetic>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['GitHub', 'LinkedIn', 'StackOverflow', 'Instagram'].map(item => (
                                    <li key={item}>
                                        <Magnetic>
                                            <motion.a 
                                                whileHover={{ x: 5, color: 'var(--accent-primary)' }}
                                                href="#" 
                                                style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem', display: 'block', transition: 'color 0.2s', padding: '0.2rem 0.5rem' }}
                                            >
                                                {item}
                                            </motion.a>
                                        </Magnetic>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        style={{ textAlign: 'right' }}
                    >
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>LOCAL TIME</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT/BST</span>
                        <motion.div 
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ fontSize: '0.6rem', color: 'var(--accent-primary)', marginTop: '0.5rem', fontWeight: 700 }}
                        >
                            ● LIVE_SYNC_ACTIVE
                        </motion.div>
                    </motion.div>
                </div>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}
                    >
                        © {new Date().getFullYear()} ARCHITECT.DEV \\ BUILT WITH PRECISION
                    </motion.span>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textDecoration: 'none' }}>PRIVACY POLICY</a>
                        <a href="#" style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textDecoration: 'none' }}>TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;