/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-frank)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
}
