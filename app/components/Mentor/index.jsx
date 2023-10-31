"use client"
import Slider from "react-slick";
import React, {Component} from "react";
import Image from "next/image";

// CAROUSEL DATA

const postData = [
    {
        profession: 'Crafting Seamless Digital Experiences with 3 Years of Full Stack Development',
        name: 'Full Stack Development',
        imgSrc: '/assets/technologies/fullstack.png',
        years: '3',
    },
    {
        profession: 'Designing User-Centric Interfaces with 3 Years of Expertise in Figma',
        name: 'UI & UX Designing',
        imgSrc: '/assets/technologies/uiux.png',
        years: '3',
    },
    {
        profession: 'Building Blazing-Fast Web Apps with 3 Years of Next.js Proficiency',
        name: 'Next.js',
        imgSrc: '/assets/technologies/next.png',
        years: '3',
    },
    {
        profession: 'Creating Engaging User Interfaces with 3 Years of React.js Mastery',
        name: 'React.js',
        imgSrc: '/assets/technologies/react.png',
        years: '3',
    },
    {
        profession: 'Powering Scalable Backend Systems with 2 Years of Node.js Development',
        name: 'Node Backend Development',
        imgSrc: '/assets/technologies/node.png',
        years: '2',
    },
    {
        profession: 'Exploring the Future with 1 Year of AI & Machine Learning Experience',
        name: 'AI & Machine Learning',
        imgSrc: '/assets/technologies/machine.png',
        years: '1.5',
    },
];

const ManageData = [
    {
        profession: 'Collaborating Efficiently with 3 Years of GitHub Expertise',
        name: 'GitHub',
        imgSrc: '/assets/technologies/github.png',
        years: '3',
    },
    {
        profession: 'Managing Projects Seamlessly with 3 Years of Jira Proficiency',
        name: 'Jira',
        imgSrc: '/assets/technologies/gira.png',
        years: '3',
    },
    {
        profession: 'Visualizing Ideas Clearly with 3 Years of Miro Experience',
        name: 'Miro',
        imgSrc: '/assets/technologies/miro.png',
        years: '3',
    },
    {
        profession: 'Staying Organized with 3 Years of Notion Usage',
        name: 'Notion',
        imgSrc: '/assets/technologies/notion.png',
        years: '3',
    },
    {
        profession: 'Designing for Tomorrow with 2 Years of System & Architecture Expertise',
        name: 'System & Architecture Designs',
        imgSrc: '/assets/technologies/architure.png',
        years: '2',
    },
    {
        profession: 'Embracing Cloud Technology with 1 Year of AWS Deployment Experience',
        name: 'AWS Cloud Deployment',
        imgSrc: '/assets/technologies/aws.png',
        years: '1.5',
    },
];


const SampleNextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            alignItems: 'center',
            background: '#D5EFFA',
            padding: '28px',
            borderRadius: '30px',
            border: '1px solid #1A21BC',
        }}
        onClick={onClick}
    />
);

const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#D5EFFA',
            padding: '28px',
            borderRadius: '30px',
            border: '1px solid #1A21BC',
        }}
        onClick={onClick}
    />
);


const MultipleItems = () => {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined}/>,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined}/>,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        const oppositesettings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined}/>,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined}/>,
            autoplaySpeed: -4000,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Top
                        Technologies
                        <br/> working on.</h2>

                    <Slider {...settings}>
                        {postData.map((items) => (
                            <div>
                                <div className='m-3 py-4 md:my-2 text-center'>
                                    <div className="relative">
                                        <img src={items.imgSrc} alt="user-image"
                                             className="inline-block m-auto my-14 h-44 w-44 rounded-full"/>
                                        <div
                                            className="absolute right-[84px] bottom-[102px] bg-[#1fb141] rounded-full p-4">
                                            <div
                                                className={"h-8 flex justify-center items-center text-white w-8 rounded-full"}>
                                                <h1>{items.years} years</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Slider {...oppositesettings}>
                        {ManageData.map((items) => (
                            <div>
                                <div className='m-3 py-4 md:my-2 text-center'>
                                    <div className="relative">
                                        <img src={items.imgSrc} alt="user-image"
                                             className="inline-block m-auto my-14 h-44 w-44 rounded-full"/>
                                        <div
                                            className="absolute right-[84px] bottom-[102px] bg-[#1fb141] rounded-full p-4">
                                            <div
                                                className={"h-8 flex justify-center items-center text-white w-8 rounded-full"}>
                                                <h1>{items.years} years</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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