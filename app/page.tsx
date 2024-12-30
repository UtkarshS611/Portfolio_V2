import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import { Skills } from "./components/Skills/Skills";

const Home = () => {
  return (
    <main className="rounded-2xl p-3 relative overflow-hidden">
      <Socials />
      <Navbar />
      <Hero />
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <p className="text-4xl">Things I&apos;m good at</p>
        <Skills />
      </section>
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
