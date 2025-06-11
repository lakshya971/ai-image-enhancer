/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-delay': 'fade-in 0.8s ease-out 0.2s both',
        'fade-in-delay-2': 'fade-in 1s ease-out 0.4s both',
        'fade-in-delay-3': 'fade-in 1.2s ease-out 0.6s both',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-particle': 'float-particle 4s ease-in-out infinite',
        'float-particle-delayed': 'float-particle-delayed 5s ease-in-out infinite',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-180deg)' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '25%': { transform: 'translateY(-10px) translateX(5px)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px) translateX(-5px)', opacity: '1' },
          '75%': { transform: 'translateY(-10px) translateX(3px)', opacity: '0.8' },
        },
        'float-particle-delayed': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
          '33%': { transform: 'translateY(-15px) translateX(-8px)', opacity: '0.7' },
          '66%': { transform: 'translateY(-25px) translateX(8px)', opacity: '1' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
