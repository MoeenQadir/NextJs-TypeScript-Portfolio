"use client";

import dynamic from "next/dynamic";

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

export default function SceneLoader() {
    return <HeroScene />;
}