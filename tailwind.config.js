/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#111111",
          900: "#0b0b0b",
          800: "#161616",
          700: "#1e1e1e",
          600: "#262626",
        },
        sand: "#C9A46A",
        copper: "#B87333",
        forest: "#1F3A32",
        atlas: "#4A4A3D",
        ivory: "#F3EFE7",
        datablue: "#3C7D8C",
      },
      fontFamily: {
        heading: ["Manrope", "Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "Raleway", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        elevated: "0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(201,164,106,0.18)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(201,164,106,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,106,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
