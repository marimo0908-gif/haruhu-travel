"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { lessons } from "./lessons-data";
import Celebration from "./components/Celebration";
import { computePct, readProgress, writeProgress } from "./progressStore";

const AcademyContext = createContext(null);

export function useAcademy() {
  const ctx = useContext(AcademyContext);
  if (!ctx) throw new Error("useAcademy must be used within AcademyProvider");
  return ctx;
}

function makeConfetti() {
  const colors = ["#e88b86", "#e57a74", "#7cc0c0", "#f4d2cf", "#f4ece0", "#b98a5e"];
  return Array.from({ length: 90 }, () => ({
    left: (Math.random() * 100).toFixed(1) + "%",
    color: colors[Math.floor(Math.random() * colors.length)],
    dur: (1.8 + Math.random() * 1.6).toFixed(2) + "s",
    delay: (Math.random() * 0.5).toFixed(2) + "s",
  }));
}

export default function AcademyProvider({ children }) {
  const [completed, setCompleted] = useState({});
  const [celebrating, setCelebrating] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const isFirstRun = useRef(true);
  const prevCompletedRef = useRef({});
  const userActionRef = useRef(false);

  useEffect(() => {
    setCompleted(readProgress());
  }, []);

  const celebrate = useCallback(() => {
    setConfetti(makeConfetti());
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
      setConfetti([]);
    }, 3600);
  }, []);

  // localStorageへの保存とお祝い演出は、ユーザーの操作(toggleComplete)による
  // 変化のときだけ行う。読み込み直後の反映では発火させない(リロードのたびに
  // 紙吹雪が出てしまうのを防ぐため)。
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      prevCompletedRef.current = completed;
      return;
    }
    if (userActionRef.current) {
      writeProgress(completed);
      const wasAll = computePct(prevCompletedRef.current) === 100;
      const nowAll = computePct(completed) === 100;
      if (!wasAll && nowAll) celebrate();
      userActionRef.current = false;
    }
    prevCompletedRef.current = completed;
  }, [completed, celebrate]);

  const toggleComplete = useCallback((id) => {
    userActionRef.current = true;
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const doneCount = Object.values(completed).filter(Boolean).length;
  const pct = computePct(completed);

  return (
    <AcademyContext.Provider value={{ completed, doneCount, total: lessons.length, pct, toggleComplete }}>
      {children}
      {celebrating && <Celebration confetti={confetti} />}
    </AcademyContext.Provider>
  );
}
