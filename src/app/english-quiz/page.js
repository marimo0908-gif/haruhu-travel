import EnglishQuiz from "@/components/features/EnglishQuiz";

export const metadata = {
  title: "トラベル英会話 サバイバルクイズ",
  description: "旅行先でのリアルなシチュエーションで使える英会話をクイズ形式で学びましょう！",
};

export default function EnglishQuizPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Travel English <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Survival</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          ワンランク上の旅を目指す！シチュエーション別・英会話クイズ
        </p>
      </div>
      
      <EnglishQuiz />
    </div>
  );
}
