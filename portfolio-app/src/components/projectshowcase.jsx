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
      className="red-hat group relative flex h-[600px] flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 shrink-0 overflow-hidden">
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
        <div className="mb-4 grow overflow-y-auto text-wrap w-full max-w-full h-32 max-h-32">
          <p className="text-lg text-slate-600 dark:text-slate-400 break-words">
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
      tags: ["React", "Express", "Tailwind", "Typescript"],
      imageUrl: "/api/placeholder/400/320",
      githubUrl: "https://github.com/example",
      detailsUrl: "https://aggiemenus.org"
    },
    {
      title: "Wishlist Organizer",
      description: "A full-stack web application for managing wishlists. Users can create, share, and collaborate on wishlists with friends and family. It features user authentication, real-time updates, and a responsive design for seamless user experience.",
      tags: ["Next.js", "Supabase", "Typescript", "Clerk Auth"],
      imageUrl: "/api/placeholder/400/320",
      githubUrl: "https://github.com/example",
      detailsUrl: "https://www.wishr.tech"
    },
    {
        title: "Flooring FBP",
        description: "An E-commerce web app for browsing and purchasing flooring options. It offers a seamless shopping experience with dynamic product listings and efficient cart management. Optimized for performance, it features reduced load times and scalable, modular components.",
        tags: ["Next.js", "Supabase", "Typescript", "Clerk Auth"],
        imageUrl: "/api/placeholder/400/320",
        githubUrl: "https://github.com/jasonpeng7/FullStackFlooringWebApp",
        detailsUrl: "https://github.com/jasonpeng7/FullStackFlooringWebApp"
      },
      {
        title: "Accio",
        description: "A university-wide lost and found app with an efficient search system. Using Spring Boot, RESTful APIs, and a Next.js frontend, it offers quick item searches and an interactive user interface, aligning with Figma design systems for an enhanced user experience.",
        tags: ["Next.js", "Supabase", "Typescript", "Clerk Auth"],
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