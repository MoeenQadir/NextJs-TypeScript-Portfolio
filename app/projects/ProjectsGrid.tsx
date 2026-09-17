"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsGrid() {
    const [active, setActive] = useState("All");

    const filtered = useMemo(
        () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
        [active]
    );

    return (
        <div>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
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
                    {filtered.map((project) => (
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
        </div>
    );
}