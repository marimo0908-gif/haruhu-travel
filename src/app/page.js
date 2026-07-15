import Hero from "@/components/home/Hero";
import PostCard from "@/components/blog/PostCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/client";
import { POSTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "ホーム | はるふートラベル - ママのための賢い旅の始め方",
  description: "マイルとポイ活で家族旅行へ。忙しいママでもできるお得術を公開中。「お金がない」「時間がない」を解決して、子供との思い出を作りましょう。",
};

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  let stayReviews = [];
  let milePointPosts = [];

  try {
    [stayReviews, milePointPosts] = await Promise.all([
      client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "宿泊レビュー" }),
      client.fetch(POSTS_BY_CATEGORY_QUERY, { category: "マイル・ポイ活" }),
    ]);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return (
    <div className="flex flex-col gap-16 pb-24 bg-slate-50/30">
      <Hero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        {/* Accommodation Reviews Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <img src="/icons/icon-c-suitcase.svg" alt="" className="w-6 h-6 rounded-lg" />
                <span className="text-sm tracking-widest uppercase">STAY REVIEWS</span>
              </div>
              <h2 className="font-maru text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                実際に泊まったホテルの体験記
              </h2>
            </div>
            <Link 
              href="/blog?category=宿泊レビュー" 
              className="group text-sm font-bold text-primary flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 hover:bg-primary hover:text-white transition-all transform active:scale-95"
            >
              宿泊レポをもっと見る <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {stayReviews.slice(0, 3).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </section>

        {/* Miles & Points Section */}
        <section className="bg-white -mx-6 lg:-mx-8 px-6 lg:px-8 py-20 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <img src="/icons/icon-a-plane.svg" alt="" className="w-6 h-6 rounded-lg" />
                <span className="text-sm tracking-widest uppercase">MILES & POINTS</span>
              </div>
              <h2 className="font-maru text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                マイルとポイ活で旅をお得に
              </h2>
            </div>
            <Link 
              href="/blog?category=マイル・ポイ活" 
              className="group text-sm font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-5 py-2.5 rounded-full hover:bg-emerald-600 hover:text-white transition-all transform active:scale-95"
            >
              お得情報をすべて見る <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {milePointPosts.slice(0, 3).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        {/* エアメール（航空便の封筒）風カード */}
        <div
          className="rounded-[2rem] p-2.5 shadow-md"
          style={{
            background:
              "repeating-linear-gradient(45deg, #7dd3fc 0 14px, #ffffff 14px 28px, #fda4af 28px 42px, #ffffff 42px 56px)",
          }}
        >
          <div className="bg-white rounded-[1.6rem] p-8 sm:p-14 text-center relative overflow-hidden">
            {/* 切手風のアイコン */}
            <div className="inline-block rotate-6 rounded-lg border-2 border-dashed border-sky-200 bg-sky-50 p-2 mb-6">
              <img src="/icons/icon-a-plane.svg" alt="" className="w-10 h-10 rounded-md" />
            </div>
            <h3 className="font-maru text-2xl sm:text-3xl font-bold mb-6 text-slate-800 tracking-tight">
              ご質問・ご相談はお気軽に！
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              ブログの内容に関するご感想や、マイルの貯め方、ホテル選びの相談など、
              何か気になることがあればいつでもメッセージをお送りください。
              一つひとつ丁寧にお返事させていただきます♪
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/30"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
