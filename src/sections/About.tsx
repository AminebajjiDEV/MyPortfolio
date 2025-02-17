"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import MeditationsBC from "@/assets/images/MAM_BC.webp";

import JavascripIcon from "@/assets/icons/front-end/square-js.svg";
import HTMLIcon from "@/assets/icons/front-end/html5.svg";
import CSSIcon from "@/assets/icons/front-end/css3.svg";
import ReactIcon from "@/assets/icons/front-end/react.svg";
import NextIcon from "@/assets/icons/front-end/next-js.svg";
import BootstrapIcon from "@/assets/icons/front-end/bootstrap-5-1.svg";
import TailwindIcon from "@/assets/icons/front-end/tailwind-css-2.svg";
import WordPressIcon from "@/assets/icons/front-end/wordpress-icon.svg";
import EjsIcon from "@/assets/icons/front-end/ejs.svg";

import NodeIcon from "@/assets/icons/back-end/nodejs-icon.svg";
import ExpressIcon from "@/assets/icons/back-end/express-js.svg";
import CplusIcon from "@/assets/icons/back-end/c.svg";
import JavaIcon from "@/assets/icons/back-end/jee-3.svg";
import PhpIcon from "@/assets/icons/back-end/php-logo.svg";
import PostgresIcon from "@/assets/icons/back-end/postgresql.svg";
import MysqlIcon from "@/assets/icons/back-end/mysql-logo-pure.svg";
import OracleIcon from "@/assets/icons/back-end/oracle-corporation-logo.svg";
import MongoIcon from "@/assets/icons/back-end/mongodb-icon-1.svg";


import GitIcon from "@/assets/icons/tools/git-icon.svg";
import GithubIcon from "@/assets/icons/tools/github.svg";
import VisualIcon from "@/assets/icons/tools/visual-studio-code-1.svg";
import IntelijIcon from "@/assets/icons/tools/intellij-idea-1.svg";
import EclipseIcon from "@/assets/icons/tools/eclipse.svg";
import PostmanIcon from "@/assets/icons/tools/Postman.svg";
import XampIcon from "@/assets/icons/tools/xampp.svg";


import FigIcon from "@/assets/icons/tools/figma-icon.svg";
import PsIcon from "@/assets/icons/tools/adobe-photoshop-2.svg";
import AiIcon from "@/assets/icons/tools/adobe-illustrator-cc-3.svg";
import FirefoxIcon from "@/assets/icons/tools/firefox-4.svg";
import ChromeIcon from "@/assets/icons/tools/chrome.svg";

import VirtualboxIcon from "@/assets/icons/tools/vb.svg";
import VmwareIcon from "@/assets/icons/tools/vmware-7.svg";
import CiscoIcon from "@/assets/icons/tools/cisco-icon.svg";
import WiresharkIcon from "@/assets/icons/tools/wiresharksvg.svg";
import LinuxIcon from "@/assets/icons/tools/linux-logo-ukslisau.svg";
import WindowsIcon from "@/assets/icons/tools/windowsLogo.svg";
import BatchIcon from "@/assets/icons/tools/batch.svg";
import PowershellIcon from "@/assets/icons/tools/powershell.svg";
import BashIcon from "@/assets/icons/tools/bash-1.svg";
import DockerIcon from "@/assets/icons/tools/docker-4.svg";
import KuberIcon from "@/assets/icons/tools/kubernets.svg";

import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


const frontEndItems = [
  {
    title: 'HTML5',
    typeIcon: HTMLIcon,
  },
  {
    title: 'CSS3',
    typeIcon: CSSIcon,
  },
  {
    title: 'Tailwind',
    typeIcon: TailwindIcon,
  },
  {
    title: 'Bootstrap5',
    typeIcon: BootstrapIcon,
  },
  {
    title: 'JavaScript',
    typeIcon: JavascripIcon,
  },
  {
    title: 'EJS',
    typeIcon: EjsIcon,
  },
  {
    title: 'React',
    typeIcon: ReactIcon,
  },
  {
    title: 'Next',
    typeIcon: NextIcon,
  },
  {
    title: 'Wordpress',
    typeIcon: WordPressIcon,
  },

]
const backEndItems = [
  {
    title: 'NodeJS',
    typeIcon: NodeIcon,
  },
  {
    title: 'ExpressJS',
    typeIcon: ExpressIcon,
  },
  {
    title: 'C++',
    typeIcon: CplusIcon,
  },
  {
    title: 'Java JEE',
    typeIcon: JavaIcon,
  },
  {
    title: 'PHP',
    typeIcon: PhpIcon,
  },
  {
    title: 'PostgreSQL',
    typeIcon: PostgresIcon,
  },
  {
    title: 'MySQL',
    typeIcon: MysqlIcon,
  },
  {
    title: 'Oracle DB',
    typeIcon: OracleIcon,
  },
  {
    title: 'MongoDB',
    typeIcon: MongoIcon,
  },

]

