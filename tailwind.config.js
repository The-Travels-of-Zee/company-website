/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brandPrimary: "#003c64",
        blueLight: "#39A9DB",
        bgBlueLight: "#40BCD8",
        brandOrange: "#f47a1f",
        brandsBG: "#F8FFF9",
        brandSecondary: "#2E3E5C",
        bgGray: "#f2f2f7",
        brandDanger: "#D63230",
      },
      boxShadow: {
        teamShadow: "0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)",
        brandShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.09)",
        statsShadow: "4px 9px 20px 0px rgba(0, 0, 0, 0.07)",
        serviceImageShadow: "1px 4px 30px 0px rgba(0, 0, 0, 0.20)",
      },
      typography: (theme) => ({
        white: {
          css: {
            color: theme("colors.white"),
            a: { color: theme("colors.white") },
            strong: { color: theme("colors.white") },
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.white") },
            h4: { color: theme("colors.white") },
            code: { color: theme("colors.white") },
            "blockquote p": { color: theme("colors.white") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
