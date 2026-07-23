import { notFound } from "next/navigation";
import { lessons, getLessonById } from "../lessons-data";
import LessonView from "./LessonView";

export function generateStaticParams() {
  return lessons.map((l) => ({ lessonId: String(l.id) }));
}

export function generateMetadata({ params }) {
  const lesson = getLessonById(params.lessonId);
  if (!lesson) return {};
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default function LessonPage({ params }) {
  const lesson = getLessonById(params.lessonId);
  if (!lesson) notFound();
  return <LessonView lesson={lesson} />;
}
