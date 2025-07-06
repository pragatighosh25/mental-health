/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      
    "./components/**/*.{js,ts,jsx,tsx,mdx}" 
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        darkslategray: '#213650',
        steelblue: '#425f80',
        darkcyan: '#009da3',
      },
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

