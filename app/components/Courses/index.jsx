"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'


const postData = [
    {
        heading: 'Romania SAAS Company',
        heading2: 'APOSTAL',
        name: "NEXT JS Multi Language Landing Page",
        imgSrc: '/assets/courses/multi-lang.png',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
        link: 'https://vlad-company.vercel.app/'
    },

    {
        heading: 'Live Crypto Market Site',
        heading2: 'Crypto',
        name: "Live Crypto APIs Consumes",
        imgSrc: '/assets/courses/crypto.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
        link: 'https://crypto-nextjs.netlify.app/'
    },
    {
        heading: 'Analytics Services',
        heading2: 'Modernized',
        name: "Full Stack Admin dashboard",
        imgSrc: '/assets/courses/dashboard.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
        link: 'https://modernize-nextjs-free.vercel.app/'
    },
    {
        heading: 'Tech Company Website',
        heading2: 'Callsense',
        name: "SAAS Tech Company",
        imgSrc: '/assets/courses/callsense.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
        link: 'https://www.callsense.ai/'
    },
    {
        heading: 'Full stack 3D ',
        heading2: 'React Website',
        name: "3D Company Landing Page",
        imgSrc: '/assets/courses/3d-website.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
        link: 'https://3d-landingpage2024.netlify.app/'
    },
]

// CAROUSEL SETTINGS


const MultipleItems = () => {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        // @ts-ignore
        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-[#184a79] text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Recent Projects</h3>
                        {/*<Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore more&nbsp;&gt;&nbsp;</Link>*/}
                    </div>


                    <Slider {...settings}>
                        {postData.map((items) => (
                            <div>
                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={200} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-[#184a79] rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">Top <br /> Rated</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-[#184a79]'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-[#184a79]'>{items.heading2}</h4>
                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4 justify-center items-center cursor-pointer">
                                                <div className="flex">
                                                    <StarIcon width={20} className="text-gold" />
                                                    <StarIcon width={20} className="text-gold" />
                                                    <StarIcon width={20} className="text-gold" />
                                                    <StarIcon width={20} className="text-gold" />
                                                    <StarIcon width={20} className="text-gold" />
                                                </div>
                                            </div>
                                            <Link target={"_blank"} href={items.link}>
                                            <div>
                                                <h3 className="text-md font-medium cursor-pointer">Live Preview</h3>
                                            </div>
                                            </Link>
                                        </div>

                                        {/*<hr style={{ color: "#C4C4C4" }} />*/}

                                        {/*<div className="flex justify-between pt-6">*/}
                                        {/*    <div className="flex gap-4">*/}
                                        {/*        <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />*/}
                                        {/*        <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="flex gap-4">*/}
                                        {/*        <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />*/}
                                        {/*        <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
export default MultipleItems
