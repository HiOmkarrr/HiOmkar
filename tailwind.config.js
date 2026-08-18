/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "modern-dark": "#0a0a0a",
        "modern-darker": "#050505",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "glass-bg": "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
        "neon-blue": "#00f5ff",
        "neon-purple": "#8a2be2",
        "neon-pink": "#ff1493",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 107.73%)",
        "gradient-modern":
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-neon":
          "linear-gradient(135deg, #00f5ff 0%, #8a2be2 50%, #ff1493 100%)",
        "gradient-neon-horizontal":
          "linear-gradient(90deg, #00f5ff 0%, #8a2be2 50%, #ff1493 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        "gradient-dark-glass":
          "linear-gradient(135deg, rgba(0,245,255,0.05) 0%, rgba(138,43,226,0.05) 100%)",
      }),
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 245, 255, 0.4)',
        'glow-pink': '0 0 20px rgba(255, 20, 147, 0.35)',
        'glow-purple': '0 0 20px rgba(138, 43, 226, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-lg': '0 16px 60px 0 rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 60px rgba(0, 245, 255, 0.15), 0 4px 16px rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        playfair : ["Playfair Display", "serif"],
        opensans : ["Open Sans", "sans-serif"]
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
      },
      content: {
        brush: "url('./assets/brush.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
    }
  },
  plugins: [],
}
