/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./contactUs.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {

        accent: "#00a4b0",

        primary: {
          DEFAULT: "#f78f9b",
          hover: "#faadb6",
        },
      }
    },
  },
  plugins: [

  ],
  "template": "static"

}