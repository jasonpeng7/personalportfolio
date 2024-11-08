import { themes, useTheme } from "./themecontext";
import { useState, useEffect } from 'react';

export function FramerContainer({ children }) {
    const { currentTheme } = useTheme();

    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with your transition duration

        return () => clearTimeout(timer);
    }, [currentTheme]);

    return(
        <div className="">
            <framercontainer className={`${themes[currentTheme]} ${themes[currentTheme].text} absolute inset-5 overflow-y-auto overflow-x-hidden
            pt-32 md:pt-20 lg:pt-20 xl:pt-10 2xl:pt-32 transition-all duration-500 ease-in-out`}>
                {children}
            </framercontainer>

            <div 
            className={`absolute inset-0 bg-black pointer-events-none
                transition-opacity duration-500 ease-in-out
                ${isTransitioning ? 'opacity-40' : 'opacity-0'}`}
            />
        </div>        
    );
}