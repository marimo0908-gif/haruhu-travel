import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            {/* Background patterns/gradients */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Decorative Logo - Enlarged and moved to absolute top-right corner */}
            <div className="absolute top-16 right-2 sm:top-24 sm:right-8 opacity-40 animate-pulse-slow pointer-events-none z-10">
                <img
                    src="/はるふーtravel.png"
                    alt=""
                    className="h-20 sm:h-64 w-auto object-contain"
                    aria-hidden="true"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-3xl text-center">

                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
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
                            className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:scale-105"
                        >
                            お得な旅の始め方
                        </Link>
                    </div>
                </div>

                {/* Hero Image / Composition */}

            </div>
        </div>
    );
}
