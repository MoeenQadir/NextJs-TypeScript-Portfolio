import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="text-black relative px-4 py-10 bg-[#d5effa] shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl">Contact Me!</h1>
                            <p className="text-gray-300">
                                Fill up the form below to send us a message.
                            </p>
                        </div>
                        <form>
                            <input
                                className="shadow mb-4  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="shadow mb-4  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Subject"
                                name="_subject"
                            />
                            <textarea
                                className="shadow mb-4 leafbutton appearance-none border rounded h-64 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Type your message here..."
                                name="message"
                                style={{ height: 121 }}
                                defaultValue={""}
                            />
                            <div className="flex justify-evenly me-6">
                                <input className="text-black text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#ffb900] hover:text-white hover:bg-[#1a21bc]"
                                    type="submit"
                                    defaultValue="Send ➤"
                                />
                                <input
                                    className="text-black  text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#acd1f4] hover:text-white hover:bg-black"
                                    type="reset"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;