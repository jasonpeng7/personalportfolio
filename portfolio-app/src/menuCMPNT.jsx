import { useState } from "react";
import { useRef } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { ThemeSwitcher } from './themeswitcherCMPNT'
import { ThemeProvider } from './themecontext'


const LiquidSideNav = ( {scrollToTop, scrollToSection, refs} ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-h-fit fixed right-5 top-5 w-full pl-12 py-5 px-5 z-40">
      <div className="flex justify-between items-center text-white">
        <motion.button className="w-[75px]" onClick={scrollToTop} whileTap={{ scale: 0.7 }}>
            <img src="/logo.svg" alt="JP Logo" className="" />
        </motion.button>
        <ThemeSwitcher/>
        <motion.button
          whileHover={{ rotate: "180deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-3xl bg-white opacity-50 text-black hover:text-indigo-500 transition-colors p-3 sm:p-4 rounded-full shadow-[0_0_32px_rgba(34,_42,_53,_0.15),_0_4px_4px_rgba(0,_0,_0,_0.1),_0_0_0_2px_rgba(34,_42,_53,_0.1),_0_0_8px_rgba(34,_42,_53,_0.2),_0_20px_80px_rgba(47,_48,_55,_0.1),_0_1px_0_rgba(255,_255,_255,_0.15)_inset]"
        >
          <FiMenu />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} scrollToSection={scrollToSection} refs={refs}/>
    </div>
  );
};

const Nav = ({ isOpen, setIsOpen, scrollToSection, refs }) => {

  return (
    <motion.nav
      className="fixed inset-5 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 z-40"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      {/* Close button */}
      <motion.button
        className="absolute top-8 right-8 text-3xl bg-white text-black hover:text-indigo-500 border border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>

      {/* Logo */}
      <motion.button
        className="absolute top-5 left-5 hover:border-indigo-500 transition-colors rounded-full"
        whileHover={{ rotate: "360deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <img src="/logo.svg" alt="JP Logo" className="w-[75px]" />
      </motion.button>

      {/* Navigation Links */}
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col items-center justify-center gap-8 px-4"
      >
        <NavLink 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          text="About Me"
          onClick={() => {
            setIsOpen(false);
            scrollToSection(refs.abtmeRef);
          }}
        />

        <NavLink 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          text="Background" 
          onClick={() => {
            setIsOpen(false);
            scrollToSection(refs.bgRef);
          }}
        />

        <NavLink 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          text="Projects"
          onClick={() => {
            setIsOpen(false);
            scrollToSection(refs.projectRef);
          }}
        />

        <NavLink 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          text="Contact"
          onClick={() => {
            setIsOpen(false);
            scrollToSection(refs.contactRef);
          }}
        />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, isOpen, setIsOpen, onClick }) => {
  return (
    <motion.button
      className="inline-block z-10 text-white red-hat-extrabold shadow-2xl w-fit font-black text-3xl md:text-6xl hover:text-black transition-colors"
      animate={isOpen ? "open" : "closed"}
      variants={navLinkVariants}
      onClick= {onClick}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href="#"
    >
      {text}
    </motion.button>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};