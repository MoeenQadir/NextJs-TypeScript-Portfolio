"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SceneLoader from "../three/SceneLoader";
import MoonLoader from "../ui/MoonLoader";
import Icon from "../ui/Icon";
import { profile, socialLinks } from "../../data/profile";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function RotatingRole() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(
            () => setIndex((i) => (i + 1) % profile.heroRoles.length),
            2600
        );
        return () => clearInterval(id);
    }, []);

    return (
        <span className="relative inline-block min-w-max text-gold">
            <AnimatePresence mode="wait">
                <motion.span
                    key={profile.heroRoles[index]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block"
                >
                    {profile.heroRoles[index]}
                </motion.span>
            </AnimatePresence>
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-gold" />
        </span>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 lg:pb-24">
            <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
            <div
                className="pointer-events-none absolute -left-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-electric/15 blur-[140px]"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gold/12 blur-[130px]"
                aria-hidden="true"
            />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <SceneLoader />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="container-page relative z-10 grid items-center gap-16 lg:grid-cols-12"
            >
                <div className="lg:col-span-7">
                    <motion.div variants={item} className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-60" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-glow" />
                        </span>
                        <span className="text-sm font-medium text-mist/80">
                            {profile.availability}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m <span className="text-gradient-gold">Moeen</span> —
                        <br />
                        <RotatingRole />
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-6 max-w-2xl text-base leading-relaxed text-slate-soft sm:text-lg"
                    >
                        I engineer production-grade software end to end —{" "}
                        <span className="text-mist">full stack products</span>,{" "}
                        <span className="text-mist">cloud &amp; DevOps infrastructure</span>{" "}
                        and <span className="text-mist">AI-powered features</span>. 5+
                        years of turning ambitious ideas into fast, secure and scalable
                        systems.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
                        >
                            Explore My Work
                            <Icon
                                name="arrowRight"
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                        <a
                            href={profile.resumeUrl}
                            download="Moeen-Ul-Qadir-Resume.pdf"
                            className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40"
                        >
                            <Icon name="download" size={18} />
                            Download CV
                        </a>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                    >
                        {socialLinks.slice(0, 4).map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className="flex items-center gap-2 text-sm text-slate-soft transition-colors hover:text-gold"
                            >
                                <Icon
                                    name={`brand${s.icon.charAt(0).toUpperCase()}${s.icon.slice(1)}`}
                                    size={18}
                                    color={s.color}
                                />
                                {s.name}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="hidden lg:col-span-5 lg:block"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative mx-auto h-fit w-fit"
                    >
                        <div className="glow-border absolute -inset-3 rounded-[2.5rem]" aria-hidden="true" />
                        <motion.div
                            initial={{ opacity: 0, scale: 1.14 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative h-[34rem] w-[28rem] max-w-full overflow-hidden rounded-[2.5rem] bg-ink-700/70 backdrop-blur"
                        >
                            <Image
                                src="/assets/banner/moni.jpg"
                                alt={`Portrait of ${profile.name}, Full Stack Software Engineer`}
                                width={500}
                                height={800}
                                priority
                                className="h-full w-full scale-[1.03] object-cover opacity-95 mix-blend-luminosity transition-transform duration-[1000ms] ease-out-expo group-hover:scale-[1.14]"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-ink/95 via-transparent to-transparent" />

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="glass-strong absolute bottom-5 left-5 right-5 rounded-2xl p-5"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-bold text-white">{profile.shortName} Ul Qadir</p>
                                        <p className="text-xs text-slate-soft">Full Stack Developer</p>
                                    </div>
                                    <div className="flex gap-3 text-center">
                                        {profile.stats.slice(0, 2).map((s) => (
                                            <div key={s.label}>
                                                <p className="text-lg font-extrabold text-gold">{s.value}</p>
                                                <p className="text-[10px] uppercase tracking-wider text-slate-soft">
                                                    {s.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <MoonLoader />
        </section>
    );
}