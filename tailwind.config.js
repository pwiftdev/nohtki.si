/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        blob1: 'blob1 18s ease-in-out infinite',
        blob2: 'blob2 22s ease-in-out infinite',
        blob3: 'blob3 20s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(-30px, 30px) scale(1.05)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.1)' },
          '75%': { transform: 'translate(-10px, 10px) scale(0.9)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '20%': { transform: 'translate(30px, 10px) scale(1.08)' },
          '60%': { transform: 'translate(-25px, -15px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}; 