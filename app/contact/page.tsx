import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import ContactForm from "./ContactForm";
import { profile, socialLinks } from "../data/profile";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Moeen Ul Qadir — full stack software engineer available for freelance projects and full-time roles. Email, WhatsApp or send a project enquiry.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Moeen Ul Qadir",
        description:
            "Available for freelance projects and full-time software engineering roles.",
    },
};

const contactCards = [
    {
        icon: "mail",
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        accent: "#38bdf8",
    },
    {
        icon: "phone",
        label: "Phone",
        value: profile.phone,
        href: profile.phoneHref,
        accent: "#ffb900",
    },
    {
        icon: "brandWhatsapp",
        label: "WhatsApp",
        value: profile.whatsapp,
        href: profile.whatsappHref,
        accent: "#25D366",
    },
    {
        icon: "mapPin",
        label: "Location",
        value: profile.location,
        href: profile.website,
        accent: "#a78bfa",
    },
];

export default function ContactPage() {
    return (
        <>
            <PageHeader
                eyebrow="Contact"
                title="Let's build something"
                highlight="great together."
                description="Have a project, a role or an idea worth exploring? I reply to every serious enquiry within 24 hours."
            />

            <section className="container-page section-space pt-0">
                <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {contactCards.map((card) => (
                        <StaggerItem key={card.label}>
                            <a
                                href={card.href}
                                target={card.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-700/60 p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
                            >
                                <span
                                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                                    style={{ backgroundColor: `${card.accent}1f`, color: card.accent }}
                                >
                                    <Icon name={card.icon} size={22} />
                                </span>
                                <p className="mt-4 text-xs uppercase tracking-widest text-slate-soft">
                                    {card.label}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white group-hover:text-gold">
                                    {card.value}
                                </p>
                            </a>
                        </StaggerItem>
                    ))}
                </Stagger>

                <div className="mt-16 grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <SectionHeading
                            align="left"
                            eyebrow="Send a Message"
                            title="Tell me about"
                            highlight="your project."
                            description="The more detail you share, the faster I can reply with a plan, timeline and estimate."
                        />
                        <ContactForm email={profile.email} />
                    </div>

                    <aside className="lg:col-span-5">
                        <div className="glass h-full rounded-3xl p-8 lg:p-10">
                            <h3 className="text-xl font-bold text-white">
                                Why work with me?
                            </h3>
                            <ul className="mt-6 space-y-5">
                                {[
                                    {
                                        title: "Senior, full stack skill set",
                                        text: "One engineer covering frontend, backend, DevOps and AI.",
                                    },
                                    {
                                        title: "Ship fast, ship clean",
                                        text: "Production-grade code with tests, types and CI/CD.",
                                    },
                                    {
                                        title: "Remote-first communicator",
                                        text: "5+ years working with international, distributed teams.",
                                    },
                                    {
                                        title: "Long-term thinking",
                                        text: "Architecture and documentation your team can maintain.",
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="flex items-start gap-3">
                                        <Icon name="checkCircle" size={20} className="mt-0.5 shrink-0 text-gold" />
                                        <div>
                                            <p className="font-semibold text-white">{item.title}</p>
                                            <p className="mt-0.5 text-sm text-slate-soft">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-sm text-slate-soft">Find me online</p>
                                <div className="mt-4 flex gap-3">
                                    {socialLinks.map((s) => (
                                        <a
                                            key={s.name}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.name}
                                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-800 transition-all hover:-translate-y-1 hover:border-gold/50"
                                        >
                                            <Icon
                                                name={`brand${s.icon.charAt(0).toUpperCase()}${s.icon.slice(1)}`}
                                                size={20}
                                                color={s.color}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <Reveal delay={0.15}>
                                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-glow/25 bg-emerald-glow/10 p-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-60" />
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-glow" />
                                    </span>
                                    <p className="text-sm font-medium text-mist">
                                        {profile.availability}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}