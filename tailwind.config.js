/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: colors.black,
      primaryLight: "#334155",
      primaryDark: "#1F2937",
      primaryPink: "#F8173E",
      secondary: colors.white,
      transparent: "transparent",
      black: colors.black,
      gray: colors.neutral,
      lightGray: "#dad5de",
      white: colors.white,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      sky: colors.sky,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      neutral: colors.neutral,
      slate: colors.slate,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
