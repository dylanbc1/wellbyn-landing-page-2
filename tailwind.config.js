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
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        // Sistema de tipografía estandarizado basado en scheduling page
        'hero': ['56px', { lineHeight: '100%', letterSpacing: '-1px' }],
        'hero-sm': ['48px', { lineHeight: '100%', letterSpacing: '-1px' }],
        'hero-xs': ['40px', { lineHeight: '100%', letterSpacing: '-1px' }],
        'hero-mobile': ['28px', { lineHeight: '100%', letterSpacing: '-1px' }],
        'section-title': ['40px', { lineHeight: '110%', letterSpacing: '-1px' }],
        'section-title-sm': ['32px', { lineHeight: '110%', letterSpacing: '-1px' }],
        'section-title-xs': ['24px', { lineHeight: '110%', letterSpacing: '-1px' }],
        'subsection-title': ['20px', { lineHeight: '120%' }],
        'subsection-title-sm': ['18px', { lineHeight: '120%' }],
        'body-large': ['20px', { lineHeight: '150%' }],
        'body': ['16px', { lineHeight: '150%' }],
        'body-sm': ['14px', { lineHeight: '150%' }],
        'caption': ['12px', { lineHeight: '140%' }],
        'metric': ['48px', { lineHeight: '100%' }],
        'metric-sm': ['40px', { lineHeight: '100%' }],
        'metric-xs': ['32px', { lineHeight: '100%' }],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#171717',
        // Sistema de colores normalizado
        text: {
          primary: '#0C1523',      // Texto principal
          secondary: '#3C4147',    // Texto secundario
          tertiary: '#6B7280',     // Texto terciario
          inverse: '#FFFFFF',      // Texto sobre fondos oscuros
        },
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
