import React, { memo } from 'react';
import { Link } from '@inertiajs/react';

const NavBar = memo(() => {
    return (
        <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
                        ARCHITECT<span style={{ color: 'var(--accent-primary)' }}>.DEV</span>
                    </span>
                </div>
                
                <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    {['Expertise', 'Projects', 'Contact', 'Terminal'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={{ 
                                textDecoration: 'none', 
                                color: 'var(--text-secondary)', 
                                fontSize: '0.85rem', 
                                fontWeight: 500, 
                                letterSpacing: '0.05em',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                
                <button className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}>
                    DOWNLOAD CV
                </button>
            </div>
        </nav>
    );
});

export default NavBar;
