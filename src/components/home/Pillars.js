import PlaneIcon from "@/components/home/PlaneIcon";

const pillars = [
    {
        bg: "#e89b96",
        title: "マイル・ポイント・旅行",
        desc: "ホテル宿泊記やマイルの貯め方・使い方、子連れ旅行のリアルな体験をシェア",
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
            </svg>
        ),
    },
    {
        bg: "#7cc0c0",
        title: "AI活用",
        desc: "非エンジニアがAIをどう学び使うか。Claude / Claude Design の活用法、バイブコーディングの実践",
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4.5" y="8.5" width="15" height="11" rx="2.5" />
                <path d="M12 8.5V5" />
                <circle cx="12" cy="3.6" r="1.1" fill="#fff" stroke="none" />
                <path d="M2.5 12.5v3M21.5 12.5v3" />
                <circle cx="9.2" cy="13" r="1.15" fill="#fff" stroke="none" />
                <circle cx="14.8" cy="13" r="1.15" fill="#fff" stroke="none" />
                <path d="M9.5 16.5h5" />
            </svg>
        ),
    },
    {
        bg: "#e5b54e",
        title: "自由なライフスタイル",
        desc: "本業と子育てをしながら、AIとスキルで生き方を変えていく過程",
        icon: (
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21V10" />
                <path d="M12 10c-2.6-2.6-6.2-2.8-8.5-.8 2-1 4.6-.3 5.8 1.5" />
                <path d="M12 10c2.6-2.6 6.2-2.8 8.5-.8-2-1-4.6-.3-5.8 1.5" />
                <path d="M12 10c-.6-3.6-3-6.2-5.8-6.6 2.7.3 4.8 2.3 5.2 4.8" />
                <path d="M12 10c.6-3.6 3-6.2 5.8-6.6-2.7.3-4.8 2.3-5.2 4.8" />
            </svg>
        ),
    },
];

export default function Pillars() {
    return (
        <section id="pillars" className="reveal mx-auto mt-20 max-w-[1120px] scroll-mt-24 px-6 sm:px-10 lg:mt-[100px]">
            <h2 className="font-maru flex items-center justify-center gap-3.5 text-center text-[26px] font-bold text-[#4a4644] sm:text-[30px]">
                <span className="text-[#e79b96]">➻</span>はるふートラベルで発信していること<PlaneIcon className="inline-block h-6 w-6 text-[#e79b96]" />
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((p) => (
                    <div key={p.title} className="flex items-start gap-5">
                        <div
                            className="flex h-[66px] w-[66px] flex-none items-center justify-center rounded-full"
                            style={{ background: p.bg }}
                        >
                            {p.icon}
                        </div>
                        <div>
                            <h3 className="font-maru mb-2 mt-1 text-lg font-bold text-[#4a4644]">{p.title}</h3>
                            <p className="text-[13.5px] leading-[1.8] text-[#8a8382]">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
