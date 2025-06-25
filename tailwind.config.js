/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: "#006D5B",
        background: "#F4F4F4",
        white: "#FFFFFF",
        darkGray: "#333333",
        lightGray: "#717171",
        danger: "#D44141",

        dark: {
          primary: "#2FA98C",
          background: "#000000",
          darkGray: "#242424",
          lightGray: "#D9D9D9",
        },
      },
      keyframes: {
        fadeZoom: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeZoom: "fadeZoom 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
