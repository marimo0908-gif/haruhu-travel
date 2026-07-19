// トップ背景の、ふんわりした3色の波（ピンク/ミント/クリーム）
export default function WaveBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden blur-[2px]"
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 2600"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
            >
                <path d="M0 0 H1440 V430 C1200 510 960 370 720 430 C480 490 240 370 0 430 Z" fill="#f7dcd7" opacity="0.34" />
                <path d="M0 1050 C240 990 480 1110 720 1050 C960 990 1200 1110 1440 1050 V1480 C1200 1540 960 1420 720 1480 C480 1540 240 1420 0 1480 Z" fill="#dcecec" opacity="0.3" />
                <path d="M0 2130 C240 2070 480 2190 720 2130 C960 2070 1200 2190 1440 2130 V2600 H0 Z" fill="#f7ecd2" opacity="0.32" />
            </svg>
        </div>
    );
}
