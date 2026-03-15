import React from "react";
import { Fade } from "react-awesome-reveal";
import BigTrax from "../images/BigTrax.jpg";

export default function About() {
  return (
   <section id="about" className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

    {/* LEFT: Trax Image */}
    <div className="flex justify-center md:justify-start w-full md:w-1/3">
      <img
        src={BigTrax}
        alt="BigTrax"
        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover rounded-full shadow-xl border-4 border-indigo-100"
      />
    </div>

    {/* CENTER: About Story */}
    <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-2xl">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-4 tracking-wide text-center md:text-left">
        I grew up through coding.
      </h2>
      <p className="text-gray-800 text-[17px] leading-relaxed font-medium mb-4">
My journey in tech spans over six years. I began learning programming through ScriptEd and Code Nation before graduating from the Marcy Lab School, where I developed full-stack applications and collaborated on production-style projects.

Today I focus on building scalable web platforms and AI-powered tools, including OA:Trax — a coding interview trainer that guides developers through algorithmic problems with structured hints.

I’m currently expanding my cloud and systems knowledge through the OBT Advanced Cloud Program while working with mentors across the tech industry.      </p>
      <p className="italic text-gray-500 text-sm mt-6">
        "I didn’t just learn to code. I learned who I am."
      </p>
    </div>

    {/* RIGHT: Timeline */}
    <div className="flex flex-col items-start gap-4 md:pt-8 w-full md:w-1/4">
      <p className="text-sm text-gray-500 font-semibold mb-2">Milestones</p>
      {[
        ["2018", "ScriptEd"],
        ["2019–2021", "Code Nation"],
        ["2022–2023", "Marcy Lab School"],
        ["2023–2024", "Solo Learning"],
        ["2025", "Return to Marcy"],
        ["2025","Marcy Lab Spark Series"],
        ["2026","Google VSWEP Mentorship"],
        ["2026","OBT Advanced Cloud Program (AWS CCP + SAAP)"],
      ].map(([year, label], i) => (
        <Fade key={i} triggerOnce direction="up" delay={i * 100}>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            <div>
              <p className="text-sm font-bold text-gray-700">{year}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  </div>
</section>

  );
}
