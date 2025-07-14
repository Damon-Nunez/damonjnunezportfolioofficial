import React from "react";
import BigTrax from '../images/BigTrax.jpg';
import ReactTyped from "react-typed";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-black flex flex-col md:flex-row items-center">
      
      {/* LEFT COLUMN: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={BigTrax}
          alt="BigTrax"
          className="w-[550px] h-[550px] mx-auto object-cover rounded-full shadow-lg"
        />
      </div>

      {/* RIGHT COLUMN: Text + Buttons */}
      <div className="w-full md:w-1/2 max-w-3xl text-center md:text-left space-y-6">
        <Fade triggerOnce direction="up">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-600">
            <ReactTyped
              strings={["Hi, I'm Damon!"]}
              typeSpeed={30}
              backSpeed={30}
              loop={false}
            />
          </h1>
        </Fade>

        <Fade triggerOnce direction="up" delay={200}>
          <p className="text-lg md:text-xl text-gray-300">
            <ReactTyped
              strings={[
                "A Full-Stack Developer who loves building expressive interfaces and challenging myself to new avenues of tech knowledge!",
              ]}
              typeSpeed={10}
              backSpeed={30}
              loop={false}
            />
          </p>
        </Fade>

        <Fade triggerOnce direction="up" delay={400}>
          <div className="flex flex justify-center space-x-8">
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-6 py-2 rounded shadow hover:bg-indigo-100 transform hover:scale-105 transition hover:no-underline visited:no-underline active:no-underline"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-indigo-600 px-6 py-2 rounded shadow hover:bg-indigo-100 transform hover:scale-105 transition hover:no-underline visited:no-underline active:no-underline"
            >
              Contact Me!
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
