/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    // colors: {
    //   glass: 'rgba(255, 255, 255, 0.1)',
    // },

    screens: {
      Mobile : 'mx-sm',
      Tablet : 'max-md',
      Laptop : '1024px',
      Desktop : '1400px',
    },
    fontFamily: {
      'Lexend': ["Lexend", 'sans-serif'],
      'Comfortaa': ["Comfortaa", 'sans-serif'],
      'Jost': ["Jost", 'sans-serif'],
      'Doris': ["Dosis", 'sans-serif'],
      'Josefin': ["Josefin Sans", 'sans-serif'],
      'Roboto': ["Roboto", 'sans-serif'],
      'Poppins': ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}

