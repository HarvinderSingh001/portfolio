import React, { memo } from 'react';

const CtaSection = memo(() => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container text-center">
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Ready to Build the Future?
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                        Let's discuss how we can architect your next mission-critical system.
                    </p>
                    
                    <a href="#contact" className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.1rem', fontWeight: 700 }}>
                        START_CONVERSATION
                    </a>
                </div>
            </div>
        </section>
    );
});

export default CtaSection;
