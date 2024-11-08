"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="z-0 h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
    </div>)
  );
}

const testimonials = [
    {
        svgPath: "/jslogo.svg",
    },
    {
        svgPath: "/html.svg",
    },
    {
        svgPath: "/excel.svg",
    },
    {
        svgPath: "/pythonlogo.svg",
    },
    {
        svgPath: "/css.svg",
    },
    {
        svgPath: "/c.svg",
    },
];
