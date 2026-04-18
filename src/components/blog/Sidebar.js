import Link from 'next/link';

export default function Sidebar({ categories = [], posts = [] }) {
    return (
        <aside className="w-full lg:sticky lg:top-24 space-y-8">
            {/* Category Section */}
            <div>
                <h3 className="text-lg font-bold text-slate-900 border-b-2 border-primary w-fit pb-1 mb-6">
                    カテゴリー
                </h3>
                <ul className="space-y-4">
                    {categories.length > 0 ? (
                        categories.map((category) => {
                            // Filter posts for this category
                            const categoryPosts = posts.filter(post => 
                                (post.category?.title || post.category) === category.title
                            ).slice(0, 5); // Show latest 5 posts

                            return (
                                <li key={category._id} className="relative group/item">
                                    <Link
                                        href={`/blog?category=${encodeURIComponent(category.title)}`}
                                        className="group flex items-center justify-between py-2 border-b border-slate-100 hover:text-primary transition-colors text-slate-600"
                                    >
                                        <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors tracking-[0.2em]">
                                            {category.title}
                                        </span>
                                        <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {posts.filter(p => (p.category?.title || p.category) === category.title).length}
                                        </span>
                                    </Link>

                                    {/* Hover Article Titles */}
                                    {categoryPosts.length > 0 && (
                                        <div className="absolute left-full top-0 ml-4 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-100 p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50 transform translate-x-2 group-hover/item:translate-x-0 hidden lg:block">
                                            <div className="mb-3 flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    Latest in {category.title}
                                                </span>
                                            </div>
                                            <ul className="space-y-3">
                                                {categoryPosts.map((post) => (
                                                    <li key={post._id}>
                                                        <Link 
                                                            href={`/blog/${post.slug?.current || post.slug}`}
                                                            className="block group/link"
                                                        >
                                                            <p className="text-xs font-bold text-slate-800 line-clamp-2 group-hover/link:text-primary transition-colors mb-1 leading-snug">
                                                                {post.title}
                                                            </p>
                                                            <p className="text-[10px] text-slate-400">
                                                                {post.publishedAt || post.date}
                                                            </p>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-4 pt-3 border-t border-slate-50">
                                                <Link
                                                    href={`/blog?category=${encodeURIComponent(category.title)}`}
                                                    className="block text-[10px] text-center text-primary font-bold hover:underline"
                                                >
                                                    記事一覧をすべて見る &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            );
                        })
                    ) : (
                        <p className="text-sm text-slate-500">カテゴリーがありません</p>
                    )}
                </ul>
            </div>

            {/* Inquiry/Contact Section */}
            <div className="bg-gradient-to-br from-[#e0f2fe] via-[#f8fafc] to-[#ffe4e6] rounded-2xl p-6 shadow-md border border-sky-200/50 overflow-hidden relative group">
                <div className="relative z-10">
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900">
                        <span className="text-xl">✉️</span>
                        お問い合わせ
                    </h4>
                    <p className="text-xs text-slate-700 mb-4 leading-relaxed font-bold">
                        ブログへのご感想や、マイル・旅行に関するご質問など、お気軽にお寄せください。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block w-full text-center bg-primary text-white py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all transform active:scale-95 shadow-md"
                    >
                        メッセージを送る
                    </Link>
                </div>
                {/* Decorative Elements - Higher contrast blue and pink */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#7dd3fc]/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#fda4af]/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
        </aside>
    );
}
