/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vintage-blue": "#C6E7FF",
        "vintage-blue-light": "#D4F6FF",
        "vintage-blue-white": "#FBFBFB",
        "vintage-orange": "#FFDDAE",
      },
    },
  },
  plugins: [],
};
