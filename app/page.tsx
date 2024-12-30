import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";

const Home = () => {
  return (
    <main className="rounded-2xl p-3 relative overflow-hidden">
      <Socials />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
