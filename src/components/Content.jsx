import React from "react";
import { FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero.png";
const Content = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 py-32 bg-content justify-around">
      <div className="md:w-1/3 flex flex-col">
      <h1 className="text-white text-6xl font-content-font">
        Hi, I'm <span className=" text-lime-400">R.Ragul</span>
        <p className="text-lg py-2">
          I'm a passionate Front-End Developer with a focus on creating dynamic
          and user-friendly web applications.
        </p>
      </h1>
      
      <div className="flex">
        <a href="#" className="text-2xl hover:scale-150 transition-transform duration-300 ease-in-out hover:text-white"><FaLinkedin /></a>
      </div>
      </div>
      <img className="md:w-1/3" src={heroImage} alt="Hero Image" />
    </div>
  );
};

export default Content;
