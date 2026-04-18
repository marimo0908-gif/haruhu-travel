import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import Sidebar from "@/components/blog/Sidebar";
import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function BlogPage({ searchParams }) {
    const selectedCategory = searchParams.category;
    let posts = [];
    let categories = [];
    try {
        [posts, categories] = await Promise.all([
            client.fetch(POSTS_QUERY),
            client.fetch(CATEGORIES_QUERY)
        ]);
    } catch (error) {
        console.error("Sanity fetch error:", error);
    }

    // Filter posts based on the category if provided
    const filteredPosts = selectedCategory 
        ? posts.filter(post => post.category?.title === selectedCategory)
        : posts;

    return (
        <div className="bg-slate-50 py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                    >
                        <span>&larr; ホームに戻る</span>
                    </Link>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-x-12 gap-y-16">
                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mb-4 border-l-4 border-primary pl-4">
                                {selectedCategory ? `${selectedCategory}の記事一覧` : "記事一覧"}
                            </h2>
                            <p className="text-lg text-slate-600">
                                {selectedCategory 
                                    ? `${selectedCategory}に関する情報を集めました。`
                                    : "旅を賢く楽しむための情報を新着順にお届けします。"}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <PostCard key={post._id} post={post} />
                                ))
                            ) : (
                                <p className="text-slate-500 py-12">該当する記事が見つかりませんでした。</p>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:w-80 shrink-0">
                        <Sidebar categories={categories} posts={posts} />
                    </div>
                </div>
            </div>
        </div>
    );
}
