import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "customer-accent": "#412100",
        "vintage-brown": "#5c4033",
        "vintage-cream": "#f5f0e6",
        "site-text": "#fff4e0",
        "site-text-white": "#ffffff",
      },
      fontSize: {
        "fluid-base": "var(--font-size-base)",
        "fluid-lg": "var(--font-size-lg)",
        "fluid-xl": "var(--font-size-xl)",
        "fluid-2xl": "var(--font-size-2xl)",
        "fluid-3xl": "var(--font-size-3xl)",
        "fluid-hero": "var(--font-size-hero)",
        "fluid-mid": "var(--font-size-mid)",
      },
      fontFamily: {
        calibri: ["Calibri", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        "texture-forside": "url('/images/bakgrunnsbilde.jpg')",
        "texture-kontakt": "url('/images/kontakt-bakgrunnsbilde-topa.jpg')",
        "mid-section": "url('/images/forside-arbeidsbil-red.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
