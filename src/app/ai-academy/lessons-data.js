export const lessons = [
  {
    id: 1,
    title: "はじめてのClaude",
    slides: 13,
    minutes: 3,
    summary:
      "AIアシスタント「Claude」って何？できることや使いどころを、いちばんやさしく知る第一歩を体験します。",
    videoSrc: "/ai-academy/lesson-1-hajimete-no-claude.mp4",
    iconBg: "#fbeeec",
    iconColor: "#e57a74",
    learnings: [
      {
        title: "Claudeは「相談できるAI」",
        body: "検索とちがって、あなたの言葉で相談すると、文章や下書きをいっしょに考えてくれます。",
      },
      {
        title: "まずは日本語でOK",
        body: "難しいコマンドは不要。「〜して」と話しかけるだけ。うまく伝わらなければ言い直せば大丈夫。",
      },
      {
        title: "まずは無料で試せる",
        body: "メールアドレスがあれば数分で登録完了。無料プランで気軽に体験でき、もっと使いたくなったら有料プランも選べます。",
      },
    ],
    action: {
      title: "Claudeにログインして、挨拶してみよう！",
      body: "アカウントを作って「こんにちは。あなたにできることを教えて」と送ってみましょう。返ってきた答えが、あなたのAIとの旅のはじまりです。",
    },
    pdfUrl: null,
  },
  {
    id: 2,
    title: "はじめてのClaude Design",
    slides: 10,
    minutes: 3,
    summary:
      "文章だけでなく、見た目のあるものも作れる「Claude Design」。スライドやチラシを言葉から作る体験へ。",
    videoSrc: "/ai-academy/lesson-2-hajimete-no-claude-design.mp4",
    iconBg: "#e7f2f2",
    iconColor: "#5ba3a3",
    learnings: [
      {
        title: "言葉から「見えるもの」が作れる",
        body: "スライド・チラシ・資料などを、指示するだけでデザインしてくれます。",
      },
      {
        title: "色や雰囲気も伝えられる",
        body: "「やさしい雰囲気で」「ピンク系で」など、感覚的な言葉で調整できます。",
      },
      {
        title: "作りながら直せる",
        body: "一発で完璧でなくてOK。「ここをこう変えて」と会話しながら仕上げていきます。",
      },
    ],
    action: {
      title: "「予定表を1枚のチラシにして」と頼んでみよう！",
      body: "今週の予定でも、旅のしおりでもOK。Claude Designに作りたいものを伝えて、出てきたデザインを1回だけ直してみましょう。",
    },
    pdfUrl: null,
  },
];

export function getLessonById(id) {
  return lessons.find((l) => String(l.id) === String(id));
}
