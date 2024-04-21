import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import Registerdialog from './Registerdialog';
import Head from 'next/head';

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
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (item: NavigationItem) => {
        setCurrentLink(item.href);
        // Update meta tags
        document.title = item.title;
        // @ts-ignore
        document.querySelector('meta[name="description"]').setAttribute('content', item.description);
        // @ts-ignore
        document.querySelector('meta[name="keywords"]').setAttribute('content', item.keywords);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <Head>
                    <title>Default Title | Your Website</title>
                    <meta name="description" content="Default description for your website" />
                    <meta name="keywords" content="default, keywords, for, your, website" />
                </Head>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <Link href="/">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className={"text-5xl lg:hidden block underline antialiased hover:subpixel-antialiased decoration-[#ffb900] text-[#184a79] text-center my-4"}>Ⲙⲟⲉⲉⲛ</h1>
                                    <h1 className={"text-5xl lg:block hidden underline antialiased hover:subpixel-antialiased decoration-[#ffb900] text-[#184a79] text-center my-4"}>Ⲙⲟⲉⲉⲛ</h1>
                                </div>
                            </Link>

                            {/* LINKS */}
                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}
                        {/*<Signdialog />*/}
                        {/* REGISTER DIALOG */}
                        <Registerdialog />
                        {/* DRAWER FOR MOBILE VIEW */}
                        {/* DRAWER ICON */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
