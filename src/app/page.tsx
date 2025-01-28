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

export default function Home(router: any) {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <CertficateSection />
      <AcademicSection />
      <ProfessionalExperience />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
