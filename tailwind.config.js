/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Graphite surface scale (refined)
        graphite: {
          DEFAULT: "#111313",
          950: "#090A0A",
          900: "#111313",
          800: "#191C1B",
          700: "#242927",
          600: "#2E3331",
        },
        // Sand
        sand: {
          DEFAULT: "#C9A46A",
          300: "#D8C08A",
          400: "#C9A46A",
          500: "#A98544",
        },
        // Copper
        copper: {
          DEFAULT: "#B87333",
          400: "#C47A3A",
          500: "#B87333",
          600: "#8F5528",
        },
        // Deep green
        forest: {
          DEFAULT: "#1F3A32",
          900: "#12241F",
          800: "#1F3A32",
          700: "#294E43",
        },
        // Neutrals
        ivory: {
          DEFAULT: "#F4F0E8",
          100: "#F4F0E8",
          300: "#D8D0C2",
        },
        muted: {
          DEFAULT: "#918878",
          500: "#918878",
        },
        atlas: "#4A4A3D",
        datablue: "#3C7D8C",
      },
      fontFamily: {
        heading: ["Manrope", "Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "Raleway", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale
        hero: ["clamp(3rem, 9vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        section: ["clamp(1.9rem, 4.6vw, 3.4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        kicker: ["0.72rem", { letterSpacing: "0.24em" }],
      },
      maxWidth: {
        content: "1200px",
        text: "760px",
        wide: "1440px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        elevated: "0 24px 70px -24px rgba(0,0,0,0.7)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -28px rgba(0,0,0,0.75)",
        glow: "0 0 0 1px rgba(201,164,106,0.18), 0 24px 60px -30px rgba(184,115,51,0.35)",
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
