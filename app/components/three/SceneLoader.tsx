"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Three.js is heavy (~600KB): load it only after the page is interactive and the
// browser is idle, so it never competes with the LCP paint.
const HeroScene = dynamic(() => import("./HeroScene"), {
    ssr: false,
    loading: () => (
        <div
            className="h-full w-full"
            aria-hidden="true"
            style={{
                background:
                    "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.14), transparent 55%), radial-gradient(circle at 55% 45%, rgba(255,185,0,0.08), transparent 50%)",
            }}
        />
    ),
});

function shouldLoadScene(): boolean {
    if (typeof window === "undefined") return false;
    // respect data-saver / low-end devices
    const conn = (navigator as { connection?: { saveData?: boolean; effectiveType?: string } })
        .connection;
    if (conn?.saveData) return false;
    if (conn?.effectiveType && /2g/.test(conn.effectiveType)) return false;
    // skip on small screens — the hero image is the star there anyway
    if (window.innerWidth < 768) return false;
    // skip for reduced-motion users
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return true;
}

export default function SceneLoader() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!shouldLoadScene()) return;

        let cancelled = false;

        const start = () => {
            if (cancelled) return;
            const idle =
                (window as unknown as {
                    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
                }).requestIdleCallback;
            if (idle) {
                idle(() => !cancelled && setReady(true), { timeout: 3000 });
            } else {
                window.setTimeout(() => !cancelled && setReady(true), 1200);
            }
        };

        if (document.readyState === "complete") {
            start();
        } else {
            window.addEventListener("load", start, { once: true });
        }

        return () => {
            cancelled = true;
        };
    }, []);

    if (!ready) {
        return (
            <div
                className="h-full w-full"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.14), transparent 55%), radial-gradient(circle at 55% 45%, rgba(255,185,0,0.08), transparent 50%)",
                }}
            />
        );
    }

    return <HeroScene />;
}
