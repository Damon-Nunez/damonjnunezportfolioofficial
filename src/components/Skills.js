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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-12">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {skills.map(({ name, icon: Icon }, index) => (
  <div key={index} className="flex flex-col items-center space-y-2">
    <Icon className="w-12 h-12 text-indigo-600" />
    <p className="text-sm font-medium text-gray-700">{name}</p>
  </div>
))}

      </div>
    </section>
  );
}
