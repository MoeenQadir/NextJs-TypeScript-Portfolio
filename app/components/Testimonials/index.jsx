"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA


const postData = [
    {
        name: "leoleo900c",
        profession: 'Canada',
        comment: 'My portal looks very professional he has done an amazing job. I definitely recommend this freelancer to everyone! He completed the project in very short time with great perfection',
        imgSrc: '/assets/testimonial/avatar.png',
    },
    {
        name: "robert90ac",
        profession: 'United States',
        comment: 'The freelancer provided me my crypto website front end with a very professional design and the robust technology of Nextjs. It was an amazing experience with this freelancer. I really love to work with him for my future products.',
        imgSrc: '/assets/testimonial/avatar.png',
    },
    {
        name: "jackhenry0089",
        profession: 'United States',
        comment: 'Moon has perfectly done with website landing page using reactjs and tailwind css technology. His skills are very professional and he provides quality work. I will say thanks.',
        imgSrc: '/assets/testimonial/avatar.png',
    },
    {
        name: "Sophia Lee",
        profession: 'United States',
        comment: 'Moon has demonstrated exceptional skill in creating website landing pages using React.js and Tailwind CSS technology. His professionalism and the quality of his work are truly impressive. Many thanks!',
        imgSrc: '/assets/testimonial/avatar.png',
    },
    {
        name: "Alexandre Dubois",
        profession: 'France',
        comment: 'Moon has a remarkable talent for crafting website landing pages. His use of React.js and Tailwind CSS technology is outstanding. I am truly impressed by his professionalism and the quality of his work. Merci beaucoup!',
        imgSrc: '/assets/testimonial/avatar.png',
    },
    {
        name: "Isabella Chen",
        profession: 'Japan',
        comment: 'Moon\'s website landing page creations are excellent. His use of React.js and Tailwind CSS technology is superb. He provides professional skills and high-quality work. Thank you!',
        imgSrc: '/assets/testimonial/avatar.png',
    },

]

// CAROUSEL SETTINGS


const MultipleItems = () => {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
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

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items) => (
                            <div >
                                <div className={`bg-white m-4 p-5 my-20 relative ${1 % 2 ? 'middleDiv' : 'testimonial-shadow'}`} style={{ minHeight: '300px' }}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={60} height={60} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    };
export default MultipleItems