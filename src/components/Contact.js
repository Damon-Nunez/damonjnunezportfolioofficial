import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <Fade triggerOnce direction="up">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-700 mb-8 text-center">
            Got a project in mind? Need a top tier employee? Let's make it real. Send me a message below or connect on social media.
          </p>

          {/* Contact Form */}
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
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
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
      </Fade>
    </section>
  );
}
