import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper:    '#F0EBE0',
        ink:      '#111111',
        'ink-f':  '#444444',
        'ink-l':  '#777777',
        rule:     '#222222',
        'rule-l': '#AAAAAA',
        red:      '#CC1100',
        'red-d':  '#8B0000',
        smudge:   '#1a1a1a',
        night:    '#0d0d0d',
        'night-t':'#e8e4d8',
      },
      fontFamily: {
        blackletter: ['"UnifrakturMaguntia"', 'serif'],
        headline:    ['"Playfair Display"', 'serif'],
        body:        ['"Libre Baskerville"', 'serif'],
        label:       ['"Oswald"', 'sans-serif'],
        mono:        ['"Courier Prime"', 'monospace'],
        editorial:   ['"Special Elite"', 'cursive'],
      },
      animation: {
        'smoke':      'smokeDrift 30s ease-in-out infinite',
        'smoke-slow': 'smokeDrift 45s ease-in-out infinite reverse',
        'fade-up':    'fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        smokeDrift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(3%,-2%) scale(1.04)' },
          '66%':     { transform: 'translate(-2%,3%) scale(0.97)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      maxWidth: {
        'broadsheet': '1280px',
        'tabloid':    '900px',
      },
    }
  },
  plugins: [],
} satisfies Config
