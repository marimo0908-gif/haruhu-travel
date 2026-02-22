"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

const navigation = [
    { name: "ホーム", href: "/" },
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
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        {/* Logo Image - User requested change */}
                        <div className="relative h-20 w-40">
                            <img src="/はるふーtravel.png" alt="はるふートラベル" className="absolute -top-10 -left-10 h-[240px] w-auto max-w-none object-contain" />
                        </div>
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
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <img src="/はるふーtravel.png" alt="はるふートラベル" className="h-[320px] w-auto object-contain" />
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
