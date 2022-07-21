/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["component/style/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : "#0d6efd",
      },
      screens: {
        tablet: {
          max: '640px',
          min: '50px'
        },
        // => @media (min-width: 640px) { ... }
  
        laptop: {
          max: '1024px',
          min: '641px'
        },
        // => @media (min-width: 1024px) { ... }
  
        desktop: {
          min: '1023px'
        },
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
