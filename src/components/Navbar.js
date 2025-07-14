import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-indigo-600 transform hover:scale-105 transition duration-50 ">damonjnunez.dev</div>
          <div className="space-x-8  hidden md:flex">
<a
  href="#home"
  className="relative text-white visited:text-white hover:text-indigo-600 transition-all duration-200 transform hover:scale-105 hover:drop-shadow-md 
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all 
  no-underline hover:no-underline visited:no-underline active:no-underline"
>
  Home
</a>


            <a href="#about" className="relative text-white hover:text-indigo-400 transition-all duration-200 transform hover:scale-105 hover:drop-shadow-md after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all 
hover:no-underline visited:no-underline active:no-underline
">About</a>
            <a href="#skills" className="relative text-white hover:text-indigo-400 transition-all duration-200 transform hover:scale-105 hover:drop-shadow-md after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all 
hover:no-underline visited:no-underline active:no-underline
">Skills</a>
            <a href="#projects" className="relative text-white hover:text-indigo-400 transition-all duration-200 transform hover:scale-105 hover:drop-shadow-md after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all 
hover:no-underline visited:no-underline active:no-underline
">Projects</a>
            <a href="#contact" className="relative text-white hover:text-indigo-400 transition-all duration-200 transform hover:scale-105 hover:drop-shadow-md after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all 
hover:no-underline visited:no-underline active:no-underline
">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
