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
          DEFAULT: '#e88b86', // Coral - はるふートラベルのメインカラー
          foreground: '#fffdfb',
        },
        secondary: {
          DEFAULT: '#7cc0c0', // Teal - AI活用など
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#e57a74', // 濃いコーラル - 強調・リンク
          foreground: '#fffdfb',
        },
        background: "#fffdfb", // やわらかいクリーム
        foreground: "#4a4644", // 落ち着いた茶グレー（見出し・本文）
        muted: "#8a8382",
        card: "#ffffff",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', '"Outfit"', 'sans-serif'],
        maru: ['var(--font-zen-maru)', '"Noto Sans JP"', 'sans-serif'],
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
