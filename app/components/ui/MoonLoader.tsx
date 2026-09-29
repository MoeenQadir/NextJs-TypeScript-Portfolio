"use client";

import { useEffect, useState } from "react";
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "framer-motion";

const TOTAL = 5.4;
const SWEEP = 3.4;

/**
 * Cinematic moonlight intro.
 *
 * Renders `null` on the server AND on the first client render, so the markup
 * always matches during hydration (no mismatch possible) and the dark veil can
 * never get stuck over the hero if JS is slow, throttled or fails — it only
 * exists after the app is confirmed interactive, and it always unmounts.
 */
export default function MoonLoader() {
    const [armed, setArmed] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let reduced = false;
        try {
            reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        } catch {
            reduced = true;
        }
        if (reduced) return;

        setArmed(true);
        const t = window.setTimeout(() => setDone(true), TOTAL * 1000 + 400);
        return () => window.clearTimeout(t);
    }, []);

    if (!armed || done) return null;

    return <MoonVeil />;
}

function MoonVeil() {
    const progress = useMotionValue(0);
    const veil = useMotionValue(1);
    const moon = useMotionValue(0);
    const glow = useMotionValue(0);

    // Path: from the moon (top-left) across the headline to the portrait (right).
    const x = useTransform(progress, [0, 1], [-6, 84]);
    const y = useTransform(progress, [0, 1], [8, 40]);
    const left = useMotionTemplate`${x}%`;
    const top = useMotionTemplate`${y}%`;
    const mask = useMotionTemplate`radial-gradient(circle 34vmax at ${x}% ${y}%, transparent 0%, rgba(0,0,0,0.28) 30%, rgba(0,0,0,0.75) 52%, #000 68%)`;

    useEffect(() => {
        const controls = [
            animate(progress, 1, {
                duration: SWEEP,
                delay: 0.8,
                ease: [0.5, 0, 0.15, 1],
            }),
            animate(veil, [1, 1, 0], {
                duration: TOTAL,
                times: [0, 0.6, 0.99],
                ease: [0.4, 0, 0.2, 1],
            }),
            animate(moon, [0, 1, 1, 0], {
                duration: TOTAL,
                times: [0, 0.16, 0.68, 0.99],
                ease: "easeInOut",
            }),
            animate(glow, [0, 0.95, 0.95, 0], {
                duration: TOTAL,
                times: [0, 0.22, 0.6, 0.98],
                ease: "easeInOut",
            }),
        ];
        return () => {
            controls.forEach((c) => c.stop());
        };
    }, [progress, veil, moon, glow]);

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
        >
            {/* Dark veil with a moving hole of moonlight */}
            <motion.div
                className="absolute inset-0"
                style={{
                    opacity: veil,
                    backgroundColor: "rgba(4, 6, 14, 0.92)",
                    WebkitMaskImage: mask,
                    maskImage: mask,
                }}
            />

            {/* Travelling moonlight */}
            <motion.div
                className="absolute h-[46vmax] w-[46vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    left,
                    top,
                    opacity: glow,
                    mixBlendMode: "screen",
                    background:
                        "radial-gradient(circle, rgba(255,244,214,0.5) 0%, rgba(255,222,150,0.22) 32%, rgba(255,205,120,0.06) 55%, rgba(255,205,120,0) 72%)",
                }}
            />

            {/* Moon in the top-left corner */}
            <motion.div
                className="absolute left-[5%] top-[13%]"
                style={{ opacity: moon }}
            >
                <motion.div
                    className="relative h-16 w-16 sm:h-20 sm:w-20"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span
                        className="absolute -inset-12 rounded-full blur-2xl"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(255,240,200,0.55), rgba(255,225,160,0.15) 55%, transparent 72%)",
                        }}
                    />
                    <span
                        className="absolute inset-0 rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle at 35% 30%, #fffdf6 0%, #f4e4ba 42%, #dcc78e 68%, #bda66d 100%)",
                            boxShadow:
                                "0 0 60px 18px rgba(255,232,175,0.45), 0 0 130px 55px rgba(255,224,160,0.16)",
                        }}
                    />
                    <span className="absolute left-[26%] top-[30%] h-[18%] w-[18%] rounded-full bg-black/10" />
                    <span className="absolute left-[55%] top-[18%] h-[12%] w-[12%] rounded-full bg-black/10" />
                    <span className="absolute left-[48%] top-[58%] h-[22%] w-[22%] rounded-full bg-black/[0.08]" />
                    <span className="absolute left-[16%] top-[62%] h-[10%] w-[10%] rounded-full bg-black/[0.06]" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
