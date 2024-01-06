/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cf142b",
          secondary: "#690717",
          accent: "#000000",
          neutral: "#696969",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
