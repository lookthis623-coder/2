/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("tailwindcss/presets")], // ✅ enable default theme
  theme: {
    extend: {},
  },
  plugins: [],
}
