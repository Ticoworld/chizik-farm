/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        lightGradientLeft: 'rgba(0, 0, 0, 0.985)',
        lightGradientRight: 'rgba(84, 161, 112, 0.335)',
        
      },
      width: {
        '10px': '10px',
        '480': '480px',
        '470': '470px',
        '350': '350px',
        '320': '320px',
      },
      height : {
        '100': '10px'
      }
    },
  },
  plugins: [],
}

