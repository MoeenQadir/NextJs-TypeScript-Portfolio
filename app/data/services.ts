export type Service = {
    slug: string;
    title: string;
    shortTitle: string;
    icon: string;
    accent: string;
    summary: string;
    description: string;
    deliverables: string[];
    stack: string[];
};

export const services: Service[] = [
    {
        slug: "full-stack-development",
        title: "Full Stack Web Development",
        shortTitle: "Full Stack",
        icon: "code",
        accent: "#38bdf8",
        summary:
            "End-to-end product engineering from database schema to pixel-perfect UI with Next.js, React and Node.js.",
        description:
            "I design and build complete web applications — REST APIs, relational databases, real-time features, authentication, file uploads, background jobs and responsive interfaces. Whether it is a marketing site, a SaaS platform or an enterprise dashboard, you get a product that is fast, secure and scalable under real traffic.",
        deliverables: [
            "Next.js / React.js frontends with TypeScript",
            "Node.js REST APIs & real-time WebSocket systems",
            "PostgreSQL schemas with Prisma or Drizzle ORM",
            "Authentication — JWT, sessions & OAuth",
            "Redis caching & background job queues",
            "Responsive, animated and accessible UI",
            "Performance & Core Web Vitals optimization",
        ],
        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Tailwind CSS",
        ],
    },
    {
        slug: "devops-cloud",
        title: "DevOps & Cloud Infrastructure",
        shortTitle: "DevOps & Cloud",
        icon: "cloud",
        accent: "#10b981",
        summary:
            "Containerized deployments, CI/CD pipelines and cloud infrastructure that keeps your product online and reliable.",
        description:
            "I automate the boring parts of infrastructure so your team ships faster and sleeps better. From Docker Compose stacks on VPS servers to GitHub Actions pipelines and AWS resources, I set up monitoring, SSL, reverse proxies and zero-downtime deployments.",
        deliverables: [
            "Docker & Docker Compose environments",
            "CI/CD pipelines with GitHub Actions",
            "VPS setup — Nginx, SSL, DNS, SSH hardening",
            "AWS provisioning — EC2, S3, RDS",
            "Deployments to Vercel, Cloudflare & VPS",
            "Logging, backups & uptime monitoring",
            "Zero-downtime release strategies",
        ],
        stack: [
            "Docker",
            "GitHub Actions",
            "Linux",
            "Nginx",
            "AWS",
            "Cloudflare",
            "Vercel",
            "Bash",
        ],
    },
    {
        slug: "software-architecture",
        title: "Software Architecture & Design",
        shortTitle: "Architecture",
        icon: "architecture",
        accent: "#a78bfa",
        summary:
            "Clean, maintainable architecture built with SOLID principles, design patterns and deliberate system design.",
        description:
            "Great software starts with good decisions. I help you design systems that stay maintainable as they grow — clean module boundaries, layered architecture, well-modeled databases and interfaces that make change cheap. I create technical blueprints your team can actually implement.",
        deliverables: [
            "System design & technical architecture docs",
            "Database design & data-modeling",
            "API contracts & versioning strategies",
            "Clean Architecture & SOLID codebases",
            "Design patterns & refactoring guidance",
            "Security-first architecture reviews",
            "Roadmapping with Jira, Notion & Miro",
        ],
        stack: [
            "System Design",
            "DB Design",
            "SOLID",
            "Clean Architecture",
            "UML",
            "Jira",
            "Notion",
            "Miro",
        ],
    },
    {
        slug: "ai-engineering",
        title: "AI Engineering & LLM Integration",
        shortTitle: "AI Engineering",
        icon: "spark",
        accent: "#fb8c00",
        summary:
            "AI-powered features with LLMs, RAG pipelines and intelligent automation that users actually love.",
        description:
            "I integrate LLM APIs into real products — OpenAI-compatible models, OpenRouter multi-model routing, AI SDK tool calling, RAG with embeddings and vector databases, and n8n automation flows. From AI chat assistants to document retrieval and agentic workflows, I turn AI hype into shipped features.",
        deliverables: [
            "LLM API integrations (OpenAI / OpenRouter)",
            "AI SDK & function/tool calling",
            "RAG pipelines with embeddings & vector DBs",
            "AI chat & copilot experiences",
            "n8n workflow automation",
            "Prompt engineering & evaluation",
            "AI agent tooling & workflows",
        ],
        stack: [
            "LLM APIs",
            "OpenRouter",
            "AI SDK",
            "RAG",
            "Vector DBs",
            "n8n",
            "Python",
            "TypeScript",
        ],
    },
    {
        slug: "api-integration",
        title: "API Development & Integration",
        shortTitle: "APIs",
        icon: "api",
        accent: "#f59e0b",
        summary:
            "Well-documented, secure and scalable APIs — and smooth integrations with the services your business depends on.",
        description:
            "From designing REST endpoints to consuming third-party APIs like Google Maps, Stripe-style payments and analytics, I build the connective tissue of your application. Consistent error handling, validation, rate-limiting and thorough documentation included.",
        deliverables: [
            "REST API design & development",
            "Third-party API integrations",
            "Webhooks & background processing",
            "API security — auth, rate limits, validation",
            "OpenAPI documentation",
            "SDK-style TypeScript clients",
            "Google APIs — Maps, Analytics, AdSense",
        ],
        stack: [
            "Node.js",
            "Express",
            "REST",
            "Swagger",
            "Webhooks",
            "TypeScript",
            "Google APIs",
        ],
    },
    {
        slug: "performance-security",
        title: "Performance & Security Optimization",
        shortTitle: "Performance",
        icon: "shield",
        accent: "#f43f5e",
        summary:
            "Make your product faster, safer and more trustworthy — with measurable Lighthouse gains and hardened security.",
        description:
            "I audit and optimize web applications for speed, SEO and security: image optimization, caching strategies, edge rendering, bundle size reduction, strong auth flows, data validation and protection against common vulnerabilities. I ship measurable improvements backed by data.",
        deliverables: [
            "Core Web Vitals & Lighthouse audits",
            "Caching & CDN strategies (Redis, Cloudflare)",
            "Bundle & image size optimization",
            "Auth hardening — OAuth, JWT, sessions",
            "OWASP Top 10 vulnerability remediation",
            "HTTPS / TLS & security headers",
            "SEO metadata & structured data",
        ],
        stack: [
          "Lighthouse",
          "Redis",
          "Cloudflare",
          "CDN",
          "OWASP",
          "SEO",
          "Vercel",
        ],
    },
];