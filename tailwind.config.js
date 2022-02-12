const { calculateNewValue } = require("@testing-library/user-event/dist/utils");
const { createConditional } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-header" : "calc(100vh - 4rem)"
      },
      colors : {
        "clr1" : "#8a2be2",
      }
    },
  },
  plugins: [],
}