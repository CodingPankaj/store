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
        "color-navy-blue": "var(--color-navy-blue)",
        "color-shadow-blue": "var(--color-shadow-blue)",
        "color-black": "var(--color-black)",
        "color-grey-dark": "var(--color-grey-dark)",
        "color-grey-light": "var(--color-grey-light)",
        "color-white": "var(--color-white)",
        "color-red": "var(--color-red)",
        "color-orange": "var(--color-orange)",
        "color-yellow": "var(--color-yellow)",
        "color-blue": "var(--color-blue)",
        "color-green": "var(--color-green)",
        "color-purple": "var(--color-purple)",
      },
    },
  },
  plugins: [],
};
