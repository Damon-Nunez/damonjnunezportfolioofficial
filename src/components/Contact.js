import React from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs,
  FaGitAlt, FaAws, FaFigma
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import {
  SiNextdotjs, SiExpress, SiMongodb
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKnexdotjs } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <Fade triggerOnce direction="up">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-12">

          {/* LEFT: My Stack + Resume */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">My Stack</h2>
            <p className="text-gray-700 mb-6">
              Here are the core technologies I work with on the daily.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-gray-700">
              <div className="flex items-center gap-2"><FaHtml5 className="text-orange-600 text-2xl" /><span className="text-sm">HTML5</span></div>
              <div className="flex items-center gap-2"><FaCss3Alt className="text-blue-500 text-2xl" /><span className="text-sm">CSS3</span></div>
              <div className="flex items-center gap-2"><FaBootstrap className="text-purple-700 text-2xl" /><span className="text-sm">Bootstrap</span></div>
              <div className="flex items-center gap-2"><RiTailwindCssFill className="text-sky-500 text-2xl" /><span className="text-sm">TailwindCSS</span></div>
              <div className="flex items-center gap-2"><DiJavascript1 className="text-yellow-400 text-2xl" /><span className="text-sm">JavaScript</span></div>
              <div className="flex items-center gap-2"><FaReact className="text-cyan-400 text-2xl" /><span className="text-sm">React</span></div>
              <div className="flex items-center gap-2"><SiNextdotjs className="text-black text-2xl" /><span className="text-sm">Next.js</span></div>
              <div className="flex items-center gap-2"><FaNodeJs className="text-green-600 text-2xl" /><span className="text-sm">Node.js</span></div>
              <div className="flex items-center gap-2"><SiExpress className="text-gray-800 text-2xl" /><span className="text-sm">Express.js</span></div>
              <div className="flex items-center gap-2"><BiLogoPostgresql className="text-blue-700 text-2xl" /><span className="text-sm">PostgreSQL</span></div>
              <div className="flex items-center gap-2"><GrMysql className="text-blue-600 text-2xl" /><span className="text-sm">MySQL</span></div>
              <div className="flex items-center gap-2"><SiMongodb className="text-green-700 text-2xl" /><span className="text-sm">MongoDB</span></div>
              <div className="flex items-center gap-2"><FaAws className="text-orange-400 text-2xl" /><span className="text-sm">AWS</span></div>
              <div className="flex items-center gap-2"><FaGitAlt className="text-red-500 text-2xl" /><span className="text-sm">Git</span></div>
              <div className="flex items-center gap-2"><FaFigma className="text-pink-500 text-2xl" /><span className="text-sm">Figma</span></div>
              <div className="flex items-center gap-2"><SiKnexdotjs className="text-red-600 text-2xl"/><span className="text-sm">Knex.js</span></div>
              <div className="flex items-center gap-2"><SiAxios className="text-blue-500 text-2xl"/><span className="text-sm">Axios</span></div>
            </div>

            <a href="/Damon_Nunez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg mx-20 font-semibold hover:bg-indigo-700 transform hover:scale-105 transition duration-50"
            >
              📄 View Resume
            </a>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Get In Touch</h2>
            <p className="text-gray-700 mb-8 text-center">
              Got a project in mind? Need a top tier employee? Let's make it real.
            </p>

            <form
              action={`mailto:damon.j.nunez@gmail.com`}
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition duration-50"
              >
                Send Message
              </button>
            </form>

            <div className="flex justify-center gap-6 text-2xl text-gray-600 mt-10">
              <a
                href="https://github.com/Damon-Nunez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/damon-nunez/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:damon.j.nunez@gmail.com"
                className="hover:text-indigo-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </Fade>
    </section>
  );
}
