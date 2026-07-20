import Link from "next/link";
import PlaneIcon from "@/components/home/PlaneIcon";

const strengths = [
    {
        bg: "#fbe1de",
        label: (
            <>
                ANA SFC<br />ライフタイム会員
            </>
        ),
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="#e57a74">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
            </svg>
        ),
    },
    {
        bg: "#d9edec",
        label: (
            <>
                マイル・ポイントで<br />家族旅行
            </>
        ),
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4fa3a3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5.5" y="3" width="13" height="18" rx="1.5" />
                <path d="M9 7h1.2M13.8 7H15M9 11h1.2M13.8 11H15M9 15h1.2M13.8 15H15" />
                <path d="M10 21v-3.2h4V21" />
            </svg>
        ),
    },
    {
        bg: "#f6e9c8",
        label: (
            <>
                6つのSNSで<br />発信中
            </>
        ),
        note: (
            <>
                ブログ・YouTube・Instagram<br />note・Substack<br />楽天ROOM
            </>
        ),
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c99a2e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                <path d="M10.8 18.5h2.4" />
            </svg>
        ),
    },
];

export default function AboutStrengths() {
    return (
        <section id="about" className="reveal mx-auto mt-[70px] grid max-w-[1120px] scroll-mt-24 grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-2">
            {/* ABOUT ME カード */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#fdf3f1] p-10 text-center">
                <PlaneIcon className="absolute right-6 top-5 h-[22px] w-[22px] text-[#e79b96] opacity-50" />
                <span className="absolute bottom-4 left-5 text-[15px] text-[#e5b54e] opacity-40">✦</span>
                <div>
                    <div className="mx-auto mb-4 flex h-[82px] w-[82px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(220,150,145,0.28)]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#e88b86">
                            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
                        </svg>
                    </div>
                    <div className="mb-2 text-[11px] font-bold tracking-[3px] text-[#e79b96]">ABOUT ME</div>
                    <h3 className="font-maru mb-5 text-[22px] font-bold text-[#4a4644] inline-block bg-[#e5e7eb] px-5 py-2 rounded-xl">Haruhuってどんな人？</h3>
                    <p className="mx-auto max-w-[380px] text-[13.5px] leading-[1.9] text-[#7a7472]">
                        会社員として働きながら、子どもと旅を楽しむ家族旅ブロガー。マイルとAIに出会い、「いつか行きたい」を「行けた」に変える挑戦を続けています。
                    </p>
                </div>
            </div>

            {/* 3つの強み */}
            <div className="rounded-[20px] bg-[#fdf3f1] p-8 sm:p-10">
                <h3 className="font-maru mb-8 text-center text-[21px] font-bold text-[#4a4644]">はるふートラベルの3つの強み</h3>
                <div className="grid grid-cols-3 gap-4">
                    {strengths.map((s, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="mx-auto mb-3.5 flex h-[84px] w-[84px] items-center justify-center rounded-full"
                                style={{ background: s.bg }}
                            >
                                {s.icon}
                            </div>
                            <div className="font-maru text-[13px] font-bold leading-[1.5] text-[#4a4644] sm:text-sm">{s.label}</div>
                            {s.note && <div className="mt-2 text-[10.5px] leading-[1.5] text-[#a09896]">{s.note}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
