"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

const navigation = [
    { name: "ホーム", href: "/", icon: "/icons/icon-b-h-logo.svg", note: "トップページへ" },
    { name: "宿泊レビュー", href: "/blog?category=宿泊レビュー", icon: "/icons/icon-a-plane.svg", note: "実際に泊まったホテルの体験記" },
    { name: "マイル・ポイ活", href: "/blog?category=マイル・ポイ活", icon: "/icons/icon-c-suitcase.svg", note: "旅をお得にするコツ" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8" aria-label="Global">
                {/* Mobile menu button */}
                <div className="flex lg:hidden absolute left-4">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">メニューを開く</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Logo - centered on mobile, left on desktop */}
                <div className="flex items-center lg:absolute lg:left-8">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5 group">
                        {/* Logo mark: the source PNG has large white padding, so crop it by scaling inside a fixed frame */}
                        <span className="relative block h-11 w-11 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full">
                            <img
                                src="/はるふーtravel.png"
                                alt=""
                                className="absolute inset-0 h-full w-full object-contain scale-[1.7] group-hover:rotate-6 transition-transform duration-300"
                            />
                        </span>
                        <span className="font-maru text-lg sm:text-2xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
                            はるふートラベル
                        </span>
                    </Link>
                </div>

                {/* Desktop navigation - centered */}
                <div className="hidden lg:flex lg:gap-x-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group font-maru relative rounded-full px-4 py-2 text-sm font-bold leading-6 text-slate-600 transition-colors hover:bg-sky-50 hover:text-primary"
                        >
                            {item.name}
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-4 -bottom-0.5 border-b-2 border-dotted border-sky-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </Link>
                    ))}
                </div>


            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-gradient-to-b from-sky-50 via-white to-rose-50 p-5">
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                                <img src="/はるふーtravel.png" alt="" className="absolute inset-0 h-full w-full object-contain scale-[1.7]" />
                            </span>
                            <span className="font-maru text-lg font-bold tracking-tight text-slate-800">はるふートラベル</span>
                        </Link>
                        <button
                            type="button"
                            className="rounded-full bg-white p-2.5 text-slate-600 shadow-sm ring-1 ring-slate-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">メニューを閉じる</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-sky-100 active:scale-[0.98] transition-transform"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <img src={item.icon} alt="" className="h-12 w-12 rounded-2xl" />
                                <span>
                                    <span className="font-maru block text-lg font-bold text-slate-800">{item.name}</span>
                                    <span className="block text-xs text-slate-500 mt-0.5">{item.note}</span>
                                </span>
                                <span className="ml-auto text-sky-300" aria-hidden="true">→</span>
                            </Link>
                        ))}
                    </nav>
                    <p className="mt-10 text-center text-xs text-slate-400">
                        マイルとポイントで、家族の思い出をもっと豊かに
                    </p>
                </div>
            )}
        </header>
    );
}
