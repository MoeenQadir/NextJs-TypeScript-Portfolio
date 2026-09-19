/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

module.exports = nextConfig;