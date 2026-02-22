/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38bdf8', // Sky 400 - Bright & Cheerful
          foreground: '#f0f9ff',
        },
        secondary: {
          DEFAULT: '#4ade80', // Green 400 - Fresh & Safe
          foreground: '#f0fdf4',
        },
        accent: {
          DEFAULT: '#fb7185', // Rose 400 - Warm & Attention-grabbing (Coral-ish)
          foreground: '#fff1f2',
        },
        background: "#fdfdfd", // Almost white, very clean
        foreground: "#334155", // Slate 700 - Softer than black, easy to read
        muted: "#94a3b8",
        card: "#ffffff",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Outfit"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem', // Softer, rounder corners
      }
    },
  },
  plugins: [],
};
