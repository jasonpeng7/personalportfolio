"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className=" rounded-3xl mb-4">

        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Flooring Web App",
    title: "Flooring sales platform",
    src: "/flooring.png",
    content: <DummyContent />,
  },
  {
    category: "AggieMenus",
    title: "University DC menu app",
    src: "/aggiemenus.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Accio",
    title: "University lost and found app",
    src: "/accio.jpg",
    content: <DummyContent />,
  },

  {
    category: "JasonFlix",
    title: "Movie review + ratings app",
    src: "/jasonflix.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Stealth Startup",
    title: "Coming soon",
    src: "/logo.svg",
    content: <DummyContent />,
  },
  {
    category: "Stealth Startup",
    title: "Coming soon",
    src: "/logo.svg",
    content: <DummyContent />,
  },
];
