/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#39f21d",

          secondary: "#c910d3",

          accent: "#e8ca86",

          neutral: "#302031",

          "base-100": "#F1F0F4",

          info: "#8FC4EF",

          success: "#178C75",

          warning: "#F5A519",

          error: "#F66A74",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
