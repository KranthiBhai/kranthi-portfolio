const { calculateNewValue } = require("@testing-library/user-event/dist/utils");
const { createConditional } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        // "screen-header" : "calc(100vh - 96px)"
      },
    },
  },
  plugins: [],
}