import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/ui/CTASection";
import SkillCard from "../components/ui/SkillCard";
import TiltCard from "../components/ui/TiltCard";
import Marquee from "../components/ui/Marquee";
import Icon from "../components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "../components/ui/Reveal";
import { skillCategories } from "../data/skills";

export const metadata: Metadata = {
    title: "Skills & Technologies",
    description:
        "Explore the full skill set of Moeen Ul Qadir: TypeScript, React, Next.js, Node.js, PostgreSQL, Docker, AWS, DevOps, AI engineering, software architecture, testing and security.",
    alternates: { canonical: "/skills" },
    openGraph: {
        title: "Skills & Technologies — Moeen Ul Qadir",
        description:
            "50+ technologies across frontend, backend, DevOps, cloud, AI engineering and architecture.",
    },
};

const heroTech = [
    { name: "TypeScript", icon: "typescript", color: "#3178c6" },
    { name: "React.js", icon: "react", color: "#61dafb" },
    { name: "Next.js", icon: "next", color: "#ffffff" },
    { name: "Node.js", icon: "node", color: "#83cd29" },
    { name: "Docker", icon: "docker", color: "#2496ed" },
    { name: "AWS", icon: "aws", color: "#ff9900" },
    { name: "PostgreSQL", icon: "sql", color: "#336791" },
    { name: "Linux", icon: "linux", color: "#fcc624" },
];

const toolBelt = [
    { name: "VS Code", icon: "framer", note: "Daily driver" },
    { name: "Git / GitHub", icon: "git", note: "Version control" },
    { name: "Chrome DevTools", icon: "debug", note: "Performance" },
    { name: "Postman / Insomnia", icon: "api", note: "API testing" },
    { name: "npm / pnpm / Yarn", icon: "npm", note: "Package mgmt" },
    { name: "ESLint / Prettier", icon: "eslint", note: "Code quality" },
    { name: "Vitest / Jest", icon: "vitest", note: "Unit testing" },
    { name: "Playwright", icon: "playwright", note: "E2E testing" },
];

export default function SkillsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Skills & Tools"
                title="A battle-tested"
                highlight="technology arsenal."
                description="50+ technologies and tools across six disciplines — continuously evolving as the industry moves."
            />

            <section className="container-page pb-16">
                <Stagger className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
                    {heroTech.map((tech) => (
                        <StaggerItem key={tech.name}>
                            <TiltCard className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-700 py-7">
                                <Icon name={tech.icon} size={40} color={tech.color} />
                                <span className="text-xs font-semibold text-mist/80">{tech.name}</span>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </Stagger>

                <Reveal className="mt-12">
                    <Marquee />
                </Reveal>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="Expertise"
                        title="Six disciplines,"
                        highlight="one engineer."
                        description="Each category represents real production experience — not just familiarity."
                    />
                    <Stagger className="grid gap-8 md:grid-cols-2">
                        {skillCategories.map((category) => (
                            <StaggerItem key={category.title}>
                                <SkillCard category={category} />
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Daily Drivers"
                    title="Tools that power"
                    highlight="my workflow."
                />
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {toolBelt.map((tool) => (
                        <StaggerItem key={tool.name}>
                            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-700/60 p-5 transition-colors hover:border-gold/40">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                                    <Icon name={tool.icon} size={22} />
                                </span>
                                <div>
                                    <p className="text-sm font-bold text-white">{tool.name}</p>
                                    <p className="text-xs text-slate-soft">{tool.note}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </section>

            <CTASection />
        </>
    );
}