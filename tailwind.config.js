/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-heading)'],
        sans: ['var(--font-body)'],
      },
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
          soft: 'rgb(var(--color-bg-soft) / <alpha-value>)',
          deep: 'rgb(var(--color-bg-deep) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
        ivory: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          dim: 'rgb(var(--color-surface-soft) / <alpha-value>)',
        },
        umber: 'rgb(var(--color-ink) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
        },
        wine: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          deep: 'rgb(var(--color-secondary-deep) / <alpha-value>)',
        },
        turmeric: 'rgb(var(--color-accent) / <alpha-value>)',
        magenta: 'rgb(var(--color-secondary) / <alpha-value>)',
        theme: {
          input: 'rgb(var(--color-input) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          day: 'rgb(var(--color-event-day) / <alpha-value>)',
          night: 'rgb(var(--color-event-night) / <alpha-value>)',
          sundowner: 'rgb(var(--color-event-sundowner) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
