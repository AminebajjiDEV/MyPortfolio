import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import MajorelLogo from "@/assets/images/majiorel.webp"
import KiomaLogo from "@/assets/images/kiomaLogo.webp";
import IdgiLogo from "@/assets/images/idgiLogo.webp";
import Image from "next/image";


const experiences = [
    {
        title: 'Customer Service Advisor',
        company: 'Majorel',
        type: 'On-Site',
        location: 'Casablanca, Morocco',
        date: 'March 2023 - October 2023',
        tasks: 'Tasks & Skills :',
        descriptions: [
            { title: "Followed up on complaint files until resolutions." },
            { title: "Handled client calls and complaints." },
            { title: "Collaborated with team members for solutions." },
            { title: "Developed strong customer relations skills." },
            { title: "Improved listening and situation analysis." },
        ],
        logo: MajorelLogo,
        blurUrl: "LAS?Gf-;^%%g-;j[jFa|~Uay4;j[",
    },
    {
        title: 'Front-End Developer Intern',
        company: 'Kioma Meuble',
        type: 'On-Site',
        location: 'Kenitra, Morocco',
        date: 'June 2022 - July 2022',
        tasks: 'Tasks & Skills :',
        descriptions: [
            { title: "Created a WordPress landing page." },
            { title: "Designed and integrated company details." },
            { title: "Developed a custom website logo." },
            { title: "Improved UX skills with WordPress." },
            { title: "Enhanced graphic design with Photoshop, Illustrator." },
        ],
        logo: KiomaLogo,
        blurUrl: "LNNBCtj@WAxv-}j[a#j]wUjuxvWT",
    },
    {
        title: 'Graphic Design Intern',
        company: 'IDGI Center',
        type: 'On-Site',
        location: 'Kenitra, Morocco',
        date: 'June 2021 - July 2021',
        tasks: 'Tasks & Skills :',
        descriptions: [
            { title: "Designed posters and tour flyers using Photoshop, Illustrator." },
            { title: "Edited videos and podcasts for the Company's YouTube channel." },
            { title: "Used Sony Vegas for editing." },
        ],
        logo: IdgiLogo,
        blurUrl: "LYRp5*o3~o%Mxaj[a|fQ.7t7IBRQ",
    },
]


export const ProfessionalExperience = () => {
    return (
        <section id="work-experience" className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader eyebrow="Professional Experiences" title="My Journey As A Professional" description="You can find below my recent work experiences" />
                <div className="flex flex-col mt-10 gap-20 md:mt-20">
                    {experiences.map((experience, index) => (
                        <Card key={index} className="px-6 pt-4 pb-1 sm:px-2 md:pt-4 md:px-4 lg:p-10 flex sm:flex-col md:flex-col lg:flex-col items-center">
                            <div className="flex md:flex-row sm:flex-col sm:items-center">
                                <div className="relative sm:m-4 sm:mb-2 lg:m-2">
                                    <Image
                                        src={experience.logo}
                                        blurDataURL={experience.blurUrl}
                                        placeholder="blur"
                                        alt={experience.title}
                                        className="mt-8 md:m-0 sm:m-0 sm:size-40 md:w-[250px] md:h-60 lg:size-[250px] bg-white rounded-3xl" />
                                </div>
                                <div className="flex flex-col px-6 sm:px-2 sm:items-center w-[420px] lg:w-[590px] lg:m-6">
                                    <h3 className="font-serif text-2xl w-full sm:text-[1.3rem] sm:text-center sm:w-[20rem] mt-2 lg:mt-0 md:text-4xl md:text-center md:mt-5 md:w-[23rem] lg:w-[30rem]">
                                        {experience.title}</h3>
                                    <h4 className="font-serif text-2xl sm:text-[1.2rem] sm:text-center sm:w-[20rem] mt-1 md:text-2xl md:mt-2 md:w-[24rem] lg:w-[25rem]">{experience.company}</h4>
                                    <span className="text-sm w-60 mt-4 lg:w-[28rem] font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">({experience.type}) {experience.location}</span>
                                    <span className="text-sm w-60 mt-2 font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{experience.date}</span>
                                </div>

                            </div>
                            <hr className="border-t-4 border-white/10 sm:mt-4 w-48 md:mt-4 md:w-64 lg:w-80 lg:mt-6" />
                            <div className="mt-4 mb-4 lg:mb-0 px-6 w-full">
                                <h4 className="font-semibold text-md sm:text-sm sm:text-center mt-1 md:text-xl md:text-left md:mt-2 md:mx-2">{experience.tasks}</h4>
                                <ul className="flex flex-col sm:justify-center md:text-left lg:text-left gap-4 mt-2 mb-2">
                                    {experience.descriptions.map((description) => (
                                        <li className="flex gap-1 text-sm md:text-base lg:text-xl text-white/50" key={description.title}>
                                            <span className="mx-2">&bull; </span>
                                            <span className="md:w-[27rem] lg:w-[41rem]">{description.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    )
}