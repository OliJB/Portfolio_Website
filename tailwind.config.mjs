/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navy-clr': '#0a192f',
        'orng-clr': '#DD571C',
        'dark-bkg': '#242424',
        'light-gry': '#e4e3e5',

      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'], // Add the custom font
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
