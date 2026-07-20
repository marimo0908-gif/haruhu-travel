import Link from "next/link";
import PlaneIcon from "@/components/home/PlaneIcon";

export default function Hero() {
    return (
        <section className="reveal mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-6 pb-6 pt-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-10">
            {/* 左：テキスト */}
            <div className="flex flex-col items-start text-left">
                <span className="inline-block rounded-full bg-[#e79b96] px-[18px] py-2 text-[13px] font-medium text-white">
                    ママ × 子連れ旅行 × AI で未来を変える
                </span>
                <h1 className="font-maru mt-6 text-[34px] font-black leading-[1.28] text-[#4a4644] sm:text-[42px] lg:text-[50px]">
                    <span className="text-[#e57a74]">「いつか行きたい」</span>を<br />
                    「
                    <span className="relative inline-block">
                        行けた
                        <svg
                            viewBox="0 0 120 34"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute -left-[6%] -bottom-3 -z-10 h-[26px] w-[114%] overflow-visible"
                        >
                            <path
                                d="M2 27 C22 22 46 19 72 12 C92 6.5 107 4 119 1 C117 8 110 11.5 96 16 C73 23 47 27 25 31.5 C15 33.5 6 33 2 27 Z"
                                fill="#f4d24e"
                                opacity="0.92"
                            />
                        </svg>
                    </span>
                    」に変える
                </h1>
                <p className="mt-7 text-[15px] leading-[2] text-[#6a6462] sm:text-base">
                    マイルとの出会いで、家族旅行の夢がぐっと近づいた。<br />
                    AIを味方につけて、<br />
                    場所や時間に縛られない生き方を模索しています。
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/blog"
                        className="hbtn inline-flex items-center gap-2.5 rounded-full bg-[#e88b86] px-7 py-4 text-[15px] font-medium text-white shadow-[0_8px_20px_rgba(232,139,134,0.35)]"
                    >
                        <PlaneIcon className="h-4 w-4" /> ブログを読む
                    </Link>
                    <Link
                        href="/#about"
                        className="hbtn inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#f0d9d6] bg-white px-7 py-4 text-[15px] font-medium text-[#6a6462]"
                    >
                        ♡ 自己紹介はこちら
                    </Link>
                </div>
            </div>

            {/* 右：写真（輪郭がゆっくり動く） */}
            <div className="hero-img-wrap relative aspect-[7/5] w-full max-w-[520px] justify-self-center lg:max-w-none">
                <div
                    className="hero-blob-bg absolute -inset-y-[6%] -left-[8%] -right-[4%] opacity-60"
                    style={{ background: "linear-gradient(140deg, #f7d9d4, #cfe9e2)" }}
                    aria-hidden="true"
                />
                {/* 装飾：ハート */}
                <div className="absolute -top-4 left-[8%] h-6 w-6 -rotate-[8deg] text-[#f0b8b2]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.9 20.4c-.4-.3-4.2-3.3-6.1-5.9-1.3-1.8-1.9-3.4-1.4-5 .6-2 2.7-2.9 4.5-2.3 1.1.4 1.9 1.2 2.4 2.2.1.2.3.3.4.1.6-1 1.5-1.8 2.7-2.1 1.9-.5 3.9.6 4.3 2.6.3 1.6-.4 3.1-1.6 4.8-1.7 2.3-4.9 4.9-5.3 5.2-.1.1-.3.1-.4.1z" />
                    </svg>
                </div>
                {/* 装飾：星 */}
                <div className="absolute bottom-[6%] -right-3.5 h-[22px] w-[22px] text-[#8ec9c3]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.4 6.3 19.2l2.1-6.6L3 8.6h6.8z" />
                    </svg>
                </div>
                <div className="hero-blob absolute inset-0 overflow-hidden shadow-[0_22px_50px_rgba(210,140,135,0.28)]">
                    <img
                        src="/handoff/hero_photo.png"
                        alt="ハワイ・アウラニのリゾート風景"
                        className="block h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
