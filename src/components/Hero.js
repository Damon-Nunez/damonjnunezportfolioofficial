import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactTyped from "react-typed";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center px-4"
    >

         <Fade triggerOnce direction="up">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-500 mb-6 text-center">
        
        </h1>
      </Fade>
      <Fade triggerOnce direction="up">
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-500 mb-6 text-center">
          Damon Nunez
        </h1>
      </Fade>

      <Fade triggerOnce direction="up" delay={200}>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-2xl">
          <ReactTyped
            strings={[
              "Full-Stack Developer.",
              "Builder of clean UIs.",
              "Obsessed with crafting meaningful tech.",
              "Binger of animes...oops"
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </h2>
      </Fade>

      <Fade triggerOnce direction="up" delay={400}>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="bg-white text-indigo-600 px-6 py-3 rounded shadow hover:bg-indigo-100 transform hover:scale-105 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded shadow hover:bg-indigo-700 transform hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>
      </Fade>
    </section>
  );
}
