"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
};

export default function TiltCard({
    children,
    className = "",
    maxTilt = 14,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);

    const springX = useSpring(px, { stiffness: 200, damping: 20 });
    const springY = useSpring(py, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
    const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
    const translateX = useTransform(springX, [0, 1], [-8, 8]);
    const translateY = useTransform(springY, [0, 1], [-8, 8]);

    const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
    };

    const onLeave = () => {
        px.set(0.5);
        py.set(0.5);
    };

    return (
        <div style={{ perspective: 1000 }} className="h-full">
            <motion.div
                ref={ref}
                onPointerMove={onMove}
                onPointerLeave={onLeave}
                style={{ rotateX, rotateY, translateX, translateY, transformStyle: "preserve-3d" }}
                className={`h-full ${className}`}
            >
                {children}
            </motion.div>
        </div>
    );
}