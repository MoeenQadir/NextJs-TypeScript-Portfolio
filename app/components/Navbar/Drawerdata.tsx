"use client"
import Link from 'next/link';
import { NAV_LINKS } from './navigation';

const Drawerdata = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="space-y-1 px-5 pt-2 pb-3">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="py-1 text-lg font-normal opacity-75 block hover:opacity-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Drawerdata;