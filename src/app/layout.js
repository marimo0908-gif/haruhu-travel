import { Inter, Noto_Sans_JP, Outfit, Zen_Maru_Gothic, Zen_Kaku_Gothic_New, Caveat, Parisienne } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-zen-maru",
});
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
});

export const metadata = {
  title: {
    template: "%s | はるふートラベル",
    default: "はるふートラベル | ママのための賢い旅ブログ",
  },
  description: "年長さんのお子様を持つママ向け。マイルとポイ活で、家族旅行をもっと身近に。初心者でもできるお得な旅の始め方を発信中。",
  keywords: ["ママ", "家族旅行", "マイル", "ポイ活", "子連れ旅行", "節約"],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${noto.className} ${outfit.className} ${zenMaru.variable} ${zenKaku.variable} ${caveat.variable} ${parisienne.variable} bg-background text-foreground antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
