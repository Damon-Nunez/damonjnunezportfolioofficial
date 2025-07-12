import React from "react";
import StarBucksLogo from '../images/StarBucksLogo.webp'

const projects = [
  {
    title: "ArtVerse",
    description: "A full-stack social platform for artists with post, like, comment, and bubble-saving features.",
    image: "https://via.placeholder.com/600x400",
    link: "https://github.com/Damon-Nunez/ArtVerseOfficial"
  },
  {
    title: "Starbucks clone",
    description: "A StarBucks cloned website ",
    image: StarBucksLogo,
    link: "https://github.com/Damon-Nunez/starbucksthedamonway"
  },
  {
    title: "Portfolio v1",
    description: "My original portfolio built with basic React and CSS. Now archived.",
    image: "https://via.placeholder.com/600x400",
    link: "https://github.com/Damon-Nunez/Portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
