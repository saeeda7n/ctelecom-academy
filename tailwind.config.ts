import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./data/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: { primary: "#F54029" },
   borderRadius: {
    "7xl": "3.75rem",
    "5xl": "2.5rem",
   },
  },
  fontFamily: {
   estedad: ["var(--estedad-font)", "var(--outfit-font)"],
   outfit: ["var(--outfit-font)", "var(--estedad-font)"],
  },
  container: {
   center: true,
   padding: {
    DEFAULT: "1.5rem",
   },
   screens: {
    "2xl": "1300px",
   },
  },
 },
 plugins: [],
};
export default config;
