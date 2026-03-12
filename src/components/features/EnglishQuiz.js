"use client";

import { useState, useEffect } from "react";

const QUIZ_DATA = [
  {
    id: 1,
    scenario: "ホテルに到着！しかし、予約時のリクエストであった「眺めの見えない部屋」になっています。「眺めの良い部屋に変更できますか？」と聞きたい。",
    choices: [
      { text: "Can you change my room to a good view?", isCorrect: false, feedback: "少し不自然な表現です。通じますが、より自然な言い方があります。" },
      { text: "Is it possible to get a room with a nice view?", isCorrect: true, feedback: "Perfect! 丁寧で自然な表現です。" },
      { text: "I want a better view room, please.", isCorrect: false, feedback: "少し直接的すぎる印象を与えてしまうかもしれません。" },
    ],
  },
  {
    id: 2,
    scenario: "素敵なレストランで食事が終わりました。「お会計をお願いします」とスマートに伝えたい。",
    choices: [
      { text: "Check, please.", isCorrect: true, feedback: "Great! 一番シンプルでよく使われる表現です。\"Could we have the check, please?\" だとなお丁寧です。" },
      { text: "I want to pay money.", isCorrect: false, feedback: "「お金を払いたい」という直訳になり、不自然です。" },
      { text: "How much is this?", isCorrect: false, feedback: "「これはいくらですか？」という意味になるので、お会計を頼むフレーズとしては少し違います。" },
    ],
  },
  {
    id: 3,
    scenario: "空港の入国審査で「滞在期間」を聞かれました。「5日間です」と答えたい。",
    choices: [
      { text: "I live here 5 days.", isCorrect: false, feedback: "「ここに5日間住んでいます」という意味になってしまうのでNGです。" },
      { text: "5 days.", isCorrect: false, feedback: "ぶっきらぼうな印象を与えてしまうかも。フルセンテンスで答えるのがベターです。" },
      { text: "For five days.", isCorrect: true, feedback: "Excellent! \"I will be staying for five days.\" の省略形として非常に自然です。" },
    ],
  },
  {
    id: 4,
    scenario: "機内で少し肌寒く感じます。「毛布をもう一枚いただけますか？」とCAさんにお願いしたい。",
    choices: [
      { text: "Give me one blanket, please.", isCorrect: false, feedback: "「毛布を一つくれ」と命令形に近くなり、少し失礼な印象を与えます。" },
      { text: "Could I get another blanket, please?", isCorrect: true, feedback: "Perfect! \"another\" を使うことで「もう一枚」というニュアンスが伝わります。" },
      { text: "I need blanket more.", isCorrect: false, feedback: "文法的に不自然で、少し子供っぽい表現になってしまいます。" },
    ],
  },
  {
    id: 5,
    scenario: "道に迷ってしまいました。通りすがりの人に「一番近い駅はどこですか？」と尋ねたい。",
    choices: [
      { text: "Where is the nearest station?", isCorrect: false, feedback: "通じますが、いきなり \"Where is~\" と聞くのは少し唐突です。" },
      { text: "Tell me the station place.", isCorrect: false, feedback: "文法的に不自然ですし、命令形は避けましょう。" },
      { text: "Excuse me, could you tell me where the nearest station is?", isCorrect: true, feedback: "Excellent! \"Excuse me\" で声をかけ、間接疑問文を使う非常に丁寧で完璧な表現です。" },
    ],
  },
  {
    id: 6,
    scenario: "タクシーに乗りました。スマホの地図やホテルのカードを見せて「この住所までお願いします」と伝えたい。",
    choices: [
      { text: "To this address, please.", isCorrect: true, feedback: "Great! シンプルですが、明確で一番間違いない表現です。\"Could you take me to this address?\" もおすすめです。" },
      { text: "Please go here.", isCorrect: false, feedback: "少し不自然な響きがあります。" },
      { text: "I want to go this address.", isCorrect: false, feedback: "少し子供っぽく、「行きたい」という願望を伝えているだけになってしまいます。" },
    ],
  },
  {
    id: 7,
    scenario: "カフェでコーヒーを注文しました。店員さんに「店内でお召し上がりですか、お持ち帰りですか？」と聞かれ、「持ち帰りで」と答えたい。",
    choices: [
      { text: "Take out, please.", isCorrect: false, feedback: "通じますが、ネイティブはあまり使わない表現です。" },
      { text: "To go, please.", isCorrect: true, feedback: "Perfect! アメリカ英語では圧倒的に \"To go\" が使われます。（イギリス英語では \"Take away\"）" },
      { text: "Bring it back, please.", isCorrect: false, feedback: "「（買ったものを）返しにきた」という意味に間違われる可能性があります。" },
    ],
  },
  {
    id: 8,
    scenario: "チェックアウト後も少し観光したいです。フロントで「荷物を預かってもらえますか？」と頼みたい。",
    choices: [
      { text: "Please keep my bag.", isCorrect: false, feedback: "意味は通じますが、少しぶっきらぼうな印象を与えます。" },
      { text: "Could you keep my luggage until I come back?", isCorrect: true, feedback: "Excellent! いつまで預かってほしいかも明確で、とても丁寧な表現です。" },
      { text: "I put my baggage here.", isCorrect: false, feedback: "「ここに荷物を置きます」という一方的な宣言になってしまいます。" },
    ],
  },
  {
    id: 9,
    scenario: "観光名所で、近くの人にスマホを渡して「私たちの写真を撮っていただけませんか？」とお願いしたい。",
    choices: [
      { text: "Could you take a picture of us?", isCorrect: true, feedback: "Perfect! とても自然で丁寧な定番フレーズです。" },
      { text: "Picture OK?", isCorrect: false, feedback: "ブロークンすぎるので、せっかくなら綺麗なフレーズを使いましょう！" },
      { text: "Let's take a picture.", isCorrect: false, feedback: "「一緒に写真を撮りましょう」という意味になってしまいます。" },
    ],
  },
  {
    id: 10,
    scenario: "レストランで食事を終え、「美味しかったです」とウエイターに伝えてチップを渡したい。",
    choices: [
      { text: "It was delicious.", isCorrect: false, feedback: "間違いではありませんが、少しフォーマルすぎたり、わざとらしい響きになることがあります。" },
      { text: "Everything was great, thank you.", isCorrect: true, feedback: "Excellent! 自然でスマートな会話表現です。\"It was really good.\" などもよく使われます。" },
      { text: "Good food.", isCorrect: false, feedback: "言葉足らずな印象を与えてしまうかもしれません。" },
    ],
  }
];

