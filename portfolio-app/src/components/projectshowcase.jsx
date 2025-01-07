import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    if (project.detailsUrl) {
      window.open(project.detailsUrl, '_blank', 'noopener noreferrer');
    } else {
      project.liveUrl && window.open(project.liveUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div
      className="red-hat group relative flex h-[400px] md:h-[600px] flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-16 md:h-64 shrink-0 overflow-hidden">
        <div className="absolute inset-0 rounded-lg bg-slate-700 transition-opacity duration-300 group-hover:bg-slate-600" />
      </div>

      {/* Content */}
      <div className="flex grow flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">
          {project.title}
        </h3>
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Scrollable Description */}
        <div className="mb-4 grow overflow-y-auto text-wrap w-full max-w-full h-24 max-h-24 sm:h-32 sm:max-h-32">
          <p className="text-lg text-slate-400 break-words">
            {project.description}
          </p>
        </div>

        {/* Links - Now with bottom margin to prevent overlap */}
        <div className="mb-16 flex gap-4 absolute top-5 right-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-slate-800"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* View Details Button */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t to-transparent p-6 transition-all duration-300from-slate-800 ${
        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <button 
          onClick={handleViewDetails}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
        >
          <span>View Details</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: "AggieMenus",
      description: "A dining menu tracker app for UC Davis students, featuring real-time updates and dietary filters. Built with TypeScript, React, and a Docker-based backend, it delivers a sleek, responsive UI and efficient data processing, enhancing user engagement and reducing latency.",
      tags: ["React", "Docker", "Tailwind", "Typescript"],
      imageUrl: "/api/placeholder/400/320",
      githubUrl: "https://github.com/AggieWorks/aggiemenus",
      detailsUrl: "https://aggiemenus.org"
    },
    {
      title: "Wishlist Organizer",
      description: "A full-stack web application for managing wishlists. Users can create, share, and collaborate on wishlists with friends and family. It features user authentication, real-time updates, and a responsive design for seamless user experience.",
      tags: ["Next.js", "Supabase", "Typescript", "Clerk Auth"],
      imageUrl: "/api/placeholder/400/320",
      githubUrl: "https://github.com/jasonpeng7/wishlist",
      detailsUrl: "https://www.wishr.tech"
    },
    {
        title: "Flooring FBP",
        description: "An E-commerce web app for browsing and purchasing flooring options. It offers a seamless shopping experience with dynamic product listings and efficient cart management. Optimized for performance, it features reduced load times and scalable, modular components.",
        tags: ["React + Vite", "Javascript", "Express", "Tailwind"],
        imageUrl: "/api/placeholder/400/320",
        githubUrl: "https://github.com/jasonpeng7/FullStackFlooringWebApp",
        detailsUrl: "https://github.com/jasonpeng7/FullStackFlooringWebApp"
      },
      {
        title: "Accio",
        description: "A university-wide lost and found app with an efficient search system. Using Spring Boot, RESTful APIs, and a Next.js frontend, it offers quick item searches and an interactive user interface, aligning with Figma design systems for an enhanced user experience.",
        tags: ["Next.js", "Supabase", "Typescript", "Java"],
        imageUrl: "/api/placeholder/400/320",
        githubUrl: "https://github.com/Codelab-Davis/accio",
        detailsUrl: "https://github.com/Codelab-Davis/accio"
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