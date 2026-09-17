"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { Stagger, StaggerItem } from "./Reveal";

export type TimelineEntry = {
    title: string;
    company: string;
    period: string;
    location: string;
    type?: string;
    summary: string;
    highlights?: string[];
    stack?: string[];
};

export function Timeline({
    entries,
    icon = "briefcase",
    accent = "#ffb900",
}: {
    entries: TimelineEntry[];
    icon?: string;
    accent?: string;
}) {
    return (
        <Stagger className="relative space-y-10 pl-10 sm:pl-14">
            <span
                className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:left-[23px]"
                aria-hidden="true"
            />
            {entries.map((entry) => (
                <StaggerItem key={`${entry.title}-${entry.company}`} className="relative">
                    <span
                        className="absolute -left-10 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ink-700 sm:-left-14 sm:h-12 sm:w-12"
                        style={{ color: accent }}
                    >
                        <Icon name={icon} size={18} />
                    </span>
                    <div className="glass rounded-2xl p-6 transition-colors hover:border-gold/30">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-lg font-bold text-white">{entry.title}</h3>
                            <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                                {entry.period}
                            </span>
                        </div>
                        <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
                            {entry.company}
                            <span className="ml-2 text-slate-soft">
                                {entry.location}
                            </span>
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                            {entry.summary}
                        </p>
                        {entry.highlights && (
                            <ul className="mt-4 space-y-2">
                                {entry.highlights.map((h) => (
                                    <li
                                        key={h}
                                        className="flex items-start gap-2 text-sm text-mist/75"
                                    >
                                        <Icon name="check" size={15} className="mt-0.5 shrink-0 text-gold" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {entry.stack && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {entry.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-mist/70"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </StaggerItem>
            ))}
        </Stagger>
    );
}

export function Milestone({ year, label }: { year: string; label: string }) {
    return (
        <motion.div
            className="relative flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-sm font-bold text-ink">
                {year.length > 3 ? year.slice(0, 2) : year}
            </span>
            <p className="pt-2 text-sm leading-relaxed text-slate-soft">{label}</p>
        </motion.div>
    );
}