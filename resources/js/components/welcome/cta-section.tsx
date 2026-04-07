import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../motion/Reveal';
import { Magnetic } from '../motion/Magnetic';

const CtaSection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            {/* Pulsing Background Glow */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                <Reveal width="100%">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Ready to Build the Future?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            Let's discuss how we can architect your next mission-critical system.
                        </p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Magnetic>
                                <motion.a 
                                    whileHover={{ boxShadow: '0 10px 40px rgba(0, 245, 255, 0.4)' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#contact" 
                                    className="btn btn-primary" 
                                    style={{ padding: '1.5rem 3rem', fontSize: '1.1rem', fontWeight: 700, display: 'inline-block' }}
                                >
                                    START_CONVERSATION
                                </motion.a>
                            </Magnetic>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
});


export default CtaSection;

