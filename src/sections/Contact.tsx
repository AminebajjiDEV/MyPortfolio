'use client'

import phoneIcon from "@/assets/icons/phone-svgrepo-com.svg";
import whatsAppIcon from "@/assets/icons/whatsapp-svgrepo-com.svg";
import emailIcon from "@/assets/icons/email-svgrepo-com.svg";
import ContactBG from "@/assets/images/ContactBG.png";
import { InfoIcon } from "@/components/InfoIcon";
import { useState } from "react";
import { toast, Toaster } from "sonner"
import emailjs from '@emailjs/browser';
import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";


const infos = [
    {
        logo: phoneIcon,
        text: "+212-751-781-644",
    },
    {
        logo: whatsAppIcon,
        text: "+212-622-256-270",
    },
    {
        logo: emailIcon,
        text: "amine.bajji.dev@gmail.com",
    },
]


export const Contact = () => {

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // EmailJS personal coordinates
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

        // template params
        const templateParams = {
            to_name: "Amine",
            from_fName: fName,
            from_lName: lName,
            from_mail: mail,
            from_pNumber: phoneNumber,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                toast.success("Message sent successfully!");
                setFname('');
                setLname('');
                setPhoneNumber('');
                setMail('');
                setMessage('');
            },
                (error) => {
                    toast.error("Failed to send message. Please try again later.");
                },
            );

    }



    return (
        <div id="contact" className="sm:flex-col lg:w-[1440px] md:w-[810px] sm:w-[375px] overflow-x-clip">
            <div className="flex lg:flex-row md:flex-col sm:flex-col h-screen w-screen">
                <div className="relative w-full h-full items-center lg:pb-0 md:pb-20 sm:pb-20">
                    <div className="absolute inset-0 -z-10 opacity-35 bg-no-repeat bg-cover lg:[mask-image:linear-gradient(to_left,transparent,black_1%,black_90%,transparent)] md:[mask-image:linear-gradient(to_bottom,transparent,black_1%,black_98%,transparent)] sm:[mask-image:linear-gradient(to_bottom,transparent,black_1%,black_98%,transparent)]"
                        style={{ backgroundImage: `url(${ContactBG.src})`, height: "100%" }}>
                    </div>
                    <div className="flex flex-col p-8 lg:pt-40 pt-20 ml-10 md:items-center">
                        <h2 className="font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-3xl md:text-5xl md:text-center lg:text-left mt-10">Get in Touch</h2>
                        <p className="text-white/60 max-w-md md:text-center md:text-lg lg:text-xl lg:text-left mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur repellat recusandae animi.</p>
                        <div className="flex flex-col mt-6">
                            {infos.map((info, index) => (
                                <div className="flex flex-inline items-center p-4" key={index} >
                                    <InfoIcon component={info.logo} />
                                    <span className="text-sm lg:text-base w-70 text-white/60 mx-2">{info.text}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/">
                            <button className="font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mt-4">
                                <span className="font-semibold">Home</span>
                                <ArrowUpRightIcon className="size-5" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative w-full h-full lg:border-l-2 lg:border-emerald-300/20 lg:border-t-0 md:border-t-2 md:border-emerald-300/20">
                    <div className="flex flex-col h-[100%] w-[100%] p-4 lg:max-w-[42rem] md:max-w-full sm:max-w-sm">
                        <form className="flex flex-col p-8 lg:pt-40 pt-20 ml-10 sm:m-0 sm:p-2 md:items-center sm:items-center lg:w-full gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-row lg:w-[450px] md:w-[450px] sm:w-full sm:flex-col gap-8">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                    <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Amine"
                                        type="text"
                                        name="fName"
                                        value={fName} onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                    <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bajji"
                                        type="text"
                                        name="lName"
                                        value={lName} onChange={(e) => setLname(e.target.value)} required />
                                </div>
                            </div>
                            <div className="flex flex-col flex flex-row lg:w-[450px] md:w-[450px] sm:w-full sm:flex-col gap-8">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Phone number</label>
                                    <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block lg:w-[450px] md:w-[450px] sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+212-751-781-644"
                                        type="tel"
                                        name="phoneNumber"
                                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Email</label>
                                    <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block lg:w-[450px] md:w-[450px] sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="amine.bajji.dev@gmail.com"
                                        type="email"
                                        name="mail"
                                        value={mail} onChange={(e) => setMail(e.target.value)} required />
                                </div>
                                <div className="mt-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                                    <textarea className="block p-2.5 lg:w-[450px] md:w-[450px] h-[100px] sm:w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave me a message here..."
                                        name="message"
                                        value={message} onChange={(e) => setMessage(e.target.value)} required />
                                </div>
                            </div>
                            <Toaster />
                            <button type="submit" className="text-white bg-sky-400 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mt-4">
                                Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}