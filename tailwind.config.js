/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte"],
  purge: {
    content: ["./src/**/*.svelte"],
    options: {
      safelist: [
        "theme-darcula",
        "theme-darcula",
        "theme-light",
        "theme-moonlight",
        "theme-purple-rain",
        "theme-gruvbox",
        "theme-cat-macchiato",
        "theme-cat-mocha",
        "theme-cat-frappe"
      ]
    }
  },
  theme: {
    colors: {
      'crust': 'var(--color-crust)',
      'base': 'var(--color-base)',
      'surface': 'var(--color-surface)',
      'overlay': 'var(--color-overlay)',
      'text': 'var(--color-text)',
      'disabled': 'var(--color-disabled)',
      'enabled': 'var(--color-enabled)',
      'accent': 'var(--color-accent)'
    },
    extend: {

    }
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}

