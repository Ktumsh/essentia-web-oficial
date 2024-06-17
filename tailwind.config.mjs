/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

export default {
  darkMode: "class",
  content: {
    files: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/@nextui-org/theme/dist/components/(avatar|dropdown|popover|menu|divider|button|ripple|spinner).js",
    ],
  },
  theme: {
    container: {
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        "base-color": "var(--color-base)",
        "base-color-h": "var(--color-base-h)",
        "base-color-m": "var(--color-base-m)",
        "base-color-d": "var(--color-base-d)",
        "base-color-dark": "var(--color-base-dark)",
        "base-color-dark-h": "var(--color-base-dark-h)",
        "base-color-dark-m": "var(--color-base-dark-m)",
        "base-color-dark-d": "var(--color-base-dark-d)",
        "base-dark": "var(--background-dark)",
        "base-dark-90": "var(--background-dark-90)",
        "base-dark-80": "var(--background-dark-80)",
        "base-dark-70": "var(--background-dark-70)",
        "base-dark-60": "var(--background-dark-60)",
        "base-dark-50": "var(--background-dark-50)",
        "base-dark-40": "var(--background-dark-40)",
        "base-dark-30": "var(--background-dark-30)",
        "base-dark-20": "var(--background-dark-20)",
        "base-dark-10": "var(--background-dark-10)",
        "base-full-dark": "var(--background-dark-f)",
        "base-full-dark-90": "var(--background-dark-f-90)",
        "base-full-dark-80": "var(--background-dark-f-80)",
        "base-full-dark-70": "var(--background-dark-f-70)",
        "base-full-dark-60": "var(--background-dark-f-60)",
        "base-full-dark-50": "var(--background-dark-f-50)",
        "base-full-dark-40": "var(--background-dark-f-40)",
        "base-full-dark-30": "var(--background-dark-f-30)",
        "base-full-dark-20": "var(--background-dark-f-20)",
        "base-full-dark-10": "var(--background-dark-f-10)",
        "radical-red": {
          50: "#ffeff1",
          100: "#ffe0e6",
          200: "#ffc6d3",
          300: "#ff97ae",
          400: "#ff5d83",
          500: "#ff245e",
          600: "#ff004d",
          700: "#d70041",
          800: "#b4003f",
          900: "#99023c",
          950: "#57001b",
        },
        broom: {
          50: "#fdfee8",
          100: "#fcffc2",
          200: "#fcff87",
          300: "#fffc43",
          400: "#fff024",
          500: "#efd503",
          600: "#cea700",
          700: "#a47804",
          800: "#885e0b",
          900: "#734c10",
          950: "#432805",
        },
        bittersweet: {
          50: "#fef3f2",
          100: "#fee5e2",
          200: "#ffcfc9",
          300: "#fdada4",
          400: "#fa8072",
          500: "#f15442",
          600: "#df3623",
          700: "#bb2b1a",
          800: "#9b2619",
          900: "#80261c",
          950: "#460f09",
        },
        orient: {
          50: "#e7fffd",
          100: "#c2fffb",
          200: "#8cfff7",
          300: "#3dfff2",
          400: "#00ffee",
          500: "#00f2ff",
          600: "#00bfe3",
          700: "#0096b5",
          800: "#007690",
          900: "#00627b",
          950: "#004055",
        },
        "cerise-red": {
          50: "#fdf3f4",
          100: "#fce7eb",
          200: "#f8d3db",
          300: "#f2afbc",
          400: "#ea8299",
          500: "#da4167",
          600: "#c93560",
          700: "#a92751",
          800: "#8e2349",
          900: "#7a2143",
          950: "#430e21",
        },
        midnight: {
          50: "#ecfaff",
          100: "#d4f2ff",
          200: "#b2e9ff",
          300: "#7ddeff",
          400: "#41c8ff",
          500: "#15a8ff",
          600: "#0087ff",
          700: "#006ffe",
          800: "#0059cd",
          900: "#084da0",
          950: "#061b37",
        },
      },
      fontFamily: {
        grotesk: '"Space Grotesk", sans-serif',
      },
      backgroundImage: {
        noise: "url(/extras/noise.webp)",
      },
      animation: {
        "shine-infinite": "shine 2s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "skew(-12deg) translateX(-100%)" },
          "100%": { transform: "skew(-12deg) translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), nextui()],
};