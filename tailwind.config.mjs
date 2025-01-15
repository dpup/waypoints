/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Crimson Pro',
          'Athelas',
          'Constantia',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      typography: (theme) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.stone.700'),
            '--tw-prose-headings': theme('colors.stone.900'),
            '--tw-prose-lead': theme('colors.stone.600'),
            '--tw-prose-links': theme('colors.stone.800'),
            '--tw-prose-bold': theme('colors.stone.900'),
            '--tw-prose-counters': theme('colors.stone.500'),
            '--tw-prose-bullets': theme('colors.stone.300'),
            '--tw-prose-hr': theme('colors.stone.200'),
            '--tw-prose-quotes': theme('colors.stone.900'),
            '--tw-prose-quote-borders': theme('colors.stone.200'),
            '--tw-prose-captions': theme('colors.stone.500'),
            '--tw-prose-code': theme('colors.stone.900'),
            '--tw-prose-pre-code': theme('colors.stone.200'),
            '--tw-prose-pre-bg': theme('colors.stone.800'),
            '--tw-prose-th-borders': theme('colors.stone.300'),
            '--tw-prose-td-borders': theme('colors.stone.200'),

            // Base font settings
            fontSize: '1rem',
            fontFamily: theme('fontFamily.serif'),
            fontWeight: '300',
            maxWidth: '100ch', // add required value here

            // Heading styles
            h1: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '400',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginBottom: '2rem',
              textAlign: 'center',
            },
            h2: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '400',
              fontSize: '1.875rem',
              lineHeight: '1.3',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            h3: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '400',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '1rem',
            },

            // Paragraph styles
            p: {
              fontFamily: theme('fontFamily.sans'),
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.75',
            },

            // Link styles
            a: {
              textDecoration: 'none',
              borderBottomWidth: '1px',
              borderColor: theme('colors.stone.200'),
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                color: theme('colors.red.900'),
                borderColor: theme('colors.red.800'),
              },
            },

            // List styles
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              li: {
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                paddingLeft: '0.75rem',
                fontFamily: theme('fontFamily.sans'),
              },
              'li::marker': {
                color: theme('colors.stone.400'),
              },
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              li: {
                marginTop: '0.5rem',
                marginBottom: '1.25rem',
                paddingLeft: '0.75rem',
                fontFamily: theme('fontFamily.sans'),
              },
              'li::marker': {
                color: theme('colors.stone.400'),
              },
            },

            // Definition List styles
            dl: {
              display: 'grid',
              gridTemplateColumns: '30px 1fr',
              gap: '1rem 0',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              alignItems: 'start',
            },
            dt: {
              fontFamily: theme('fontFamily.serif'),
              color: theme('colors.stone.900'),
              fontSize: '1.1em',
              fontWeight: '400',
              marginTop: '8px',
            },
            dd: {
              marginLeft: '0',
              marginTop: '8px',
              fontFamily: theme('fontFamily.sans'),
              color: theme('colors.stone.700'),
            },

            // Blockquote styles
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '2px',
              borderLeftColor: theme('colors.stone.200'),
              marginTop: '2rem',
              marginBottom: '2rem',
              paddingLeft: '1.5rem',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },

            // Code styles
            code: {
              color: theme('colors.stone.900'),
              backgroundColor: theme('colors.stone.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },

            // Table styles
            table: {
              fontSize: '0.875em',
              lineHeight: '1.5',
            },
            thead: {
              borderBottomColor: theme('colors.stone.200'),
              th: {
                color: theme('colors.stone.800'),
                fontWeight: '600',
                paddingBottom: '0.75rem',
                fontSize: theme('fontSize.sm'),
                fontFamily: theme('fontFamily.sans'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.stone.100'),
              },
              td: {
                fontSize: theme('fontSize.sm'),
                fontFamily: theme('fontFamily.sans'),
              },
            },

            // Custom size variants
            '.prose-lg': {
              fontSize: '1.125rem',
              h1: { fontSize: '3.5rem' },
              h2: { fontSize: '2.75rem' },
              h3: { fontSize: '1.875rem' },
            },
            '.prose-sm': {
              fontSize: '0.875rem',
              h1: { fontSize: '2rem' },
              h2: { fontSize: '1.5rem' },
              h3: { fontSize: '1.25rem' },
            },
          },
        },
      }),
      colors: {},
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
