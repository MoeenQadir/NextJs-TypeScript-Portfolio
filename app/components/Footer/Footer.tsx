import Link from "next/link";
import Icon from "../ui/Icon";
import { NAV_LINKS } from "../Navbar/navigation";
import { services } from "../../data/services";
import { profile, socialLinks } from "../../data/profile";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-ink-900">
            <div className="container-page py-16 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold font-bold text-ink">
                                M
                            </span>
                            <span className="text-2xl font-bold text-white">
                                Moeen<span className="text-gold">.</span>
                            </span>
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-soft">
                            Full Stack Software Engineer crafting scalable web apps,
                            cloud infrastructure and AI-powered products for businesses
                            around the world.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700 transition-all hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10"
                                >
                                    <Icon name={`brand${s.icon.charAt(0).toUpperCase()}${s.icon.slice(1)}`} size={18} color={s.color} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-mist">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.name}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-slate-soft transition-colors hover:text-gold"
                                    >
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-mist">
                            Services
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href="/services"
                                        className="text-sm text-slate-soft transition-colors hover:text-gold"
                                    >
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-mist">
                            Get In Touch
                        </h3>
                        <ul className="mt-5 space-y-4 text-sm text-slate-soft">
                            <li className="flex items-start gap-3">
                                <Icon name="mail" size={18} className="mt-0.5 text-gold" />
                                <a href={`mailto:${profile.email}`} className="hover:text-gold">
                                    {profile.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="phone" size={18} className="mt-0.5 text-gold" />
                                <a href={profile.phoneHref} className="hover:text-gold">
                                    {profile.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="mapPin" size={18} className="mt-0.5 text-gold" />
                                <span>{profile.location}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon name="globe" size={18} className="mt-0.5 text-gold" />
                                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                                    {profile.website.replace("https://", "")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-sm text-slate-soft">
                        © {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-soft">
                        Built with <span className="text-gold">Next.js</span>, TypeScript
                        &amp; <span className="text-gold">Three.js</span>
                    </p>
                    <a
                        href="#top"
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-ink transition-transform hover:-translate-y-1"
                    >
                        <Icon name="arrowUp" size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}