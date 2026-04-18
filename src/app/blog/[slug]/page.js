import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { client, urlFor } from "@/sanity/client";
import { POST_QUERY, POSTS_QUERY, POST_SLUGS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { SanityContent } from "@/sanity/components/SanityContent";
import EnglishQuizBanner from "@/components/blog/EnglishQuizBanner";
import PRBadge from "@/components/monetization/PRBadge";
import ViewCounter from "@/components/blog/ViewCounter";
import Sidebar from "@/components/blog/Sidebar";

export const revalidate = 60;

export async function generateStaticParams() {
    try {
        const slugs = await client.fetch(POST_SLUGS_QUERY);
        return slugs.map((s) => ({
            slug: s.slug,
        }));
    } catch (error) {
        console.error("Sanity fetch error for static params:", error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    let post;
    try {
        post = await client.fetch(POST_QUERY, { slug });
    } catch (e) {
        console.error("Sanity fetch error for metadata:", e);
    }

    if (!post) {
        return { title: '記事が見つかりません' };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    let post;
    let categories = [];
    let posts = [];

    try {
        [post, categories, posts] = await Promise.all([
            client.fetch(POST_QUERY, { slug }),
            client.fetch(CATEGORIES_QUERY),
            client.fetch(POSTS_QUERY)
        ]);
    } catch (error) {
        console.error("Sanity fetch error:", error);
    }

    if (!post) {
        notFound();
    }

    const title = post.title;
    const category = post.category?.title || post.category;
    const rawDate = post.publishedAt || post.date;
    const date = rawDate ? new Date(rawDate).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-') : '';
    const imageSrc = post.mainImage ? urlFor(post.mainImage).url() : post.imageUrl;

    return (
        <article className="min-h-screen bg-slate-50/50 pb-24">
            <ViewCounter slug={slug} />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
                <div className="flex flex-col lg:flex-row gap-x-12 gap-y-12">
                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
                        {/* Hero Section */}
                        <div className="relative w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden mb-10 group">
                            {imageSrc ? (
                                <div className="relative w-full h-full">
                                    <img 
                                        src={imageSrc} 
                                        alt={title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    
                                    {/* Text Overlay at Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 pointer-events-none">
                                        <div className="flex flex-wrap items-center gap-3 text-white/90 mb-4 text-sm font-semibold">
                                            {post.isSponsored && (
                                                <PRBadge className="bg-white text-slate-900 border-none shadow-lg px-2 py-0.5 text-[10px]" />
                                            )}
                                            <span className="bg-primary backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                                                {category}
                                            </span>
                                            <span className="flex items-center gap-1.5 opacity-90 drop-shadow-md">
                                                <Clock className="w-4 h-4" />
                                                {date}
                                            </span>
                                        </div>
                                        <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-2xl tracking-tight">
                                            {title}
                                        </h1>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <span className="text-6xl text-slate-200">📷</span>
                                </div>
                            )}
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4 prose-p:leading-relaxed mb-12">
                            <SanityContent value={post.body} />
                        </div>

                        <EnglishQuizBanner />

                        <div className="mt-16 pt-8 border-t border-slate-100">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                記事一覧に戻る
                            </Link>
                            
                            <div className="text-center bg-slate-50 rounded-2xl p-8">
                                <p className="text-slate-600 mb-6 font-medium">この記事が役に立ったらシェアをお願いします♪</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://haruhu-travel.vercel.app/blog/${slug}`)}&text=${encodeURIComponent(`${title} | はるふートラベル`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md inline-flex items-center justify-center"
                                    >
                                        Xでシェア
                                    </a>
                                    <a
                                        href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://haruhu-travel.vercel.app/blog/${slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#06C755] text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md inline-flex items-center justify-center"
                                    >
                                        LINEで送る
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80 shrink-0">
                        <Sidebar categories={categories} posts={posts} />
                    </div>
                </div>
            </div>
        </article>
    );
}
