import defaultTheme from 'tailwindcss/defaultTheme';
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'extreme_light_blue': '#B9C3DD52',
      'extreme_light_blue2': 'rgba(147, 175, 203, 0.395)',
      'extreme_light_blue3': 'rgba(147, 175, 203)',
      'neutral-grey3': '#768692',
      'pastel-blue': '#4a9dae',
      'neutral-grey': '#B4BEC9',
      'dark_navy': '#001543',
      'dark-slate': '#3C4758',
      'neutral-950': '#0A0A0A',
      'neutral-700': '#4B4B4B',
      'neutral-500': '#808080',
      'neutral-300': '#D1D1D1',
      'neutral-200': '#E5E5E5',
      'purple-500': '#8B5CF6', // Adjust shade if needed
      'blue-500': '#3B82F6',   // Adjust shade if needed
      slate: {
        950: '#020617', // Very dark slate
        900: '#0f172a',
        800: '#1e293b',
        700: '#334155',
        600: '#475569',
        500: '#64748b',
        400: '#94a3b8',
        300: '#cbd5e1',
        200: '#e2e8f0',
        100: '#f1f5f9',
        50: '#f8fafc',
      },
      cyan: {
        500: '#06b6d4',
        400: '#22d3ee',
      },
      
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
