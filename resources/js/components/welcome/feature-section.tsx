import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

const Card = memo(({ title, description, tags, icon, index }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover="hover"
            style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                padding: '2.5rem',
                borderRadius: '8px',
                position: 'relative',
                height: '100%',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            {/* Animated Hover Border */}
            <motion.div 
                variants={{
                    hover: { opacity: 1, scale: 1 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '8px',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.div 
                    variants={{
                        hover: { y: -5, scale: 1.1 }
                    }}
                    style={{ marginBottom: '2rem', width: 'fit-content' }}
                >
                    {icon}
                </motion.div>
                
                <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600, 
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                }}>{title}</h3>
                
                <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-secondary)', 
                    marginBottom: '2rem',
                    lineHeight: '1.8'
                }}>{description}</p>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                    {tags.map((tag: string, i: number) => (
                        <motion.span 
                            key={tag} 
                            variants={{
                                hover: { y: -2, background: 'rgba(0, 245, 255, 0.15)', color: 'var(--accent-primary)' }
                            }}
                            transition={{ delay: i * 0.05 }}
                            style={{ 
                                fontSize: '0.65rem', 
                                padding: '0.3rem 0.8rem', 
                                background: 'rgba(255,255,255,0.05)', 
                                borderRadius: '20px',
                                color: 'var(--text-dim)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'default',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
});


const FeatureSection = memo(() => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);

    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
            <div className="container">
                <Reveal>
                    <div style={{ maxWidth: '600px', marginBottom: '5rem' }}>
                        <h2 style={{ 
                            fontSize: '2.5rem', 
                            lineHeight: '1.1', 
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)'
                        }}>Architectural Layers</h2>
                        <p style={{ 
                            fontSize: '1rem', 
                            color: 'var(--text-secondary)',
                            lineHeight: '1.8'
                        }}>
                            A multi-tiered approach to software engineering, ensuring every component,
                            from the user interface to the database schema is optimized for speed and reliability.
                        </p>
                    </div>
                </Reveal>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '2.5rem' 
                }}>
                    <Card 
                        index={0}
                        title="Frontend Innovation"
                        description="Crafting high-fidelity, reactive interfaces that prioritize user experience and performance consistency."
                        tags={['HTML', 'CSS', 'JS', 'JQUERY', 'REACT']}
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                        }
                    />
                    <Card 
                        index={1}
                        title="Backend Logic & APIs"
                        description="Engineered for throughput and security. Building the robust neural networks that power digital businesses."
                        tags={['PHP', 'LARAVEL', 'NODE', 'EXPRESS']}
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        }
                    />
                    <Card 
                        index={2}
                        title="Database Architecture"
                        description="Data integrity at scale. Designing schema structures that allow for rapid growth and millisecond queries."
                        tags={['MYSQL', 'MONGODB', 'SCHEMA OPT.']}
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-primary)' }}>
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                        }
                    />
                </div>
            </div>
            
            {/* Background decorative text "01 // STACK" with scroll movement */}
            <div style={{
                position: 'relative',
                width: '100%',
                marginTop: '-50px',
                pointerEvents: 'none',
                overflow: 'hidden'
            }}>
                <motion.span 
                    style={{ 
                        x,
                        display: 'block',
                        fontSize: '12rem', 
                        fontWeight: 900, 
                        color: 'rgba(255,255,255,0.02)',
                        letterSpacing: '-20px',
                        fontFamily: 'var(--font-heading)',
                        whiteSpace: 'nowrap'
                    }}
                >
                    01//STACK
                </motion.span>
            </div>
        </section>
    );
});


export default FeatureSection;

