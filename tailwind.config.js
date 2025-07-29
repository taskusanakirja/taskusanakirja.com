/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './themes/taskusanakirja-theme/layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#F4F1E8',
        'ochre': {
          50: '#FBF8F1',
          100: '#F7F0E3',
          200: '#EFE1C7',
          300: '#E7D2AB',
          400: '#DFC38F',
          500: '#D7B473',
          600: '#C49D5C',
          700: '#A07F49',
          800: '#7C6138',
          900: '#584327',
        },
        'ink': {
          900: '#1A1612',
          800: '#2A241E',
          700: '#3A322A',
          600: '#4A4036',
        },
        'burgundy': '#7C2F3E',
        'forest': '#2F4F4F',
        'gold-leaf': '#B8860B',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Crimson Text, Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: '#1A1612',
            h1: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '600',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#C49D5C',
            },
            a: {
              color: '#7C2F3E',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                textDecorationThickness: '2px',
              },
            },
            code: {
              fontFamily: 'IBM Plex Mono, monospace',
              backgroundColor: '#F7F0E3',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}