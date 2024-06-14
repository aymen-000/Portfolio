/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
import rec from './src/assets/Rectangle.png'
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        canilari: ['Canilari', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], 
        inter : ['Inter' , 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': " url('C:\\Users\\User1\\Desktop\\porfolio\\my_portfolio\\src\\assets\\Rectangle.png')"
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

