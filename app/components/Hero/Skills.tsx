import React from "react";
import "./Skills.css";
import "./Skills.js";

const Skills = () => {
  return (
    <>
      <h1 className="text-center">Infinite Scroll Animation</h1>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
