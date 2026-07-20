import Link from "next/link";

export default function Footer() {
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
                dream trips come true! <span className="text-[#eab6b1]">✈</span>
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
