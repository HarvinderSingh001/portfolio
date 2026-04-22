export const portfolioData = {
    // Shared
    name: "Harvinder Singh",
    role: "Full-Stack Developer",
    logoName: "HARVINDER",
    logoDot: ".DEV",
    email: "harvinderynr2001@gmail.com", // Replace with your email
    resumeLink: "/resume.pdf",

    // Navbar & Footer Navigation
    navItems: ['Skills', 'Projects', 'Experience', 'Contact'],
    socialLinks: [
        { name: 'GitHub', url: 'https://github.com/HarvinderSingh001' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harvinder-singh-9b0119251' },
        { name: 'Twitter', url: '#' },
    ],

    // Hero Section
    hero: {
        label: "FULL-STACK DEVELOPER v1.0",
        heading1: "Architecting Scalable",
        heading2: "Enterprise Solutions",
        description: "Full-Stack Developer specializing in robust Laravel backends, modern React/Livewire frontends, and seamless API integrations. I deliver highly performant web applications tailored directly to business needs.",
        primaryButtonText: "Let's Talk",
        primaryButtonLink: "mailto:harvinderynr2001@gmail.com",
        secondaryButtonText: "View My Work",
        secondaryButtonLink: "#projects",
        sideText: "STATUS: AVAILABLE | LOCATION: REMOTE | READY"
    },

    // Feature / Skills Section
    features: {
        sectionLabel: "[ TECHNICAL SKILLS V1.0 ]",
        heading1: "A Stack Built for",
        heading2: "Performance.",
        bgText: "FULL STACK DEVELOPER FULL STACK DEVELOPER",
        cards: [
            {
                id: 0,
                title: "Frontend Engineering",
                description: "Creating intuitive, responsive, and dynamic user interfaces using modern JavaScript frameworks and CSS architectures.",
                accent: "#00f5ff",
                // label: "LAYER ONE",
                icon: "01"
            },
            {
                id: 1,
                title: "Backend Architecture",
                description: "Designing robust, secure, and scalable server-side applications and RESTful APIs to power complex business logic.",
                accent: "#7c3aed",
                // label: "LAYER TWO",
                icon: "02"
            },
            {
                id: 2,
                title: "Database Management",
                description: "Architecting efficient database schemas, optimizing queries, and managing data lifecycles for high-availability systems.",
                accent: "#f59e0b",
                // label: "LAYER THREE",
                icon: "03"
            },
            {
                id: 3,
                title: "Cloud & Deployment",
                description: "Provisioning scalable cloud infrastructure, containerizing deployments via Docker, and managing high-availability continuous delivery on Linux servers.",
                accent: "#f43f5e",
                // label: "LAYER FOUR",
                icon: "04"
            }
        ],
        skillGroups: [
            { name: 'Frontend Layer', skills: ['HTML', 'CSS', 'JS', 'TS', 'REACT', 'TAILWIND', 'JQUERY'] },
            { name: 'Backend Engine', skills: ['PHP', 'LARAVEL', 'NODE', 'EXPRESS'] },
            { name: 'Data Vault', skills: ['MYSQL', 'MONGODB'] },
            { name: 'Integrations & APIs', skills: ['STRIPE', 'TWILIO', 'GOOGLE MAPS', 'SWAGGER'] },
            { name: 'Infrastructure & Server', skills: ['AWS', 'GIT', 'DOCKER', 'LINUX', 'WEBSOCKET'] },
        ]
    },

    // Stats Section
    stats: {
        bgText: "DEV",
        heading1: "Bridging Code &",
        heading2: "Solutions",
        description: "Development is more than writing code; it's about solving real-world problems. I combine analytical thinking with technical expertise to deliver applications that scale and perform.",
        metrics: [
            { label: "YEARS OF EXPERIENCE", value: "3+" },
            { label: "PROJECTS DELIVERED", value: "9+" },
            { label: "CLIENT SATISFACTION", value: "100%" },
            { label: "LINES OF CODE", value: "500K+" },
        ],
        terminal: {
            command: "npm run developer --status",
            output: {
                initial: "// SYSTEM_INITIALIZATION_SUCCESS",
                action: "^ developer deploy [- environment 'production' ]",
                runtime: "RUNTIME: Node.js/PHP Environment",
                integrity: "INTEGRITY: [100% verified]",
                status: "STATUS: [READY FOR HIRE // ACTIVE]",
                optimized: "> skills_optimized::true"
            },
            footer: "DEVELOPER INITIALIZED. All cognitive functions responding at peak capacity. Ready to write code."
        }
    },

    // Case Study (Featured Project) Section
    caseStudy: {
        uptimeTitle: "Code Quality",
        uptimeValue: "A+",
        label: "FEATURED PROJECT",
        heading: "E-Commerce Platform",
        description: "A high-performance online marketplace built for scale. The architecture supports thousands of concurrent users, seamless payment integrations, and real-time inventory tracking.",
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        linkText: "View Project Details"
    },

    // All Projects Grid
    projectsGrid: [
        {
            title: "Almaree",
            description: "A comprehensive web platform for the Almaree business, providing user-facing features and content management. It facilitates smooth customer interactions and digital presence.",
            tags: ["Laravel", "PHP", "Stripe","Javascript", "Shippo", "Taxjar", "Real-time Chat"],
            link: "https://myalmaree.com/",
        },
        {
            title: "FleetHN",
            description: "A fleet management system designed to track vehicles, manage drivers, and optimize routing. It ensures operational efficiency and real-time monitoring.",
            tags: ["Laravel", "PHP", "WebSocket","Javascript", "Google Maps", "Real-time Tracking", "REST API Integration", "Sanctum", "ACL"],
            link: "https://fleethn.com",
        },
        {
            title: "Satprephub",
            description: "Educational platform designed specifically to assist students in preparing for SAT exams. It provides comprehensive study materials, practice tests, and progress tracking.",
            tags: ["Laravel", "PHP", "Stripe"],
            link: "#",
            github: "#"
        },
        {
            title: "Teeqode",
            description: "An enterprise-level software platform for building custom digital solutions and managing software products. It streamlines the development lifecycle and client deliverables.",
            tags: ["Laravel", "PHP", "ACL", "Javascript", "QR Code"],
            link: "https://teeqode.com",
        },
        {
            title: "MUV System",
            description: "A specialized system application developed for targeted operational tracking and workflow management. Facilitates streamlined internal automation processes.",
            tags: ["Laravel", "PHP", "WebSocket", "Google Maps", "Real-time Tracking", "REST API Integration", "Sanctum", "Javascript", "ACL"],
            link: "https://muvsolutions.com/",
        },
        {
            title: "Orbit",
            description: "The Orbit platform application managing intricate user networks and centralized data aggregation. Provides a unified interface for tracking essential system metrics.",
            tags: ["Laravel", "PHP", "Quiz System", "Stripe", "Video js", "Livewire", "Jquery", "Javascript" ],
            link: "#",
        },
        {
            title: "Playpozo",
            description: "An interactive gaming or entertainment web platform engaging users through gamified features. Includes progressive rewards, user profiling, and dynamic content.",
            tags: ["Laravel", "PHP", "TailwindCSS"],
            link: "#",
        },
        {
            title: "QR Code Generator",
            description: "A practical client-side utility application for creating custom, trackable QR codes for digital marketing. Supports varied data formats, colors, and styling options.",
            tags: ["Laravel", "PHP", "QR Code generation", "Javascript", "Stripe"],
            link: "https://www.1stpartyqr.com/",
        },
        {
            title: "RAF",
            description: "A full-stack project management tool featuring real-time collaborative boards and drag-and-drop interfaces. Designed for agile teams handling dynamic sprint tracking.",
            tags: ["HTML", "CSS", "Javascript", "Jquery", "Stripe", ],
            link: "https://app.rafleaderboard.com",
        },
        {
            title: "School Management AFIK",
            description: "Comprehensive school administration software handling student records, daily attendance, and grading. Provides dedicated portals for teachers, students, and parents.",
            tags: ["React"],
        },
        {
            title: "Webtech",
            description: "A corporate informational site tailored to showcase modern web technologies and digital IT services. Serves as a robust digital brochure and service booking portal.",
            tags: ["Laravel", "PHP", "Livewire", "Javascript", "Stripe", "Jquery", "SEO Optimization"],
            link: "https://drazunga.com",
        }
    ],

    // Call to Action
    cta: {
        heading: "Ready to Start Your Next Project?",
        description: "Let's collaborate to bring your ideas to life with clean, scalable, and efficient code.",
        buttonText: "CONTACT ME",
        buttonLink: "mailto:harvinderynr2001@gmail.com"
    },

    // Footer
    footer: {
        description: "Passionate Full-Stack Developer dedicated to building scalable web applications and delivering exceptional user experiences.",
        copyright: `© ${new Date().getFullYear()} HARVINDER SINGH \\ BUILT WITH PASSION`
    }
};
