/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
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
        'blob-gentle-float': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5%, 5%) scale(1.02)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'blob-1': 'blob-move 20s ease-in-out infinite alternate',
        'blob-2': 'blob-move 25s ease-in-out infinite alternate-reverse',
        'blob-3': 'blob-pulse 18s ease-in-out infinite', 
        'blob-gentle-float': 'blob-gentle-float 30s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}