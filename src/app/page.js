import Hero from "@/components/home/Hero";
import PostCard from "@/components/blog/PostCard";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export const metadata = {
  title: "ホーム | はるふートラベル - ワーママのための賢い旅の始め方",
  description: "マイルとポイ活で家族旅行へ。忙しいママでもできるお得術を公開中。「お金がない」「時間がない」を解決して、子供との思い出を作りましょう。",
};

export default function Home() {
  // Get the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col gap-10 pb-20">
      <Hero />

      {/* Feature Section Preview */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            賢い旅の始め方
          </h2>

        </div>

        {/* Recent Blog Posts Section */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">新着記事</h2>
            <Link href="/blog" className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1">
              記事一覧へ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
