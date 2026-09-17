"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import TiltCard from "./TiltCard";
import { fadeUp } from "./Reveal";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div variants={fadeUp} className="h-full">
            <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-700 transition-colors hover:border-gold/40">
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category} project by Moeen Ul Qadir`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-700 via-ink-700/30 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-ink-900/75 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                        {project.category}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-ink-900/75 px-3 py-1 text-xs font-medium text-mist/80 backdrop-blur">
                        {project.year}
                    </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-gold">
                        {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">
                        {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-mist/70"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-white"
                        >
                            View Case Study
                            <Icon
                                name="arrowUpRight"
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                        <span className="text-xs uppercase tracking-wider text-slate-soft">
                            {project.role}
                        </span>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
}