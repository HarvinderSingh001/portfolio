import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    
    const ringX = useSpring(mouseX, { damping: 40, stiffness: 200 });
    const ringY = useSpring(mouseY, { damping: 40, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '20px',
                    height: '20px',
                    background: 'var(--accent-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                    x,
                    y
                }}
            />
            {/* Outer Ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    opacity: 0.3,
                    x: ringX,
                    y: ringY,
                    marginLeft: -10,
                    marginTop: -10
                }}
            />
        </>
    );
};

