"use client"
import React, {useRef, useState} from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {ToastContainer, toast} from 'react-toastify';
import {FaUser, FaEnvelope, FaRegCommentDots} from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { LuPhoneCall } from "react-icons/lu";
import {MdOutlineAttachEmail} from "react-icons/md";
import {FaMessage} from "react-icons/fa6";

const Contact = () => {
    const [state, handleSubmit] = useForm("myyrljne");
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true when submitting form
        if (formRef.current.name.value === '' || formRef.current.email.value === '' || formRef.current._subject.value === '' || formRef.current.message.value === '') {
            toast.warning('Please enter full details.'); // Display warning toast if any input is empty
            setIsLoading(false); // Set loading to false after showing warning
            return;
        }
        await handleSubmit(event);
        if (state.succeeded) {
            toast.success('Your message has been successfully sent! Thank you for reaching out. You can expect a reply in your email inbox shortly.', {
                autoClose: 10000,
            });
            formRef.current.reset();
        }
        setIsLoading(false); // Set loading to false after form submission
    };

    return (
        <>
            <ToastContainer/>
            <div id="contact" className={"flex ms-0 lg:ms-12 gap-5 flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center"}>
                <div className="flex justify-center items-center space-y-5 px-2 lg:px-0 flex-wrap w-full md:w-full lg:w-1/2">
                    <div className="h-full flex justify-center flex-col space-y-5 px-6 py-5 lg:h-[250px] w-full lg:w-7/12 bg-[#4f46e5] rounded-xl">
                        <div className={"flex space-x-4"}>
                            <span className={"bg-white p-2 rounded-lg"}><LuPhoneCall
                                className="text-Blueviolet text-lg"/></span>
                            <span className={"text-white mt-1 text-lg"}>Contact Me Directly At</span>
                        </div>
                        <span
                            className={"text-white tracking-[0.2rem] font-stretch-extra-expanded ms-5 font-semibold text-2xl"}>+92-344-1586424</span>
                        <div>
                            <button
                                className="text-white mt-10 text-md w-full rounded-full font-medium py-2 px-0 lg:px-5 transition bg-[#6366f1] duration-150 ease-in-out  hover:text-white hover:bg-[#184a79]"
                                onClick={() => window.location.href = "tel:+923441586424"}
                            >Contact
                                Us
                            </button>
                        </div>
                    </div>
                    <div className="h-full flex justify-center flex-col space-y-5 px-6 py-5 lg:h-[250px] w-full lg:w-7/12 bg-[#f3f4f6] rounded-xl">
                        <div className={"flex space-x-4"}>
                            <span className={"bg-gunmetalgray p-2 rounded-lg"}><MdOutlineAttachEmail
                                className="text-white text-lg"/></span>
                            <span className={"text-black mt-1 text-lg"}>Chat With Me</span>
                        </div>
                        <span
                            className={"text-black font-stretch-extra-expanded ms-5 font-semibold text-lg md:text-xl"}>myselfxdeveloper@gmail.com</span>
                        <div>
                            <button
                                onClick={() => window.location.href = "mailto:myselfxdeveloper@gmail.com"}
                                className="text-black mt-10 text-md w-full rounded-full font-medium py-2 px-0 lg:px-5 transition bg-[#d1d5db] duration-150 ease-in-out  hover:text-white hover:bg-[#184a79]">Contact
                                Us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-3 px-2 sm:px-2 md:px-12 lg:px-5 flex flex-wrap w-full sm:w-full md:w-full lg:w-7/12">
                    <div className=" w-full text-white px-4 py-10 space-y-5 rounded-md sm:rounded-3xl"
                         style={{
                             boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                         }}

                    >
                        <div className="text-center pb-6">
                            <h1 className="text-3xl text-black">Contact Me!</h1>
                            <p className="text-lightgray mt-3">
                                Fill up the form below to send us a message.
                            </p>
                        </div>
                        <form className={"flex flex-col space-y-5"} ref={formRef} onSubmit={handleFormSubmit}>
                            <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                                <div className="relative">
                                    <FaUser
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lightgray text-lg"/>
                                    <input
                                        className="shadow appearance-none rounded-full p-2 w-full py-3 pl-12 pr-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                        }}
                                    />
                                </div>
                                <div className="relative mt-3 md:mt-0">
                                    <FaEnvelope
                                        className="absolute left-4 text-lightgray top-[1.4rem] transform -translate-y-1/2 text-gray-500 text-lg"/>
                                    <input
                                        className="shadow appearance-none rounded-full p-2 w-full py-3 pl-12 pr-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="relative">
                                <FaMessage
                                    className="absolute  left-4 bottom-1 lg:top-1/2 transform -translate-y-1/2 text-lightgray text-lg"/>
                                <input
                                    className="shadow lg:mt-0 appearance-none rounded-full p-2 w-full py-3 pl-12 pr-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Subject"
                                    name="_subject"
                                    style={{
                                        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                    }}
                                    />
                                </div>
                            <textarea
                                className="shadow mb-4 appearance-none rounded-lg p-2 border-b-slategray h-64 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Type your message here..."
                                name="message"
                                style={{
                                    height: 121,
                                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                                }}
                                defaultValue={""}
                            />
                            <div className={"grid grid-cols-2 place-items-center w-full me-6 flex-col gap-5 md:gap-5"}>
                                <input
                                    className="text-black text-lg w-full lg:w-9/12 mt-6 rounded-full font-medium py-2 px-0 lg:px-5 transition duration-150 ease-in-out bg-[#ffb900]  hover:text-white hover:bg-[#184a79]"
                                    type="submit"
                                    defaultValue={!isLoading ? "Send ➤" : "Loading..."}
                                    disabled={state.submitting}
                                />
                                <input
                                    className="text-black  text-lg w-full lg:w-9/12 mt-6 rounded-full font-medium py-2 px-0 lg:px-5 transition duration-150 ease-in-out bg-[#acd1f4] hover:text-white hover:bg-[#184a79]"
                                    type="reset"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Contact;