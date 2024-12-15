"use client";

import React from "react";
import Header from "./Header";
import HomeGradient from "./HomeGradient";
import { FaArrowRight } from "react-icons/fa6";
import { BsFiles } from "react-icons/bs";
import { About } from "./About";
import { ProjectSection } from "./ProjectSection";
import Footer from "./Footer";

const Home = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      const text = "utkarsh.singh6113@gmail.com"; // Predefined text
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="h-screen text-TextColor dark:text-TextColor relative overflow-x-hidden">
      <Header />
      <HomeGradient />
      <section className="h-full flex flex-col pt-72 items-center">
        <div className="font-light">
          Hello👋 I&apos;m Utkarsh, a Web developer
        </div>
        <div className="animate flex flex-col justify-center items-center font-light mt-4 text-3xl sm:text-5xl gap-1 font-semi-bold">
          <div>I help founders transform</div>
          <div className="flex md:items-end items-center gap-4 flex-col md:flex-row">
            ideas into impactful
            <span className="font-Accent text-2xl">websites</span>
          </div>
        </div>
        <div className="md:mt-10 mt-6 flex items-center gap-6">
          <button className="flex justify-center items-center bg-[#00bfb3]/20 dark:bg-[#ffffff39] pr-1 pl-6 py-1 backdrop-blur-3xl rounded-full gap-2 border-[0.5px] hover:bg-[#00bfb3] dark:hover:bg-white duration-200 hover:text-black border-[#ffffff13]">
            Let&apos;s connect
            <span className="dark:bg-white bg-[#00bfb3] font-light text-black rounded-full flex items-center justify-center p-[0.75rem]">
              <FaArrowRight />
            </span>
          </button>
          <button
            className="flex justify-center items-center gap-2"
            onClick={() => copyToClipboard("utkarsh.singh6113@gmail.com")}
          >
            <span>
              <BsFiles />
            </span>
            <div>
              <span>
                {copied ? "Copied to clipboard" : "Copy email"}
              </span>
            </div>
          </button>
        </div>
      </section>
      <About />
      <ProjectSection />
      <Footer />
    </section>
  );
};

export default Home;
