/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "**/*.html", 
    "./assets/**/*.{js}", 
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00a4b0",
        primary: {
          DEFAULT: "#f78f9b",
          hover: "#faadb6",
        },
      },
    },
  },
  plugins: [],
};
