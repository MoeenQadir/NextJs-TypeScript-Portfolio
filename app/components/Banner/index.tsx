import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20}/>
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>3+ years of
                                industry experience</h3>
                        </div>
                        <h1 className='text-[#184a79] text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>
                            Hello,
                            I Am Moeen
                            Software Developer</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Build
                            Experienced graduate software engineer with 3+ years of industry experience, specializing in
                            full stack Software Development.</h3>
                        <div className={"flex justify-start me-16 sm:justify-center md:justify-center lg:justify-start"}>
                            <div className={"flex justify-center flex-col gap-5 mt-4 sm:flex-col md:flex-row items-center lg:flex-row"}>
                                <button
                                    className="text-blue text-lg font-medium ml-9 py-5 px-12 transition duration-150 ease-in-out leafbutton bg-[#b3d7fb] hover:text-white hover:bg-[#184a79]">
                                    Download CV
                                </button>
                                <button
                                    className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#ffb900] hover:text-white hover:bg-[#184a79]">
                                   Hire Me
                                </button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2 justify-center items-center'>
                                <Image src="/assets/banner/linkind.svg" alt="check-image" width={30} height={30}
                                       className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Linkedin</p>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <Image src="/assets/banner/github.svg" alt="check-image" width={30} height={30}
                                       className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Github</p>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <Image src="/assets/banner/email.svg" alt="check-image" width={30} height={30}
                                       className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Email</p>
                            </div>
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
