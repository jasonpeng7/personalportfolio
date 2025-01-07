import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.imageUrl || "/api/placeholder/400/320"}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-4 text-lg text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 transition-colors duration-300 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* View Details Button */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-6 transition-all duration-300 dark:from-slate-800 ${
        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700">
          <span>View Details</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  // Sample projects data - replace with your own
  const projects = [
    {
      title: "AggieMenus",
      description: "A responsive web app for browsing and purchasing flooring options. It offers a seamless shopping experience with dynamic product listings and efficient cart management. Optimized for performance, it features reduced load times and scalable, modular components.",
      tags: ["React", "Express", "Tailwind, Typescript"],
      imageUrl: "/api/placeholder/400/320",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Wishlist Organizer",
      description: "A full-stack web application for managing wishlists. Users can create, share, and collaborate on wishlists with friends and family. It features user authentication, real-time updates, and a responsive design for seamless user experience.",
      tags: ["Next.js", "Supabase", "Typescript", "Clerk Auth"],
      imageUrl: "/api/placeholder/400/320",
      liveUrl: "https://www.wishr.tech",
      githubUrl: "https://github.com/example"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;