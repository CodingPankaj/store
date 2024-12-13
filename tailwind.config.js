/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      colors: {
        "color-navy-blue": "rgba(var(--color-navy-blue))",
        "color-shadow-blue": "rgba(var(--color-shadow-blue))",
        "color-black": "rgba(var(--color-black))",
        "color-grey-dark": "rgba(var(--color-grey-dark))",
        "color-grey-light": "rgba(var(--color-grey-light))",
        "color-white": "rgba(var(--color-white))",
        "color-red": "rgba(var(--color-red))",
        "color-orange": "rgba(var(--color-orange))",
        "color-yellow": "rgba(var(--color-yellow))",
        "color-blue": "rgba(var(--color-blue))",
        "color-green": "rgba(var(--color-green))",
        "color-purple": "rgba(var(--color-purple))",
      },
    },
  },
  plugins: [],
};
