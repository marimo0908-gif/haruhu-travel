"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";
import PlaneIcon from "@/components/home/PlaneIcon";
import ProgressGauge from "@/app/ai-academy/components/ProgressGauge";
import { PROGRESS_EVENT, computePct, readProgress } from "@/app/ai-academy/progressStore";

const navigation = [
    { name: "About", href: "/#about" },
    { name: "マイル / 自由なライフスタイル", href: `/blog?category=${encodeURIComponent("自由なライフスタイル")}` },
    { name: "AI活用", href: "/ai-academy" },
    { name: "SNS", href: "/#platforms" },
];

function AcademyHeaderBar() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const update = () => setPct(computePct(readProgress()));
        update();
        window.addEventListener(PROGRESS_EVENT, update);
        return () => window.removeEventListener(PROGRESS_EVENT, update);
    }, []);

    return (
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-6 px-5 py-3.5 sm:px-10">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full bg-white border border-[#f2e6e3] shadow-sm flex items-center justify-center p-1 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <img
                        src="/haruhu-travel-logo.png"
                        alt="はるふートラベル"
                        className="h-full w-full object-contain"
                    />
                </div>
                <span className="leading-tight flex flex-col justify-center">
                    <span className="font-maru block text-lg font-bold tracking-wide text-[#4a4644] sm:text-2xl">
                        はるふートラベル
                    </span>
                    <span className="font-caveat block text-lg font-bold tracking-wide text-[#e79b96] -mt-0.5 sm:text-xl">
                        Haruhu Travel
                    </span>
                </span>
            </Link>

            <Link
                href="/"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold text-muted transition-colors hover:bg-[#fbeeec] hover:text-accent"
            >
                <Home size={17} /> ホーム
            </Link>

            <div className="flex min-w-[220px] max-w-[420px] flex-[0_1_420px] items-center">
                <ProgressGauge pct={pct} celebrating={false} />
            </div>
        </div>
    );
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isAcademy = pathname?.startsWith("/ai-academy");

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="w-full border-b border-[#f2e6e3] bg-[#fffdfb]/85 backdrop-blur-md">
            {isAcademy ? (
                <AcademyHeaderBar />
            ) : (
            <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-3.5 sm:px-10">
                {/* ロゴ */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full bg-white border border-[#f2e6e3] shadow-sm flex items-center justify-center p-1 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                        <img
                            src="/haruhu-travel-logo.png"
                            alt="はるふートラベル"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="leading-tight flex flex-col justify-center">
                        <span className="font-maru block text-lg font-bold tracking-wide text-[#4a4644] sm:text-2xl">
                            はるふートラベル
                        </span>
                        <span className="font-caveat block text-lg font-bold tracking-wide text-[#e79b96] -mt-0.5 sm:text-xl">
                            Haruhu Travel
                        </span>
                    </span>
                </Link>

                {/* PCナビ */}
                <nav className="hidden items-center gap-7 text-sm font-medium text-[#6a6462] lg:flex">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="transition-colors hover:text-[#e57a74]">
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTAボタン（PC） */}
                <Link
                    href="/blog"
                    className="hbtn hidden items-center gap-2 rounded-full bg-[#e88b86] px-5 py-3 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(232,139,134,0.35)] lg:inline-flex"
                >
                    <PlaneIcon className="h-4 w-4" /> いつか行きたいを叶える
                </Link>

                {/* モバイル：メニューボタン */}
                <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center p-2 text-[#6a6462] lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">メニューを開く</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            )}
            </div>

            {/* モバイルメニュー */}
            {!isAcademy && mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-[#fffdfb] p-5 lg:hidden">
                    <div className="mb-10 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileMenuOpen(false)}>
                            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white border border-[#f2e6e3] shadow-sm flex items-center justify-center p-0.5">
                                <img
                                    src="/haruhu-travel-logo.png"
                                    alt=""
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="leading-tight flex flex-col justify-center">
                                <span className="font-maru block text-base font-bold text-[#4a4644]">
                                    はるふートラベル
                                </span>
                                <span className="font-caveat block text-sm font-bold text-[#e79b96] -mt-0.5">
                                    Haruhu Travel
                                </span>
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="rounded-full bg-white p-2.5 text-[#6a6462] shadow-sm ring-1 ring-[#f2e6e3]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">メニューを閉じる</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[15px] font-medium text-[#4a4644] shadow-sm ring-1 ring-[#f2e6e3] transition-transform active:scale-[0.98]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                                <span className="text-[#e79b96]" aria-hidden="true">→</span>
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#e88b86] px-5 py-4 text-[15px] font-medium text-white shadow-[0_6px_16px_rgba(232,139,134,0.35)]"
                    >
                        <PlaneIcon className="h-4 w-4" /> いつか行きたいを叶える
                    </Link>
                </div>
            )}
        </header>
    );
}
