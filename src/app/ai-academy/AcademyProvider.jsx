"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { lessons } from "./lessons-data";
import ProgressGauge from "./components/ProgressGauge";
import Celebration from "./components/Celebration";

const STORAGE_KEY = "haruhu-ai-progress";
const TOTAL = lessons.length;

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

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && typeof saved === "object") {
        setCompleted({ ...saved });
      }
    } catch (e) {
      /* localStorageが使えない環境ではそのまま未完了扱い */
    }
  }, []);

  const celebrate = useCallback(() => {
    setConfetti(makeConfetti());
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
      setConfetti([]);
    }, 3600);
  }, []);

  const toggleComplete = useCallback(
    (id) => {
      setCompleted((prev) => {
        const wasAll = Object.values(prev).filter(Boolean).length === TOTAL;
        const next = { ...prev, [id]: !prev[id] };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch (e) {}
        const nowAll = Object.values(next).filter(Boolean).length === TOTAL;
        if (!wasAll && nowAll) celebrate();
        return next;
      });
    },
    [celebrate]
  );

  const doneCount = Object.values(completed).filter(Boolean).length;
  const pct = Math.round((doneCount / TOTAL) * 100);

  return (
    <AcademyContext.Provider value={{ completed, doneCount, total: TOTAL, pct, toggleComplete }}>
      <ProgressGauge pct={pct} celebrating={celebrating} />
      {children}
      {celebrating && <Celebration confetti={confetti} />}
    </AcademyContext.Provider>
  );
}
