const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColors: {
          100: "#1d1d42", // BG
          200: "#141432", // Contents BG
          300: "#26264e", // Hover
          400: "#524eee", // Buttons & Icons
          500: "#4e2ecf", // Cards
          600: "#6fcf97", // Green
          700: "#1b1a43", // Cards inside Contents
        },
      },
      fontFamily: {
        myFont: ["Poppins", "sans-serif"],
        fancy: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
