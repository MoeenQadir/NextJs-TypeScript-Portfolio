export type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    location: string;
    type: string;
    summary: string;
    highlights: string[];
    stack: string[];
};

export const experience: ExperienceItem[] = [
    {
        title: "Full Stack Software Engineer",
        company: "FasTech Systems",
        period: "Dec 2022 — Present",
        location: "Sukkur, Pakistan (Remote)",
        type: "Full-time",
        summary:
            "Leading end-to-end delivery of web applications and mentoring a front-end engineering team.",
        highlights: [
            "Led the front-end development team for 1.5+ years, ensuring timely project delivery and code quality.",
            "Managed end-to-end execution of web projects using Next.js and React.js.",
            "Enforced coding standards through regular code reviews for high-quality, maintainable code.",
            "Collaborated with cross-functional teams to translate business requirements into software solutions.",
            "Contributed to software architecture decisions and strategic product planning.",
        ],
        stack: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    },
    {
        title: "Front End Developer",
        company: "Augier.ai",
        period: "Apr 2023 — Sep 2023",
        location: "New York, USA (Remote)",
        type: "Contract",
        summary:
            "Built front-end experiences for a US-based legal tech company and its AI SaaS products.",
        highlights: [
            "Developed front-end solutions for Augier.ai, a US-based legal technology company.",
            "Translated design mockups into responsive, accessible and visually appealing user interfaces.",
            "Enhanced user experience on legal tech applications through UI/UX improvements.",
            "Collaborated with backend developers to integrate front-end components efficiently.",
            "Executed strong communication to foster seamless collaboration within the team.",
        ],
        stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
        title: "System Support Engineer & MERN Stack Developer",
        company: "FasTech Systems",
        period: "Oct 2022 — Oct 2024",
        location: "Sukkur, Pakistan (Remote)",
        type: "Full-time",
        summary:
            "Provided technical support for distributed teams while shipping MERN stack features.",
        highlights: [
            "Provided technical support for hardware and software systems, ensuring minimal downtime.",
            "Diagnosed and resolved issues across operating systems, networks and applications.",
            "Installed, configured and maintained LAN / Wi-Fi connectivity and IT equipment.",
            "Maintained system stability for remote development environments across international projects.",
        ],
        stack: ["Linux", "Networking", "Node.js", "Express", "MongoDB", "React.js"],
    },
    {
        title: "Banking IT Operations & Finance",
        company: "The Bank of Punjab",
        period: "Jun 2022 — Dec 2022",
        location: "Multan, Pakistan",
        type: "Full-time",
        summary:
            "Supported banking IT operations and financial workflows with accuracy and system integrity.",
        highlights: [
            "Supported IT systems within banking operations — PCs, printers and POS systems.",
            "Coordinated with vendors for hardware repairs and software license renewals.",
            "Maintained data accuracy and system functionality during critical financial operations.",
            "Managed annual budgets, reconciled bank accounts and processed vendor payments.",
        ],
        stack: ["IT Support", "POS Systems", "MS Office", "Financial Systems"],
    },
];

export type EducationItem = {
    degree: string;
    institution: string;
    period: string;
    location: string;
    detail: string;
    tags: string[];
    grade?: string;
};

export const education: EducationItem[] = [
    {
        degree: "Bachelor of Science in Information Technology",
        institution: "University of Education Lahore",
        period: "Jun 2018 — Jun 2022",
        location: "Lahore, Pakistan",
        detail:
            "Graduated with a 3.4 CGPA / 4.0. Thesis on web development and web scraping with AI bots. Studied software development, database & network design, and applications analysis.",
        tags: ["Web Development", "Database & Network Design", "Software Analysis", "UI/UX"],
        grade: "3.4 CGPA / 4.0",
    },
    {
        degree: "Full Stack Web Development Bootcamp 2024 — MERN Stack",
        institution: "Udemy",
        period: "Jan 2024 — Mar 2024",
        location: "Remote",
        detail:
            "Advanced full stack bootcamp covering the complete MERN stack — MongoDB, Express.js, React.js and Node.js with production deployment practices.",
        tags: ["MERN Stack", "MongoDB", "React", "Node.js"],
    },
    {
        degree: "The Full Stack Web Development Bootcamp (Frontend & Backend)",
        institution: "Udemy",
        period: "Apr 2022 — Aug 2022",
        location: "Remote",
        detail:
            "Comprehensive bootcamp covering modern JavaScript, front-end frameworks, backend APIs, authentication and deployment.",
        tags: ["JavaScript", "Frontend", "Backend", "APIs"],
    },
    {
        degree: "Ultimate IT Support Course for Technical Skills",
        institution: "Udemy",
        period: "2022",
        location: "Remote",
        detail:
            "Professional IT support training covering hardware diagnostics, OS management, networking fundamentals and helpdesk operations.",
        tags: ["IT Support", "Networking", "Hardware", "Troubleshooting"],
    },
];

export const timelineFacts = [
    {
        year: "2018",
        label: "Started B.S. IT at University of Education, Lahore",
    },
    {
        year: "2022",
        label: "Graduated & joined The Bank of Punjab IT operations",
    },
    {
        year: "2022",
        label: "Moved to FasTech Systems as a full stack engineer",
    },
    {
        year: "2023",
        label: "Shipped legal tech & AI SaaS front-ends for Augier.ai / Callsense",
    },
    {
        year: "2024",
        label: "Expanded into DevOps, cloud & AI engineering",
    },
    {
        year: "Now",
        label: "Building world-class products as a full stack software engineer",
    },
];