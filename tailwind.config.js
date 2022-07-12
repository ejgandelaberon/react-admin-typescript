/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        nav: {
          main: "var(--nav-text)",
          selection: "var(--nav-text-selection)",
          hover: "var(--nav-hover)"
        },
        btn: {
          main: "var(--btn-text)",
        }
      },
      backgroundColor: {
        nav: {
          main: "var(--nav-bg)",
          selection: "var(--nav-text-selection-bg)",
          hover: "var(--nav-hover)",
        },
        btn: {
          pry: "var(--btn-pry)",
          sec: "var(--btn-sec)",
          info: "var(--btn-info)",
          warn: "var(--btn-warn)",
          dng: "var(--btn-dng)",
          pry_hover: "var(--btn-pry-hover)",
          sec_hover: "var(--btn-sec-hover)",
          info_hover: "var(--btn-info-hover)",
          warn_hover: "var(--btn-warn-hover)",
          dng_hover: "var(--btn-dng-hover)",
        }
      },
      borderColor: {
        nav: {
          main: "var(--nav-header-border-color)"
        }
      },
    },
  },
  plugins: [],
}
