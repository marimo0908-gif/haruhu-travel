const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

const slug = 'okinawa-ana-miles-tips';

const newBody = [
    { _type: 'block', _key: 'b1', children: [{ _type: 'span', _key: 's1', text: 'ポイ活で貯まったポイント、どうしていますか？ \n実はそのポイント、「みずほルート」を使えば驚くほどお得にANAマイルへ交換できるんです！ 今回は、ポイント交換から特典航空券の予約テクニックまで、賢い旅行術をご紹介します。' }] },
    { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '1.高還元率！みずほルートでANAマイルへ' }] },
    { _type: 'block', _key: 'b3', children: [{ _type: 'span', _key: 's3', text: '貯まったポイントをANAマイルに換えるなら、「みずほルート」が最強です。\n70%という高レートで交換可能です。' }] },
    { _type: 'block', _key: 'b4', children: [{ _type: 'span', _key: 's4', text: '＊重要なお知らせ：このルートに必須の「みずほマイレージクラブカード/ANA」は、\n   2026年1月に新規発行が終了しました。' }] },
    { _type: 'block', _key: 'b5', style: 'h2', children: [{ _type: 'span', _key: 's5', text: '2.特典航空券を確実にゲットする予約術' }] },
    { _type: 'block', _key: 'b6', children: [{ _type: 'span', _key: 's6', text: 'マイルは貯まりやすいものの、人気路線の空席は見つけづらいのが現実。\n確実に予約するための戦略がこちらです。' }] },
    {
        _type: 'block', _key: 'b7', children: [{ _type: 'span', _key: 's7', text: '・国内線（沖縄など）： 予約開始日である搭乗の355日前に即座に予約を入れる。\n・国際線： ビジネスクラスは争奪戦。予約開始日を狙って試行錯誤あるのみ！\n・繁忙期・家族旅行： 全員分確保は至難の業。マイル予約と有償発券（現金購入）を組み合わせて柔軟に。' }]
    },
    { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: '3.鍵は「日々検索」！空席は変動する' }] },
    { _type: 'block', _key: 'b9', children: [{ _type: 'span', _key: 's9', text: '特典航空券の空席状況は日々変わります。\n一度検索してダメでも、諦めずに何度も自分で手を動かして検索しましょう。 キャンセルや直前の開放で、急に空席が出ることも珍しくありません。\n粘り強いチェックが成功への近道です。' }] },
    { _type: 'block', _key: 'b10', style: 'h2', children: [{ _type: 'span', _key: 's10', text: '4.マリオットポイントやクレジットカードのポイントの活用' }] },
    { _type: 'block', _key: 'b11', children: [{ _type: 'span', _key: 's11', text: 'おすすめは外資系航空会社のマイルへの交換。\nコツコツ貯めたポイントで、最高の旅行を楽しみましょう！' }] },
];

async function run() {
    if (!client.config().token) {
        console.error('Error: SANITY_API_TOKEN is not set.');
        process.exit(1);
    }
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
    if (!post) { console.error(`Post "${slug}" not found.`); process.exit(1); }
    await client.patch(post._id).set({ body: newBody }).commit();
    console.log('✅ Bullet points merged (no spacing)!');
}

run().catch(console.error);
