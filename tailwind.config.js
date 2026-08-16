/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#970003',
          dark: '#7A0002',
          deep: '#5C0002',
        },
        wine: '#B8262A',
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E4D3A6',
          dark: '#9C7C3D',
        },
        cream: {
          DEFAULT: '#F7F1E6',
          soft: '#FBF7EF',
          dark: '#EFE5D2',
        },
        charcoal: '#241B1D',
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
        utility: ['Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(43,10,21,0.35)',
        gold: '0 0 0 1px rgba(198,161,91,0.4), 0 12px 30px -10px rgba(198,161,91,0.35)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(15px,-20px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
