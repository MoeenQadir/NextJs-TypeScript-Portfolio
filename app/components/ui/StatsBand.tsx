"use client";

import Counter from "./Counter";
import { Stagger, StaggerItem } from "./Reveal";
import { profile } from "../../data/profile";

const values = [
    { value: 5, suffix: "+", label: "Years Experience", icon: "briefcase" },
    { value: 40, suffix: "+", label: "Projects Delivered", icon: "rocket" },
    { value: 50, suffix: "+", label: "Technologies", icon: "layers" },
    { value: 25, suffix: "+", label: "Happy Clients", icon: "heart" },
];

export default function StatsBand() {
    return (
        <section className="container-page section-space pb-0">
            <Stagger className="glow-border grid grid-cols-2 gap-6 rounded-3xl bg-ink-700/60 px-8 py-12 lg:grid-cols-4 lg:px-12">
                {values.map((stat) => (
                    <StaggerItem
                        key={stat.label}
                        className="flex flex-col items-center gap-2 text-center"
                    >
                        <Counter
                            value={stat.value}
                            suffix={stat.suffix}
                            className="text-4xl font-extrabold text-gradient-gold sm:text-5xl"
                        />
                        <p className="text-sm text-slate-soft">{stat.label}</p>
                    </StaggerItem>
                ))}
            </Stagger>
        </section>
    );
}