"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import TiltCard from "./TiltCard";
import { fadeUp } from "./Reveal";
import type { Service } from "../../data/services";

export default function ServiceCard({
    service,
    index = 0,
}: {
    service: Service;
    index?: number;
}) {
    return (
        <motion.div variants={fadeUp} className="h-full">
            <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-700 p-7 transition-colors hover:border-gold/40 lg:p-9">
                <span
                    className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                    }}
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: service.accent }}
                    aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                    <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${service.accent}1f`, color: service.accent }}
                    >
                        <Icon name={service.icon} size={28} />
                    </span>
                    <span className="text-5xl font-extrabold leading-none text-white/5 transition-colors group-hover:text-white/10">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white lg:text-2xl">
                    {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft lg:text-base">
                    {service.summary}
                </p>

                <div className="mt-6 rounded-xl border border-white/5 bg-ink-800/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        What you get
                    </p>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.slice(0, 4).map((d) => (
                            <li
                                key={d}
                                className="flex items-start gap-2 text-sm leading-snug text-mist/80"
                            >
                                <Icon
                                    name="checkCircle"
                                    size={15}
                                    className="mt-0.5 shrink-0"
                                    color={service.accent}
                                />
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                    {service.stack.slice(0, 6).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist/70"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </TiltCard>
        </motion.div>
    );
}