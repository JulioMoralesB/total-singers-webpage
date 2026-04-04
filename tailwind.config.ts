import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern Harmony Design System - Core Colors
        surface: '#0d0d15',
        'surface-dim': '#0d0d15',
        'surface-container-low': '#13131b',
        'surface-container': '#191922',
        'surface-container-high': '#1f1f29',
        'surface-container-highest': '#252530',
        'surface-variant': '#252530',
        'surface-bright': '#2b2b38',

        // Primary Accent - Electric Violet
        primary: '#ba9eff',
        'primary-dim': '#8455ef',
        'primary-fixed': '#ae8dff',
        'primary-fixed-dim': '#a27cff',
        'primary-container': '#ae8dff',
        'on-primary': '#39008c',
        'on-primary-fixed': '#000000',
        'on-primary-fixed-variant': '#370086',
        'on-primary-container': '#2b006e',

        // Secondary Accent - Neon Teal
        secondary: '#53ddfc',
        'secondary-dim': '#40ceed',
        'secondary-fixed': '#65e1ff',
        'secondary-fixed-dim': '#48d4f3',
        'secondary-container': '#00687a',
        'on-secondary': '#004b58',
        'on-secondary-fixed': '#003a45',
        'on-secondary-fixed-variant': '#005969',
        'on-secondary-container': '#ecfaff',

        // Tertiary Accent - Bright Coral
        tertiary: '#ff946e',
        'tertiary-dim': '#f7794b',
        'tertiary-fixed': '#ff946e',
        'tertiary-fixed-dim': '#fe7e4f',
        'tertiary-container': '#fe7e4f',
        'on-tertiary': '#5c1a00',
        'on-tertiary-fixed': '#320a00',
        'on-tertiary-fixed-variant': '#6b1f00',
        'on-tertiary-container': '#491300',

        // Text & Surface Colors
        'on-surface': '#efecf8',
        'on-surface-variant': '#acaab5',

        // Additional Colors
        outline: '#76747f',
        'outline-variant': '#484750',
        'surface-tint': '#ba9eff',
        'inverse-surface': '#fcf8ff',
        'inverse-on-surface': '#55545e',
        'inverse-primary': '#6e3bd7',
        background: '#0d0d15',
        'on-background': '#efecf8',

        // Error Colors (if needed)
        error: '#ff6e84',
        'error-dim': '#d73357',
        'error-container': '#a70138',
        'on-error': '#490013',
        'on-error-container': '#ffb2b9',
      },

      fontFamily: {
        headline: ['Epilogue', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },

      fontSize: {
        // Display
        'display-lg': '3.5rem',
        'display-sm': '2.25rem',

        // Headline
        'headline-lg': '2rem',
        'headline-md': '1.75rem',
        'headline-sm': '1.5rem',

        // Title
        'title-lg': '1.375rem',
        'title-md': '1rem',
        'title-sm': '0.875rem',

        // Body
        'body-lg': '1rem',
        'body-md': '0.875rem',
        'body-sm': '0.75rem',

        // Label
        'label-lg': '0.75rem',
        'label-md': '0.75rem',
        'label-sm': '0.625rem',
      },

      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },

      spacing: {
        ...Array.from({ length: 97 }, (_, i) => ({
          [i]: `${i * 0.25}rem`,
        })).reduce((a, b) => ({ ...a, ...b }), {}),
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '12px',
        md: '16px',
        lg: '20px',
        xl: '40px',
      },

      boxShadow: {
        'editorial': '0px 20px 40px rgba(0, 0, 0, 0.4)',
        'subtle': '0px 4px 12px rgba(0, 0, 0, 0.2)',
      },
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // Glass Card Component
        '.glass-card': {
          '@apply bg-surface-variant/40 backdrop-blur-lg border border-outline-variant/20 rounded-lg': {},
        },

        // Gradient Primary
        '.gradient-primary': {
          '@apply bg-gradient-to-br from-primary-dim to-primary': {},
        },

        // Button Primary
        '.btn-primary': {
          '@apply px-6 py-3 rounded-full font-headline font-bold text-on-primary-fixed gradient-primary hover:scale-105 active:scale-95 transition-all duration-200': {},
        },

        // Button Secondary
        '.btn-secondary': {
          '@apply px-6 py-3 rounded-full font-headline font-bold text-on-surface bg-surface-container-highest border border-outline-variant/20 hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-200': {},
        },

        // Badge
        '.badge': {
          '@apply inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider': {},
        },

        // Badge Primary
        '.badge-primary': {
          '@apply badge bg-primary/10 text-primary border border-primary/20': {},
        },

        // Badge Secondary
        '.badge-secondary': {
          '@apply badge bg-secondary text-surface font-bold': {},
        },

        // Badge Tertiary
        '.badge-tertiary': {
          '@apply badge bg-tertiary text-surface font-bold': {},
        },

        // Container styles
        '.container-editorial': {
          '@apply max-w-7xl mx-auto px-6 md:px-8': {},
        },

        // Section Base
        '.section-base': {
          '@apply py-20 md:py-32': {},
        },

        // Section with Background
        '.section-bg': {
          '@apply section-base bg-surface-container-low': {},
        },

        // Hero Title
        '.title-hero': {
          '@apply font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]': {},
        },

        // Heading Secondary
        '.heading-secondary': {
          '@apply font-headline text-3xl md:text-4xl font-bold tracking-tighter': {},
        },

        // Label uppercase
        '.label-uppercase': {
          '@apply font-label text-xs uppercase tracking-widest font-bold': {},
        },
      })
    },
  ],
} satisfies Config
