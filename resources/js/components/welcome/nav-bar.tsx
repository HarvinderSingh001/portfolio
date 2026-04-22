import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from '../motion/Magnetic';
import { portfolioData } from '../../data/portfolio';

const NavBar = memo(() => {
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                zIndex: 1000, 
                padding: '1rem 0',
                background: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-color)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Magnetic>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'default', padding: '0.5rem' }}
                    >
                        <motion.div 
                            animate={{ rotate: 180 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px' }}
                        ></motion.div>
                        <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
                            {portfolioData.logoName}<span style={{ color: 'var(--accent-primary)' }}>{portfolioData.logoDot}</span>
                        </span>
                    </motion.div>
                </Magnetic>
                
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                    {portfolioData.navItems.map((item, i) => (
                        <motion.li 
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                        >
                            <Magnetic>
                                <motion.a 
                                    whileHover={{ color: 'var(--accent-primary)' }}
                                    href={`#${item.toLowerCase()}`} 
                                    style={{ 
                                        textDecoration: 'none', 
                                        color: 'var(--text-secondary)', 
                                        fontSize: '0.85rem', 
                                        fontWeight: 500, 
                                        letterSpacing: '0.05em',
                                        display: 'block',
                                        padding: '0.5rem',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {item}
                                </motion.a>
                            </Magnetic>
                        </motion.li>
                    ))}
                </ul>
                
                <Magnetic>
                    <motion.button 
                        whileHover={{ background: 'rgba(0, 245, 255, 0.05)' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline" 
                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}
                    >
                        DOWNLOAD CV
                    </motion.button>
                </Magnetic>
            </div>
        </motion.nav>
    );
});

export default NavBar;


