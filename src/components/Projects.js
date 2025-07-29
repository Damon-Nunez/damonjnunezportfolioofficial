import React from "react";
import { Fade } from "react-awesome-reveal";
import StarBucksLogo from '../images/StarBucksLogo.webp';
import ArtVerse from '../images/ArtVerse.jpg';
import OldPortfolio from '../images/Portfolio.png';

const projects = [
  {
    title: "ArtVerse",
    description: "A full-stack social platform for artists with post, like, comment, and bubble-saving features.",
    image: ArtVerse,
    link: "https://drive.google.com/file/d/1-NpgmFPQGws3JEhh5ZYxLOtzUTupD03Z/view",
    code: "https://github.com/Damon-Nunez/ArtVerseOfficial",
    tags: ["React", "Next.js", "PostgreSQL", "Cloudinary"]
  },
  {
    title: "Starbucks Clone",
    description: "A modern clone of Starbucks' homepage with stylish responsive design.",
    image: StarBucksLogo,
    link: "https://coffee-ridden.netlify.app/",
    code: "https://github.com/Damon-Nunez/starbucksthedamonway",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio v1",
    description: "My original portfolio built with basic React and CSS. Now archived.",
    image: OldPortfolio,
    link: "https://damonjnunez.netlify.app/",
    code: "https://github.com/Damon-Nunez/Portfolio",
    tags: ["React", "CSS"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">Projects</h2>

        <Fade triggerOnce direction="up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="relative bg-gray-100 rounded-xl shadow-md overflow-hidden group">
                
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay for ArtVerse */}
                {project.title === "ArtVerse" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white font-semibold text-lg">🎬 View Demo</span>
                  </a>
                )}

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.title !== "ArtVerse" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 text-sm hover:underline"
                      >
                        View Project
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 text-sm hover:underline"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
