import React from "react";
import Link from "next/link";
import Head from "next/head";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    title: string;
    description: string;
    keywords: string;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#/', current: true, title: 'Home | Ⲙⲟⲉⲉⲛ - Software Engineer | Full Stack Developer', description: 'Welcome to the home page of Ⲙⲟⲉⲉⲛ, a software engineer and full stack developer. Explore our services and projects.', keywords: 'software engineer, full stack developer, home' },
    { name: 'Technologies', href: '#mentor', current: false, title: 'Technologies | Ⲙⲟⲉⲉⲛ - Software Engineer | Full Stack Developer', description: 'Discover the latest technologies used by Ⲙⲟⲉⲉⲛ, including React, Next.js, Tailwind CSS, and more.', keywords: 'technologies, software engineer, full stack developer' },
    { name: 'Projects', href: '#courses', current: false, title: 'Projects | Ⲙⲟⲉⲉⲛ - Software Engineer | Full Stack Developer', description: 'Explore the diverse range of projects undertaken by Ⲙⲟⲉⲉⲛ, showcasing expertise in web development, MERN stack, and more.', keywords: 'projects, software engineer, full stack developer' },
    { name: 'Testimonial', href: '#testimonial', current: false, title: 'Testimonial | Ⲙⲟⲉⲉⲛ - Software Engineer | Full Stack Developer', description: 'Read testimonials from satisfied clients of Ⲙⲟⲉⲉⲛ, highlighting quality services, expertise, and professionalism.', keywords: 'testimonial, software engineer, full stack developer' },
    { name: 'Contact', href: '#contact', current: false, title: 'Contact | Ⲙⲟⲉⲉⲛ - Software Engineer | Full Stack Developer', description: 'Get in touch with Ⲙⲟⲉⲉⲛ, a software engineer and full stack developer, to discuss your project requirements or inquiries.', keywords: 'contact, software engineer, full stack developer' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const handleClick = (title: string, description: string, keywords: string) => {
        document.title = title;
        // @ts-ignore
        document.querySelector('meta[name="description"]').setAttribute('content', description);
        // @ts-ignore
        document.querySelector('meta[name="keywords"]').setAttribute('content', keywords);
    };

    return (
        <>
            <Head>
                <title>{navigation.find(item => item.current)?.title}</title>
                <meta name="description" content={navigation.find(item => item.current)?.description} />
                <meta name="keywords" content={navigation.find(item => item.current)?.keywords} />
            </Head>
            <div className="rounded-md max-w-sm w-full mx-auto">
                <div className="flex-1 space-y-4 py-1">
                    <div className="sm:block">
                        <div className="space-y-1 px-5 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleClick(item.title, item.description, item.keywords)}
                                    className={classNames(
                                        item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                        'py-1 text-lg font-normal opacity-75 block'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Data;
