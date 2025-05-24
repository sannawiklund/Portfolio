/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      keyframes: {
        // En enkel animation för att flytta och skala
        'blob-move': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20%, -10%) scale(1.1)' },
          '50%': { transform: 'translate(-15%, 20%) scale(0.95)' },
          '75%': { transform: 'translate(10%, 15%) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        // En annan animation för variation
        'blob-pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
        },
        // För att skifta färg (om du vill animera färger direkt)
        'color-shift': {
          '0%, 100%': { backgroundColor: 'rgba(255, 165, 0, 0.7)' }, // Orange
          '33%': { backgroundColor: 'rgba(138, 43, 226, 0.7)' }, // Blåviolett
          '66%': { backgroundColor: 'rgba(0, 191, 255, 0.7)' }, // Ljusblå
        },
      },
      animation: {
        'blob-1': 'blob-move 18s ease-in-out infinite alternate',
        'blob-2': 'blob-move 22s ease-in-out infinite alternate-reverse',
        'blob-3': 'blob-pulse 15s ease-in-out infinite',
        // 'blob-color-shift': 'color-shift 30s ease-in-out infinite', // Om du vill animera färgerna direkt
      },
    },
  },
  plugins: [],
}