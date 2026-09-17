"use client"
import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-black bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0 "
                    : " transition-all delay-500 opacity-0 -translate-x-full ")
            }
            aria-hidden={!isOpen}
        >
            <section
                className={
                    "w-[340px] max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-4 flex items-center justify-between">
                        <h1
                            className="text-5xl underline antialiased hover:subpixel-antialiased decoration-[#ffb900] text-[#184a79] my-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Moeen
                        </h1>
                        <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                            <XMarkIcon className="block h-6 w-6" />
                        </button>
                    </header>
                    <div onClick={() => setIsOpen(false)}>{children}</div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => setIsOpen(false)}
            ></section>
        </main>
    );
}

export default Drawer;