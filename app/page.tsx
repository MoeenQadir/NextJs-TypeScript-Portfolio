import Link from "next/link";
import Image from "next/image";
import Hero from "./components/home/Hero";
import Marquee, { CompaniesStrip } from "./components/ui/Marquee";
import StatsBand from "./components/ui/StatsBand";
import SectionHeading from "./components/ui/SectionHeading";
import ProjectCard from "./components/ui/ProjectCard";
import ServiceCard from "./components/ui/ServiceCard";
import CTASection from "./components/ui/CTASection";
import Icon from "./components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "./components/ui/Reveal";
import { services } from "./data/services";
import { featuredProjects } from "./data/projects";
import { profile } from "./data/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Moeen Ul Qadir — Full Stack Software Engineer",
    description:
        "Full Stack Software Engineer with 5+ years of experience in Next.js, React, Node.js, DevOps, cloud & AI engineering. Explore projects, services and skills.",
    alternates: { canonical: "/" },
};

const aboutBullets = [
    "Full stack product engineering with Next.js & Node.js",
    "DevOps — Docker, CI/CD, AWS & VPS infrastructure",
    "Software architecture & clean code principles",
    "AI & LLM integrations, RAG and automation",
];

export default function Home() {
    return (
        <>
            <Hero />

            <section className="border-y  border-white/5 bg-ink-900/60 py-6">
                    <Marquee />
            </section>

            <StatsBand />

            <section className="container-page section-space" id="about">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div className="relative order-2 lg:order-1">
                        <Reveal>
                            <div className="group relative mx-auto max-w-md">
                                <div className="glow-border absolute -inset-3 rounded-3xl" aria-hidden="true" />
                                <div className="relative overflow-hidden rounded-3xl">
                                    <Image
                                        src="/assets/self/Moeen_Khan.jpeg"
                                        alt="Moeen Ul Qadir working on software engineering"
                                        width={500}
                                        height={800}
                                        className="h-[30rem] w-full scale-[1.03] object-cover transition-transform duration-[1000ms] ease-out-expo group-hover:scale-[1.14]"
                                    />
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink via-transparent to-transparent" />
                                </div>
                                <div className="glass-strong absolute -bottom-6 left-6 rounded-2xl p-5">
                                    <p className="text-xs uppercase tracking-widest text-gold">
                                        Based in
                                    </p>
                                    <p className="mt-1 font-bold text-white">{profile.location}</p>
                                    <p className="text-xs text-slate-soft">Working worldwide 🌍</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionHeading
                            align="left"
                            eyebrow="Who I Am"
                            title="Engineering products"
                            highlight="that scale."
                            description="I design, build and operate software — from the first wireframe to the last CI/CD deploy."
                        />
                        <Reveal delay={0.1}>
                            <p className="mt-2 leading-relaxed text-slate-soft">
                                {profile.about}
                            </p>
                        </Reveal>
                        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
                            {aboutBullets.map((b) => (
                                <StaggerItem
                                    key={b}
                                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-4 text-sm text-mist/85"
                                >
                                    <Icon name="checkCircle" size={18} className="mt-0.5 shrink-0 text-gold" />
                                    {b}
                                </StaggerItem>
                            ))}
                        </Stagger>
                        <Reveal delay={0.2}>
                            <Link
                                href="/about"
                                className="group mt-9 inline-flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-white"
                            >
                                More about me
                                <Icon
                                    name="arrowRight"
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="What I Do"
                        title="Services crafted for"
                        highlight="modern teams."
                        description="Four disciplines, one engineer — I own your product from architecture to production."
                    />
                    <Stagger className="grid gap-6 lg:gap-8 md:grid-cols-2">
                        {services.slice(0, 4).map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </Stagger>
                    <Reveal className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
                        >
                            See All Services
                            <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Featured Work"
                    title="Projects with"
                    highlight="real impact."
                    description="A selection of products I've shipped for startups, SaaS companies and international clients."
                />
                <Stagger className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {featuredProjects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </Stagger>
                <Reveal className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
                    >
                        View All Projects
                        <Icon name="arrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            </section>

            <section className="container-page pb-24">
                <Reveal>
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-soft">
                            Companies &amp; clients I&apos;ve worked with
                        </p>
                    </div>
                </Reveal>
                <div className="mt-8">
                    <CompaniesStrip />
                </div>
            </section>

            <CTASection />
        </>
    );
}