import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
    "./provider/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        palanquin_dark: ["var(--font-pd)", ...fontFamily.sans],
        rubik: ["var(--rubik)", ...fontFamily.sans],
      },
      screens: {
        "sm-md": "700px",
        "semi-lg":"1250px"
      },
      boxShadow:{
        'footer': '4px 4px 14px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
    plugin(({ addVariant, addUtilities }: any) => {
      addVariant("abled", "&:not([disabled])");
      addUtilities({
        // font-size:128px
       
        ".img-container": {
          "@apply [&>img]:!relative [&>img]:!w-full [&>img]:!h-max": {},
        },

        ".flex-center": {
          "@apply flex justify-center items-center": {},
        },
        ".flex-between": {
          "@apply flex justify-between items-center": {},
        },
        ".flex-start": {
          "@apply flex justify-start items-center": {},
        },
        ".flex-cos-s": {
          "@apply flex-col justify-start items-center": {},
        },
        ".flex-evenly": {
          "@apply flex justify-evenly items-center": {},
        },
      
        ".full-screen": {
          "@apply w-screen h-screen": {},
        },
        ".fixed-screen": {
          "@apply fixed inset-0 full-screen": {},
        },
        ".container-footer": {
          "@apply  flex-center w-full bg-background  rounded-lg   shadow-footer": {},
        },

        // ".heading-2":{
        //   "@apply w-full font-semibold leading-[100%] uppercase font-tthoves text-[clamp(12px,3vw,45px)]": {},
        // },
        // ".para-1":{
        //   "@apply font-roboto text-[clamp(11px,10vw,20px)] font-light text-white/80": {},
        // },
        // ".para-2":{
        //   "@apply font-roboto text-[clamp(7px,10vw,15px)] font-light text-white/80": {},
        // },
      });
    }),
  ],
} satisfies Config;

export default config;
