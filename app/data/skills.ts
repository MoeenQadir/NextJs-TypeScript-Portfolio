export type Skill = {
    name: string;
    level: number;
    icon: string;
};

export type SkillCategory = {
    title: string;
    description: string;
    accent: string;
    icon: string;
    skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        description:
            "Crafting pixel-perfect, accessible and blazing-fast user interfaces with modern React tooling.",
        accent: "#38bdf8",
        icon: "frontend",
        skills: [
            { name: "JavaScript / TypeScript", level: 95, icon: "typescript" },
            { name: "React.js", level: 95, icon: "react" },
            { name: "Next.js", level: 96, icon: "next" },
            { name: "HTML5 / CSS3", level: 98, icon: "html" },
            { name: "Tailwind CSS", level: 96, icon: "tailwind" },
            { name: "Redux / Context API", level: 90, icon: "redux" },
            { name: "Framer Motion", level: 88, icon: "framer" },
        ],
    },
    {
        title: "Backend Development",
        description:
            "Building robust APIs, real-time systems and scalable data layers that power modern products.",
        accent: "#f59e0b",
        icon: "backend",
        skills: [
            { name: "Node.js / Express", level: 92, icon: "node" },
            { name: "REST APIs + HTTP", level: 94, icon: "rest" },
            { name: "SQL / PostgreSQL", level: 90, icon: "sql" },
            { name: "Prisma / Drizzle ORM", level: 88, icon: "prisma" },
            { name: "Redis / Caching", level: 86, icon: "redis" },
            { name: "WebSockets / real-time", level: 85, icon: "socket" },
            { name: "Background jobs / queues", level: 84, icon: "queue" },
            { name: "File storage / S3", level: 86, icon: "storage" },
        ],
    },
    {
        title: "DevOps & Cloud",
        description:
            "Automating infrastructure, orchestrating containers and shipping to production with confidence.",
        accent: "#10b981",
        icon: "devops",
        skills: [
            { name: "Docker + Docker Compose", level: 90, icon: "docker" },
            { name: "CI/CD & GitHub Actions", level: 90, icon: "cicd" },
            { name: "Linux / Bash / Shell", level: 88, icon: "linux" },
            { name: "Nginx / VPS Management", level: 86, icon: "nginx" },
            { name: "SSL / HTTPS / DNS", level: 88, icon: "ssl" },
            { name: "AWS — EC2 / S3 / RDS", level: 84, icon: "aws" },
            { name: "Cloudflare / Vercel", level: 90, icon: "cloudflare" },
            { name: "SSH / Server security", level: 85, icon: "ssh" },
        ],
    },
    {
        title: "AI Engineering",
        description:
            "Shipping intelligent features with LLMs, RAG pipelines and AI automation that create real value.",
        accent: "#a78bfa",
        icon: "ai",
        skills: [
            { name: "LLM / OpenAI-compatible APIs", level: 90, icon: "llm" },
            { name: "OpenRouter / Multi-LLM routing", level: 87, icon: "openrouter" },
            { name: "AI SDK / tool calling", level: 86, icon: "ai" },
            { name: "RAG basics / Retrieval", level: 85, icon: "rag" },
            { name: "Embeddings / Vector DBs", level: 83, icon: "vector" },
            { name: "AI coding agents", level: 88, icon: "agent" },
            { name: "n8n / Automation", level: 84, icon: "n8n" },
        ],
    },
    {
        title: "Architecture & System Design",
        description:
            "Designing maintainable systems with clean architecture, proven patterns and SOLID foundations.",
        accent: "#fb7185",
        icon: "architecture",
        skills: [
            { name: "System Design", level: 88, icon: "system" },
            { name: "Database Design", level: 90, icon: "database" },
            { name: "Design Patterns", level: 87, icon: "pattern" },
            { name: "SOLID / Clean Architecture", level: 89, icon: "solid" },
            { name: "OOP & Data Structures", level: 88, icon: "oop" },
            { name: "Algorithms", level: 85, icon: "algo" },
            { name: "Error handling & logging", level: 90, icon: "error" },
        ],
    },
    {
        title: "Testing, Security & Tools",
        description:
            "Shipping reliable, secure software with automated tests and a disciplined engineering workflow.",
        accent: "#fbbf24",
        icon: "tools",
        skills: [
            { name: "Authentication / Authorization", level: 92, icon: "auth" },
            { name: "JWT / Sessions / OAuth", level: 91, icon: "jwt" },
            { name: "Vitest / Jest", level: 85, icon: "vitest" },
            { name: "Playwright (E2E)", level: 82, icon: "playwright" },
            { name: "Git + GitHub", level: 95, icon: "git" },
            { name: "npm / pnpm / Yarn", level: 92, icon: "npm" },
            { name: "ESLint / Prettier", level: 90, icon: "eslint" },
            { name: "Debugging & Logging", level: 90, icon: "debug" },
        ],
    },
];

export const technologies = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Drizzle",
    "Redis",
    "Docker",
    "AWS",
    "Linux",
    "Nginx",
    "GitHub Actions",
    "WebSockets",
    "oAuth",
    "JWT",
    "Playwright",
    "Vitest",
    "Cloudflare",
    "Vercel",
    "LLM APIs",
    "OpenRouter",
    "RAG",
    "n8n",
    "MongoDB",
    "GraphQL",
];