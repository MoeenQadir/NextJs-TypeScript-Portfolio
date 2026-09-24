export type Project = {
    slug: string;
    title: string;
    category: string;
    year: string;
    client: string;
    role: string;
    image: string;
    gradient: [string, string];
    summary: string;
    description: string[];
    highlights: string[];
    features: string[];
    stack: string[];
    links: { live?: string; github?: string };
    featured?: boolean;
};

export const projects: Project[] = [
   
    {
        slug: "callsense-saas",
        title: "Callsense — AI-Powered Call Center SaaS",
        category: "SaaS Product",
        year: "2023",
        client: "Callsense Company",
        role: "Front End Engineer",
        image: "/assets/courses/callsense.png",
        gradient: ["#38bdf8", "#6366f1"],
        summary:
            "An AI-based SaaS product that optimizes call center operations with intelligent dashboards and advanced AI features.",
        description: [
            "Callsense is an AI-driven SaaS platform that helps call centers monitor, analyze and optimize their operations. I owned the front-end for the product website, the core SaaS application and a dedicated analytics dashboard.",
            "I implemented advanced AI-driven features into the SaaS experience, improved data visualization for operators and worked closely with FasTech Systems backend engineers to integrate the front-end with real-time APIs.",
        ],
        highlights: [
            "Designed and implemented the UI for Callsense's AI-based SaaS product",
            "Led development of the Callsense dashboard — improving user accessibility and data visualization",
            "Implemented advanced AI features enhancing call center solutions",
            "Integrated front-end with backend APIs across multiple projects",
        ],
        features: [
            "Real-time call analytics dashboards",
            "AI-powered call insights & sentiment views",
            "Role-based accessible UI",
            "Live data visualization components",
        ],
        stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Redux"],
        links: { live: "https://www.callsense.ai/" },
        featured: true,
    },
    {
        slug: "augier-legal-tech",
        title: "Augier.ai — Legal Tech Website",
        category: "Corporate Website",
        year: "2023",
        client: "Augier.ai (New York)",
        role: "Front End Developer",
        image: "/assets/projects/augier1.png",
        gradient: ["#184a79", "#38bdf8"],
        summary:
            "Responsive, high-converting front-end development for a US-based legal technology company.",
        description: [
            "Augier.ai is a legal technology company based in New York. As their front-end developer, I translated design mockups into responsive, accessible and visually appealing interfaces for their legal tech applications.",
            "Working in a fully remote international team, I collaborated with backend engineers to integrate components efficiently and drove UI/UX improvements that elevated the overall user experience of the platform.",
        ],
        highlights: [
            "Developed front-end solutions for a USA-based legal tech company",
            "Translated design mockups into responsive and visually appealing UIs",
            "Enhanced user experience on legal tech applications through UI/UX improvements",
            "Demonstrated effective communication, fostering seamless remote collaboration",
        ],
        features: [
            "Responsive marketing & product pages",
            "UI/UX polish on legal workflows",
            "Backend integration readiness",
            "International remote team collaboration",
        ],
        stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
        links: { live: "https://www.augier.ai/" },
        featured: true,
    },
    
    {
        slug: "apostol-multilang-landing",
        title: "Apostol & Asociatii — Multilingual Business Landing Page",
        category: "Landing Page",
        year: "2023",
        client: "International Romanian Tech Company",
        role: "Front End Developer",
        image: "/assets/courses/multi-lang.png",
        gradient: ["#f59e0b", "#f43f5e"],
        summary:
            "A fully functional multi-language landing page for a prominent Romanian technology company powered by Next.js.",
        description: [
            "I spearheaded the creation of a complete landing page for a leading Romanian tech company while contracting through an international agency.",
            "The project required multi-language support to serve diverse audiences, advanced features to elevate product visibility and a seamless experience across every device — delivered with Next.js and Tailwind CSS.",
        ],
        highlights: [
            "Spearheaded a fully functional landing page for a prominent Romanian tech company",
            "Implemented multi-language support to enhance accessibility for diverse user bases",
            "Incorporated advanced features to elevate product visibility and business expansion",
            "Achieved seamless UX across devices with optimized, performance-focused design",
        ],
        features: [
            "Internationalization / multi-language routing",
            "Advanced marketing features & SEO elements",
            "Fully responsive design system",
            "High performance on all devices",
        ],
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "i18n", "Vercel"],
        links: { live: "https://vlad-company.vercel.app/" },
        featured: true,
    },
    {
        slug: "modernize-admin-dashboard",
        title: "Modernize — E-commerce Admin Dashboard",
        category: "Admin Dashboard",
        year: "2024",
        client: "Fiverr Client",
        role: "Full Stack Developer",
        image: "/assets/courses/dashboard.png",
        gradient: ["#8b5cf6", "#38bdf8"],
        summary:
            "A feature-rich, fully functional e-commerce admin dashboard built with Next.js, TypeScript and Tailwind CSS.",
        description: [
            "Delivered on Fiverr a modern e-commerce admin dashboard that streamlines store management. The product leverages Next.js and TypeScript for scalable, type-safe development and Context/Redux for robust state management.",
            "The result is an intuitive, visually appealing management interface that made e-commerce operations dramatically more efficient for the client.",
        ],
        highlights: [
            "Leveraged Next.js, TypeScript and Tailwind CSS for efficient, scalable development",
            "Implemented Context/Redux for robust state management and seamless data flow",
            "Prioritized UX with intuitive navigation and a visually appealing interface",
            "Enhanced efficiency and streamlined management for e-commerce operations",
        ],
        features: [
            "Product, order & customer management views",
            "Analytics and sales widgets",
            "Dark/light theming",
            "Redux-powered global state",
        ],
        stack: ["Next.js", "TypeScript", "Redux", "Context API", "Tailwind CSS"],
        links: { live: "https://modernize-nextjs-dark.vercel.app/" },
        featured: true,
    },
    {
        slug: "moeendev-fullstack-console",
        title: "MoeenDev — Full-Stack Operations Console",
        category: "Full Stack Platform",
        year: "2026",
        client: "MoeenDev (Personal Project)",
        role: "Full Stack Software Engineer",
        image: "/assets/projects/moeendev.svg",
        gradient: ["#8b5cf6", "#22d3ee"],
        summary:
            "A production-ready full-stack operations console combining Next.js 16, FastAPI and background workers — with a signed-in brand, custom theming and a self-contained demo mode.",
        description: [
            "MoeenDev Console is a professionally branded full-stack platform built on a Next.js 16 + FastAPI + ARQ worker architecture. I took a raw starter template and turned it into a polished operations console — records management, live service health monitoring and an application settings hub all in one dashboard.",
            "The console ships with a custom Aurora design system (dark/light themes with a persisted toggle), a Contact module wired with email/phone/location, and an intelligent demo mode that stores data locally in the browser whenever the backend is offline — so the app is fully presentable on Vercel with zero infrastructure. Connect a live FastAPI backend via a single env var and it switches back to the real API automatically.",
        ],
        highlights: [
            "Rebranded a full-stack starter into a complete branded operations console",
            "Designed a custom Aurora theme — dark-first palette with a dark/light toggle",
            "Added a Contact module and demo mode that degrades gracefully without a backend",
            "Vercel-ready Next.js 16 deployment with server-side API proxy routes",
        ],
        features: [
            "Records CRUD with pending → processing → completed pipeline",
            "Live service health / status page",
            "Dark & light theming with persisted preference",
            "LocalStorage demo mode for zero-backend demos",
            "Contact hub with email, phone & location",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "shadcn/ui", "Vercel"],
        links: { live: "https://moeen-fullstack.vercel.app/" },
    },
    {
        slug: "crypto-live-market",
        title: "Live Crypto Market Tracker",
        category: "Data Dashboard",
        year: "2023",
        client: "Personal Project",
        role: "Full Stack Developer",
        image: "/assets/courses/crypto.png",
        gradient: ["#fbbf24", "#10b981"],
        summary:
            "A real-time cryptocurrency market dashboard that consumes live market APIs with interactive charts and search.",
        description: [
            "A live crypto market site that consumes real-time cryptocurrency APIs to display up-to-the-second prices, market stats and trends. Built as a demonstration of data fetching, state handling and rich dashboards in Next.js.",
            "The dashboard lets users browse top coins, search the market and review historical performance through dynamic, animated charts.",
        ],
        highlights: [
            "Live consumption of crypto market APIs",
            "Interactive, real-time price dashboards",
            "Clean, responsive data-heavy UI",
        ],
        features: [
            "Real-time price tickers",
            "Market search with ranking",
            "Dynamic chart views",
            "Automatic data refresh",
        ],
        stack: ["Next.js", "React.js", "REST APIs", "Tailwind CSS"],
        links: { live: "https://crypto-nextjs.netlify.app/" },
    },
     {
        slug: "myself-xdeveloper",
        title: "X Developer — Personal Brand & Portfolio Website",
        category: "Personal Brand",
        year: "2026",
        client: "Moeen Ul Qadir",
        role: "Full Stack Developer",
        image: "/assets/projects/myself-xdeveloper.svg",
        gradient: ["#19f0c0", "#7c5cff"],
        summary:
            "A modern, production-ready personal brand website for X Developer with a cyber-green → violet identity, built on Next.js 16 and deployed on Vercel.",
        description: [
            "X Developer is a complete personal brand website built to showcase full stack development and DevOps services. Engineered with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS, it delivers a fast, SEO-friendly, statically prerendered experience.",
            "The design system rebrands around a distinguishing cyber-green (volt) → sky-blue → violet gradient on a deep ink background, with a custom X mark favicon, marquee tech strip, animated hero glows, skill bars and a mailto-powered contact flow wired to myselfxdeveloper@gmail.com.",
            "The site is 100% deploy-ready for Vercel: framework auto-detected (Next.js), Node 20 via .nvmrc, zero build warnings, zero lint errors and no known dependencies advisories at build time.",
        ],
        highlights: [
            "Rebranded identity — X Developer with volt/neon gradient theme on ink surface",
            "Next.js 16 + React 19 + TypeScript + Tailwind CSS, fully typed and lint-clean",
            "Statically prerendered singleton page with sitemap, robots and custom icon",
            "Deploy-ready for Vercel as https://myself-xdeveloper.vercel.app",
        ],
        features: [
            "Animated hero with floating aurora glows & tech marquee",
            "Services, skills-progress, projects grid & contact sections",
            "Mailto-powered contact form wired to personal email",
            "SEO metadata, canonical, Open Graph & twitter cards",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
        links: { live: "https://myself-xdeveloper.vercel.app/" },
        featured: true,
    },
    {
        slug: "3d-company-landing",
        title: "3D Company Landing Page",
        category: "Interactive Website",
        year: "2023",
        client: "International Client",
        role: "Front End Developer",
        image: "/assets/courses/3d-website.png",
        gradient: ["#0ea5e9", "#7c3aed"],
        summary:
            "An immersive 3D landing page using WebGL and React — a bold, interactive experience that showcases a company in motion.",
        description: [
            "A striking landing page that pushes the boundaries of web experiences with 3D rendering, smooth scroll animations and interactive product presentations built with React and WebGL.",
            "The project demonstrates how creative engineering and animation can turn a corporate landing page into an unforgettable brand experience.",
        ],
        highlights: [
            "Immersive WebGL-powered 3D visuals",
            "Butter-smooth scroll & entrance animations",
            "Interactive product showcases",
            "High-performance modern web architecture",
        ],
        features: [
            "3D product hero",
            "Animated sections & transitions",
            "Interactive scroll story",
            "Optimized rendering pipeline",
        ],
        stack: ["React.js", "Three.js", "WebGL", "Tailwind CSS"],
        links: { live: "https://3d-landingpage2024.netlify.app/" },
    },
    {
        slug: "ai-powered-portfolio",
        title: "AI-Powered Portfolio Platform",
        category: "Personal Brand",
        year: "2024",
        client: "Moeen Ul Qadir",
        role: "Full Stack Software Engineer",
        image: "/assets/projects/portfolio.svg",
        gradient: ["#184a79", "#f59e0b"],
        summary:
            "This website — a multi-page portfolio with 3D visuals, SEO architecture and a complete brand experience.",
        description: [
            "A modern, multi-page portfolio engineered with Next.js, TypeScript, Tailwind CSS, Three.js (React Three Fiber) and Framer Motion. It doubles as a living product that reflects my engineering standards.",
            "The site features a WebGL animated hero, dynamic project detail pages with slugs, structured data for search engines, a complete DevOps narrative and a contact pipeline ready for automation.",
        ],
        highlights: [
            "WebGL animated 3D hero and interactive visuals",
            "Dynamic project detail pages with SEO metadata",
            "JSON-LD structured data for rich search results",
            "Reusable, typed component architecture",
        ],
        features: [
            "3D scene with mouse-parallax",
            "Framer Motion scroll animations",
            "Custom cursor experience",
            "Sitemap, robots & OG meta pipeline",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
        links: { live: "https://www.moeenqadir.com", github: "https://github.com/MoeenQadir" },
        featured: true,
    },
    {
        slug: "metropulse-city-data-platform",
        title: "MetroPulse — City & People Data Platform",
        category: "Data Platform",
        year: "2026",
        client: "Personal Project",
        role: "Full Stack Developer",
        image: "/assets/projects/metropulse.svg",
        gradient: ["#8b5cf6", "#d946ef"],
        summary:
            "A full-stack city and people data platform with a real-time dashboard UI, built with Next.js, TypeScript, Tailwind CSS and a FastAPI backend.",
        description: [
            "MetroPulse is an urban data platform that brings cities, populations and residents together in a single, real-time dashboard. The frontend is a modern Next.js 14 + TypeScript application with a custom violet-fuchsia design system, while a FastAPI service exposes the city and people records through a REST API.",
            "I designed and built the full experience end to end — the API integration layer, the responsive dashboard components and the data-driven UI. The app gracefully falls back to a bundled demo dataset when the API is unavailable, so it deploys and renders flawlessly on Vercel.",
        ],
        highlights: [
            "Designed and shipped a complete city & people data dashboard",
            "Built a reusable, type-safe component architecture in Next.js and TypeScript",
            "Integrated the frontend with a FastAPI REST backend with graceful demo fallback",
            "Created a custom violet-fuchsia brand identity, theme and SEO metadata",
        ],
        features: [
            "Live city population & resident directories",
            "Real-time data sync with refresh control",
            "Reusable UI kit (buttons, cards, sections)",
            "Dark, responsive dashboard design",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "REST APIs", "Vercel"],
        links: { live: "https://metropulse.vercel.app", github: "https://github.com/MoeenQadir" },
        featured: true,
    },
    {
        slug: "myselfx-ai-assistant",
        title: "MyselfX AI — Full-Stack AI Assistant",
        category: "AI Application",
        year: "2026",
        client: "Personal Project",
        role: "Full Stack Software Engineer",
        image: "/assets/projects/myselfx-ai.svg",
        gradient: ["#ffb900", "#184a79"],
        summary:
            "A production-ready AI chat assistant with real-time streaming, JWT authentication and browser-persisted conversations — powered by FastAPI, PydanticAI and Next.js 15.",
        description: [
            "MyselfX AI is a full-stack AI assistant that pairs a FastAPI backend (SQLite + SQLAlchemy, JWT auth with refresh tokens, and a PydanticAI agent) with a modern Next.js 15 + React 19 + TypeScript frontend. The chat streams live responses over WebSocket with tool-call visualization.",
            "I rebranded the entire product with a custom gold-on-ink design system, rebuilt the landing experience, added a contact footer (email, phone, location) and shipped an offline demo mode — when the backend is unreachable the chat degrades gracefully and replies locally, so the app renders and works flawlessly on Vercel with zero infrastructure. Connect a live backend URL and real AI streaming switches on.",
        ],
        highlights: [
            "Designed a custom gold/navy/ink brand identity and theme system",
            "Built a real-time streaming chat with WebSocket + tool-call UI",
            "Added an offline demo mode with graceful backend fallback",
            "Vercel-ready — monorepo rootDirectory config, pinned Node version, env examples",
        ],
        features: [
            "Real-time streaming AI chat (PydanticAI agent)",
            "JWT authentication with HTTP-only cookies & refresh",
            "Browser-persisted conversation history",
            "Contact footer with email, phone & location",
            "Dark/light theming and branded landing page",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PydanticAI", "Vercel"],
        links: { live: "https://myselfx-ai.vercel.app", github: "https://github.com/MoeenQadir" },
        featured: true,
    },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);