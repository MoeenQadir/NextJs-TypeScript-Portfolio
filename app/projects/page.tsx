import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import CTASection from "../components/ui/CTASection";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

const siteUrl = "https://www.moeen.site";

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description:
        "Explore projects and case studies by Moeen Ul Qadir — AI-powered SaaS products, legal tech platforms, multi-language landing pages, admin dashboards and 3D web experiences.",
    alternates: { canonical: "/projects" },
    openGraph: {
        type: "website",
        url: `${siteUrl}/projects`,
        siteName: "Moeen Ul Qadir Portfolio",
        title: "Projects & Case Studies — Moeen Ul Qadir",
        description:
            "A portfolio of shipped products: SaaS dashboards, legal tech, e-commerce admin systems, 3D landing pages and AI-powered tools.",
        locale: "en_US",
        images: [
            {
                url: `${siteUrl}/assets/self/MOON.jpg`,
                width: 1200,
                height: 630,
                alt: "Moeen Ul Qadir — Projects & Case Studies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects & Case Studies — Moeen Ul Qadir",
        description:
            "A portfolio of shipped products: SaaS dashboards, legal tech, e-commerce admin systems, 3D landing pages and AI-powered tools.",
        images: [`${siteUrl}/assets/self/MOON.jpg`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Project Portfolio",
    description: "A portfolio of shipped products and case studies by Moeen Ul Qadir.",
    url: `${siteUrl}/projects`,
    itemListElement: projects.filter(p => p.featured).map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            url: `${siteUrl}/projects/${project.slug}`,
            image: `${siteUrl}${project.image}`,
            author: {
                "@type": "Person",
                name: profile.name,
                url: siteUrl,
            },
            dateCreated: project.year,
            keywords: project.stack.join(", "),
        },
    })),
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
            />
        </>
    );
}