/** @type {import('tailwindcss').Config} */
// export default {

  module.exports = {


  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        UofS: {
          Red: "#EF4A3B",
          DarkBlue: "#170D38",
          Grey: "#C2BFD2",
          Burgundy: "#8A0045",
          DigitalBlue: "#304DFC",
          Teal: {
            100: "#006B82",
            70: "#4c98a8",
            50: "#7fb5c1",
          },
          PaleBlue: {
            100: "#BDF7E3",
            70: "#d0f9eb",
            50: "#ddfbf1",
          },
          Neon: {
            100: "#C4FF36",
            70: "#d6ff73",
            50: "#e1ff9b",
          },
          Yellow: {
            100: "#FFFF58",
            70: "#ffff8b",
            50: "#fffeab",
          },
          Peach: {
            100: "#FFC3B6",
            70: "#ffd5cc",
            50: "#ffe1d9",
          },
          Lavender: {
            100: "#D18FFF",
            70: "#e0b1ff",
            50: "#e8c7fe",
          },

        },
        Game: {
          Dark: "#181b1b",
          Light: "#e4e0e0",
        },
        Social:{
          artstation: "#13aff0",
          itch: "#ff6160",
          youtube: "#ea402e",
          tiktok: "#FE2C55",
        }
      },


      fontFamily: {
        doto: ['"Doto"', 'sans-serif'],
        bebas: ["bebas-neue-pro", "sans-serif"],
      },
      fontWeight: {
        light: '300',
        bold: '700',
        black: '900',
      },
      fontSize: {
        'doto-title': 'clamp(2.5rem, 8vw, 5rem)', // Custom title sizing
      },




      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 0px' },
          '100%': {
            textShadow: '0 0 40px #ffffff, 0 0 80px #ffffff',
          },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}






