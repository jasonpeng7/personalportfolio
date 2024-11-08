import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="mx-34" ref={ref}>
      <div className="relative overflow-hidden p-2 md:p-4">
        <div className="m-4 sm:m-16 max-w-7xl">
          <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-start">

            <h2 className="raleway_regular mb-4 text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl">Featuring...</h2>
            <div className="flex items-start justify-start gap-2 mx-8">
                <button
                    className={`rounded-lg border-[1px] border-neutral-400  p-1.5 text-2xl transition-opacity ${
                    CAN_SHIFT_LEFT ? "" : "opacity-30"
                    }`}
                    disabled={!CAN_SHIFT_LEFT}
                    onClick={shiftLeft}
                >
                    <FiArrowLeft />
                </button>
                <button
                    className={`rounded-lg border-[1px] border-neutral-400 p-1.5 text-2xl transition-opacity ${
                    CAN_SHIFT_RIGHT ? "" : "opacity-30"
                    }`}
                    disabled={!CAN_SHIFT_RIGHT}
                    onClick={shiftRight}
                >
                    <FiArrowRight />
                </button>
            </div>
            
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
                        
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
                      
          </motion.div>
                  
        </div>
              
      </div>
          
    </section>
  );
};

const Post = ({ imgUrl, author, title, description }) => {
  return (
    <div
      className="items-center justify-center relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 sm:p-4"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
            
      <img
        src={imgUrl}
        className="mb-3 rounded-lg object-cover my-4 h-[300px] w-[300px] sm:w-full sm:h-[300px]"
        alt={`An image for a fake blog post titled ${title}`}
      />
            
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
                {author}
              
      </span>
            <p className="text-dark_navy mt-1.5 text-lg font-medium w-3/4 sm:w-full">{title}</p>
            <p className="text-sm text-dark_navy w-3/4 sm:w-full">{description}</p>
          
    </div>
  );
};

export default BlogPostCarousel;

const posts = [
  {
    id: 1,
    imgUrl: "/flooring.png",
    author: "Full Stack Engineer",
    title: "FlooringWA by PENG",
    description:
      "Online web app for my fathers business that enables users to browse and purchase flooring for renovation projects",
  },
  {
    id: 2,
    imgUrl: "/aggiemenus.jpeg",
    author: "Software Engineer",
    title: "Aggie Menus",
    description:
      "A web and iOS app designed for UC Davis students to conveniently browse dining hall menus at any time throughout the week, with up-to-date meal options and nutritional information.",
  },
  {
    id: 3,
    imgUrl: "/accio.jpg",
    author: "Frontend Engineer",
    title: "Accio",
    description:
      "An online lost and found marketplace web app specifically designed for UC Davis students, enabling them to search for and post lost items.",
  },
  {
    id: 4,
    imgUrl: "/jasonflix.jpeg",
    author: "Full Stack Engineer",
    title: "Jasonflix",
    description:
      "A website showcasing the hottest movies and TV shows, complete with ratings, reviews, and the ability to preview trailers, all presented with a sleek and user-friendly UI",
  },
  {
    id: 5,
    imgUrl: "/logo.svg",
    author: "Full Stack Engineer",
    title: "Stealth Startup",
    description:
      "Coming soon.",
  },
  {
    id: 6,
    imgUrl: "/logo.svg",
    author: "Backend Engineer",
    title: "Stealth Startup",
    description:
      "Coming soon.",
  },
  {
    id: 7,
    imgUrl: "/logo.svg",
    author: "Backend Engineer",
    title: "Stealth Startup",
    description:
      "Coming soon.",
  },

];
