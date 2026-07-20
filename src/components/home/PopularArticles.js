import Link from "next/link";
import { urlFor } from "@/sanity/client";
import { ArrowRight } from "lucide-react";

// カードの色みは3パターン。カテゴリ名で決め、決まらなければ順番に割り当てる
const SCHEMES = {
    pink: { badge: "#e88b86", border: "#f0d9d6", text: "#e57a74" },
    teal: { badge: "#7cc0c0", border: "#cfe8e8", text: "#4fa3a3" },
    gold: { badge: "#e5b54e", border: "#f2e2b8", text: "#c99a2e" },
};
const ROTATION = ["pink", "teal", "gold"];

function schemeFor(categoryName, index) {
    const name = categoryName || "";
    if (name.includes("AI")) return SCHEMES.teal;
    if (name.includes("宿泊") || name.includes("マイル") || name.includes("旅")) return SCHEMES.pink;
    if (name.includes("ライフ") || name.includes("暮らし")) return SCHEMES.gold;
    return SCHEMES[ROTATION[index % ROTATION.length]];
}

export default function PopularArticles({ posts = [] }) {
    if (!posts.length) return null;

    return (
        <section className="reveal mx-auto mt-24 max-w-[1120px] px-6 sm:px-10">
            <h2 className="font-maru flex items-center justify-center gap-3 text-center text-[26px] font-bold text-[#4a4644] sm:text-[30px]">
                <span className="text-[#e79b96]">➻</span>人気の記事・コンテンツ
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 3).map((post, i) => {
                    const slug = post.slug?.current || post.slug;
                    const categoryName = post.category?.title || post.category || "記事";
                    const scheme = schemeFor(categoryName, i);
                    const imageSrc = slug === 'travel-money-comparison-wise-revolut-idare'
                        ? '/travel-money-comparison-hero-new.png'
                        : (post.mainImage ? urlFor(post.mainImage).width(700).url() : null);

                    const blobStyles = [
                        { borderRadius: "14% 46% 20% 52% / 40% 16% 54% 24%" },
                        { borderRadius: "52% 16% 50% 18% / 18% 54% 20% 48%" },
                        { borderRadius: "24% 50% 16% 46% / 50% 20% 46% 16%" },
                    ];

                    return (
                        <Link
                            key={post._id || slug}
                            href={`/blog/${slug}`}
                            className="hcard flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_12px_30px_rgba(150,130,130,0.12)]"
                        >
                            <div className="relative flex justify-center pt-6">
                                {imageSrc ? (
                                    <div className="h-40 w-40 overflow-hidden rounded-full shadow-sm">
                                        <img
                                            src={imageSrc}
                                            alt={post.title}
                                            className="block h-full w-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#fdf3f1] text-4xl">
                                        ✈
                                    </div>
                                )}
                                <span
                                    className="absolute left-[calc(50%+30px)] top-4 rounded-full px-3 py-1.5 text-[11px] font-medium text-white shadow-sm"
                                    style={{ background: scheme.badge }}
                                >
                                    {categoryName}
                                </span>
                            </div>
                            <div className="px-6 pb-7 pt-6">
                                <h3 className="font-maru mb-5 line-clamp-2 text-[16.5px] font-bold leading-[1.55] text-[#4a4644]">
                                    {post.title}
                                </h3>
                                <span
                                    className="hbtn inline-flex items-center gap-2 rounded-full border-[1.5px] px-5 py-2 text-[13px] font-medium"
                                    style={{ borderColor: scheme.border, color: scheme.text }}
                                >
                                    詳しく見る →
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* ブログ記事一覧へのボタン */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/blog"
                    className="hbtn inline-flex items-center gap-2.5 rounded-full bg-[#e88b86] px-8 py-4 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(232,139,134,0.35)]"
                >
                    ✈ ブログをもっと見る
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}
