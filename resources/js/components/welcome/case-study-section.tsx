import React, { memo } from 'react';

const CaseStudySection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        {/* Dashboard Image Mockup */}
                        <div style={{
                            width: '100%',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '12px',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                            padding: '10px',
                            position: 'relative'
                        }}>
                             <img 
                                src="/dashboard.png" 
                                alt="Astra Enterprise Platform" 
                                style={{ width: '100%', borderRadius: '6px', opacity: 0.9 }}
                            />
                        </div>
                        
                        {/* Uptime Badge - matching image style */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            background: 'var(--bg-tertiary)',
                            padding: '1.5rem',
                            borderRadius: '4px',
                            borderLeft: '4px solid var(--accent-primary)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}>
                             <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Uptime Guarantee</span>
                             <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>99.99%</span>
                        </div>
                    </div>
                    
                    <div>
                        <span className="label-mini">FEATURED CASE STUDY</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Enterprise<br />Dashboard</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                            A high-fidelity visualization platform built for global logistics tracking. 
                            The architecture supports real-time data streaming from 10k+ IoT sensors 
                            with zero perceptible latency.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
                            {['Node.js', 'Express', 'MySQL', 'PHP Laravel'].map(tag => (
                                <span key={tag} style={{ 
                                    background: 'rgba(255,255,255,0.05)', 
                                    padding: '0.4rem 1rem', 
                                    borderRadius: '4px', 
                                    fontSize: '0.75rem',
                                    color: 'var(--text-dim)'
                                }}>{tag}</span>
                            ))}
                        </div>
                        
                        <a href="#case" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Deep Dive Into Architecture 
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default CaseStudySection;
