"use client";

export default function ProgressGauge({ pct, celebrating }) {
  return (
    <div className="mx-auto flex max-w-[1120px] items-center gap-3 px-5 pb-2 pt-5 sm:px-8">
      <span className="whitespace-nowrap text-[12px] font-semibold text-muted">✈ 学びの旅</span>
      <div className="relative h-6 flex-1">
        <div
          className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,#ecd9d4 0 8px, transparent 8px 15px)",
          }}
        />
        <div
          className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
          style={{
            width: `${pct}%`,
            backgroundImage: "linear-gradient(90deg,#e88b86,#e57a74)",
            transition: "width 1s cubic-bezier(.4,0,.2,1)",
          }}
        />
        <div className="absolute right-[-2px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_0_3px_rgba(124,192,192,0.25)]" />
        <div
          className="absolute top-1/2 -ml-[11px] text-accent"
          style={{
            left: `${pct}%`,
            transform: celebrating ? "translate(0,-26px) rotate(-18deg)" : "translateY(-50%)",
            transition: "left 1s cubic-bezier(.4,0,.2,1), transform .8s ease",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="#e57a74"
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 2px 4px rgba(229,122,116,.4))" }}
          >
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
          </svg>
        </div>
      </div>
      <span className="min-w-[34px] whitespace-nowrap text-right text-[13px] font-bold text-accent">
        {pct}%
      </span>
    </div>
  );
}
