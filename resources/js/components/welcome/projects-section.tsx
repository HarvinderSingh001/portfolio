import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../motion/Reveal';
import { portfolioData } from '../../data/portfolio';

const ProjectsSection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <Reveal>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Other Projects</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            A collection of my recent work, highlighting full-stack development, user interfaces, 
                            and complex backend architectures.
                        </p>
                    </Reveal>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {portfolioData.projectsGrid.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1} fullHeight>
                            <motion.div 
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--accent-primary)' }}
                                style={{
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    padding: '2rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'border-color 0.3s ease'
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                                    {project.description}
                                </p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            style={{ 
                                                background: 'rgba(255,255,255,0.05)', 
                                                padding: '0.25rem 0.75rem', 
                                                borderRadius: '4px', 
                                                fontSize: '0.7rem',
                                                color: 'var(--text-dim)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                    <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Code
                                    </a>
                                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        Live Demo
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ProjectsSection;
