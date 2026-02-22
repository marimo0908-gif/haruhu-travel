"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

export default function PostCard({ post }) {
    return (
        <article className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 group h-full">
            <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                {/* Placeholder for image - in real app would use next/image */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                    {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-4xl">📷</span>
                    )}
                </div>
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-6 w-full flex-grow">
                <div className="flex items-center gap-x-4 text-xs text-slate-500 mb-3">
                    <time dateTime={post.date} className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.date}
                    </time>
                </div>
                <div className="group relative">
                    <h3 className="text-lg font-bold leading-6 text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </Link>
                    </h3>
                    <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                        {post.excerpt}
                    </p>
                </div>
                <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    記事を読む <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </article>
    );
}
