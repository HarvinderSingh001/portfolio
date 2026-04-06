import React, { memo } from 'react';

const StatBox = memo(({ label, value }: any) => {
    return (
        <div style={{
            background: 'var(--bg-secondary)',
            padding: '2rem',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            position: 'relative',
            zIndex: 1
        }}>
            <h4 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--accent-primary)' }}>{value}</h4>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>{label}</span>
        </div>
    );
});

const StatsSection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25vw',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.015)',
                fontFamily: 'var(--font-heading)',
                pointerEvents: 'none',
                letterSpacing: '-0.05em'
            }}>SYSX</div>
            
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    
                    <div>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Bridging<br />Complexity</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            Software is the infrastructure of modern business. We treat code with the 
                            same precision as physical construction, ensuring every system is scalable, 
                            maintainable, and built for the long term.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <StatBox label="API EFFICIENCY" value="99.9%" />
                            <StatBox label="DB SCHEMA OPT." value="85+" />
                            <StatBox label="LATENCY REDUCTION" value="12ms" />
                            <StatBox label="SCALABILITY" value="∞" />
                        </div>
                    </div>
                    
                    {/* Terminal Mockup */}
                    <div style={{
                        background: '#0a1120',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        padding: '1.5rem',
                        fontFamily: "'Fira Code', monospace, sans-serif",
                        fontSize: '0.8rem',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            <span style={{ fontSize: '0.65rem', color: '#445', marginLeft: '1rem' }}>zsh - architect_cli --status</span>
                        </div>
                        
                        <div style={{ color: '#abb2bf' }}>
                            <div style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>// SYSTEM_INITIALIZATION_SUCCESS</div>
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>^ architect deploy [- environment 'production' ]</div>
                            <div style={{ marginBottom: '0.2rem' }}>RUNTIME: Cluster_node-A1</div>
                            <div style={{ marginBottom: '0.2rem' }}>INTEGRITY: [2849-1]</div>
                            <div style={{ color: '#27c93f', marginBottom: '0.2rem' }}>STATUS: [READY // ACTIVE]</div>
                            <div style={{ marginBottom: '1rem' }}>&gt; performance_optimized::true</div>
                            
                            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '1rem 0' }} />
                                
                            <div style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
                                INFRASTRUCTURE AS NEW LAYER. ALL nodes responding at peak capacity. 
                                Monitoring established. [v2.4.9]
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
});

export default StatsSection;
