/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marqueeVertical: {
            "0%": { transform: "translateY(0%)" },
            "100%": { transform: "translateY(-50%)" },
          },
          fadeInUp: {
            "0%": { opacity: "0", transform: "translateY(8px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
        animation: {
          "marquee-vertical":
            "marqueeVertical var(--duration,30s) linear infinite",
          "fade-in-up": "fadeInUp .6s ease-out both",
        },
      },
    },
    plugins: [],
  };
  