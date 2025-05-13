/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 25s ease-in-out infinite',
        'float-slower': 'float 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25px, 25px)' },
          '50%': { transform: 'translate(-25px, 50px)' },
          '75%': { transform: 'translate(-50px, -25px)' },
        },
      },
      colors: {
        border: "rgba(168, 85, 247, 0.2)",
        primary: "rgb(168, 85, 247)",
        muted: "rgba(255, 255, 255, 0.05)",
      }
    },
  },
  plugins: [],
};