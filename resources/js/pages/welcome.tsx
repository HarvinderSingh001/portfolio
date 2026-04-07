import React from 'react';
import { Head } from '@inertiajs/react';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../../css/welcome.css'; // Importing the custom professional styles

// Memoized Components for Performance Optimization
import NavBar from '@/components/welcome/nav-bar';
import HeroSection from '@/components/welcome/hero-section';
import FeatureSection from '@/components/welcome/feature-section';
import CaseStudySection from '@/components/welcome/case-study-section';
import StatsSection from '@/components/welcome/stats-section';
import CtaSection from '@/components/welcome/cta-section';
import Footer from '@/components/welcome/footer';
import { CustomCursor } from '@/components/motion/CustomCursor';

import { DigitalRain } from '@/components/motion/DigitalRain';

export default function Welcome() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="portfolio-wrapper" 
            style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', position: 'relative' }}
        >
            <Head title="Architect.dev | Performance & Optimization Specialist" />
            
            {/* Background Transitions */}
            <DigitalRain />

            {/* Custom Interactive Cursor */}
            <CustomCursor />

            {/* Scroll Progress Bar */}
            <motion.div
                className="scroll-progress-bar"
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--accent-primary)',
                    transformOrigin: '0%',
                    zIndex: 1001
                }}
            />

            {/* Global Navigation */}
            <NavBar />
            
            <main>
                {/* Hero / Introduction */}
                <HeroSection />
                
                {/* Architectural Layers / Expertise */}
                <div id="expertise">
                    <FeatureSection />
                </div>
                
                {/* Case Study / Project Highlight */}
                <div id="projects">
                    <CaseStudySection />
                </div>
                
                {/* Performance Stats & Terminal Board */}
                <StatsSection />
                
                {/* Call to Action */}
                <div id="contact">
                    <CtaSection />
                </div>
            </main>
            
            {/* Global Footer */}
            <Footer />
            
            {/* Custom Background Glow Patterns (Digital Thunderstorm optimization) */}
            <motion.div 
                animate={{ 
                    opacity: [0.3, 0.8, 0.4, 1, 0.3], // Occasional "Flashes"
                    scale: [1, 1.1, 1, 1.3, 1]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    background: 'radial-gradient(circle at 10% 10%, rgba(0, 245, 255, 0.04) 0%, transparent 30%), radial-gradient(circle at 90% 90%, rgba(0, 245, 212, 0.04) 0%, transparent 30%)',
                    zIndex: -1
                }}
            ></motion.div>
        </motion.div>
    );
}