const QUESTIONS_PER_GAME = 5;

export default function EnglishQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Initialize and randomize questions on mount
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Shuffle the array and pick the first N questions
    const shuffled = [...QUIZ_DATA].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, QUESTIONS_PER_GAME));
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const handleChoiceClick = (choice) => {
    if (isAnswered) return;
    
    setSelectedChoice(choice);
    setIsAnswered(true);

    if (choice.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const speakText = (text) => {
    // Check if browser supports Web Speech API
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // Set to US English
      
      // Explicitly try to select a male voice since the browser default can vary
      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(v => 
        v.name.includes("Alex") || 
        v.name.includes("Daniel") || 
        v.name.includes("Google UK English Male") || 
        v.name.toLowerCase().includes("male")
      );
      
      if (maleVoice) {
        utterance.voice = maleVoice;
      }
      
      utterance.rate = 0.85;    // Slightly slower for better listening
      utterance.pitch = 1.0;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // If questions haven't loaded yet (hydration handling)
  if (quizQuestions.length === 0) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl text-center relative z-10">
        <p className="text-slate-500 font-medium">Loading...</p>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (showResult) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Result</h2>
        <div className="text-center mb-8">
          <p className="text-5xl font-extrabold mb-2">
            <span className={score === QUESTIONS_PER_GAME ? "text-green-500" : "text-slate-800"}>{score}</span> 
            <span className="text-slate-300 text-3xl"> / {QUESTIONS_PER_GAME}</span>
          </p>
          <p className="text-xl text-slate-600 font-medium">
            {score === QUESTIONS_PER_GAME 
              ? "Perfect! あなたは旅行英会話マスターです！🎉" 
              : "Good job! もう一度挑戦してマスターを目指しましょう！"}
          </p>
        </div>
        <button 
          onClick={startNewGame}
          className="w-full bg-primary hover:bg-sky-500 text-white font-bold text-lg py-4 rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg"
        >
          もう一度プレイする（違う問題が出ます）
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl text-slate-800">
      <div className="flex justify-between items-center mb-6">
        <span className="bg-sky-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-sky-100 shadow-sm">
          Q {currentQuestionIndex + 1} / {QUESTIONS_PER_GAME}
        </span>
        <span className="text-sm text-slate-500 font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
          選択肢に触れると発音します
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-800">
          {currentQuestion.scenario}
        </h3>
      </div>

      <div className="space-y-4">
        {currentQuestion.choices.map((choice, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-lg shadow-sm group ";
          
          if (!isAnswered) {
            buttonClass += "border-slate-200 bg-white hover:border-primary hover:bg-sky-50 hover:text-sky-800 hover:shadow-md active:scale-95 text-slate-700";
          } else {
            if (choice === selectedChoice) {
              buttonClass += choice.isCorrect 
                ? "border-secondary bg-green-50/80 text-green-700" 
                : "border-accent bg-rose-50/80 text-rose-700";
            } else if (choice.isCorrect) {
              buttonClass += "border-secondary bg-green-50/80 text-green-700";
            } else {
              buttonClass += "border-slate-100 bg-slate-50/80 text-slate-400 cursor-not-allowed shadow-none";
            }
          }

          return (
            <button
              key={index}
              onMouseEnter={() => !isAnswered && speakText(choice.text)} // Add hover trigger
              onClick={() => handleChoiceClick(choice)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex justify-between items-center">
                <span>{choice.text}</span>
                {/* Speaker Icon that shows up subtly on hover before answering */}
                {!isAnswered && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-8 p-6 bg-slate-50/80 rounded-2xl border border-slate-200 animate-fade-in shadow-inner">
          <h4 className={`text-xl font-bold mb-3 flex items-center gap-2 ${selectedChoice.isCorrect ? "text-green-600" : "text-rose-500"}`}>
            {selectedChoice.isCorrect ? "✅ 素晴らしい！正解です。" : "❌ 惜しい！"}
          </h4>
          <p className="text-slate-600 text-lg leading-relaxed mix-blend-multiply">
            {selectedChoice.feedback}
          </p>
          <div className="mt-6 flex justify-between items-center gap-4">
            <button
              onClick={() => speakText(currentQuestion.choices.find(c => c.isCorrect).text)}
              className="flex items-center gap-2 text-primary hover:text-sky-700 font-semibold py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors"
            >
              正解を聞く
            </button>
            <button
              onClick={handleNextQuestion}
              className="px-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {currentQuestionIndex + 1 < quizQuestions.length ? "次の問題へ" : "結果を見る"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

