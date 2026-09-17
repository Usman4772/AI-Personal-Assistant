/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
        display: ["var(--font-hanken)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        ink: "#191c1e",
        cyan: "#00eefc",
        amber: "#ffa23e",
        background: "#f7f9fb",
        foreground: "#191c1e",
        "on-background": "#191c1e",
        "on-primary": "#ffffff",
        on: {
          primary: "#ffffff",
          background: "#191c1e",
          surface: {
            DEFAULT: "#191c1e",
            variant: "#434656",
          },
        },
        primary: {
          DEFAULT: "#003ec7",
          container: "#0052ff",
          fixed: "#dde1ff",
        },
        secondary: {
          DEFAULT: "#006970",
          container: "#00eefc",
          foreground: "#ffffff",
        },
        surface: {
          DEFAULT: "#f7f9fb",
          dim: "#d8dadc",
          elevated: "#ffffff",
          container: {
            DEFAULT: "#eceef0",
            low: "#f2f4f6",
            lowest: "#ffffff",
          },
        },
        outline: {
          DEFAULT: "#737688",
          variant: "#c3c5d9",
        },
        muted: {
          DEFAULT: "#737688",
          foreground: "#434656",
        },
        accent: {
          DEFAULT: "#0052ff",
          hover: "#003ec7",
        },
        border: "#e0e3e5",
        input: "#e0e3e5",
        ring: "#0052ff",
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#191c1e",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#191c1e",
        },
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
