/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_light: "#A9F0D1",
        primary_dark: "#C06E52",
        secondary_dark: "#24B360",
        primary_green: "#1AAF5D",
        primary_green_transparent: "#1AAF5D13",
        primary_sunglow: "#FFD166",
        primary_sunglow_transparent: "#FFD16620",
        primary_yellowbee: "#F7D74C",
        primary_yellowbee_trasparent: "#F7D74C20",
        primary_skyblue: "#CDEDF6",
        primary_skyblue_transparent: "#CDEDF6",
        primary_dark_seablue: "#1F81AF",
        primary_dark_seablue_transparent: "#1F81AF13"
      },
    },
  },
  plugins: [],
};
