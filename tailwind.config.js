/** @type {import('tailwindcss').Config} */
const heroPatterns = require("tailwindcss-hero-patterns/src/patterns");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    heroPatterns: {
      random: heroPatterns.randomshapes,
      food: heroPatterns.ilikefood,
    },
    heroPatternsShades: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ],
    heroPatternsColors: ["indigo", "yellow", "gray", "slate", "rose"],
    extend: {
      fontFamily: {
        sans: ["Ysabeau", "sans-serif"],
        serif: ["Raleway", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-hero-patterns")],
};
