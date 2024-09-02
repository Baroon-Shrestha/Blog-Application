/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    // colors: {
    //   "primary": "#9CD594",
    //   "logo": "#FFA500"
    // }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

