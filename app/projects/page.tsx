import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import CTASection from "../components/ui/CTASection";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description:
        "Explore projects and case studies by Moeen Ul Qadir — AI-powered SaaS products, legal tech platforms, multi-language landing pages, admin dashboards and 3D web experiences.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects & Case Studies — Moeen Ul Qadir",
        description:
            "A portfolio of shipped products: SaaS dashboards, legal tech, e-commerce admin systems, 3D landing pages and AI-powered tools.",
    },
};

export default function ProjectsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Portfolio"
                title="Selected work &"
                highlight="case studies."
                description="Every project is a story of decisions, engineering and measurable results. Filter by category or dive into the case studies."
            />

            <section className="container-page section-space pt-0">
                <ProjectsGrid />
            </section>

            <CTASection />
        </>
    );
}