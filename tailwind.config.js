/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
    extend: {
      keyframes: {
        'blob-move': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20%, -10%) scale(1.1)' },
          '50%': { transform: 'translate(-15%, 20%) scale(0.95)' },
          '75%': { transform: 'translate(10%, 15%) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'blob-pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
        },
        // Ny subtil rörelse för mer spridning
        'blob-gentle-float': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5%, 5%) scale(1.02)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'blob-1': 'blob-move 20s ease-in-out infinite alternate', // Justerat tid för variation
        'blob-2': 'blob-move 25s ease-in-out infinite alternate-reverse', // Justerat tid för variation
        'blob-3': 'blob-pulse 18s ease-in-out infinite', // Justerat tid för variation
        'blob-gentle-float': 'blob-gentle-float 30s ease-in-out infinite alternate', // Ny animation
      },
    },
  },
  plugins: [],
}