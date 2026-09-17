"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../ui/Icon";
import { NAV_LINKS, isActive } from "./navigation";
import { profile } from "../../data/profile";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "glass-strong shadow-card"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <nav
                    className="container-page flex h-[4.5rem] items-center justify-between"
                    aria-label="Main navigation"
                >
                    <Link href="/" className="group flex items-center gap-2" aria-label="Go to homepage">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold font-bold text-ink">
                            M
                        </span>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Moeen
                            <span className="text-gold">.</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => {
                            const active = isActive(pathname, link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                        active
                                            ? "text-gold"
                                            : "text-mist/70 hover:text-white"
                                    }`}
                                    aria-current={active ? "page" : undefined}
                                >
                                    {link.name}
                                    {active && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-gold"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
                        >
                            Hire Me
                            <Icon
                                name="arrowRight"
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <Icon name={open ? "x" : "menu"} size={22} />
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-ink-900/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col gap-2 px-6 pt-24 pb-10">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`block rounded-xl px-4 py-4 text-2xl font-semibold ${
                                            isActive(pathname, link.href)
                                                ? "bg-gold/10 text-gold"
                                                : "text-white/85 hover:bg-white/5"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-6"
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-lg font-semibold text-ink"
                                >
                                    Hire Me
                                    <Icon name="arrowRight" size={18} />
                                </Link>
                                <p className="mt-6 text-center text-sm text-slate-soft">
                                    {profile.email}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}