"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import TiltCard from "./TiltCard";
import type { SkillCategory } from "../../data/skills";

export default function SkillCard({ category }: { category: SkillCategory }) {
    return (
        <TiltCard className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-700 p-8 glow-border">
            <div className="flex items-center gap-4">
                <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${category.accent}1f`, color: category.accent }}
                >
                    <Icon name={category.icon} size={28} />
                </span>
                <div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-slate-soft">
                        {category.skills.length} technologies
                    </p>
                </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-soft">
                {category.description}
            </p>

            <div className="mt-6 flex">
                <ul className="w-full space-y-3">
                    {category.skills.map((skill, i) => (
                        <li key={skill.name}>
                            <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center gap-2 text-mist/85">
                                    <Icon
                                        name={skill.icon}
                                        size={14}
                                        color={category.accent}
                                    />
                                    {skill.name}
                                </span>
                                <span className="font-semibold" style={{ color: category.accent }}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${category.accent}, ${category.accent}88)`,
                                    }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </TiltCard>
    );
}