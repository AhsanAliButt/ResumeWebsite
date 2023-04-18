const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "480px" },
      // => @media (min-width: 480px) { ... }
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }
      md: { max: "770" },
      // => @media (min-width: 770px) { ... }
      lg: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }
      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }
      xxl: { max: "1540px" },
      // => @media (min-width: 1540px) { ... }

      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
        transitionDuration: {
          2000: "2000ms",
        },
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px, #1b1b1b 100px);",
      },
    },
  },
  plugins: [],
};
