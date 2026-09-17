import { Reveal } from "./Reveal";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
    align?: "center" | "left";
};

export default function SectionHeading({
    eyebrow,
    title,
    highlight,
    description,
    align = "center",
}: SectionHeadingProps) {
    const alignClass =
        align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex flex-col ${alignClass} gap-4 mb-12 lg:mb-16`}>
            <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                    {eyebrow}
                </span>
            </Reveal>
            <Reveal delay={0.08}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-white">
                    {title}{" "}
                    {highlight && <span className="text-gradient-gold">{highlight}</span>}
                </h2>
            </Reveal>
            {description && (
                <Reveal delay={0.16}>
                    <p
                        className={`max-w-2xl text-base sm:text-lg text-slate-soft ${
                            align === "center" ? "mx-auto" : ""
                        }`}
                    >
                        {description}
                    </p>
                </Reveal>
            )}
        </div>
    );
}