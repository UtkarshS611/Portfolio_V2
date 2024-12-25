import { Github, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <>
      <div className="hidden fixed bottom-0 md:flex flex-col items-center gap-4 z-[99]">
        <a
          target="_blank"
          href="https://github.com/UtkarshS611"
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Github />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/utkarshhh_308/"
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/utkarsh-singh-5630b42aa/"
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          href="https://x.com/UtkarshS611"
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
