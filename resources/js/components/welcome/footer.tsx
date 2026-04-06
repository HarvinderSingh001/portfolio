import React, { memo } from 'react';

const Footer = memo(() => {
    return (
        <footer style={{ background: 'var(--bg-primary)', padding: '5rem 0 2rem 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
                                ARCHITECT<span style={{ color: 'var(--accent-primary)' }}>.DEV</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Building the next generation of digital infrastructure. 
                            Specialized in high-performance software systems and 
                            advanced digital architecture.
                        </p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigation</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Expertise', 'Projects', 'Process', 'Terminal'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem' }}>{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['GitHub', 'LinkedIn', 'StackOverflow', 'Instagram'].map(item => (
                                    <li key={item}><a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem' }}>{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>LOCAL TIME</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT/BST</span>
                    </div>
                </div>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        © {new Date().getFullYear()} ARCHITECT.DEV \\ BUILT WITH PRECISION
                    </span>
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