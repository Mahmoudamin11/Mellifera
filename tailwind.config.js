/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: { 
        'main-white': 'var(--main-white)',
        'main-brown': 'var(--main-brown)',
        'sec-brown': 'var(--sec-brown)',
        'gray': 'var(--gray)',
        'main-black': 'var(--main-black)',
        'sec-black': 'var(--sec-black)',
        'main-red': 'var(--main-red)',
        'honey': 'var(--honey)'
      },
      fontFamily: { 
        'open-sans': 'var(--open-sans)',
      },
      backgroundImage: { 
        'home': "url('./src/assets/section.elementor-section.svg')",
        'newsletterAndTypes': "url('./src/assets/newsletter-typesofHoney.svg')",
        'quote': "url('./src/assets/widget.svg')",
        'products': "url('./src/assets/our-products.svg')",
        'home2':"url('./src/assets/home-main-bg-2.svg')"

      },
      backgroundSize: { 
        'half': '130%'
      },
      screens: { 
        '1195': '1195px',
        '440': '440px',
      }
    },
  },
  plugins: [],
}

