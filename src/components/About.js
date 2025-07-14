import React from "react";
import {
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
  { name: "JavaScript", icon: DiJavascript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React-Bootstrap", icon: FaBootstrap },
  { name: "GitHub", icon: FaGithub },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black">

        {/* Left: Skills */}
        <Fade direction="left" triggerOnce>
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
              {skills.map(({ name, icon: Icon }, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <Icon className="w-10 h-10 text-white" />
                  <p className="text-sm text-white font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Right: About Me */}
        <Fade direction="right" triggerOnce delay={200}>
          <div className="p-6 bg- rounded-xl shadow text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Me</h2>
            <p className="text-lg leading-relaxed text-white">
              I’m a passionate software developer with a love for solving real-world problems.
              I specialize in React, Node.js, and creating responsive, clean UI experiences.
            </p>
          </div>
        </Fade>

      </div>
    </section>
  );
}
