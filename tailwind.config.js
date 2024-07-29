/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 200s  infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-400%)' },
        }},
      colors:{
        accent:"#179957",
        accentDark:"#184D47",
      },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
}