"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { GoArrowUpRight } from "react-icons/go";
import { Sun, Moon, Menu, XIcon } from "lucide-react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  } 

  return (
    <header className="flex justify-between items-center  px-4 rounded-[0.75rem] mt-2 relative">
      <div className="hidden md:flex justify-center gap-8">
        <button className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Skills
        </button>
        <button className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Work
        </button>
        <button className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Contact
        </button>
      </div>
      <div className="font-Accent text-[#469d89] dark:text-[#bd68ee]">
        Utkarsh
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a
          target="_blank"
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/utkarsh-singh-5630b42aa/"
        >
          LinkedIn
          <GoArrowUpRight />
        </a>
        <button
          onClick={toggleTheme}
          className="dark:hover:bg-white/20 hover:bg-black/20 p-2 rounded-[0.5rem]"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
      <div className="block md:hidden" onClick={handleMenuToggle}>
        {menuOpen ? <XIcon/> : <Menu/>}
      </div>
      <div className={`absolute ${menuOpen ? "h-[30vh]" : "h-0"} overflow-hidden transition-all duration-200 top-[150%] z-[1000] left-0 w-full bg-[#469d89]/20 dark:bg-[#bd68ee]/10 md:hidden flex flex-col items-center rounded-b-[1rem] justify-center gap-4`}>
        <button onClick={handleMenuToggle} className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Skills
        </button>
        <button onClick={handleMenuToggle} className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Work
        </button>
        <button onClick={handleMenuToggle} className="hover:text-[#469d89] dark:hover:text-[#bd68ee] cursor-pointer">
          Contact
        </button>
        <a
          onClick={handleMenuToggle}
          target="_blank"
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/utkarsh-singh-5630b42aa/"
        >
          LinkedIn
          <GoArrowUpRight />
        </a>
        <button
          onClick={toggleTheme}
          className="dark:hover:bg-white/20 hover:bg-black/20 p-2 rounded-[0.5rem]"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
