"use client";

export default function Celebration({ confetti }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {confetti.map((c, i) => (
        <div
          key={i}
          className="absolute top-0 h-3.5 w-2.5 rounded-sm"
          style={{
            left: c.left,
            background: c.color,
            animation: `confettiFall ${c.dur} ease-in ${c.delay} forwards`,
          }}
        />
      ))}
      <div className="academy-popin fixed left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-white px-10 py-6 text-center shadow-[0_20px_50px_rgba(232,122,116,0.3)]">
        <div className="mb-1.5 text-[34px]">🎉</div>
        <div className="font-maru text-xl font-black text-accent">ぜんぶ完了！</div>
        <div className="mt-1 text-[13px] text-muted">学びの旅、ゴールです ✈</div>
      </div>
    </div>
  );
}
