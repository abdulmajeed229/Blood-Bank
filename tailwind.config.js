/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/image.jpg')",
        'hero2': "url('./images/back.jpg')",
        'hero3': "url('./images/tech.jpg')",
        'card': "url('./images/card.jpg')"
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1302px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Menlo', 'monospace'],
      },

   
    },
  },
  plugins: [],
}