/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
  colors: {
    'text': 'var(--text)',
    'background': 'var(--background)',
    'primary': 'var(--primary)',
    'secondary': 'var(--secondary)',
    'accent': 'var(--accent)',
   },
}

