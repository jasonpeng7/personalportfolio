"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (        <div className="w-full bg-inherit font-sans md:px-10" ref={containerRef}>
    <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
      {data.map((item, index) => (
        <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
          <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-dark_navy p-2" />
            </div>
            <h3 className="red-hat-extrabold lg:block hidden text-xl md:pl-20 md:text-5xl font-bold text-dark_navy md:w-[300px]">
              {item.title}
            </h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 flex-1">
            <h3 className="red-hat-extrabold text-dark_navy block lg:hidden text-2xl mb-4 text-left font-bold">
              {item.title}
            </h3>
            <div className="w-3/4 red-hat-bold text-dark_navy">
              {item.content}
            </div>
          </div>
        </div>
      ))}
        <div
          style={{
            height: height + "px",
          }}
          className="min-h-[1200px] absolute left-8 md:left-8 md:max-h-full md:min-h-full top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-dark_navy to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>)
  );
};