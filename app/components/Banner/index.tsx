import Image from 'next/image';
import Link from "next/link";

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20}/>
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>5+ years of
                                industry experience</h3>
                        </div>
                        <h1 className='text-[#184a79] text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>
                            Hello,
                            I Am Moeen <br/>
                            Full Stack <span className={"text-[#ffb900] underline"}>Developer</span></h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Build
                            Experienced graduate software engineer with <span className={"text-kellygreen underline"}>5+</span> years of industry experience, specializing in
                            full stack Software Development.</h3>
                        <div
                            className={"flex justify-start me-16 sm:justify-center md:justify-center lg:justify-start"}>
                            <div
                                className={"flex justify-center flex-col gap-5 mt-4 sm:flex-col md:flex-row items-center lg:flex-row"}>
                                <a
                                    href="/assets/CV/Moon.pdf" // Replace with the path to your PDF file in the public directory
                                    download="Moon.pdf" // Specify the filename for the downloaded file
                                    className="text-blue text-lg font-medium ml-9 py-5 px-12 transition duration-150 ease-in-out leafbutton bg-[#b3d7fb] hover:text-white hover:bg-[#184a79]"
                                >
                                    Download CV
                                </a>

                                <Link target={"_blank"} href={"mailto:myselfxdeveloper@gmail.com"}>                                    <button
                                        className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#ffb900] hover:text-white hover:bg-[#184a79]">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <Link target={"_blank"} href={"https://www.fiverr.com/moon_khan_/reactjs-nextjs-tailwind-expert?context_referrer=search_gigs&source=top-bar&ref_ctx_id=fca8cd374afc44a29e047a81ad0733f3&pckg_id=1&pos=2&context_type=auto&funnel=fca8cd374afc44a29e047a81ad0733f3&seller_online=true&imp_id=cba3d6a2-1da0-4f75-b173-e65ece8fb52e"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/fiverr.svg" alt="check-image" width={30} height={30}
                                           className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Fiverr</p>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://github.com/MoeenQadir"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/github.svg" alt="check-image" width={30} height={30}
                                           className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Github</p>
                                </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.linkedin.com/in/muhammad-moeen-ul-qadir-aba580247/"}>
                            <div className='flex gap-2 justify-center items-center cursor-pointer'>
                                <Image src="/assets/banner/linkind.svg" alt="check-image" width={30} height={30}
                                       className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Linkedin</p>
                            </div>
                            </Link>
                            <Link target={"_blank"} href={"https://www.facebook.com/profile.php?id=100081518093414"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/facebook.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Facebook</p>
                                </div>
                            </Link>

                            <Link target={"_blank"} href={"mailto:myselfxdeveloper@gmail.com"}>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src="/assets/banner/email.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                    <p className='text-sm sm:text-lg font-normal text-black'>Email</p>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/moon.png" alt="nothing" width={500} height={805}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
