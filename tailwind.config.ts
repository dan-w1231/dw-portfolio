import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      sm: '0 2px 6px rgb(15 23 42 / 0.08)',
      md: '0 24px 80px -4px rgb(15 23 42 / 0.04)',
      lg: '0 24px 80px -4px rgb(15 23 42 / 0.12), 0 3px 6px rgb(15 23 42 / 0)',
      xl: '2px 11px 16px rgb(15 23 42 / 0.17), 0 1px 6px rgb(15 23 42 / 0.17), 3px 23px 24px rgb(15 23 42 / 0.17)',
      // sm: '0 2px 6px rgb(15 23 42 / 0.08)',
      // md: '0 8px 8px rgb(15 23 42 / 0.05), 0 3px 6px rgb(15 23 42 / 0.05)',
      // lg: '0 24px 15px rgb(15 23 42 / 0.08), 0 3px 6px rgb(15 23 42 / 0.08)',
      // xl: '2px 11px 16px rgb(15 23 42 / 0.17), 0 1px 6px rgb(15 23 42 / 0.17), 3px 23px 24px rgb(15 23 42 / 0.17)',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.375rem', { lineHeight: '2rem' }],
      '3xl': ['1.5rem', { lineHeight: '2rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      screens: {
        'xs': '431px',
        // Set as iphone Max are 430w so layout is the same for most mobiles, then switches any larger
        // => @media (min-width: 431px) { ... }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '8rem'
      },
      fontFamily: {
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
        sans: 'var(--font-inter)',
      },
      letterSpacing: {
        tight: '-.02em',
      },
      backgroundImage: {
        'primaryGrad': `linear-gradient(180deg, rgba(128,141,255,1) 0%, rgba(87,104,255,1) 8%, rgba(87,104,255,1) 50%, rgba(71,86,226,1) 100%);`,
        'cardGrad': `linear-gradient(150deg, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, .04) 100%);`,
        'noise-pattern': `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1295275/background-noise.png),
                          radial-gradient(50% 50% at 50% 20%, rgba(89, 69, 214, 0.08) 0%, rgba(89, 69, 214, 0) 100%), 
                          radial-gradient(45% 55% at 100% 50%, rgba(30, 41, 140, 0.16) 0%, rgba(30, 41, 140, 0) 100%),
                          radial-gradient(70% 125% at -2% 105%, rgba(34, 106, 93, 0.40) 0%, rgba(34, 106, 93, 0) 100%),
                          radial-gradient(105% 105% at 115% -10%, rgba(225, 72, 117, 0.40) 0%, rgba(225, 72, 117, 0) 100%),
                          linear-gradient(180deg, #E2E5EB 0%, #D3D6DF 100%);`,
      },
      scale: {
        '98': '0.98',
        '99': '0.99',
        '101': '1.01',
      }
    },
  },
  plugins: [],
} satisfies Config
