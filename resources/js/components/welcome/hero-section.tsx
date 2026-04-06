import React, { memo } from 'react';

const HeroSection = memo(() => {
    return (
        <section className="section-padding animate-fade-in-up" style={{ paddingTop: '180px', position: 'relative' }}>
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 60%)',
                zIndex: -1,
                filter: 'blur(50px)'
            }}></div>
            
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <span className="label-mini" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ width: '40px', height: '1px', background: 'var(--accent-primary)' }}></span>
                        SYSTEMS ARCHITECT v2.1
                    </span>
                    
                    <h1 style={{ 
                        fontSize: 'clamp(3rem, 10vw, 5.5rem)', 
                        lineHeight: '1.2', 
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        color: 'var(--text-primary)'
                    }}>
                        Architecting the<br />
                        <span className="text-gradient">Digital Age</span>
                    </h1>
                    
                    <p style={{ 
                        fontSize: '1.15rem', 
                        color: 'var(--text-secondary)', 
                        marginBottom: '3rem', 
                        maxWidth: '650px',
                        lineHeight: '1.8'
                    }}>
                        Specializing in end-to-end digital structures and scalable backend systems. 
                        We transform complex requirements into resilient, high-performance software infrastructure.
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            Initiate Project Discussion
                        </a>
                        <a href="#blueprint" className="btn btn-outline" style={{ padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.03)' }}>
                            View Blueprint
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Subtle side text - professional touch */}
            <div style={{
                position: 'absolute',
                bottom: '100px',
                right: '2rem',
                writingMode: 'vertical-rl',
                color: 'var(--text-dim)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                opacity: 0.5
            }}>
                LATENCY: 12ms | SCANNING: OK | ESTABLISHED
            </div>
        </section>
    );
});

export default HeroSection;
