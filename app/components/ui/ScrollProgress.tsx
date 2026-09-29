"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
            style={{
                background: "linear-gradient(90deg, #ffb900, #f59e0b, #ff5f1f)",
                transformOrigin: "left center",
                scaleX: progress,
            }}
        />
    );
}

export function ScrollToTop() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-xl shadow-gold/25"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,185,0,0.5)" }}
            whileTap={{ scale: 0.9 }}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </motion.button>
    );
}