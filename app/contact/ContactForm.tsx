"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../components/ui/Icon";

type Status = "idle" | "sending" | "success" | "error";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm({
    email,
}: {
    email: string;
}) {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<Status>("idle");

    const update = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
        if (formspreeId) {
            try {
                const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(form),
                });
                if (res.ok) {
                    setStatus("success");
                    setForm(initialForm);
                    return;
                }
                setStatus("error");
                return;
            } catch {
                setStatus("error");
                return;
            }
        }

        const subject = encodeURIComponent(form.subject || `New enquiry from ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setStatus("success");
        setForm(initialForm);
    };

    const inputClass =
        "w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-soft outline-none transition-colors focus:border-gold/60";

    return (
        <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-border rounded-3xl border border-white/10 bg-ink-700/60 p-8 lg:p-10"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist">
                        Your Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={update}
                        placeholder="John Doe"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update}
                        placeholder="john@company.com"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-mist">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={update}
                    placeholder="Project enquiry — SaaS dashboard"
                    className={inputClass}
                />
            </div>

            <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-mist">
                    Project Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell me about your project, timeline and budget..."
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Icon
                    name="send"
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
            </button>

            {status === "success" && (
                <p className="mt-5 flex items-center gap-2 text-sm text-emerald-glow">
                    <Icon name="checkCircle" size={18} />
                    Thanks! Your message is on its way — I&apos;ll get back to you within 24 hours.
                </p>
            )}
            {status === "error" && (
                <p className="mt-5 flex items-center gap-2 text-sm text-rose-glow">
                    <Icon name="alert" size={18} />
                    Something went wrong. Please email me directly at {email}.
                </p>
            )}
        </motion.form>
    );
}