/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#167D68', dark: '#0F6352' },
        mint: '#EAF5F0',
        pale: '#F5FAF7',
        deep: '#19352F',
        line: '#E1E8E4',
        muted: '#64748B',
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(25, 53, 47, 0.06)',
      },
    },
  },
  plugins: [],
};
