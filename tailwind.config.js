/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero' : "url('./assets/Rectangle1.png')",
        'rectangle2': "url('./assets/Rectangle2.png')",
        'rectangle3':"url('./assets/Rectangle3.png')",
        'rectangle4':"url('./assets/Rectangle4.png')",
        'rectangle5':"url('./assets/Rectangle5.png')",
        'bottom' : "url('./assets/bottom.svg')",
      }
    },
  },
  plugins: [],
}

