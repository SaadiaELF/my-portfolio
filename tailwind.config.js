/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      barlow: ["var(--font-barlow)", ...defaultTheme.fontFamily.mono],
      montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      primary_1: "#222831",
      primary_2: "#393E46",
      secondary_1:'#00ADB5',
      secondary_2:'#00FFF5'
    },
  },
};
export const plugins = [];
