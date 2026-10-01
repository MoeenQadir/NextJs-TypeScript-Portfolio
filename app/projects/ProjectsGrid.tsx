"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import Icon from "../components/ui/Icon";
import { projects } from "../data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
const PER_PAGE = 6;

export default function ProjectsGrid() {
    const [active, setActive] = useState("All");
    const [page, setPage] = useState(1);

    const filtered = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
        [active]
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const current = Math.min(page, totalPages);
    const paged = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

    return (
        <div>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActive(cat);
                            setPage(1);
                        }}
                        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                            active === cat
                                ? "bg-gradient-gold text-ink"
                                : "border border-white/10 bg-ink-700/60 text-slate-soft hover:border-gold/40 hover:text-white"
                        }`}
                        aria-pressed={active === cat}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {paged.map((project) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {totalPages > 1 && (
                <div className="mt-14 flex items-center justify-center gap-4">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={current === 1}
                        className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold/40 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <Icon name="arrowRight" size={15} className="rotate-180" />
                        Previous
                    </button>

                    <span className="text-sm font-medium text-slate-soft">
                        Page {current} of {totalPages}
                    </span>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={current === totalPages}
                        className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold/40 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Next
                        <Icon name="arrowRight" size={15} />
                    </button>
                </div>
            )}
        </div>
    );
}