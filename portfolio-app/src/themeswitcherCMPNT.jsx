import { themes, useTheme } from "./themecontext";
import { motion } from "framer-motion";
export function ThemeSwitcher() {
    const { currentTheme, setCurrentTheme } = useTheme();

    return(
        <div className="px-5 lg:flex lg:flex-row xl:flex xl:flex-row gap-5 grid grid-rows-2 grid-cols-2">
            {Object.keys(themes).map((theme) => (
                <motion.button key={theme} whileTap={{ scale: 0.7 }} onClick={() => setCurrentTheme(theme)} 
                className={`min-w-[70px] md:min-w-[90px] px-3 py-1 items-center justify-center rounded-md text-xs md:text-sm  
                transition-all duration-300 ease-in-out transform 
                ${currentTheme === theme 
                  ? 'bg-gray-800 raleway_regular text-white' 
                  : 'bg-gray-400 text-black hover:bg-gray-300 raleway_regular'
                }`}
                >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </motion.button>
            ))}
        </div>
    );
}