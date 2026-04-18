import Hero from "@/components/home/Hero";
import PostCard from "@/components/blog/PostCard";
import Link from "next/link";
import { ArrowRight, Hotel, Banknote } from "lucide-react";
import { client } from "@/sanity/client";
import { POSTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "ホーム | はるふートラベル - ワーママのための賢い旅の始め方",
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
                <Hotel className="w-5 h-5" />
                <span className="text-sm tracking-widest uppercase">STAY REVIEWS</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
                <Banknote className="w-5 h-5" />
                <span className="text-sm tracking-widest uppercase">MILES & POINTS</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
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
        <div className="bg-gradient-to-br from-[#e0f2fe] via-[#f8fafc] to-[#ffe4e6] rounded-[2.5rem] p-8 sm:p-16 text-center shadow-md border border-sky-200/50 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 tracking-tight">ご質問・ご相談はお気軽に！</h3>
            <p className="text-slate-700 mb-10 leading-relaxed text-sm sm:text-base font-medium">
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
          {/* Decorative gradients - Higher contrast blue and pink */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7dd3fc]/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fda4af]/30 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>
      </section>
    </div>
  );
}
