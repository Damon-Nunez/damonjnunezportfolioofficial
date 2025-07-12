import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Damon</h1>
        <p className="text-lg md:text-xl mb-6">A Full-Stack Developer who loves building expressive interfaces</p>
        <a href="#projects" className="bg-white text-indigo-600 px-6 py-2 rounded shadow hover:bg-indigo-100 transition">View My Work</a>
      </div>
    </section>
  );
}