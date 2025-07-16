import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactTyped from "react-typed";

export default function Contact() {
  return (
    
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <Fade direction="bottom-left">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Get In Touch</h2>
        <p className="mb-4 text-white">

            <ReactTyped
              strings={["  Feel free to reach out for collaborations or just a friendly hello 👋"]}
              typeSpeed={30}
              backSpeed={30}
              loop={false}
            />
          </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Damon-Nunez" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-600 transform hover:scale-105 transition">
          GitHub
          </a>
          <a href="https://www.linkedin.com/in/damon-nunez/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-indigo-600 transform hover:scale-105 transition">
          LinkedIn
          </a>
          <a href="damon.j.nunez@gmail.com" target="_blank"rel="noopener noreferrer" className="text-red-500 hover:text-indigo-600 transform hover:scale-105 transition">
            Email
            </a>
        </div>
        </Fade>
      </div>
    </section>
  );
}