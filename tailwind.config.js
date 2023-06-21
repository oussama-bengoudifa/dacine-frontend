/** @type {import('tailwindcss').Config} */

const themeConstants = {
  paper: "#FFFFFF",
  primary: "#2f2e41",
  primaryDark: "#1b1b26",
  secondary: "#FF5E04",
  secondaryDark: "#e55603",
  black: "#000000",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: themeConstants.paper,
        primary: themeConstants.primary,
        primaryDark: themeConstants.primaryDark,
        secondary: themeConstants.secondary,
        black: themeConstants.black,
      },
    },
  },
  plugins: [],
};
