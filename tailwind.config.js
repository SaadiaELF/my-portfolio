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
  },
};
export const plugins = [];
