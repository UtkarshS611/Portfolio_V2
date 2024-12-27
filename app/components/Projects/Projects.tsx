import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {

  const Project = [
    {
      title: "ShopSphere",
      description:
        "A ecommerce web application built using NextJS. It has features like cart, wishlist, and payment gateway integration.",
      img: "/ShopSphere.png",
      github: "https://www.google.com",
      liveLink: "https://www.google.com",
      tech: {
        first: "Next.js",
        second: "Typescript",
        third: "Prisma",
        fourth: "Stripe",
        fifth: "Tailwind CSS",
        sixt: ''
      }
    },
    {
      title: "MedSync",
      description:
        "Medsync is a web application leveraging Google Gemini API to provide symptom checking, medication iteration analysis, and medical record insights.",
      img: "/MedSync.png",
      github: "https://github.com/UtkarshS611/MedSync",
      liveLink: "https://medsync-five.vercel.app/",
      tech: {
        first: "React.js",
        second: "Typescript",
        third: "Google Gemini",
        fourth: "ShadCN",
        fifth: "Tailwind CSS",
        sixth: ''
      }
    },
    {
      title: "Celestia",
      description:
        "A Web application based solely on NASA API to explore outer space and for educational purposes. Dont forget to star the repository",
      img: "/Celestia.png",
      github: "https://github.com/UtkarshS611/Celestia",
      liveLink: "https://celestia-nu.vercel.app/",
      tech: {
        first: "React.js",
        second: "Javascript",
        third: "Nasa API",
      }
    },
    {
      title: "TravLog",
      description:
        "A travel-focused website built using HTML and CSS with modern web development practices, featuring a clean and simple UI/UX and fully responsive design.",
      img: "/TravLog.png",
      github: "https://github.com/UtkarshS611/TRAVLOG_project",
      liveLink: "https://travlog-project.vercel.app/",
      tech: {
        first: "HTML",
        second: "CSS",
      }
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <h1 className="text-2xl sm:text-4xl mt-10">
        Some things that I&apos;ve made
      </h1>
      {Project.map((project, index) => (
        <section
          key={index}
          className="mt-8 md:mt-16 flex flex-col-reverse items-center justify-center xl:flex-row lg:px-48 md:px-36 sm:px-24 px-4 gap-24"
        >
          <div className="w-full dark:bg-white/10 bg-black/10 relative">
            <Image src={project.img} width={800} height={300} alt="Project Preview" className="object-cover"/>
          </div>
          <div className="w-full space-y-4">
            <h2 className="text-lg font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <p>Tech stack</p>
            <div className="flex gap-4 aboutList">
              {project.tech.first && <ul className="list-disc list-inside">
                <li>{project.tech.first}</li>
                <li>{project.tech.second}</li>
                <li>{project.tech.third}</li>
              </ul>}
              {project.tech.fourth &&<ul className="list-disc list-inside">
                <li>{project.tech.fourth}</li>
                <li>{project.tech.fifth}</li>
                {project.tech.sixth && <li>{project.tech.sixth}</li>}
              </ul>}
            </div>
            <div className="flex gap-4">
              <a
                target="_blank"
                href={project.github}
                className="dark:hover:text-[#bd68ee] hover:text-[#469d89]"
              >
                <Github />
              </a>
              <a
                target="_blank"
                href={project.liveLink}
                className="dark:hover:text-[#bd68ee] hover:text-[#469d89]"
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
