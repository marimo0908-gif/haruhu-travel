import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { client, urlFor } from "@/sanity/client";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { SanityContent } from "@/sanity/components/SanityContent";
import EnglishQuizBanner from "@/components/blog/EnglishQuizBanner";
import PRBadge from "@/components/monetization/PRBadge";
import ViewCounter from "@/components/blog/ViewCounter";

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

    try {
        post = await client.fetch(POST_QUERY, { slug });
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
        <article className="min-h-screen bg-white pb-24">
            <ViewCounter slug={slug} />
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
                {/* Hero Section: Featured Image with Overlaid Text */}
                <div className="relative w-full aspect-video bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 border border-slate-100 group">
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
                            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                                <div className="flex flex-wrap items-center gap-3 text-white/90 mb-4 text-sm font-semibold">
                                    {post.isSponsored && (
                                        <PRBadge className="bg-white text-slate-900 border-none shadow-lg px-3 py-1 text-[11px] font-black tracking-widest" />
                                    )}
                                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                                        {category}
                                    </span>
                                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                    <span className="flex items-center gap-1.5 opacity-90 drop-shadow-md">
                                        <Clock className="w-4 h-4" />
                                        {date}
                                    </span>
                                </div>
                                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] drop-shadow-xl tracking-tight">
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

                <div className="mx-auto max-w-3xl px-0 mt-0">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        記事一覧に戻る
                    </Link>

                    <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4 prose-p:leading-relaxed mb-12">
                        <SanityContent value={post.body} />
                    </div>

                    <EnglishQuizBanner />

                    <div className="mt-16 pt-8 border-t border-slate-100 text-center">
                        <p className="text-slate-600 mb-6">この記事が役に立ったらシェアをお願いします♪</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://haruhu-travel.vercel.app/blog/${slug}`)}&text=${encodeURIComponent(`${title} | はるふートラベル`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                            >
                                Xでシェアする
                            </a>
                            <a
                                href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://haruhu-travel.vercel.app/blog/${slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#06C755] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                            >
                                LINEで送る
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
