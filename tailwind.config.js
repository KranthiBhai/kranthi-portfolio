const { calculateNewValue } = require("@testing-library/user-event/dist/utils");
const { createConditional } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-header-4rem" : "calc(100vh - 4rem)",
        "screen-header-5rem" : "calc(100vh - 5rem)",
      },
      colors : {
        "clr1" : "#8a2be2",
        "clr2" : "#C36A2D",
        "clr3" : "#E2C275",
      },
      boxShadow: {
        '3xl': '0 10px 16px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}