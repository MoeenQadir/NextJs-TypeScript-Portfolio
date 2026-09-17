import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../components/ui/Icon";
import CTASection from "../../components/ui/CTASection";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import { projects, getProjectBySlug } from "../../data/projects";
import { profile } from "../../data/profile";

type Params = { params: { slug: string } };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
    const project = getProjectBySlug(params.slug);
    if (!project) {
        return { title: "Project Not Found" };
    }
    return {
        title: project.title,
        description: project.summary,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            type: "article",
            title: `${project.title} — Case Study`,
            description: project.summary,
            images: [{ url: project.image, alt: project.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.summary,
            images: [project.image],
        },
    };
}

export default function ProjectDetailPage({ params }: Params) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

    const currentIndex = projects.findIndex((p) => p.slug === project.slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject =
        projects[(currentIndex - 1 + projects.length) % projects.length];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${profile.website}/projects/${project.slug}`,
        author: { "@type": "Person", name: profile.name },
        keywords: project.stack.join(", "),
        dateCreated: project.year,
    };

    return (
        <>
            <section className="relative overflow-hidden pb-12 pt-36 lg:pt-44">
                <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
                <div
                    className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full blur-[120px]"
                    style={{ backgroundColor: `${project.gradient[0]}33` }}
                    aria-hidden="true"
                />
                <div className="container-page relative">
                    <Reveal>
                        <Link
                            href="/projects"
                            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-soft transition-colors hover:text-gold"
                        >
                            <Icon name="arrowRight" size={15} className="rotate-180" />
                            All projects
                        </Link>
                    </Reveal>

                    <div className="flex flex-wrap items-center gap-3">
                        <span
                            className="rounded-full px-4 py-1.5 text-xs font-semibold"
                            style={{
                                backgroundColor: `${project.gradient[0]}22`,
                                color: project.gradient[0],
                            }}
                        >
                            {project.category}
                        </span>
                        <span className="text-sm text-slate-soft">{project.year}</span>
                    </div>

                    <Reveal delay={0.08}>
                        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
                            {project.title}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.14}>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
                            {project.summary}
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-8 flex flex-wrap gap-4">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
                                >
                                    <Icon name="external" size={16} />
                                    View Live Project
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold/40"
                                >
                                    <Icon name="brandGithub" size={16} />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="container-page pb-16">
                <Reveal>
                    <div className="glow-border relative overflow-hidden rounded-3xl">
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            width={1200}
                            height={750}
                            priority
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </Reveal>
            </section>

            <section className="container-page section-space pt-0">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <h2 className="text-2xl font-bold text-white">Project Overview</h2>
                        </Reveal>
                        <div className="mt-5 space-y-4 leading-relaxed text-slate-soft">
                            {project.description.map((para) => (
                                <Reveal key={para}>
                                    <p>{para}</p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal className="mt-12">
                            <h2 className="text-2xl font-bold text-white">
                                Key Contributions
                            </h2>
                        </Reveal>
                        <Stagger className="mt-5 space-y-3">
                            {project.highlights.map((h) => (
                                <StaggerItem
                                    key={h}
                                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-4 text-sm text-mist/85"
                                >
                                    <Icon name="checkCircle" size={18} className="mt-0.5 shrink-0 text-gold" />
                                    {h}
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal className="mt-12">
                            <h2 className="text-2xl font-bold text-white">Features</h2>
                        </Reveal>
                        <Stagger className="mt-5 grid gap-4 sm:grid-cols-2">
                            {project.features.map((f) => (
                                <StaggerItem
                                    key={f}
                                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700/60 p-4 text-sm text-mist/85"
                                >
                                    <Icon name="bolt" size={18} className="mt-0.5 shrink-0 text-gold" />
                                    {f}
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="glass sticky top-24 rounded-2xl p-7">
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
                                Project Details
                            </h3>
                            <dl className="mt-5 space-y-4 text-sm">
                                <div>
                                    <dt className="text-slate-soft">Client</dt>
                                    <dd className="mt-1 font-semibold text-white">{project.client}</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-soft">My Role</dt>
                                    <dd className="mt-1 font-semibold text-white">{project.role}</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-soft">Year</dt>
                                    <dd className="mt-1 font-semibold text-white">{project.year}</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-soft">Category</dt>
                                    <dd className="mt-1 font-semibold text-white">{project.category}</dd>
                                </div>
                            </dl>

                            <div className="mt-6 border-t border-white/10 pt-6">
                                <p className="text-slate-soft">Tech Stack</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist/75"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
                            >
                                Start a similar project
                                <Icon name="arrowRight" size={16} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="container-page pb-24">
                <div className="grid gap-6 border-t border-white/10 pt-12 sm:grid-cols-2">
                    <Link
                        href={`/projects/${prevProject.slug}`}
                        className="group rounded-2xl border border-white/10 bg-ink-700/60 p-6 transition-colors hover:border-gold/40"
                    >
                        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-soft">
                            <Icon name="arrowRight" size={14} className="rotate-180" />
                            Previous
                        </span>
                        <p className="mt-2 font-bold text-white transition-colors group-hover:text-gold">
                            {prevProject.title}
                        </p>
                    </Link>
                    <Link
                        href={`/projects/${nextProject.slug}`}
                        className="group rounded-2xl border border-white/10 bg-ink-700/60 p-6 text-right transition-colors hover:border-gold/40"
                    >
                        <span className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-slate-soft">
                            Next
                            <Icon name="arrowRight" size={14} />
                        </span>
                        <p className="mt-2 font-bold text-white transition-colors group-hover:text-gold">
                            {nextProject.title}
                        </p>
                    </Link>
                </div>
            </section>

            <CTASection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}