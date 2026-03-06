/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F1EB",
        section: "#EFE9E1",
        primary: "#1C1C1C",
        accent: "#C6A75E"
      },
      
       fontFamily: {
    serif: ["Cormorant Garamond", "serif"],
    sans: ["Inter", "sans-serif"]
  }
    },
  },
  plugins: [],
}