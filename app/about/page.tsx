import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/ui/PageHeader";
import StatsBand from "../components/ui/StatsBand";
import CTASection from "../components/ui/CTASection";
import SectionHeading from "../components/ui/SectionHeading";
import { Timeline, Milestone } from "../components/ui/Timeline";
import Icon from "../components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { experience, education, timelineFacts } from "../data/experience";
import { profile } from "../data/profile";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Learn about Moeen Ul Qadir — a full stack software engineer with 5+ years of experience across web development, DevOps, software architecture, AI engineering and IT operations.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Moeen Ul Qadir — Full Stack Software Engineer",
        description:
            "Full stack engineer specialising in Next.js, React, Node.js, DevOps, cloud and AI engineering.",
    },
};

const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Moeen Ul Qadir",
    url: `${profile.website}/about`,
    mainEntity: {
        "@type": "Person",
        name: profile.name,
        url: profile.website,
    },
};

export default function AboutPage() {
    return (
        <>
            <PageHeader
                eyebrow="About Me"
                title="The engineer behind"
                highlight="the code."
                description="5+ years across full stack development, DevOps, architecture and AI — driven by curiosity and a love for well-built software."
            />

            <section className="container-page section-space pt-0 lg:pt-4">
                <div className="grid gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <div className="relative mx-auto max-w-sm">
                                <div className="glow-border absolute -inset-3 rounded-3xl" aria-hidden="true" />
                                <div className="relative overflow-hidden rounded-3xl">
                                    <Image
                                        src="/assets/self/Moeen.jpg"
                                        alt={profile.name}
                                        width={500}
                                        height={800}
                                        priority
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink via-transparent to-transparent" />
                                </div>

                                <div className="glass-strong absolute -bottom-8 inset-x-6 rounded-2xl p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-soft">Nationality</p>
                                            <p className="mt-1 text-sm font-bold text-white">🇵🇰 {profile.nationality}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-soft">Location</p>
                                            <p className="mt-1 text-sm font-bold text-white">📍 Multan, PK</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-soft">Experience</p>
                                            <p className="mt-1 text-sm font-bold text-white">5+ Years</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-soft">Status</p>
                                            <p className="mt-1 text-sm font-bold text-gold">Open to work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15} className="mt-20">
                            <h3 className="text-lg font-bold text-white">Languages</h3>
                            <div className="mt-5 space-y-3">
                                {profile.languages.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-ink-700/60 px-5 py-4"
                                    >
                                        <span className="flex items-center gap-3 text-sm font-semibold text-mist">
                                            <span className="text-lg">{lang.flag}</span>
                                            {lang.name}
                                        </span>
                                        <span className="text-xs text-slate-soft">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <SectionHeading
                            align="left"
                            eyebrow="My Story"
                            title="From passionate learner to"
                            highlight="full stack engineer."
                        />

                        <div className="space-y-5 leading-relaxed text-slate-soft">
                            <Reveal>
                                <p>
                                    My journey started in Lahore, where I studied Information
                                    Technology at the University of Education — while quietly
                                    building my first web projects on the side. What began as
                                    curiosity about how websites work turned into a 5+ year
                                    career engineering products used around the world.
                                </p>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <p>
                                    Today I work across the entire stack: architecting
                                    systems, designing databases, shipping polished front-ends
                                    with Next.js and React, running cloud &amp; DevOps
                                    infrastructure, and integrating AI &amp; LLM features that
                                    make products genuinely smarter.
                                </p>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <p>
                                    I believe great software is a blend of{" "}
                                    <span className="font-semibold text-mist">design discipline</span>,{" "}
                                    <span className="font-semibold text-mist">clean architecture</span>{" "}
                                    and <span className="font-semibold text-mist">operational rigor</span>.
                                    That&apos;s why I obsess over code quality, deployment
                                    pipelines and the systems that keep products online.
                                </p>
                            </Reveal>
                        </div>

                        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                            <StaggerItem className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="rocket" size={22} className="mt-0.5 text-gold" />
                                <div>
                                    <p className="font-semibold text-white">Product mindset</p>
                                    <p className="mt-1 text-sm text-slate-soft">Engineering decisions driven by business value.</p>
                                </div>
                            </StaggerItem>
                            <StaggerItem className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="puzzle" size={22} className="mt-0.5 text-gold" />
                                <div>
                                    <p className="font-semibold text-white">Problem solver</p>
                                    <p className="mt-1 text-sm text-slate-soft">Comfortable anywhere — UI, APIs, infra or AI.</p>
                                </div>
                            </StaggerItem>
                            <StaggerItem className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="layers" size={22} className="mt-0.5 text-gold" />
                                <div>
                                    <p className="font-semibold text-white">Architecture first</p>
                                    <p className="mt-1 text-sm text-slate-soft">SOLID, clean architecture & design patterns.</p>
                                </div>
                            </StaggerItem>
                            <StaggerItem className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="globe" size={22} className="mt-0.5 text-gold" />
                                <div>
                                    <p className="font-semibold text-white">Remote ready</p>
                                    <p className="mt-1 text-sm text-slate-soft">5+ years collaborating across time zones.</p>
                                </div>
                            </StaggerItem>
                        </Stagger>

                        <Reveal delay={0.1} className="mt-10">
                            <a
                                href={profile.resumeUrl}
                                download="Moeen-Ul-Qadir-Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
                            >
                                <Icon name="download" size={18} />
                                Download My CV
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>

            <StatsBand />

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Experience"
                    title="Where I've"
                    highlight="made an impact."
                    description="A timeline of the roles, companies and products that shaped my engineering journey."
                />
                <div className="mx-auto max-w-4xl">
                    <Timeline entries={experience} icon="briefcase" accent="#38bdf8" />
                </div>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="Education"
                        title="Learning never"
                        highlight="stops."
                        description="Formal education plus a portfolio of advanced bootcamps and certifications."
                    />
                    <div className="mx-auto max-w-4xl">
                        <Timeline
                            icon="graduation"
                            accent="#8b5cf6"
                            entries={education.map((e) => ({
                                title: e.degree,
                                company: e.institution,
                                period: e.period,
                                location: e.location,
                                summary: e.detail,
                                stack: e.grade ? [...e.tags, e.grade] : e.tags,
                            }))}
                        />

                        <Stagger className="mt-16 grid gap-3 sm:grid-cols-2">
                            {profile.certifications.map((c) => (
                                <StaggerItem
                                    key={c}
                                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-5"
                                >
                                    <Icon name="checkCircle" size={20} className="mt-0.5 shrink-0 text-gold" />
                                    <p className="text-sm text-mist/85">{c}</p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Journey"
                    title="Milestones along"
                    highlight="the way."
                />
                <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                    {timelineFacts.map((m) => (
                        <Milestone key={m.year} year={m.year} label={m.label} />
                    ))}
                </div>
                <Reveal className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-base font-semibold text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                        Let&apos;s write the next chapter
                        <Icon name="arrowRight" size={18} />
                    </Link>
                </Reveal>
            </section>

            <CTASection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
        </>
    );
}