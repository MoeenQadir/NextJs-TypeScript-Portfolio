"use client";

import { technologies } from "../../data/skills";
import { Stagger, StaggerItem } from "./Reveal";

export default function Marquee() {
    const doubled = [...technologies, ...technologies];

    return (
        <div className="relative overflow-hidden py-4" aria-hidden="true">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070f] to-transparent" />
            <div className="flex w-max animate-marquee gap-3">
                {doubled.map((tech, i) => (
                    <span
                        key={`${tech}-${i}`}
                        className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/10 bg-ink-700/80 px-4 py-2.5 text-sm font-medium text-mist/80"
                    >
                        <span className="h-1.5 w-1.5 rounded-[2px] bg-gradient-gold" />
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function CompaniesStrip() {
    const companies = [
        "FasTech Systems",
        "Augier.ai · NY",
        "Callsense",
        "The Bank of Punjab",
        "Apostol & Asociatii",
        "Fiverr Clients",
    ];

    return (
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((c) => (
                <StaggerItem
                    key={c}
                    className="flex items-center justify-center rounded-xl border border-white/5 bg-ink-800/60 px-4 py-5 text-center text-sm font-semibold tracking-wide text-slate-soft"
                >
                    {c}
                </StaggerItem>
            ))}
        </Stagger>
    );
}