import React from "react";
import Header from "./Header";
import HomeGradient from "./HomeGradient";
import { FaArrowRight } from "react-icons/fa6";
import { BsFiles } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-screen text-white overflow-hidden relative">
      <Header />
      <HomeGradient />
      <section className="h-full flex flex-col pt-72 items-center">
        <div className="font-light">Hello👋 I'm Utkarsh, a Web developer</div>
        <div className="animate flex flex-col justify-center items-center font-light mt-4 text-3xl sm:text-5xl gap-1 font-semi-bold">
          <div>I help founders transform</div>
          <div className="flex md:items-end items-center gap-4 flex-col md:flex-row">
            ideas into impactful{" "}
            <span className="font-Accent text-2xl">websites</span>
          </div>
        </div>
        <div className="md:mt-10 mt-6 flex items-center gap-6">
          <button className="flex justify-center items-center bg-[#ffffff39] pr-1 pl-6 py-1 backdrop-blur-3xl rounded-full gap-2 border-[0.5px] hover:bg-purple-200 dark:hover:bg-white duration-200 hover:text-black border-[#ffffff13]">
            Let's connect
            <span className="dark:bg-white bg-purple-200 font-light text-black rounded-full flex items-center justify-center p-[0.75rem]">
              <FaArrowRight />
            </span>
          </button>
          <button className="flex justify-center items-center gap-2">
            <span>
              <BsFiles />
            </span>
            <div>
              <span>{"Copy Email"}</span>
            </div>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home;
