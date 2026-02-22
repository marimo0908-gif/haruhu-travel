import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Tag, ArrowLeft, CheckCircle2 } from "lucide-react";
import AffiliateLink from "@/components/monetization/AffiliateLink";

// This helps static export if needed, or just standard dynamic routing
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: '記事が見つかりません',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
        },
    }
}

export default function BlogPostPage({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Header Image Area */}
            {/* Header Image Area */}
            <div className="relative w-full bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />
                {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[75vh] object-contain bg-slate-900" />
                ) : (
                    <div className="h-[40vh] w-full flex items-center justify-center bg-slate-100 text-slate-300">
                        <span className="text-6xl">📷</span>
                    </div>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 sm:p-10 pt-24">
                    <div className="mx-auto max-w-3xl">
                        <div className="flex items-center gap-3 text-white/90 mb-4 text-sm font-medium">
                            <span className="bg-primary px-3 py-1 rounded-full text-white">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.date}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-6 lg:px-8 mt-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    記事一覧に戻る
                </Link>

                {/* Mom's Checkpoint Box (Unique Feature) */}


                {/* Article Body (Dummy Content) */}
                {/* Article Body */}
                <div className="prose prose-slate prose-lg max-w-none">
                    {post.content ? (
                        /* Dynamic Content Rendering */
                        post.content.map((block, index) => {
                            if (block.type === 'heading') {
                                return <h3 key={index} className="mt-8 mb-4 text-xl font-bold text-slate-900">{block.text}</h3>;
                            }
                            if (block.type === 'text') {
                                return <p key={index} className="mb-6 leading-relaxed text-slate-700">{block.text}</p>;
                            }
                            if (block.type === 'html') {
                                return <div key={index} dangerouslySetInnerHTML={{ __html: block.text }} />;
                            }
                            return null;
                        })
                    ) : (
                        /* Fallback Dummy Content for existing posts */
                        <>
                            <p className="lead">
                                {post.excerpt}
                            </p>
                            <p>
                                「子供と一緒に旅行に行きたいけど、準備が大変そう…」「飛行機で泣いたらどうしよう…」そんな不安を抱えているママも多いのではないでしょうか？
                                今回は、実際に6歳と3歳の子供を連れて行ってわかった、リアルな感想と対策をまとめました。
                            </p>

                            <h3>準備編：これだけは持っていこう</h3>
                            <p>
                                まずは持ち物リストのチェックから。普段のお出かけセットに加えて、旅行ならではのアイテムをプラスします。
                                特に海外の場合、現地のスーパーで手に入りにくいもの（お気に入りのふりかけや、使い慣れた薬など）は必須です。
                            </p>

                            <h3>移動編：機内での過ごし方</h3>
                            <p>
                                一番の難関はやはり飛行機。今回は夜便を選びました。子供たちが寝てくれることを期待して…結果は大正解！
                                搭乗前にキッズスペースでたっぷり遊ばせて、乗ったらすぐ寝る作戦が功を奏しました。
                            </p>

                            <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
                                <strong>💡 ポイント：</strong><br />
                                新しいおもちゃやシールブックを「秘密兵器」として隠し持っていくのがおすすめ。飽きてきたタイミングで小出しにしましょう！
                            </p>

                            {/* Affiliate Link Example */}
                            <div className="not-prose">
                                <AffiliateLink
                                    title="楽天プレミアムカード"
                                    description="空港ラウンジが無料で使える「プライオリティ・パス」がついてくる最強カード。家族旅行の強い味方です。"
                                    href="https://www.rakuten-card.co.jp/"
                                    badgeText="年会費以上の価値あり"
                                    points={[
                                        "国内・海外空港ラウンジが無料",
                                        "ポイント還元率が最大5倍",
                                        "旅行傷害保険も充実"
                                    ]}
                                    buttonText="今すぐ申し込む"
                                />
                            </div>

                            <h3>現地編：無理のないスケジュールの立て方</h3>
                            <p>
                                子供連れの旅行で一番大切なのは「詰め込みすぎない」こと。午前中に1つ、午後に1つ予定を入れるくらいでちょうどいいんです。
                                お昼寝の時間や、急なトイレ休憩も考慮して、ゆとりのあるプランを心がけましょう。
                            </p>

                            <h3>まとめ</h3>
                            <p>
                                準備さえしっかりしておけば、子連れ旅行は最高の思い出になります。完璧を目指さず、ハプニングも楽しむくらいの気持ちで。
                                みなさんの次の旅行が素敵なものになりますように！
                            </p>
                        </>
                    )}
                </div>

                {/* Share / CTA Section */}
                <div className="mt-16 pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-600 mb-6">この記事が役に立ったらシェアをお願いします♪</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                            Xでシェアする
                        </button>
                        <button className="bg-[#06C755] text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                            LINEで送る
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
