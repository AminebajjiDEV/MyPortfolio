import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import Image from "next/image";
import uitLogo from "@/assets/images/logo_uit.webp";
import udeLogo from "@/assets/images/Udemy_New.webp";
import ifgiaLogo from "@/assets/images/IFGIA_LOGO.webp";


import Link from "next/link";
import CheckCircle from "@/assets/icons/check-circle.svg";


const academics = [
  {
    diploma: "Specialized Bachelor Degree",
    title: "Information Systems and Computer Network Engineering",
    school: "Ibn Tofail University Kenitra, Morocco",
    link: "https://fs.uit.ac.ma/lus_fsk/",
    abrev: "FSK-LUS",
    timeLine: "2023-2024",
    secondTitle: "I have taken courses relative to:",
    descriptions: [
      { title: "OOP in C++ and Java/J2EE, UML Design, and Oracle Databases." },
      { title: "Computer Networks, Network Security, and Systems Administration." },
      { title: "UNIX Operating Systems( Ubuntu, Kali, Fedora, Centos )." },
    ],
    schoolLogo: uitLogo,
    blurUrl: "LAOzGKV@~qyD_3j]t7of%#kWI9a0",

  },
  {
    diploma: "The Complete 2023 Web Development Bootcamp",
    title: "Full-Stack Developer",
    school: "Udemy / The App Brewery London",
    link: "https://www.ude.my/UC-246d6033-7607-4763-b0e9-50e98d33bcbe/",
    abrev: "CERTIFICATE",
    timeLine: "2022-2023",
    secondTitle: "I have taken courses relative to:",
    descriptions: [
      { title: "Front-End (HTML5, CSS3, BOOTSTRAP5, Javascript es6, React.js, Web-Design)." },
      { title: "Back-End (Node.js, npm, Express.js, EJS, Rest API's, SQL & NOSQL, Authetication)." },
      { title: "Bash Command Line, Git, Version Control & Deployment with GitHub Pages." },
    ],
    schoolLogo: udeLogo,
    blurUrl: "LMNwNEV]?bt7-;a#ofoe~qoeITae",

  },
  {
    diploma: "Specialized Technician Diploma",
    title: "IT Development",
    school: "Institute of Applied Computer Science Management, Kenitra",
    link: "https://www.fede.education/ecoles/ifgia/",
    abrev: "IFGIA-FEDE",
    timeLine: "2020-2022",
    secondTitle: "I have taken courses relative to:",
    descriptions: [
      { title: "Web Development, Client-Server Architecture, as well as Relational Databases." },
      { title: "Algorithmic Logic, Installation and Configuration of Computer Systems." },
      { title: "Communication Skills in English and French." }
    ],
    schoolLogo: ifgiaLogo,
    blurUrl: "LXOWHSaytkj]XnfRoKfQ?]bHRPjZ",

  },
];


export const AcademicSection = () => {
  return (

    <section id="academic-section" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Academic Curriculum" title="My Journey As A Student" description="You can find below the Academic courses I enrolled in after highschool" />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {academics.map((academic, index) => (
            <Card key={index} className="px-6 pt-4 pb-1 sm:px-2 md:pt-4 md:px-4 lg:p-10 flex sm:flex-col md:flex-col lg:flex-col items-center">
              <div className="flex md:flex-row sm:flex-col sm:items-center">
                <div className="relative md:w-[250px] md:h-60 lg:size-[250px] sm:m-4 sm:mb-2 lg:m-2">
                  <Image
                    src={academic.schoolLogo}
                    blurDataURL={academic.blurUrl}
                    placeholder="blur"
                    width={250}
                    height={250}
                    alt={academic.title}
                    className="mt-8 md:m-0 sm:m-0 sm:size-40 md:w-[250px] md:h-60 lg:size-[250px] bg-white rounded-3xl"
                  />
                </div>
                <div className="flex flex-col px-6 sm:px-2 sm:items-center w-[420px] lg:w-[550px] lg:m-6">
                  <h3 className="font-serif text-2xl w-full sm:text-[1.3rem] sm:text-center sm:w-[20rem] mt-2 lg:mt-0 md:text-4xl md:text-center md:mt-5 md:w-[24rem] lg:w-[30rem]">{academic.diploma}</h3>
                  <h4 className="font-serif text-2xl sm:text-[1.2rem] sm:text-center sm:w-[20rem] mt-1 md:text-2xl md:mt-2 md:w-[24rem] lg:w-[25rem]">{academic.title}</h4>
                  <span className="text-sm w-60 mt-4 lg:w-[28rem] font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{academic.school}  ( <Link href={academic.link} target="_blank" className="underline">{academic.abrev}</Link> )</span>
                  <span className="text-sm w-60 mt-2 font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{academic.timeLine}</span>
                </div>

              </div>
              <hr className="border-t-4 border-white/10 sm:mt-4 w-48 md:mt-4 md:w-64 lg:w-80 lg:mt-6" />
              <div className="mt-4 mb-4 lg:mb-0 px-6 w-full">
                <h4 className="font-semibold text-md sm:text-sm sm:text-center mt-1 md:text-xl md:text-left md:mt-2 md:mx-2">{academic.secondTitle}</h4>
                <ul className="flex flex-col sm:items-center md:text-left lg:text-left gap-4 mt-2 mb-2">
                  {academic.descriptions.map((description) => (
                    <li className="flex gap-1 text-sm md:text-base sm:text-center lg:text-xl text-white/50" key={description.title}>
                      <CheckCircle className="hidden md:block lg:block size-5 md:size-6" />
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

  );
};