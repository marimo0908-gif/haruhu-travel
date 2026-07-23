"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useAcademy } from "../AcademyProvider";

export default function LessonCard({ lesson }) {
  const { completed, toggleComplete } = useAcademy();
  const done = !!completed[lesson.id];

  return (
    <div className="hcard flex flex-col rounded-[32px] border-[1.5px] border-[#f4e9e5] bg-white p-6 shadow-[0_8px_24px_rgba(74,70,68,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <span
          className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl"
          style={{ background: lesson.iconBg, color: lesson.iconColor }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </span>
        <span
          className="rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
          style={{
            background: done ? "#e7f2f2" : "#f4ece0",
            color: done ? "#5ba3a3" : "#b98a5e",
          }}
        >
          {done ? "完了" : "未着手"}
        </span>
      </div>
      <h3 className="font-maru mb-1 text-[19px] font-bold">{lesson.title}</h3>
      <div className="mb-3 flex gap-3.5 text-[12.5px] text-muted">
        <span className="inline-flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 10h18" />
          </svg>
          {lesson.slides}スライド
        </span>
        <span className="inline-flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          約{lesson.minutes}分
        </span>
      </div>
      <p className="mb-5 flex-1 text-[13.5px] leading-[1.8] text-muted">{lesson.summary}</p>
      <div className="flex items-center justify-between gap-3">
        <Link
          href={`/ai-academy/${lesson.id}`}
          className="hbtn inline-flex items-center gap-2 rounded-full bg-[#fbeeec] px-5 py-3 text-[14px] font-bold text-accent"
        >
          レッスンを開く
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <button
          type="button"
          onClick={() => toggleComplete(lesson.id)}
          title="完了にする"
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-white transition-all"
          style={{
            border: `2px solid ${done ? "#7cc0c0" : "#e8dcd8"}`,
            background: done ? "#7cc0c0" : "#fff",
          }}
        >
          <Check size={18} strokeWidth={3} color={done ? "#fff" : "#e8dcd8"} />
        </button>
      </div>
    </div>
  );
}
