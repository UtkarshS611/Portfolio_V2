"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import ThemeSwitcher from "./ThemeSwitch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between p-6 items-center">
      <div className="font-Accent">Utkarsh</div>
      <div className="md:flex w-full justify-center gap-8 hidden">
        <a className="hover:text-AccentSecondary cursor-pointer">About</a>
        <a className="hover:text-AccentSecondary cursor-pointer">Skills</a>
        <a className="hover:text-AccentSecondary cursor-pointer">Work</a>
        <a className="hover:text-AccentSecondary cursor-pointer">Contact</a>
      </div>
      <ThemeSwitcher />
      <div className="hidden md:flex items-center gap-4">
        <a className="flex items-center gap-2" href="www.linkedin.com/in/utkarsh-singh-5630b42aa">
          LinkedIn
          <GoArrowUpRight />
        </a>
        <a className="flex items-center gap-2" href="https://drive.google.com/file/d/1q25HSTjPWP8skAQ9JE5f9RTdrcS7B3ND/view?usp=sharing">
          Resume
          <GoArrowUpRight />
        </a>
      </div>
      <Menu className="block md:hidden z-[100]" onClick={handleMenuToggle} />
      <div className={`absolute block md:hidden ${isMenuOpen? "h-screen w-[50%] right-0 top-0 opacity-100 z-[999]" : "h-6 w-6 right-6 opacity-0 z-[99]"} bg-white transition-all duration-300`}>
        <X className="text-black absolute right-6 top-6" onClick={handleMenuToggle} />
      </div>
    </header>
  );
};

export default Header;
