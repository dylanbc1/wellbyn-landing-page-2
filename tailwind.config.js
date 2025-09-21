/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#171717',
        primary: {
          DEFAULT: '#5FA9DF',
          50: '#F0F8FF',
          100: '#E0F2FF',
          200: '#C7E7FF',
          300: '#A5D8FF',
          400: '#7AC9FF',
          500: '#5FA9DF',
          600: '#4A9BCE',
          700: '#3A8BB8',
          800: '#2F7BA3',
          900: '#246B8E',
        },
        button: {
          white: {
            bg: '#FFFFFF',
            text: '#171717',
          },
          black: {
            bg: '#171717',
            text: '#FFFFFF',
          },
          blue: {
            bg: '#5FA9DF',
            text: '#FFFFFF',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
