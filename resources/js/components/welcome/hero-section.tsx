import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from '../motion/Magnetic';
import { RevealCharacters } from '../motion/RevealCharacters';
import { portfolioData } from '../../data/portfolio';

const HeroSection = memo(() => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <section className="section-padding" style={{ paddingTop: '180px', position: 'relative', overflow: 'hidden' }}>
            {/* Advanced Technical Grid Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                zIndex: -2,
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
            }} />

            {/* Infinite Looping Vertical Scanner Line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: -1
            }}>
                <motion.div 
                    animate={{ 
                        y: ['0%', '-50%']
                    }}
                    transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    style={{
                        width: '100%',
                        height: '200%',
                        background: 'linear-gradient(180deg, transparent 0%, var(--accent-primary) 25%, transparent 50%, var(--accent-primary) 75%, transparent 100%)',
                        backgroundSize: '100% 50%',
                        opacity: 0.1
                    }}
                />
            </div>


            {/* Background elements with subtle movement */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 245, 255, 0.05) 0%, transparent 60%)',
                    zIndex: -1,
                    filter: 'blur(50px)'
                }}
            />
            
            <div className="container">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ maxWidth: '800px' }}
                >
                    <motion.span variants={itemVariants} className="label-mini" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '40px', height: '1px', background: 'var(--accent-primary)' }}></span>
                        {portfolioData.hero.label}
                    </motion.span>
                    
                    <h1 style={{ marginBottom: '1.5rem', margin: 0, padding: 0, fontSize: 'inherit', fontWeight: 'normal', lineHeight: 'normal' }}>
                        <RevealCharacters 
                            text={portfolioData.hero.heading1} 
                            style={{ 
                                fontSize: 'clamp(3rem, 10vw, 5.5rem)', 
                                lineHeight: '1', 
                                letterSpacing: '-0.02em',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800
                            }} 
                        />
                        <RevealCharacters 
                            text={portfolioData.hero.heading2} 
                            delay={0.6}
                            style={{ 
                                fontSize: 'clamp(3rem, 10vw, 5.5rem)', 
                                lineHeight: '1', 
                                letterSpacing: '-0.02em',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800
                            }}
                            className="text-gradient"
                        />
                    </h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        style={{ 
                            fontSize: '1.15rem', 
                            color: 'var(--text-secondary)', 
                            marginBottom: '3rem', 
                            maxWidth: '650px',
                            lineHeight: '1.8'
                        }}
                    >
                        {portfolioData.hero.description}
                    </motion.p>
                    
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Magnetic>
                            <motion.a 
                                whileTap={{ scale: 0.98 }}
                                href={portfolioData.hero.primaryButtonLink} 
                                className="btn btn-primary" 
                                style={{ padding: '1rem 2rem' }}
                            >
                                {portfolioData.hero.primaryButtonText}
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.a 
                                whileTap={{ scale: 0.98 }}
                                href={portfolioData.hero.secondaryButtonLink} 
                                className="btn btn-outline" 
                                style={{ padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.03)' }}
                            >
                                {portfolioData.hero.secondaryButtonText}
                            </motion.a>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Subtle side text - professional touch */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '2rem',
                    writingMode: 'vertical-rl',
                    color: 'var(--text-dim)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    opacity: 0.5
                }}
            >
                {portfolioData.hero.sideText}
            </motion.div>
        </section>
    );
});


export default HeroSection;


