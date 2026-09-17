import Link from "next/link";
import Icon from "./Icon";
import { Reveal } from "./Reveal";

export default function PageHeader({
    eyebrow,
    title,
    highlight,
    description,
}: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
}) {
    return (
        <section className="relative overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-44">
            <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
            <div
                className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-electric/20 blur-[120px]"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-gold/15 blur-[110px]"
                aria-hidden="true"
            />
            <div className="container-page relative">
                <Reveal>
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-soft transition-colors hover:text-gold"
                    >
                        <Icon name="arrowRight" size={15} className="rotate-180" />
                        Back to home
                    </Link>
                </Reveal>
                <Reveal delay={0.06}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                        {eyebrow}
                    </span>
                </Reveal>
                <Reveal delay={0.12}>
                    <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                        {title}{" "}
                        {highlight && <span className="text-gradient-gold">{highlight}</span>}
                    </h1>
                </Reveal>
                {description && (
                    <Reveal delay={0.18}>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-soft sm:text-lg">
                            {description}
                        </p>
                    </Reveal>
                )}
                <Reveal delay={0.24}>
                    <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
                </Reveal>
            </div>
        </section>
    );
}