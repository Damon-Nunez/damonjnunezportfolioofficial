import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <Hero />
      <About />
      {/* Project cards section would go here */}
      <Contact />
    </div>
  );
}

export default App;
