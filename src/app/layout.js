import { Inter, Noto_Sans_JP, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: {
    template: "%s | はるふートラベル",
    default: "はるふートラベル | ワーママのための賢い旅ブログ",
  },
  description: "年長さんのお子様を持つワーママ向け。マイルとポイ活で、家族旅行をもっと身近に。初心者でもできるお得な旅の始め方を発信中。",
  keywords: ["ワーママ", "家族旅行", "マイル", "ポイ活", "子連れ旅行", "節約"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${noto.className} ${outfit.className} bg-background text-foreground antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
