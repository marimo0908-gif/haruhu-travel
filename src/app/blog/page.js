import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function BlogPage() {
    let posts = [];
    try {
        posts = await client.fetch(POSTS_QUERY);
    } catch (error) {
        console.error("Sanity fetch error:", error);
    }

    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                    >
                        <span>&larr; ホームに戻る</span>
                    </Link>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        最新のブログ記事
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-slate-600">
                        お得な旅情報から、日々のライフハックまで。<br />
                        ママの毎日をもっと楽しくするヒントをお届けします。
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
