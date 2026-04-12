import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: '必須項目が入力されていません' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. サイト運営者（自分）への通知メール
    const ownerEmailPromise = resend.emails.send({
      from: 'Haruhu Travel <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'haruhu.travel@gmail.com',
      reply_to: email,
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>内容:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    // 2. お問い合わせをした人への自動返信メール
    const autoReplyPromise = resend.emails.send({
      from: 'Haruhu Travel <onboarding@resend.dev>',
      to: email,
      subject: '【はるふートラベル】お問い合わせを承りました',
      html: `
        <p>${name} 様</p>
        <p>はるふートラベルへのお問い合わせ、ありがとうございます。</p>
        <p>メッセージを無事に受け取りました。内容を確認し、順次お返事をさせていただきますので、今しばらくお待ちくださいませ。</p>
        <br>
        <hr>
        <p>※このメールは自動返信です。心当たりがない場合は、お手数ですが破棄してください。</p>
        <p><strong>はるふートラベル</strong><br>
        <a href="https://haruhu-travel.com">https://haruhu-travel.com</a></p>
      `,
    });

    // 両方のメール送信を待機
    const results = await Promise.all([ownerEmailPromise, autoReplyPromise]);
    
    // エラーチェック（どちらか一方でエラーがあればログ出力）
    results.forEach((res, index) => {
      if (res.error) {
        console.error(`Email sending error (${index === 0 ? 'Owner' : 'Auto-reply'}):`, res.error);
      }
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'サーバーエラーが発生しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
