import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardDemoHarvard } from "./contentcardCMPNT";
import { CardDemoOverlay } from "./contentcardCMPNT";
import { CardDemoSlide } from "./contentcardCMPNT";
import { CardDemoAggie } from "./contentcardCMPNT";

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
            <CardDemoAggie/>
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
