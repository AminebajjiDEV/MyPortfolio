import ociCert from "@/assets/images/eCertificate OCI_page-0001.webp";
import phpCert from "@/assets/images/PHP Tutorial Beginner to Advanced-UC-0685ecf3-8c87-410c-bb5f-39043ef0b188_page-0001.webp";
import scrumCourse from "@/assets/images/Master Agile and Scrum Key principles and preparation for PSM  and PSPO certifications_page-0001.webp";
import ibmCourse from "@/assets/images/InstructLab Democratizing AI Models at Scale_Course completion certificate_page-0001.webp";
import webDevCert from "@/assets/images/WEB DEV CERTIFICATE_page-0001.webp";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import Link from "next/link";

const certificates = [
  {
    name: "web-Dev-cert",
    avatar: webDevCert,
    link: "https://www.ude.my/UC-246d6033-7607-4763-b0e9-50e98d33bcbe/",
  },
  {
    name: "oci-cert",
    avatar: ociCert,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7AB369CB4BC42A6CA0BAE533BE2517B72B12301E86DC9F7BC7329B027C0CF7D2",
  },
  {
    name: "php-cert",
    avatar: phpCert,
    link: "https://ude.my/UC-0685ecf3-8c87-410c-bb5f-39043ef0b188",
  },
  {
    name: "ibm-cert",
    avatar: ibmCourse,
    link: "https://www.credly.com/badges/c1783a78-03fe-408f-a279-f7039b067210/linked_in_profile",
  },
  {
    name: "scrum-cert",
    avatar: scrumCourse,
    link: "https://ude.my/UC-513333be-6c02-4acd-8f61-ad913ba2075a",
  },
  // {
  //   name: "efset-cert",
  //   avatar: efsetCert,
  // }
];

export const CertficateSection = () => {
  return (
    <div className="py-16 lg:py-24 flex flex-col items-center w-full overflow-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="Certificates"
          title="Online Courses I Completed"
          description="Studying new technologies or reinforcing old knowledge is my key to continuous progress" />
      </div>
      <div className="mt-12 lg:mt-20 sm:w-[400px] md:w-[700px] lg:w-[1200px] flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
        <div className="flex gap-8 flex-none animate-move-left [animation-duration:190s] hover:[animation-play-state:paused]">
          {[...new Array(10)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {certificates.map(certificate => (
                <Card key={certificate.name} className="max-w-[400px] md:max-w-md p-2 md:p-4 items-center transition duration-300 hover:rotate-1">
                  <Link href={certificate.link} target="_blank" >
                    <div className="relative w-[416px] h-[321.45px] object-cover">
                      <Image
                        src={certificate.avatar}
                        alt={certificate.name}
                        placeholder="blur"
                        fill
                        className="max-h-full rounded-3xl" />
                    </div>
                  </Link>
                </Card>
              ))}
            </Fragment>
          ))
          }
        </div>
      </div>
    </div>
  );
};
