import { useRef, useState, useEffect } from 'react'
import './App.css'
import { CoverDemo } from './coverCMPNT'
import { HeroScrollDemo } from './containerscrollCMPNT'
import { Intro } from './introCMPNT'
import { TimelineDemo } from './timelineCMPNT'
import { InfiniteMovingCardsDemo } from './movingcardsCMPNT'
import LiquidSideNav from './menuCMPNT'
import LoadingOverlay from './loadscreenCMPNT'
import { RevealBento } from './bentogridCPMNT'
import TerminalContact from './contactCMPNT'
import TypeWriter from './aboutmeCMPNT'
import { ThemeProvider } from './themecontext'
import { FramerContainer } from './framercontainerCMPNT'
import BlogPostCarousel from './blog-carouselCMPNT'
import { SparklesPreviewABOUTME, SparklesPreviewPROJECT } from './sparkleCMPNT'
import { SparklesPreviewBACKGROUND } from './sparkleCMPNT'
import { SparklesPreviewCONTACT } from './sparkleCMPNT'
import Footer from './footerCMPNT'


function App() {
    const scrollTop = useRef(null);
    const [isOpen, setIsOpen] = useState(false); // Move navbar state to App

    const homeRef = useRef(null);
    const contactRef = useRef(null);
    const abtmeRef = useRef(null);
    const projectRef = useRef(null);
    const bgRef = useRef(null);

    const scrollToTop = () => {
        setIsOpen(false); // Close the navbar if it's open
        scrollTop.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <ThemeProvider>
        <outsideFrame className="min-h-screen w-full fixed inset-0">
            {/*  */}
            <LoadingOverlay/>
            {/* Frame container */}
            <FramerContainer className="">
                {/* Navbar */}
                <div className=''>
                    <LiquidSideNav isOpen={isOpen} setIsOpen={setIsOpen} scrollToTop={scrollToTop} 
                    scrollToSection={scrollToSection}
                    refs={{homeRef, contactRef, bgRef, abtmeRef, projectRef}}/>
                </div>

                {/* Main content */}
                <main className="w-full min-h-screen">
                    <section className="w-full">
                        {/* Intro section */}
                        <introsection ref = {scrollTop} className="flex flex-col xl:flex-row lg:flex-row items-center min-h-96 w-full">
                            <Intro/>
                        </introsection>
                    </section>

                    <section className=''>
                        <InfiniteMovingCardsDemo/>
                    </section>

                    <section ref={abtmeRef} className=''>
                        <SparklesPreviewABOUTME/>
                    </section>

                    <section className='w-full my-12 md:my-24'>
                        <TypeWriter/>
                    </section>

                    <section ref={bgRef} className=' my-12 md:my-24'>
                        {/* <div className="max-w-fit py-20 px-4 md:px-18 lg:px-20">
                            <h2 className="FRL-bold text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl mb-4 text-dark_navy max-w-4xl">
                            Background
                            </h2>
                            <p
                            className="raleway_regular text-dark_navy text-md md:text-base max-w-sm">
                            Dive into my technical journey.
                            </p>
                        </div> */}
                        <SparklesPreviewBACKGROUND/>
                    </section>

                    <section className='flex flex-row pt-80 ml-10 mt-[-350px] mb-10'>
                        <TimelineDemo/>
                    </section>

                    <section ref={projectRef} className='my-12 md: my-24'>
                        <SparklesPreviewPROJECT/>
                    </section>

                    <section className='flex flex-col 3xl:flex-row'>
                        <BlogPostCarousel/>
                    </section>

                    <section className='my-12 md: my-24'>
                        <SparklesPreviewCONTACT/>
                    </section>

                    <section ref={contactRef} id="contact" className='' >
                        <TerminalContact/>
                    </section>

                    <Footer/>
                </main>
            </FramerContainer>
        </outsideFrame>
    </ThemeProvider>
  )
}

export default App