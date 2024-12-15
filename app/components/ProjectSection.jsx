import React from 'react';
import { ProjectCard } from '../data/ProjectCard'; 

const projects= [
    {
      title: "Medsync: A AI health assistant",
      description: "Medsync is a web application leveraging Google Gemini API to provide symptom checking, medication iteration analysis, and medical record insights.",
      imageUrl: "/MedsyncShot1.png",
      liveLink: "https://medsync-five.vercel.app/",
      githubLink: "https://github.com/UtkarshS611/MedSync",
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
        { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
        { name: "Gemini", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      title: "Celestia - Explore the Universe",
      description: "A Web application based solely on NASA API to explore outer space and for educational purposes. Dont forget to star the repository",
      imageUrl: "/Celestia.jpg",
      liveLink: "https://celestia-nu.vercel.app/",
      githubLink: "https://github.com/UtkarshS611/Celestia",
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
      ]
    },
    {
      title: "ShopSphere(UnderDevelopment)",
      description: "A ecommerce web application built using NextJS. It has features like cart, wishlist, and payment gateway integration.",
      imageUrl: "https://imgs.search.brave.com/HjZ-ob8vorAE0YdTmoX63VsAq4wyL7DONVJKem9Ijso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9zdGluZ2VyLmNv/bS90dXRvcmlhbHMv/d3AtY29udGVudC91/cGxvYWRzL3NpdGVz/LzIvMjAyMS8wNy9N/b2xsYS0xMDI0eDQ5/Ny53ZWJw",
      liveLink: "https://github.com/UtkarshS611/ShopSphere-",
      githubLink: "https://github.com/UtkarshS611/ShopSphere-",
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Tailwind", color: "bg-teal-100 text-teal-800" },
        { name: "Sanity", color: "bg-pink-100 text-pink-800" },
      ]
    }
  ];

export function ProjectSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project , index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}