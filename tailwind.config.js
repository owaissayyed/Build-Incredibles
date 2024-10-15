import { linearGradient } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#30D5C8',
        secondprimary: '#2563eb',
        lightColor: 'white',
        lightGray: '#e5e7eb',
        darkColor: '#000000',  // Removed extra space
        darkGray: '#1f2937',
        thirdprimary: '#2563eb'
      },
    },
  },
  darkMode: 'class', // Enable dark mode based on class
  plugins: [],
};
