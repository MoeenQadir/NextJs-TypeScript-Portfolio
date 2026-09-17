import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moeenqadir.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes = [
        { url: `${siteUrl}/`, priority: 1, changeFrequency: "monthly" as const },
        { url: `${siteUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
        { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
        { url: `${siteUrl}/skills`, priority: 0.8, changeFrequency: "monthly" as const },
        { url: `${siteUrl}/projects`, priority: 0.9, changeFrequency: "weekly" as const },
        { url: `${siteUrl}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    ];

    const projectRoutes = projects.map((p) => ({
        url: `${siteUrl}/projects/${p.slug}`,
        priority: 0.7,
        changeFrequency: "monthly" as const,
    }));

    return [...staticRoutes, ...projectRoutes].map((route) => ({
        ...route,
        lastModified: now,
    }));
}