const devToolsItems = [
  {
    title: 'Github',
    typeIcon: GithubIcon,
  },
  {
    title: 'Git',
    typeIcon: GitIcon,
  },
  {
    title: 'Visual Studio Code',
    typeIcon: VisualIcon,
  },
  {
    title: 'IntelliJ IDEA',
    typeIcon: IntelijIcon,
  },
  {
    title: 'Eclipse IDE',
    typeIcon: EclipseIcon,
  },
  {
    title: 'Postman',
    typeIcon: PostmanIcon,
  },
  {
    title: 'XAMPP',
    typeIcon: XampIcon,
  },
]

const devOpsItems = [
  {
    title: 'Oracle Virtual Box',
    typeIcon: VirtualboxIcon,
  },
  {
    title: 'VMware',
    typeIcon: VmwareIcon,
  },
  {
    title: 'Cisco',
    typeIcon: CiscoIcon,
  },
  {
    title: 'Wireshark',
    typeIcon: WiresharkIcon,
  },
  {
    title: 'Bash',
    typeIcon: BashIcon,
  },
  {
    title: 'Batch',
    typeIcon: BatchIcon,
  },
  {
    title: 'Powershell',
    typeIcon: PowershellIcon,
  },
  {
    title: 'Windows',
    typeIcon: WindowsIcon,
  },
  {
    title: 'Linux',
    typeIcon: LinuxIcon,
  },
  {
    title: 'kubernetes',
    typeIcon: KuberIcon,
  },
  {
    title: 'Docker',
    typeIcon: DockerIcon,
  },
]

const designToolsItems = [
  {
    title: 'Figma',
    typeIcon: FigIcon,
  },
  {
    title: 'Adobe Photoshop',
    typeIcon: PsIcon,
  },
  {
    title: 'Adobe Illustrator',
    typeIcon: AiIcon,
  },
  {
    title: 'Firefox Dev Tool',
    typeIcon: FirefoxIcon,
  },
  {
    title: 'Chrome Dev Tool',
    typeIcon: ChromeIcon,
  },
]

const hobbies = [
  {
    title: 'Graphic Design',
    emoji: '🎨​',
    left: "5%",
    top: "5%",
  },
  {
    title: 'Photography',
    emoji: '📷​',
    left: "48%",
    top: "5%",
  },
  {
    title: 'Camping',
    emoji: '🏕️  ​',
    left: "33%",
    top: "43%",
  },
  {
    title: 'Hiking',
    emoji: '⛰️​',
    left: "36%",
    top: "28%",
  },
  {
    title: 'Fishing',
    emoji: '🎣​',
    left: "62%",
    top: "35%",
  },
  {
    title: 'Riding',
    emoji: '🚵​',
    left: "23%",
    top: "68%",
  },
  {
    title: 'Gaming',
    emoji: '🎮​',
    left: "10%",
    top: "38%",
  },
  {
    title: 'Music',
    emoji: '🎶​',
    left: "30%",
    top: "5%",
  },
  {
    title: 'Fitness',
    emoji: '🏋️​',
    left: "5%",
    top: "65%",
  },
  {
    title: 'Reading',
    emoji: '📚​',
    left: "41%",
    top: "70%",
  },
  {
    title: 'Chess',
    emoji: '♟️',
    left: "63%",
    top: "65%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-26" id="about-section">

      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am, what I do and what inspires me." />


        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 ">
            <Card className="h-[570px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to craft exceptional digital experiences."
                className="lg:text-center" />
              <ToolboxItems items={frontEndItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:35s]  hover:[animation-play-state:paused]" />
              <ToolboxItems items={backEndItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:35s]  hover:[animation-play-state:paused]" />
              <ToolboxItems items={devToolsItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:35s]  hover:[animation-play-state:paused]" />
              <ToolboxItems items={devOpsItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:35s]  hover:[animation-play-state:paused]" />
              <ToolboxItems items={designToolsItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:35s]  hover:[animation-play-state:paused]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="You can rearrange my interests and hobbies 👇."
                className="" />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads"
                description="One of my favorite books shaping my perspective." />
              <div className="relative h-44 w-32 mx-auto mt-2 md:mt-0 border border-gray-700 rounded-xl overflow-hidden">
                <Image
                  src={MeditationsBC}
                  alt="book cover"
                  placeholder="blur"
                  fill
                  className="object-cover"
                />
              </div>

            </Card>

          </div>
        </div>
      </div>
    </div>)
};
