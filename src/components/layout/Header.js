"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

const navigation = [
    { name: "ホーム", href: "/" },
    { name: "宿泊レビュー", href: "/blog?category=宿泊レビュー" },
    { name: "マイル・ポイ活", href: "/blog?category=マイル・ポイ活" },
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
                        <span className="text-lg sm:text-2xl font-bold tracking-tight text-slate-800 group-hover:text-primary transition-colors">
                            はるふートラベル
                        </span>
                    </Link>
                </div>

                {/* Desktop navigation - centered */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-slate-600 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>


            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-4">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5">
                            <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full">
                                <img src="/はるふーtravel.png" alt="" className="absolute inset-0 h-full w-full object-contain scale-[1.7]" />
                            </span>
                            <span className="text-lg font-bold tracking-tight text-slate-800">はるふートラベル</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">メニューを閉じる</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-semibold leading-7 text-gray-900 hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
}
