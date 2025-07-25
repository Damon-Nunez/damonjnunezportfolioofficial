import React from "react";
import { Fade } from "react-awesome-reveal";
import BigTrax from "../images/BigTrax.jpg";
import ReactTyped from "react-typed";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <Fade triggerOnce direction="up">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={BigTrax}
              alt="BigTrax"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover rounded-full shadow-xl border-4 border-indigo-100"
            />
          </div>

          {/* Right: Card Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center md:text-left">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I’m a passionate software developer with a love for solving real-world problems. I specialize in React,
              Node.js, and creating responsive, clean UI experiences.
            </p>

            <div className="bg-indigo-50 border-l-4 border-red-700 text-indigo-700 p-4 text-sm rounded-md">
              <strong>Did you know?</strong> Damon once built a feature in <strong> ArtVerse </strong> that lets artists save posts into customizable “bubbles” — kind of like folders, but cooler. Who doesn't like bubbles???
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
