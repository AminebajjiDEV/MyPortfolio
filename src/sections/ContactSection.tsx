import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.webp";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-10">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" style={{ background: `url(${GrainImage.src})` }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2x md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-based mt-2">
                Ready to bring your next project to life?
                Let&apos;s connect and discuss how I can help you can turn your visions to reality.
              </p>
            </div>
            <div>
              <Link href="/contact">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold ">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
