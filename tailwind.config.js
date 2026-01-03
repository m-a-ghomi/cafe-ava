 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
    theme: {
      extend: {
        fontFamily: {
          custom: ['arabic'],
          suns: ['suns'],
        },
      },
          animation: {
        bounceCustom: "bounceCustom 2s infinite",
      },
      keyframes: {
        bounceCustom: {
          "0%, 100%": { transform: "translateY(-15%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
      },
    },
    plugins: [],
  }
