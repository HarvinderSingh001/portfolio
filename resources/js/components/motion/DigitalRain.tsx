import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const DigitalRain = () => {
    const [streams, setStreams] = useState<any[]>([]);

    useEffect(() => {
        const createStream = () => {
            const id = Math.random();
            const x = Math.random() * 100;
            const duration = 5 + Math.random() * 10;
            const size = 10 + Math.random() * 10;
            const opacity = 0.05 + Math.random() * 0.1;
            
            // Generate some random hex/binary bits
            const chars = ['0', '1', '//', '>', '!', 'ARCHITECTURE', 'SYNC', 'SYS', '0x'];
            const content = chars[Math.floor(Math.random() * chars.length)];

            return { id, x, duration, size, opacity, content };
        };

        // Initialize streams
        setStreams(Array.from({ length: 20 }, createStream));

        // Periodically refresh streams to keep it movement
        const interval = setInterval(() => {
            setStreams(prev => [...prev.slice(1), createStream()]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
            {streams.map((stream) => (
                <motion.div
                    key={stream.id}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: '110vh', opacity: [0, stream.opacity, 0] }}
                    transition={{ duration: stream.duration, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        left: `${stream.x}%`,
                        fontSize: `${stream.size}px`,
                        color: 'var(--accent-primary)',
                        fontFamily: "'Fira Code', monospace",
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        writingMode: 'vertical-rl'
                    }}
                >
                    {stream.content}
                </motion.div>
            ))}
        </div>
    );
};
