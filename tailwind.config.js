const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-opacity': 'fadeIn 0.25s ease-in',
      },
      keyframes: theme => ({
        fadeIn: {
          'from':{opacity:0 , transform: 'translateY(-50%)'}, 
          'to': {opacity:100 , transform: 'translateY(0%)'},
        },
      }),
    },
  },
  plugins: [
  ],
};
