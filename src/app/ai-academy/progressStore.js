export const PROGRESS_STORAGE_KEY = "haruhu-ai-progress";
export const PROGRESS_EVENT = "haruhu-ai-progress-updated";
export const TOTAL_LESSONS = 2;

export function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY));
    if (saved && typeof saved === "object") return saved;
  } catch (e) {
    /* localStorageが使えない環境ではそのまま未完了扱い */
  }
  return {};
}

export function writeProgress(next) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(next));
  } catch (e) {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  }
}

export function computePct(progress) {
  const done = Object.values(progress).filter(Boolean).length;
  return Math.round((done / TOTAL_LESSONS) * 100);
}
