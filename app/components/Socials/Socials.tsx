import { Github, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <>
      <div className="hidden fixed bottom-0 md:flex flex-col items-center gap-4 z-[99]">
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Github />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <InstagramIcon />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Linkedin />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Twitter />
        </a>
        <div className="dark:bg-white bg-black/70 h-32 w-[1px] opacity-70" />
      </div>
    </>
  );
};

export default Socials;
