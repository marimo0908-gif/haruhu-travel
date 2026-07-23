"use client";

import Link from "next/link";
import { lessons } from "./lessons-data";
import LessonCard from "./components/LessonCard";
import { useAcademy } from "./AcademyProvider";

export default function AcademyHome() {
  const { doneCount, total } = useAcademy();

  return (
    <div className="academy-popin">
      {/* Hero */}
      <section className="reveal in mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* 左：テキスト */}
        <div className="flex flex-col items-start text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f4ece0] px-4 py-1.5 text-[12.5px] font-semibold text-[#b98a5e]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M3 12h18" />
            </svg>
            はるふーAI教室
          </div>
          <h1 className="font-maru text-balance mb-5 text-[clamp(32px,5.5vw,52px)] font-black leading-[1.28]">
            <span className="text-muted">「いつか使いたい」</span>を
            <br />
            <span className="text-accent">「使えた」</span>に変える
          </h1>
          <p className="mb-8 max-w-[560px] text-[clamp(15px,2vw,18px)] leading-[1.9] text-muted">
            AIをいちばんやさしくはじめるための、ロードマップ型学習サイトへようこそ。
            <br />
            ママでも子育て中でも、順番に進めるだけで大丈夫。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/ai-academy/${lessons[0].id}`}
              className="hbtn inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-accent px-6 py-4 text-[15px] font-bold text-white shadow-[0_10px_22px_rgba(232,122,116,0.4)]"
            >
              さっそくはじめる
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#courses"
              className="hbtn inline-flex items-center rounded-full border-[1.5px] border-[#f2e0dc] bg-white px-6 py-4 text-[15px] font-bold"
            >
              コースを見る
            </a>
          </div>
        </div>

        {/* 右：写真（輪郭がゆっくり動く） */}
        <div className="hero-img-wrap relative aspect-[7/5] w-full max-w-[520px] justify-self-center lg:max-w-none">
          <div
            className="hero-blob-bg absolute -inset-y-[6%] -left-[8%] -right-[4%] opacity-60"
            style={{ background: "linear-gradient(140deg, #f7d9d4, #cfe9e2)" }}
            aria-hidden="true"
          />
          {/* 装飾：ハート */}
          <div className="absolute -top-4 left-[8%] h-6 w-6 -rotate-[8deg] text-[#f0b8b2]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.9 20.4c-.4-.3-4.2-3.3-6.1-5.9-1.3-1.8-1.9-3.4-1.4-5 .6-2 2.7-2.9 4.5-2.3 1.1.4 1.9 1.2 2.4 2.2.1.2.3.3.4.1.6-1 1.5-1.8 2.7-2.1 1.9-.5 3.9.6 4.3 2.6.3 1.6-.4 3.1-1.6 4.8-1.7 2.3-4.9 4.9-5.3 5.2-.1.1-.3.1-.4.1z" />
            </svg>
          </div>
          {/* 装飾：星 */}
          <div className="absolute bottom-[6%] -right-3.5 h-[22px] w-[22px] text-[#8ec9c3]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.2 6.6H21l-5.4 4 2.1 6.6L12 15.4 6.3 19.2l2.1-6.6L3 8.6h6.8z" />
            </svg>
          </div>
          <div className="hero-blob absolute inset-0 overflow-hidden shadow-[0_22px_50px_rgba(210,140,135,0.28)]">
            <img
              src="/ai-academy/hero-airplane-window.png"
              alt="飛行機の窓から見える空と雲"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-[1120px] px-5 pb-5 pt-2 sm:px-8">
        <div className="mb-5 flex items-baseline gap-3">
          <h2 className="font-maru text-2xl font-black">レッスン一覧</h2>
          <span className="text-[13px] text-muted">
            {doneCount} / {total} 完了
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      {/* About はるふー */}
      <section className="mx-auto mt-11 max-w-[1120px] px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-[36px] border-[1.5px] border-[#f4e9e5] bg-gradient-to-br from-[#fdf3f0] to-[#f4f7f6] p-8 sm:flex-row sm:items-center">
          <div className="flex h-[132px] w-[132px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] border-[1.5px] border-[#eeded9] bg-white">
            <img
              src="/haruhu-travel-logo.png"
              alt="はるふートラベル"
              className="h-[118px] w-[118px] object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#fbeeec] px-3 py-1 text-[11.5px] font-semibold text-accent">
                ママ
              </span>
              <span className="rounded-full bg-[#e7f2f2] px-3 py-1 text-[11.5px] font-semibold text-[#5ba3a3]">
                子連れ旅行
              </span>
              <span className="rounded-full bg-[#f4ece0] px-3 py-1 text-[11.5px] font-semibold text-[#b98a5e]">
                AI挑戦中
              </span>
            </div>
            <h3 className="font-maru mb-2.5 text-xl font-black">
              はるふー が、いちばん近くで伴走します
            </h3>
            <p className="text-[14px] leading-[1.95] text-muted">
              「いつか行きたい」をマイルで叶えてきたママ。子育てのすきま時間にAIと出会い、非エンジニアのままここまで来ました。難しそうに見えても、私にできたなら、きっとあなたにも。ひとつずつ、いっしょに進んでいきましょう。
            </p>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
