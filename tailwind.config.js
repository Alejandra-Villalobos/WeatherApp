/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rain-gif"  : "url('/src/assets/rainBg.gif')",
        "snow-gif"  : "url('/src/assets/snowBg.gif')",
      },
      animation: {
        fadeBounce: "fadeInBounce .5s ease-in",
        fade: "fadeIn .7s ease-in",
      },

      keyframes: {
        fadeInBounce: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },

        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
