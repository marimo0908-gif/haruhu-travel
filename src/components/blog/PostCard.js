import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/client";
import PRBadge from "@/components/monetization/PRBadge";

export default function PostCard({ post }) {
    // Handle both Sanity data and local data
    const title = post.title;
    const excerpt = post.excerpt;
    const slug = post.slug?.current || post.slug;
    const rawDate = post.publishedAt || post.date;
    const date = rawDate ? new Date(rawDate).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-') : '';
    const categoryName = post.category?.title || post.category;

    // Handle images: Sanity image object or local string URL
    const imageSrc = post.mainImage ? urlFor(post.mainImage).url() : post.imageUrl;

    return (
        <Link href={`/blog/${slug}`} className="block h-full">
            <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 group h-full cursor-pointer">
                <div className="relative w-full h-24 sm:h-32 bg-slate-100 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                        {imageSrc ? (
                            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl">📷</span>
                        )}
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                        {post.isSponsored && <PRBadge className="shadow-sm backdrop-blur-sm bg-white/90" />}
                        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                            {categoryName}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col p-6 w-full flex-grow">
                    <div className="flex items-center gap-x-4 text-xs text-slate-500 mb-3">
                        <time dateTime={date} className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {date}
                        </time>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold leading-6 text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {title}
                        </h3>
                        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                            {excerpt}
                        </p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-primary">
                        記事を読む <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
