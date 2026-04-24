/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bot-dark':  '#2d3d20',
        'bot-mid':   '#6b8a50',
        'bot-light': '#8aab8b',
        'bot-pale':  '#a8bf8c',
        'cream':     '#f7f4ed',
        'cream-dk':  '#eae4d6',
        'tan':       '#c8b89a',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif:  ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
