import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
