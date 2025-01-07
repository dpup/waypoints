/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Silkscreen'],
        sans: ['-apple-system', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '11px' }],
        sm: ['13px', { lineHeight: '13px' }],
        base: ['15px', { lineHeight: '20px' }],
        lg: ['20px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['40px', { lineHeight: '40px' }],
        '4xl': ['50px', { lineHeight: '75px' }],
      },
      // Styles for 'prose' classes.
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: '400',
            },
            p: {
              marginLeft: '3px',
              textAlign: 'justify',
              fontWeight: '300',
            },
            h2: {
              marginLeft: '3px',
              fontWeight: '600',
            },
            h3: {
              marginLeft: '3px',
              fontWeight: '600',
            },
            li: {
              fontWeight: '300',
            },
            hr: {
              borderColor: 'var(--tw-prose-bullets)',
            },
          },
        },
      }),
      colors: {},
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
