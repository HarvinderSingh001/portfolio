import React from 'react';
import { Head } from '@inertiajs/react';
import '../../css/welcome.css'; // Importing the custom professional styles

// Memoized Components for Performance Optimization
import NavBar from '@/components/welcome/nav-bar';
import HeroSection from '@/components/welcome/hero-section';
import FeatureSection from '@/components/welcome/feature-section';
import CaseStudySection from '@/components/welcome/case-study-section';
import StatsSection from '@/components/welcome/stats-section';
import CtaSection from '@/components/welcome/cta-section';
import Footer from '@/components/welcome/footer';

export default function Welcome() {
    return (
        <div className="portfolio-wrapper" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
            <Head title="Architect.dev | Performance & Optimization Specialist" />
            
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
            
            {/* Custom Background Glow Patterns (Subtle Design optimization) */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                background: 'radial-gradient(circle at 10% 10%, rgba(0, 245, 255, 0.03) 0%, transparent 30%), radial-gradient(circle at 90% 90%, rgba(0, 245, 212, 0.03) 0%, transparent 30%)',
                zIndex: -1
            }}></div>
        </div>
    );
}
