import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardDemoHarvard } from "./contentcardCMPNT";
import { CardDemoOverlay } from "./contentcardCMPNT";
import { CardDemoSlide } from "./contentcardCMPNT";

export function TimelineDemo() {
  const data = [
    {
      title: "Harvard CS50",
      content: (
        <div>
          <CardDemoHarvard/>
        </div>
      ),
    },
    {
      title: "Web Developer",
      content: (
        <div>
          <CardDemoOverlay/>
        </div>
      ),
    },
    {
      title: "CodeLab",
      content: (
        <div>
          <CardDemoSlide/>
        </div>
      ),
    },
    {
        title: "Aggie Works",
        content: (
          <div>
            <p
              className="text-black text-xs md:text-sm font-normal mb-4">
                AggieWorks is a student ran coding organization that builds real-world software projects for students, by students. 
                My role is to collaborate in cross-functional teams to deliver full-stack applications that address specific needs in student life.
            </p>
            <div className="">
              {/* <img
                src="aggieworks.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
              <div
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
          </div>
        ),
      },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
