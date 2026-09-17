import Link from "next/link";
import Icon from "./Icon";
import { Reveal } from "./Reveal";

export default function CTASection() {
    return (
        <section className="container-page pb-24 pt-8 lg:pb-32">
            <Reveal>
                <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-700 via-ink-600 to-ink-700 px-8 py-16 text-center lg:px-16 lg:py-20">
                    <div
                        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-electric/25 blur-3xl"
                        aria-hidden="true"
                    />
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                            <Icon name="bolt" size={16} />
                            Let&apos;s work together
                        </span>
                        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Have an idea? Let&apos;s build something{" "}
                            <span className="text-gradient-gold">extraordinary</span>.
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-soft sm:text-lg">
                            From full stack products to DevOps automation and AI-powered
                            features — I&apos;m available for freelance projects and
                            full-time roles. Let&apos;s turn your vision into production
                            software.
                        </p>
                        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
                            >
                                Start a Conversation
                                <Icon
                                    name="arrowRight"
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                            <Link
                                href="/projects"
                                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40"
                            >
                                View My Work
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}