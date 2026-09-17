"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: Variants;
    once?: boolean;
};

export function Reveal({
    children,
    className,
    delay = 0,
    variant = fadeUp,
    once = true,
}: RevealProps) {
    const variants: Variants = {
        hidden: variant.hidden,
        visible:
            typeof variant.visible === "object"
                ? {
                      ...(variant.visible as Record<string, unknown>),
                      transition: {
                          ...((variant.visible as { transition?: object }).transition ?? {}),
                          delay,
                      },
                  }
                : variant.visible,
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}

type StaggerProps = {
    children: ReactNode;
    className?: string;
    stagger?: number;
};

export function Stagger({ children, className, stagger = 0.12 }: StaggerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger } },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div className={className} variants={fadeUp}>
            {children}
        </motion.div>
    );
}