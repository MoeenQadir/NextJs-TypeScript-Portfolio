export interface NavLink {
    name: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export const isActive = (pathname: string, href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
};