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
            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
          )}>
          <div
            className="absolute w-full h-full top-0 left-0 transition duration-300 opacity-0 bg-black group-hover:opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/logo.svg"
              className="h-10 w-10 object-cover" />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                Background
              </p>
              <p className="text-sm text-gray-400">1 min read</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Student
            </h1>
            <p
            className="text-white text-xs md:text-sm font-normal mb-8">
            Completed Harvard CS50, gaining a strong foundation in C, Python, and web technologies with skills in debugging, optimization, and memory management.
            </p>
          </div>
        </div>
      </div>
    );
  }

  export function CardDemoAggie() {
    return (
      <div className="max-w-xs w-full group">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
          )}>
          <div
            className="absolute w-full h-full top-0 left-0 transition duration-300 opacity-0 bg-black group-hover:opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/logo.svg"
              className="h-10 w-10 object-cover" />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                Manu Arora
              </p>
              <p className="text-sm text-gray-400">2 min read</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Author Card
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Card with Author avatar, complete name and time to read - most
              suitable for blogs.
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
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src="/logo.svg"
              className="h-10 w-10 object-cover" />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                Background
              </p>
              <p className="text-sm text-gray-400">1 min read</p>
            </div>
          </div>
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              Fullstack Engineer
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
            <p
            className="text-white text-xs md:text-sm font-normal mb-8">
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
      <Card>
        <CardSkeletonContainer>
          <Skeleton />
        </CardSkeletonContainer>
        <CardTitle>Software Engineer</CardTitle>
        <CardDescription>
          <p
            className="text-black text-xs md:text-sm font-normal mb-8">
            Student-run organization at UC Davis that builds products for students and helps clients solve technical challenges. I am responsible for working in cross-functional teams to 
            design and deliver full-stack applications, providing helpful, real-world software solutions for the UC Davis community and tailored solutions for external clients.
          </p>
        </CardDescription>
      </Card>
    );
  }
  
  const Skeleton = () => {
    const scale = [2, 2.1, 2];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
      [".circle-1", { scale, transform }, { duration: 0.8 }],
      [".circle-2", { scale, transform }, { duration: 0.8 }],
      [".circle-3", { scale, transform }, { duration: 0.8 }],
      [".circle-4", { scale, transform }, { duration: 0.8 }],
      [".circle-5", { scale, transform }, { duration: 0.8 }],
    ];
  
    useEffect(() => {
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      });
    }, []);
  
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-8 w-8 circle-1">
            <img src="/logo.svg" className="h-4 w-4 " />
          </Container>
          <Container className="h-12 w-12 circle-2">
          <img src="/logo.svg" className="h-4 w-4 " />
          </Container>
          <Container className="circle-3">
          <img src="/logo.svg" className="h-4 w-4 " />
          </Container>
          <Container className="h-12 w-12 circle-4">
          <img src="/logo.svg" className="h-4 w-4 " />
          </Container>
          <Container className="h-8 w-8 circle-5">
          <img src="/logo.svg" className="h-4 w-4 " />
          </Container>
        </div>

      </div>
    );
  };
  
  export const Card = ({ className, children }) => {
    return (
      <div
        className={cn(
          "w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  export const CardTitle = ({ className, children }) => {
    return (
      <h3
        className={cn(
          "text-lg font-semibold text-gray-800 dark:text-white py-2",
          className
        )}
      >
        {children}
      </h3>
    );
  };
  
  export const CardDescription = ({ className, children }) => {
    return (
      <p
        className={cn(
          "text-sm font-normal text-neutral-600 dark:text-neutral-400",
          className
        )}
      >
        {children}
      </p>
    );
  };
  
  export const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
    return (
      <div
        className={cn(
          "h-[11rem] rounded-xl z-40",
          className,
          showGradient &&
            "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        {children}
      </div>
    );
  };
  
  const Container = ({ className, children }) => {
    return (
      <div
        className={cn(
          `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
      `,
          className
        )}
      >
        {children}
      </div>
    );
  };
  
