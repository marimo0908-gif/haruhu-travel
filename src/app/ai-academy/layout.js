import AcademyProvider from "./AcademyProvider";

export const metadata = {
  title: "はるふーAI教室",
  description:
    "AI初心者・非エンジニア向けのロードマップ型学習サイト。「いつか使いたい」を「使えた」に変える、はるふーAI教室。",
};

export default function AcademyLayout({ children }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -top-24 left-0 right-0 z-0 h-[480px]"
        style={{
          background:
            "linear-gradient(180deg,#fbeeea 0%,#fdf4f1 45%,#fdf7f4 75%,rgba(253,247,244,0) 100%)",
        }}
      />
      <div className="relative z-10">
        <AcademyProvider>{children}</AcademyProvider>
      </div>
    </div>
  );
}
