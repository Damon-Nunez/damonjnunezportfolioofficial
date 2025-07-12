import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Get In Touch</h2>
        <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Damon-Nunez" className="text-gray-600 hover:text-indigo-600">GitHub</a>
          <a href="https://www.linkedin.com/in/damon-nunez/" className="text-gray-600 hover:text-indigo-600">LinkedIn</a>
          <a href="damon.j.nunez@gmail.com" className="text-gray-600 hover:text-indigo-600">Email</a>
        </div>
      </div>
    </section>
  );
}