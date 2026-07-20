import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import PopularArticles from "@/components/home/PopularArticles";
import AboutStrengths from "@/components/home/AboutStrengths";
import Platforms from "@/components/home/Platforms";
import WaveBackground from "@/components/home/WaveBackground";
import RevealInit from "@/components/home/RevealInit";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "ホーム | はるふートラベル - ママのための賢い旅の始め方",
  description: "マイルとポイ活で家族旅行へ。忙しいママでもできるお得術を公開中。「お金がない」「時間がない」を解決して、子供との思い出を作りましょう。",
};

export const revalidate = 60; // 60秒ごとに記事データを更新

export default async function Home() {
  let latestPosts = [];

  try {
    latestPosts = await client.fetch(POSTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return (
    <div
      className="relative overflow-x-hidden pb-8"
      style={{ background: "#fffdfb", color: "#55514f" }}
    >
      <WaveBackground />
      <RevealInit />

      <Hero />
      <Pillars />
      <PopularArticles posts={latestPosts} />
      <AboutStrengths />
      <Platforms />
    </div>
  );
}
