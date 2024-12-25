"use client";

import React from "react";
import { BsFiles } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Skills from "./Skills";

const Hero = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      const text = "utkarsh.singh6113@gmail.com";
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="pt-72 h-screen flex flex-col items-center relative">
      <div className="h-72 w-[25vw] absolute bg-[#469d89] dark:bg-[#bd68ee] blur-[230px] rounded-full top-0 right-0" />
      <div className="h-72 w-[25vw] absolute bg-[#469d89] dark:bg-[#bd68ee] blur-[230px] rounded-full bottom-0 left-0" />
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
        <button className="border-none flex bg-[#469d89]/20 dark:bg-[#bd68ee]/10 hover:bg-[#469d89] dark:hover:bg-[#bd68ee] duration-200 justify-center items-center pr-1 pl-6 py-1 backdrop-blur-3xl rounded-full gap-2 border-[0.5px]">
          Let&apos;s connect
          <span className="font-light bg-[#469d89] dark:bg-[#bd68ee] rounded-full flex items-center justify-center p-[0.75rem]">
            <FaArrowRight />
          </span>
        </button>
        <button
          className="flex justify-center items-center gap-2"
          onClick={() => copyToClipboard()}
        >
          <span>
            <BsFiles />
          </span>
          <div>
            <span>{copied ? "Copied to clipboard" : "Copy email"}</span>
          </div>
        </button>
      </div>
      <div className="mt-10">
        {/* <Skills/> */}
      </div>
    </div>
  );
};

export default Hero;
