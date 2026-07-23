"use client";

import Link from "next/link";
import { lessons } from "../lessons-data";
import { useAcademy } from "../AcademyProvider";

export default function LessonView({ lesson }) {
  const { completed, toggleComplete } = useAcademy();
  const done = !!completed[lesson.id];
  const idx = lessons.findIndex((l) => l.id === lesson.id);
  const hasNext = idx < lessons.length - 1;
  const nextLesson = hasNext ? lessons[idx + 1] : null;

  return (
    <div className="academy-popin mx-auto max-w-[920px] px-5 pb-16 pt-4 sm:px-8">
      <Link
        href="/ai-academy"
        className="mb-4 inline-flex items-center gap-1.5 py-1.5 text-[13.5px] font-medium text-muted transition-colors hover:text-accent"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        レッスン一覧に戻る
      </Link>

      <div className="mb-1.5 flex items-center gap-2.5">
        <span className="text-[13px] font-bold text-accent">LESSON {lesson.id}</span>
        <span className="text-[12.5px] text-muted">
          {lesson.slides}スライド ・ 約{lesson.minutes}分
        </span>
      </div>
      <h1 className="font-maru mb-5 text-[clamp(24px,4vw,32px)] font-black">{lesson.title}</h1>

      {/* Video */}
      <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(74,70,68,0.22)]">
        <div className="pointer-events-none absolute left-[22px] top-5 z-10 inline-flex items-center gap-2 rounded-full bg-black/30 px-3.5 py-1.5 backdrop-blur-sm">
          <span
            className="h-2 w-2 rounded-full bg-primary"
            style={{ animation: "floaty 2s ease-in-out infinite" }}
          />
          <span className="text-[12px] font-semibold text-white">はるふーAI教室</span>
        </div>
        <video
          key={lesson.videoSrc}
          src={lesson.videoSrc}
          controls
          className="aspect-video w-full bg-[#2a2624]"
        />
      </div>

      {/* Action row */}
      <div className="my-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => toggleComplete(lesson.id)}
          className="hbtn inline-flex items-center gap-2 rounded-full px-6 py-4 text-[15px] font-bold text-white"
          style={{
            background: done ? "#7cc0c0" : "linear-gradient(135deg,#e88b86,#e57a74)",
            boxShadow: done
              ? "0 8px 20px rgba(124,192,192,0.35)"
              : "0 10px 22px rgba(232,122,116,0.4)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {done ? "完了しました！" : "このレッスンを完了にする"}
        </button>
        <Link
          href={nextLesson ? `/ai-academy/${nextLesson.id}` : "/ai-academy"}
          className="hbtn inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#f2e0dc] bg-white px-6 py-4 text-[15px] font-bold"
        >
          {nextLesson ? "次のレッスンへ進む" : "一覧に戻る"}
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* 3 learnings */}
      <h2 className="font-maru text-xl font-black">このレッスンの要点</h2>
      <p className="mb-5 text-[13px] text-muted">3つの学び</p>
      <div className="mb-11 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {lesson.learnings.map((lp, i) => (
          <div key={i} className="rounded-[26px] border-[1.5px] border-[#f4e9e5] bg-white p-6">
            <span className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-[#fbeeec] text-[15px] font-bold text-accent">
              {i + 1}
            </span>
            <h4 className="font-maru mb-1.5 text-[15.5px] font-bold">{lp.title}</h4>
            <p className="text-[13px] leading-[1.85] text-muted">{lp.body}</p>
          </div>
        ))}
      </div>

      {/* try it */}
      <div className="relative mb-10 overflow-hidden rounded-[30px] border-[1.5px] border-[#d8ecec] bg-gradient-to-br from-[#e7f2f2] to-[#eef7f6] p-8">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7cc0c0"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute -right-2.5 -top-5 opacity-35"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <div className="relative">
          <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-bold text-[#5ba3a3]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            今日のやってみよう！
          </div>
          <h3 className="font-maru mb-2 text-[19px] font-black text-[#3d7a7a]">
            {lesson.action.title}
          </h3>
          <p className="max-w-[560px] text-[14px] leading-[1.9] text-[#4f8888]">
            {lesson.action.body}
          </p>
        </div>
      </div>

      {/* resources */}
      <h2 className="font-maru mb-4 text-xl font-black">関連資料</h2>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="flex max-w-[440px] items-center gap-3.5 rounded-[22px] border-[1.5px] border-[#f4e9e5] bg-white px-5 py-4.5 opacity-70">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fbeeec] text-accent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </span>
          <span className="flex-1">
            <span className="font-maru block text-[14.5px] font-bold">スライドPDF</span>
            <span className="block text-[12px] text-muted">準備中です</span>
          </span>
        </div>
      </div>
    </div>
  );
}
