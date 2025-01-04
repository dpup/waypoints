/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pixel: ["Silkscreen"],
        serif: ["Arvo", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      // Styles for 'prose' classes.
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              fontWeight: "400",
            },
            p: {
              marginLeft: "3px",
              textAlign: "justify",
              fontWeight: "300",
            },
            h2: {
              marginLeft: "3px",
              fontWeight: "600",
            },
            h3: {
              marginLeft: "3px",
              fontWeight: "600",
            },
            li: {
              fontWeight: "300",
            },
            hr: {
              borderColor: "var(--tw-prose-bullets)",
            },
          },
        },
      }),
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
