import memojiImage from "@/assets/images/file.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";


export const HeroSection = () => {
  const connectLink = "https://www.linkedin.com/in/amine-bajji/";

  const cvFrench = "/Amine Bajji__French CV.pdf";
  const cvEnglish = "/Amine Bajji__English Resume.pdf";


  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">

      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
        <div className="size-[640px] hero-ring"></div>
        <div className="size-[840px] hero-ring"></div>
        <div className="size-[1040px] hero-ring"></div>
        <div className="size-[1240px] hero-ring"></div>

        {/* StarIcon */}
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-172} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        {/* SparkleIcon */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={-178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={-144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* CircleIcon */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="40s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={85} shouldOrbit orbitDuration="42s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>



      </div>
      <div className="container">
        <div className="flex flex-col items-center relative z-10">
          <Image src={memojiImage} className="size-[400px] rounded-5xl"
            alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide">Full-Stack Developer</h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">I am a Moroccan 23 year old Full-Stack Developer.</p>
            <p className="text-center text-white/60 md:text-lg">I always aim to learn and contribute in Software Developement fields, with the Goal to build elegant, robust and complex software architectues</p>
          </div>
         
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <Link href="#project-section">
              <button className="inline-flex items-center gap-2 text-gray-900 border border-white bg-white  px-6 h-12 rounded-xl">
                <span className="font-semibold">🔎 Explore My Work</span>
              </button>
            </Link>
            <Link href={connectLink}>
              <button className="inline-flex items-center gap-2 text-gray-900 border border-white bg-white  px-6 h-12 rounded-xl">
                <span className="font-semibold">👋 Let's Connect</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <Link href={cvEnglish} target="_blank">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
                <span className="font-semibold">English CV</span>
                <ArrowDown className="size-5" />
              </button>
            </Link>
            <Link href={cvFrench} target="_blank">
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
                <span className="font-semibold">French CV</span>
                <ArrowDown className="size-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
