/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './ui/src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0F172A',
        accent: '#10B981',
        muted: '#94A3B8',
        bg: '#F8FAFC',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
