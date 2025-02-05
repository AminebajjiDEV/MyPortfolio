import todolistImage from "@/assets/images/todolistImage.png";
import weatherbirdImage from "@/assets/images/weatherbirdImage.png";
import booknotesImage from "@/assets/images/booknotesImage.png";
import RentedInPicture from "@/assets/images/ReantedIn.png";
import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "BookNotes webapp",
    year: "2024",
    title: "Using PostgreSQL & OpenLibrary  API ",
    results: [
      { title: "Search books via Open Library API." },
      { title: "Manage & organize book collections." },
      { title: "Store book data using PostgreSQL." },
      { title: "Use Node.js, Express.js, and EJS." },
      { title: "Validate book covers using Image-Pixels." },
    ],
    link: "https://booknotes-app.onrender.com/",
    gitRepo: "https://github.com/AminebajjiDEV/BookNotes-App",
    image: booknotesImage,
  },
  {
    company: "WeatherBird webapp",
    year: "2024",
    title: "Using axios & OpenWeather API",
    results: [
      { title: "Integrate public APIs into projects." },
      { title: "Use Express/Node.js for servers." },
      { title: "Use EJS for server-side rendering." },
      { title: "client-server communication via Axios." },
      { title: "Retrieve, manipulate & present data." },
    ],
    link: "https://weatherbird.onrender.com",
    gitRepo: "https://github.com/AminebajjiDEV/WeatherBird--APP",
    image: weatherbirdImage,
  },
  {
    company: "RentedIn Webapp",
    year: "2024",
    title: "Airbnb Inspired using MERN Stack",
    results: [
      { title: "Secure authentication with JWT." },
      { title: "Manage listings, bookings, and wishlist." },
      { title: "Responsive UI with SCSS, MUI." },
      { title: "React, Redux for client-side logic." },
      { title: "Node, Express, MongoDB for backend." },
    ],
    link: "",
    gitRepo: "https://github.com/AminebajjiDEV/Rented-In-APP",
    image: RentedInPicture,
  },
  {
    company: "Todolist Webapp",
    year: "2024",
    title: "Data persitence using PostgreSQL",
    results: [
      { title: "Implement CRUD API with PostgreSQL." },
      { title: "Manage tasks with dynamic updates." },
      { title: "Use Node.js, Express for backend." },
      { title: "Render UI with EJS templates." },
      { title: "Style with HTML, CSS, JavaScript." },
    ],
    link: "",
    gitRepo: "https://github.com/AminebajjiDEV/ToDoList-node.js-express.js",
    image: todolistImage,
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project-section">
      <div className="container">
        <SectionHeader eyebrow="Featured Projects" title="My projects" description="See How I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col mt-4 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 h-full sm:h-[700px] md:pt-12 md:px-10 lg:pt-16 lg:px-20  sticky"
              style={{
                top: `calc(70px + ${projectIndex * 20}px)`
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r inline-flex from-emerald-300 to-sky-400
              font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 ">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                        <CheckCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col">
                    {project && project.link.length > 0 && (<a href={project.link} target="_blank" >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>)}
                    <a href={project.gitRepo} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                        <span>Github Repo</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-2 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
};
