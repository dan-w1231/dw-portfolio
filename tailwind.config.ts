import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      sm: '0 2px 6px rgb(15 23 42 / 0.08)',
      md: '0 24px 80px -4px rgb(15 23 42 / 0.04)',
      lg: '0 24px 80px -4px rgb(15 23 42 / 0.12), 0 3px 6px rgb(15 23 42 / 0)',
      xl: '0 24px 32px rgba(142, 171, 198, 0.35)',
      // Dark Mode
      smD: '0 2px 6px rgb(15 23 42 / 0.08)',
      mdD: '0 24px 80px -4px rgb(15 23 42 / 0.04)',
      lgD: '0 8px 16px rgb(15 15 16 / 0.4)',
      xlD: '0 24px 32px rgba(15 15 16 0.3)',
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
      transitionProperty: {
        'bg': 'background-color',
        'bgImage': 'background-image',
        'color': 'color',
        'opacity': 'opacity',
        'height': 'height',
      },
      translate: {
        '0': '0px',
      },
      transform: ['hover', 'focus'],
      transitionDuration: {
        '900': '900ms',
      },
      colors: {
        'blurple': {
          900: '#5768FF',
          800: '#6877ff',
          700: '#7986ff',
          600: '#8995ff',
          500: '#9aa4ff',
          400: '#abb4ff' 
        },
        'midnight': {
          900: '#151721', // titles
          800: '#2C2E37', // light
          700: '#44454D', // lighter
          600: '#5B5D64', // lighterer
          500: '#73747A', // lightererer
          400: '#8A8B90'  // lightest
        },
        'ice': {
          900: '#FFFFFF', // titles
          800: '#F7F8FF', // dark
          700: '#EEF0FF', // darker
          600: '#E6E9FF', // darkerer
          500: '#DEE1FF', // darkererer
          400: '#D6DAFF'  // darkest
        },
        'solidLight' : `rgba(255,255,255,1)`,
        'solidDark' : `rgba(27,27,39,1)`,
      },
      screens: {
        // Set as iPhone 14/15 Max are 430w
        // This is a particularly wide device width
        // => @media (min-width: 431px) { ... }
        'xs': '431px',
      },
      containers: {
        'xs': '431px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
        sans: 'var(--font-inter)',
      },
      letterSpacing: {
        tight: '-.02em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '8rem'
      },
      backgroundImage: {
        'primaryGrad': `linear-gradient(180deg, rgba(128,141,255,1) 0%, rgba(87,104,255,1) 8%, rgba(87,104,255,1) 50%, rgba(71,86,226,1) 100%);`,
        'secondaryGrad': `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(236,235,241,1) 8%, rgba(236,235,241,1) 50%, rgba(221,219,232,1) 100%);`,
        'cardGrad': `linear-gradient(150deg, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, .04) 100%);`,
        'cardGradDark': `linear-gradient(150deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.02) 100%);`,
        'sectionGrad': `linear-gradient(150deg, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255,0.1) 100%);`,
        'lightBg': `radial-gradient(50% 50% at 50% 20%, rgba(89, 69, 214, 0.08) 0%, rgba(89, 69, 214, 0) 100%), 
                          radial-gradient(45% 55% at 100% 50%, rgba(30, 41, 140, 0.16) 0%, rgba(30, 41, 140, 0) 100%),
                          radial-gradient(70% 125% at -2% 105%, rgba(34, 106, 93, 0.40) 0%, rgba(34, 106, 93, 0) 100%),
                          radial-gradient(105% 105% at 115% -10%, rgba(225, 72, 117, 0.40) 0%, rgba(225, 72, 117, 0) 100%),
                          linear-gradient(180deg, #E2E5EB 0%, #D3D6DF 100%);`,
        'darkBg': `radial-gradient(50% 50% at 50% 20%, rgba(89, 69, 214, 0.08) 0%, rgba(89, 69, 214, 0) 100%), 
                          radial-gradient(45% 55% at 100% 50%, rgba(30, 41, 140, 0.16) 0%, rgba(30, 41, 140, 0) 100%),
                          radial-gradient(70% 125% at -2% 105%, rgba(34, 106, 93, 0.28) 0%, rgba(34, 106, 93, 0) 100%),
                          radial-gradient(105% 105% at 115% -10%, rgba(225, 72, 117, 0.10) 0%, rgba(225, 72, 117, 0) 100%),
                          linear-gradient(180deg, #181625 0%, #0B0A11 100%);`,
        'bgGradDark': `linear-gradient(150deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.02) 100%),
                          radial-gradient(100% 100% at 100% 20%, rgba(251, 5, 155, 0.11) 0%, rgba(39, 26, 255, 0.08) 100%);`,
        'bgGrad': `linear-gradient(150deg, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255,0.1) 100%),
                  radial-gradient(100% 100% at 100% 100%, rgba(251, 190, 5, 0.2) 0%, rgba(255, 26, 136, 0.06) 100%);`,
        'noisePattern': `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1295275/background-noise.png)`,

      },
      scale: {
        '98': '0.98',
        '99': '0.99',
        '101': '1.01',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.translate-z-0': {
          transform: 'translateZ(0.0001px)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
} satisfies Config
