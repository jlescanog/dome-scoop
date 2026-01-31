/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f04299",
        "background-light": "#f8f6f7",
        "background-dark": "#221019",
        "mint": "#e6fffa",
        "lavender": "#f3ebff",
        "sakura": "#fff0f6"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
      backgroundImage: {
        'kawaii-pattern': "radial-gradient(#f0429922 1px, transparent 1px), radial-gradient(#f0429911 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}