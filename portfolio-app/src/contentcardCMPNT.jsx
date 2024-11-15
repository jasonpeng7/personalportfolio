import { cn } from "@/utils/cn";
import { animate, motion } from "framer-motion";
import { GoCopilot } from "react-icons/go";
import React, { useEffect, useState } from "react";


export function CardDemoHarvard() {
    return (
      <div className="w-full group">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-white bg-[linear-gradient(90deg,#f9f9f9_2px,transparent_2px),linear-gradient(180deg,#f9f9f9_2px,transparent_2px)] bg-[size:20px_20px]"
            )}>
          <div
            className="absolute w-full h-full top-0 left-0 transition duration-300 opacity-0"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/logo.svg"
              className="h-10 w-10 object-cover" />
            <div className="flex flex-col">
              <p className="font-normal text-base text-dark_navy relative z-10">
                Background
              </p>
              <p className="text-sm text-dark_navy opacity-50">Start 1 min read</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="text-dark_navy font-bold text-xl md:text-2xl relative z-10">
              Student
            </h1>
            <p
            className="text-dark_nmavy text-xs md:text-sm font-normal mb-4">
            Completed Harvard CS50, gaining a strong foundation in C, Python, and web technologies with skills in debugging, optimization, and memory management.
            </p>
          </div>
        </div>
      </div>
    );
  }

  export function CardDemoAggie() {
    return (
      <div className="w-full group">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-white bg-[linear-gradient(30deg,#001543_1px,transparent_1px),linear-gradient(150deg,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px]"
            )}>
          <div
            className="absolute w-full h-full top-0 left-0 transition duration-300 opacity-0"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/logo.svg"
              className="h-10 w-10 object-cover" />
            <div className="flex flex-col">
              <p className="font-normal text-base text-dark_navy relative z-10">
                Background
              </p>
              <p className="text-sm text-dark_navy opacity-50">End read</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-dark_navy relative z-10">
              Full Stack Engineer
            </h1>
            <p
              className="text-dark_navy text-xs md:text-sm font-normal mb-4">
                AggieWorks is a student ran coding organization that builds real-world software projects for students, by students. 
                My role is to collaborate in cross-functional teams to deliver full-stack applications that address specific needs in student life.
            </p>
          </div>
        </div>
      </div>
    );
  }

  export function CardDemoOverlay() {
    return (
      <div className="w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-white bg-[linear-gradient(45deg,#f0f0f0_2px,transparent_2px),linear-gradient(-45deg,#f0f0f0_2px,transparent_2px)] bg-[size:15px_15px]"
          )}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-2xl text-dark_navy relative">
              Fullstack Engineer
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
            <p
            className="text-dark_navy text-xs md:text-sm font-normal mb-4">
              I develop full-stack web applications using React for frontend and Express/Node for backend development. I create tailored websites and web applications for personal portfolios and small businesses. 
              I specialize in responsive design, modular components, and optimized performance, ensuring a seamless user experience</p>
            </p>
          </div>
        </div>
      </div>
    );
  }

  export function CardDemoSlide() {
    return (
      <div className="w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-white bg-[linear-gradient(90deg,#f0f0f0_1px,transparent_1px)] bg-[size:8px_8px]"            
            )}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-2xl text-dark_navy relative">
              Fullstack Engineer
            </h1>
            <p className="font-normal text-base text-dark_navy relative my-4">
            <p
            className="text-dark_navy text-xs md:text-sm font-normal mb-4">
              Code full-stack web applications using React for frontend and Express/Node for backend development. I create tailored websites and web applications for personal portfolios and small businesses. 
              I specialize in responsive design, modular components, and optimized performance, ensuring a seamless user experience</p>
            </p>
          </div>
        </div>
      </div>
    );
  }

