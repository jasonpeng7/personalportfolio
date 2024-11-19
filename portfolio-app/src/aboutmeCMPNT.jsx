import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textArray = [
    'an Aspiring Software Engineer.',
    'an Independent Creator.',
    'a Tech Enthusiast.',
    'a Creative Developer.'
  ];
  const speed = 60;

  useEffect(() => {
    const type = () => {
      let currentText = textArray[currentIndex];

      if (!isDeleting) {
        if (i < currentText.length) {
          setText(currentText.substring(0, i + 1));
          setI(i + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (i > 0) {
          setText(currentText.substring(0, i - 1));
          setI(i - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % textArray.length);
        }
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [i, isDeleting, currentIndex, textArray]);

  return (
    <div className="mx-4 sm:mx-16 flex flex-col text-dark_navy">
      <div className="text-4xl md:text-5xl lg:text-6xl">
        <div className="red-hat-bold mb-5 px-5">
          I am
        </div>
        {/* Container with dynamic height and proper line height */}
        <div className="red-hat-bold px-5 min-h-[3em] sm:min-h-[2.5em] lg:min-h-[2em] relative mb-14">
          {/* Use absolute positioning with proper line height and word break */}
          <div className="absolute w-full leading-tight sm:leading-normal lg:leading-relaxed break-words">
            {text}
            <span className="cursor">|</span>
          </div>
        </div>
      </div>

      <div className="px-5">
        <p className="red-hat text-sm w-full md:text-xl md:w-2/3 mb-14 md:mb-24">
          I am currently a second-year student at the University 
          of California, Davis, pursuing a Bachelor of Science 
          degree in Computer Science. Over the past year, I have 
          gained practical experience as an independent engineer 
          and developer, actively engaging in various personal and 
          academic projects. My hands-on approach has allowed me 
          to deepen my understanding of software development and 
          enhance my technical skills.
        </p>
      </div>

      <div className="px-5">
        <p className="red-hat text-sm w-full md:text-xl md:w-2/3">
          Looking ahead, I am eager to transition into a full-time 
          software engineering role, where I can contribute to 
          innovative projects and tackle complex challenges. I 
          am particularly interested in opportunities at dynamic 
          startups or established companies where I can leverage 
          my skills in both frontend and backend development. My 
          goal is to be part of a collaborative team that drives 
          technological advancements and delivers impactful 
          solutions.
        </p>
      </div>
    </div>
  );
};

export default TypeWriter;