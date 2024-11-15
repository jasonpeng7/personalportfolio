"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 192 : 256; // Updated for new square dimensions
      const gap = isMobile() ? 3 : 3;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full -my-[100px] md:my-[0] ">
        <div
          className="items-center flex w-full overflow-x-scroll overscroll-x-auto py-4 md:py-8 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div
            className={cn(
              " absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-3",
              "max-w-5xl "
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[20%] rounded-xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="relative h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-40"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-dark_navy" />
          </button>
          <button
            className="relative h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-40"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-dark_navy" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (<>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg w-full fixed inset-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            layoutId={layout ? `card-${card.title}` : undefined}
            className="max-w-[400px] bg-white dark:bg-neutral-900 max-h-[400px] z-[60] my-8 p-4 md:p-6 rounded-xl font-sans relative mx-auto mt-20">
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={handleClose}>
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-black dark:text-white">
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-xl md:text-3xl font-semibold text-neutral-700 mt-4 dark:text-white">
              {card.title}
            </motion.p>
            <div className="py-6">{card.content}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      className="ml-4 rounded-xl bg-gray-100 dark:bg-neutral-900 h-64 w-64 md:h-72 md:w-72 lg:w-80 lg:h-80 overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div
        className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-4">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="red-hat-bold text-black text-xs md:text-sm font-medium font-sans text-left">
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="red-hat text-black text-sm md:text-lg font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-1">
          {card.title}
        </motion.p>
      </div>
      <img
        src={card.src}
        alt={card.title}
        className="object-cover w-full h-full absolute inset-0"
      />
    </motion.button>
  </>);
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};