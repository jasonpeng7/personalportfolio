import React from "react";

export function Intro() {
  return (
    //FIX RESPONSIVENES OF FIRST LINE
    <div className="flex items-center justify-center w-full lg:flex-row flex-col px-10">
      {/* Text Wrapper */}
      <div className="w-1/5"></div>
      
      <div className="flex flex-col items-center md:items-start lg:items-start xl:items-start 2xl:items-start space-y-4 text-left">
        <h2 className="FRL-bold bg-clip-text text-transparent bg-gradient-to-b from-dark_navy to-neutral-600 dark:from-neutral-600 dark:to-white 
        text-6xl md:text-7xl lg:text-7xl 2xl:text-9xl py-2 md:py-10 tracking-tight">
          My name is, <br /> Jason Peng.
        </h2>
        <p className="raleway_regular text-dark_navy text-center md:text-left lg:text-left xl:text-left 2xl:text-left max-w-xl text-sm md:text-lg">
          Passionate computer science student and design enthusiast, crafting innovative solutions with code and creativity
        </p>
      </div>
      {/* SVG Image */}
      <div className="flex justify-center items-center h-3/4 w-1/2">
        <img src="/me2.svg" alt="me-svg" className="min-w-[400px] max-w-[700px] sm:min-w-[500px] sm:max-w-[800px] object-contain"/>
      </div>
    </div>
  );
}
