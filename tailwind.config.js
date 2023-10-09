/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        normal: "var(--colour-normal)",
        variant: "var(--colour-variant)",
      },
    },
  },
  plugins: [],
};
