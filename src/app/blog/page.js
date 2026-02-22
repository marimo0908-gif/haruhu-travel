import PostCard from "@/components/blog/PostCard";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        最新のブログ記事
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-slate-600">
                        お得な旅情報から、日々のライフハックまで。<br />
                        ママの毎日をもっと楽しくするヒントをお届けします。
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
