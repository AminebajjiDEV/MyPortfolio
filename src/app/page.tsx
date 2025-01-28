import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { CertficateSection } from "@/sections/Certificates";
import { AcademicSection } from "@/sections/Academic";
import { ProfessionalExperience } from "@/sections/Professional";
import Transition from "@/components/TranstionWraper/page";

export default function Home(router:any) {
  return (
    <>
      <Header />
      <Transition>
        <HeroSection key={router.route} />
        <ProjectsSection key={router.route} />
        <TapeSection key={router.route} />
        <CertficateSection key={router.route} />
        <AcademicSection key={router.route} />
        <ProfessionalExperience key={router.route} />
        <AboutSection key={router.route} />
        <ContactSection key={router.route} />
      </Transition>
      <Footer />
    </>
  );
}
