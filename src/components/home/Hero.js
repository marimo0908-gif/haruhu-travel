import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            {/* やわらかい背景（空色→白） */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-rose-100/40 to-white" aria-hidden="true" />

            {/* 点線の飛行ルート＋紙飛行機（サイトのシグネチャー） */}
            <svg
                className="absolute inset-x-0 top-8 -z-10 mx-auto w-full max-w-5xl text-sky-200"
                viewBox="0 0 1000 220"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M-20 190 C 200 80, 420 200, 620 110 S 920 40, 1030 70"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="1 14"
                    strokeLinecap="round"
                />
                <circle cx="850" cy="62" r="34" fill="#fde68a" opacity="0.55" />
            </svg>

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-primary shadow-sm ring-1 ring-sky-100">
                        <img src="/icons/icon-a-plane.svg" alt="" className="h-5 w-5 rounded-md" />
                        ママのための賢い旅の始め方
                    </span>

                    <h1 className="font-maru mt-8 text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl">
                        もっと<span className="text-primary">自由</span>に旅しよう
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        「忙しいから無理」「お金がかかるから我慢」はもう卒業。<br />
                        マイルとポイ活を上手に使えば、旅はもっと身近になります。<br />
                        思い出作りを、今すぐ始めましょう。
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/start"
                            className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-200 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:scale-105"
                        >
                            お得な旅の始め方
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
