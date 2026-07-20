// 絵文字の✈️だと端末ごとに見た目が変わるため、線画の紙飛行機アイコンに統一する
export default function PlaneIcon({ className = "h-4 w-4", fill = "currentColor" }) {
    return (
        <svg viewBox="0 0 24 24" fill={fill} className={className} aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z" />
        </svg>
    );
}
