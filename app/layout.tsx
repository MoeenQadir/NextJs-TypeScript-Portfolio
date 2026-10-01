import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import { ScrollToTop } from "./components/ui/ScrollProgress";
import { profile } from "./data/profile";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-poppins",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.moeen.site";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${profile.name} — Full Stack Software Engineer`,
        template: `%s | ${profile.name}`,
    },
    description:
        "Full Stack Software Engineer (Moeen Ul Qadir) with 5+ years of experience in Next.js, React, Node.js, DevOps, cloud infrastructure & AI engineering. Build scalable web apps, APIs and AI-powered products.",
    keywords: [
        "Moeen Ul Qadir",
        "full stack software engineer",
        "full stack developer",
        "Next.js developer",
        "React developer",
        "DevOps engineer",
        "software architect",
        "AI engineer",
        "Node.js",
        "TypeScript",
        "web developer Pakistan",
        "hire React developer",
    ],
    authors: [{ name: profile.name, url: profile.website }],
    creator: profile.name,
    publisher: profile.name,
    applicationName: "Moeen Ul Qadir Portfolio",
    alternates: { canonical: siteUrl },
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: "Moeen Ul Qadir Portfolio",
        title: `${profile.name} — Full Stack Software Engineer`,
        description:
            "Full Stack Software Engineer with 5+ years of experience building scalable web apps, cloud infrastructure and AI-powered products.",
        locale: "en_US",
        images: [
            {
                url: `${siteUrl}/assets/self/MOON.jpg`,
                width: 500,
                height: 800,
                alt: `${profile.name} — Full Stack Software Engineer`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} — Full Stack Software Engineer`,
        description:
            "Full Stack Software Engineer with 5+ years of experience building scalable web apps, cloud infrastructure and AI-powered products.",
        images: [`${siteUrl}/assets/self/MOON.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Muhammad Moeen",
    familyName: "Ul Qadir",
    jobTitle: "Full Stack Software Engineer",
    url: siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Multan",
        addressRegion: "Punjab",
        addressCountry: "PK",
    },
    sameAs: [
        profile.linkedin,
        profile.github,
        profile.facebook,
        profile.fiverr,
    ],
    knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React.js",
        "Node.js",
        "DevOps",
        "Cloud Infrastructure",
        "AI Engineering",
        "Software Architecture",
    ],
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Education Lahore",
    },
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moeen Ul Qadir Portfolio",
    url: siteUrl,
    author: {
        "@type": "Person",
        name: profile.name,
        url: siteUrl,
    },
    publisher: {
        "@type": "Person",
        name: profile.name,
    },
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moeen Ul Qadir",
    url: siteUrl,
    logo: `${siteUrl}/assets/self/MOON.jpg`,
    sameAs: [
        profile.linkedin,
        profile.github,
        profile.facebook,
        profile.fiverr,
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: profile.phone,
        contactType: "customer service",
        email: profile.email,
        availableLanguage: ["English", "Urdu"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${poppins.variable} scroll-smooth`}>
            <body id="top" className="noise bg-ink antialiased">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-ink"
                >
                    Skip to content
                </a>
                <CustomCursor />
                <Navbar />
                <ScrollProgress />
                <main id="main">{children}</main>
                <Footer />
                <ScrollToTop />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </body>
        </html>
    );
}