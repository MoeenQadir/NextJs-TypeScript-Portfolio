"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [pressed, setPressed] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { damping: 22, stiffness: 320, mass: 0.5 });
    const ringY = useSpring(y, { damping: 22, stiffness: 320, mass: 0.5 });

    useEffect(() => {
        const fine = window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || reduced) return;
        setEnabled(true);
        document.documentElement.classList.add("has-cursor");

        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            const target = e.target as HTMLElement | null;
            const interactive = target?.closest(
                "a, button, [role='button'], input, textarea, select, [data-cursor]"
            );
            setHovering(Boolean(interactive));
        };

        const down = () => setPressed(true);
        const up = () => setPressed(false);

        window.addEventListener("mousemove", move, { passive: true });
        window.addEventListener("mousedown", down);
        window.addEventListener("mouseup", up);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", down);
            window.removeEventListener("mouseup", up);
            document.documentElement.classList.remove("has-cursor");
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <>
            {/* Trailing ring */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[9997] hidden rounded-full border border-gold/70 md:block"
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
                animate={{
                    width: hovering ? 56 : 38,
                    height: hovering ? 56 : 38,
                    opacity: pressed ? 0.5 : 1,
                    backgroundColor: hovering ? "rgba(255,185,0,0.12)" : "rgba(255,185,0,0)",
                }}
                transition={{ duration: 0.22 }}
            />

            {/* Center dot */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full bg-gold md:block"
                style={{
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                    boxShadow: "0 0 12px rgba(255,185,0,0.85)",
                }}
                animate={{ width: hovering ? 10 : 7, height: hovering ? 10 : 7 }}
                transition={{ duration: 0.18 }}
            />
        </>
    );
}