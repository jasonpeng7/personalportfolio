"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreviewPROJECT() {
  return (
    <div className="min-h-52 relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage-project"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <h1 className="z-20 FRL-bold text-center sm:text-left text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-dark_navy z-20 max-w-full break-words leading-tight">
        Projects.
      </h1>
    </div>
  );
}


export function SparklesPreviewBACKGROUND() {
  return (
    <div className="min-h-52 relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage-background"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <h1 className="z-20 FRL-bold text-center sm:text-left text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-dark_navy z-20 max-w-full break-words leading-tight">
        Background.
      </h1>
    </div>
  );
}


export function SparklesPreviewABOUTME() {
  return (
    <div className="min-h-52 relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage-aboutme"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <h1 className="z-20 FRL-bold text-center sm:text-left text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-dark_navy z-20 max-w-full break-words leading-tight">
        About Me.
      </h1>
    </div>
  );
}

export function SparklesPreviewCONTACT() {
  return (
    <div className="min-h-52 relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage-contact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>
      <h1 className="z-20 FRL-bold text-center sm:text-left text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-dark_navy z-20 max-w-full break-words leading-tight">
        Contact.
      </h1>
    </div>
  );
}

