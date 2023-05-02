/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-flex-mono)", "monospace"],
        heading: ["var(--font-merriweather)", "serif"],
      },
      colors: {
        charcoal: "#424141",
        lightgray: "#717578",
        beige: "#FFFBF3",
      },
    },
  },
  plugins: [],
};
