"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PlaneIcon from "@/components/home/PlaneIcon";

const academySocials = [
    {
        name: "Note",
        href: "https://note.com/juicy_roses5378",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
    },
    {
        name: "Substack",
        href: "https://substack.com/@haruhu0",
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 3H2v3h20V3zM2 9.5V21l10-5.6L22 21V9.5H2z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com/marimo_dog_",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@haruhu-26271",
        icon: (
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 8a4 4 0 0 0-3-3.8C17 3.7 12 3.7 12 3.7s-5 0-7 .5A4 4 0 0 0 2 8v8a4 4 0 0 0 3 3.8c2 .5 7 .5 7 .5s5 0 7-.5A4 4 0 0 0 22 16z" />
                <path d="m10 15 5-3-5-3z" fill="currentColor" />
            </svg>
        ),
    },
];

function AcademyFooter() {
    return (
        <footer className="border-t border-[#f2e7e3] bg-[#fdf8f6] px-5 py-10 text-center">
            <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                        <PlaneIcon className="h-[17px] w-[17px] text-white" />
                    </span>
                    <span className="text-[16px] italic text-accent" style={{ fontFamily: "Georgia, serif" }}>
                        haruhu travel
                    </span>
                </div>
                <p className="max-w-[440px] text-[13px] leading-[1.8] text-muted">
                    「いつか行きたい」を「行けた」に。
                    <br />
                    ママ × 子連れ旅行 × AI挑戦中のはるふーが発信しています。
                </p>
                <div className="flex gap-5">
                    {academySocials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center gap-2 text-muted no-underline transition-colors hover:text-accent"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-[1.5px] border-[#f2e0dc] bg-white transition-all">
                                {s.icon}
                            </span>
                            <span className="text-[11px] font-semibold">{s.name}</span>
                        </a>
                    ))}
                </div>
                <span className="text-[11.5px] text-[#c0b4b0]">© 2026 はるふー travel ・ はるふーAI教室</span>
            </div>
        </footer>
    );
}

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/ai-academy")) {
        return <AcademyFooter />;
    }

    return (
        <footer className="bg-[#fffdfb] px-5 pb-14 pt-16 text-center">
            {/* フッター用ブログロゴマーク */}
            <div className="flex flex-col items-center justify-center mb-10">
                <Link href="/" className="flex flex-col items-center gap-2 group">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white border border-[#f2e6e3] shadow-sm flex items-center justify-center p-1 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                        <img
                            src="/haruhu-travel-logo.png"
                            alt="はるふートラベル"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="text-center leading-none mt-1">
                        <div className="font-maru text-lg font-bold tracking-wider text-[#4a4644]">
                            はるふートラベル
                        </div>
                        <div className="font-caveat text-lg font-bold tracking-wide text-[#e79b96] mt-0.5">
                            Haruhu Travel
                        </div>
                    </div>
                </Link>
            </div>

            <div
                className="text-[26px] leading-[1.2] text-[#cabfbb] sm:text-[30px]"
                style={{ fontFamily: "var(--font-parisienne), cursive" }}
            >
                Let&apos;s make{" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#eab6b1" className="inline-block align-[-2px]">
                    <path d="M12 20s-7-4.5-9.3-8.2C1 8.9 2.4 5.5 5.6 5.5c1.9 0 3.2 1.1 4.4 2.6 1.2-1.5 2.5-2.6 4.4-2.6 3.2 0 4.6 3.4 2.9 6.3C19 15.5 12 20 12 20z" />
                </svg>
            </div>
            <div
                className="mt-0.5 text-[26px] leading-[1.2] text-[#cabfbb] sm:text-[30px]"
                style={{ fontFamily: "var(--font-parisienne), cursive" }}
            >
                dream trips come true! <PlaneIcon className="inline-block h-[17px] w-[17px] align-[-2px] text-[#eab6b1]" />
            </div>

            <div className="mx-auto mt-11 flex max-w-[1120px] flex-col items-center justify-between gap-4 border-t border-[#f0e7e3] px-4 pt-5 sm:flex-row sm:px-10">
                <span className="text-[12.5px] text-[#b0a8a5]">© 2026 はるふートラベル. All rights reserved.</span>
                <span className="flex gap-6 text-[12.5px]">
                    <Link href="/privacy" className="text-[#9a9290] hover:text-[#4a4644]">
                        プライバシーポリシー
                    </Link>
                    <Link href="/terms" className="text-[#9a9290] hover:text-[#4a4644]">
                        利用規約
                    </Link>
                </span>
            </div>
        </footer>
    );
}
