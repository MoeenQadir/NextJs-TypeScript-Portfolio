import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/ui/CTASection";
import TiltCard from "../components/ui/TiltCard";
import Icon from "../components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "../components/ui/Reveal";
import { services } from "../data/services";
import { profile } from "../data/profile";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Professional services from Moeen Ul Qadir: full stack development, DevOps & cloud, software architecture & design, AI engineering, API integration, and performance & security optimization.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Services — Moeen Ul Qadir",
        description:
            "Full stack development, DevOps & cloud, software architecture, AI engineering and more.",
    },
};

const processSteps = [
    {
        step: "01",
        title: "Discover",
        description:
            "We dig into your goals, constraints and users. I audit the current state and define what success looks like.",
    },
    {
        step: "02",
        title: "Design",
        description:
            "Architecture diagrams, database models and API contracts. Clear plans for engineering and delivery.",
    },
    {
        step: "03",
        title: "Build",
        description:
            "Clean, tested, production-ready code. Short iteration loops with demos so you always see progress.",
    },
    {
        step: "04",
        title: "Deploy & Operate",
        description:
            "CI/CD pipelines, Docker environments, monitoring and scaling — then continuous improvement.",
    },
];

const faqs = [
    {
        q: "What kind of projects do you take on?",
        a: "Web applications, SaaS platforms, dashboards, e-commerce, landing pages, DevOps setups, API integrations and AI-powered features. Scope ranges from single pages to full platforms.",
    },
    {
        q: "How do you price your work?",
        a: "Fixed-price for well-defined scopes, hourly for ongoing collaboration, or monthly retainers. I'll recommend what fits your project best after a short discovery call.",
    },
    {
        q: "Can you work as part of an existing team?",
        a: "Absolutely. I've spent years collaborating with design teams, backend engineers and product managers — internationally and remotely.",
    },
    {
        q: "What's your typical turnaround time?",
        a: "Landing pages ship in days, full web apps in weeks. I share a sprint-style plan up front so expectations are always clear.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Services"
                title="Everything your product needs,"
                highlight="under one roof."
                description="Full stack development, DevOps & cloud infrastructure, software architecture and AI engineering — delivered with senior-level quality."
            />

            <section className="container-page section-space pt-0">
                <Stagger className="grid gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <StaggerItem key={service.slug}>
                            <TiltCard className="glow-border flex h-full flex-col rounded-2xl border border-white/10 bg-ink-700 p-8">
                                <div className="flex items-center gap-4">
                                    <span
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                                        style={{ backgroundColor: `${service.accent}1f`, color: service.accent }}
                                    >
                                        <Icon name={service.icon} size={28} />
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">{service.title}</h2>
                                        <p className="text-xs uppercase tracking-widest text-slate-soft">
                                            {service.slug.split("-").join(" ")}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 leading-relaxed text-slate-soft">
                                    {service.description}
                                </p>

                                <h3 className="mt-7 text-sm font-semibold uppercase tracking-widest text-gold">
                                    What you get
                                </h3>
                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {service.deliverables.map((d) => (
                                        <li key={d} className="flex items-start gap-2.5 text-sm text-mist/80">
                                            <Icon name="checkCircle" size={16} className="mt-0.5 shrink-0 text-gold" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-7 border-t border-white/10 pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-soft">
                                        Tech stack
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {service.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist/75"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </Stagger>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="How It Works"
                        title="A process engineered for"
                        highlight="results."
                        description="No smoke and mirrors — a repeatable, transparent delivery process."
                    />
                    <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {processSteps.map((step) => (
                            <StaggerItem key={step.step}>
                                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700 p-8 transition-colors hover:border-gold/40">
                                    <span className="absolute -right-2 -top-4 text-7xl font-extrabold text-white/5 transition-colors group-hover:text-gold/10">
                                        {step.step}
                                    </span>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-lg font-bold text-ink">
                                        {step.step}
                                    </span>
                                    <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                                        {step.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Questions,"
                    highlight="answered."
                />
                <Stagger className="mx-auto grid max-w-4xl gap-5">
                    {faqs.map((f) => (
                        <StaggerItem
                            key={f.q}
                            className="rounded-2xl border border-white/10 bg-ink-700/60 p-6"
                        >
                            <h3 className="font-semibold text-white">{f.q}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-soft">{f.a}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
                <Reveal className="mt-12 text-center">
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
                    >
                        <Icon name="mail" size={18} />
                        Request a Quote
                    </a>
                </Reveal>
            </section>

            <CTASection />
        </>
    );
}