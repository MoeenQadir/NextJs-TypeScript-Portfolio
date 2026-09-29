"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

const routeLabels: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/services": "Services",
    "/skills": "Skills",
    "/projects": "Projects",
    "/contact": "Contact",
};

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
        { label: "Home", href: "/" },
    ];

    let currentPath = "";
    for (const segment of segments) {
        currentPath += `/${segment}`;
        const label = routeLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbs.push({ label, href: currentPath });
    }

    return breadcrumbs;
}

export default function Breadcrumb() {
    const pathname = usePathname();
    const breadcrumbs = generateBreadcrumbs(pathname);

    if (breadcrumbs.length <= 1 && pathname === "/") {
        return null;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `https://www.moeen.site${item.href}` : undefined,
        })).filter(item => item.item),
    };

    return (
        <>
            <nav
                className="container-page px-0 py-4"
                aria-label="Breadcrumb"
                style={{ display: pathname === "/" ? "none" : "block" }}
            >
                <ol className="flex items-center gap-2 text-sm">
                    {breadcrumbs.map((item, index) => (
                        <li key={item.label} className="flex items-center gap-2">
                            {index > 0 && (
                                <Icon name="chevronRight" size={14} className="text-slate-soft" />
                            )}
                            {item.href && index < breadcrumbs.length - 1 ? (
                                <Link
                                    href={item.href}
                                    className="text-slate-soft transition-colors hover:text-gold"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span 
                                    className="text-white font-medium"
                                    aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}