const platforms = [
    {
        name: "ブログ",
        id: "記事一覧",
        href: "/blog",
        border: true,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#4a4644">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14a7.9 7.9 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.07 16zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82A15.65 15.65 0 0 1 12 19.96zM14.34 14H9.66a14.9 14.9 0 0 1 0-4h4.68a14.9 14.9 0 0 1 0 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.9 7.9 0 0 1 0 4h-3.38z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        id: "@haruhu-26271",
        href: "https://www.youtube.com/@haruhu-26271",
        bg: "#ff0000",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        id: "@marimo_dog_",
        href: "https://www.instagram.com/marimo_dog_/",
        bg: "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf)",
        icon: (
            <svg width="21" height="21" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
    },
    {
        name: "note",
        id: "note.com/juicy_roses5378",
        href: "https://note.com/juicy_roses5378",
        text: "note",
        border: true,
    },
    {
        name: "Substack",
        id: "substack.com/@haruhu0",
        href: "https://substack.com/@haruhu0",
        bg: "#ff6719",
        icon: (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
        ),
    },
    {
        name: "楽天ROOM",
        id: "おすすめアイテム",
        href: "https://room.rakuten.co.jp/room_6f3e1c023f/items",
        bg: "#bf0000",
        roomText: "ROOM",
    },
];

export default function Platforms() {
    return (
        <section id="platforms" className="reveal mx-auto mt-[90px] max-w-[1120px] scroll-mt-24 px-6 sm:px-10">
            <h2 className="font-maru flex items-center justify-center gap-3 text-center text-[22px] font-bold text-[#4a4644] sm:text-[26px]">
                <span className="inline-flex text-[#e79b96]">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.5 3.5 2.8 10.4c-.7.3-.7 1.3.1 1.5l6.4 1.9 1.9 6.4c.2.8 1.2.8 1.5.1z" />
                        <path d="M21.5 3.5 9.3 13.8" />
                    </svg>
                </span>
                各プラットフォームで情報発信中！
            </h2>
            <p className="mt-3.5 text-center text-sm text-[#8a8382]">旅行・マイル・AIのリアルな活用法をお届けしています</p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {platforms.map((p) => (
                    <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hcard flex items-center gap-3 rounded-[14px] border border-[#f2e6e3] bg-white px-4 py-5"
                    >
                        <span
                            className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[9px]"
                            style={{
                                background: p.border ? "#fff" : p.bg,
                                border: p.border ? "1.5px solid #e6e0dd" : undefined,
                            }}
                        >
                            {p.icon}
                            {p.text && <span className="font-maru text-xs font-extrabold text-[#1a1a1a]">{p.text}</span>}
                            {p.roomText && <span className="text-[11px] font-bold text-white">{p.roomText}</span>}
                        </span>
                        <span className="min-w-0">
                            <span className="block text-[13px] font-bold text-[#4a4644]">{p.name}</span>
                            <span className="block truncate text-[10px] text-[#a09896]">{p.id}</span>
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
