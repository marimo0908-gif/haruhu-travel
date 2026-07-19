const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    const imagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/8d8f6317-3a48-4a11-a641-8fb299df8cf3/amex_warning_hero_1774013860065.png';
    console.log('Uploading main image...');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'amex_warning_hero.png'
    });

    const categoryId = 'SlhvY9im97XlCzZ6PP52bf'; // マイル・ポイ活 or クレジットカード. Let's use the one from the migrate.js

    const body = [
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '「昨日まで普通に使えていたカードが突然使えない…」\n実はそれ、アメックスユーザーの間で有名な' }, { _type: 'span', text: '“通帳の刑”', marks: ['strong'] }, { _type: 'span', text: 'かもしれません。\n知らずにやると、最悪カード停止や強制解約もあり得ます。\nこの記事では、初心者でも分かるように' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '通帳の刑の正体' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '発動する条件' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '回避するコツ' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'を解説します。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '1. 通帳の刑とは？' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '一言で言うと、「支払い能力チェック（資産確認）」です。以下のような書類の提出を求められます。' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '通帳コピー提出' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '残高証明' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '収入証明' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'これらを提出し、審査を通過するまではカードの利用が制限されることがあります。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '2. なぜ起きる？' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'アメックスは入会時だけでなく、利用中も随時審査を行っています（途上与信）。特に以下のような使い方をすると発動しやすくなります。' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '急な高額決済' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '利用額の急増（普段数万円の人が急に数十万使うなど）' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '支払い遅延' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '決済修行（ポイントや入会キャンペーン目的の不自然な決済）' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '3. 実際に起きること' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'カードが突然使えなくなる' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: 'アメックスから電話が来る' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '書類提出しないと復活しない' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '最悪の場合は強制解約' }]
        },
        {
            _type: 'block',
            style: 'callout',
            children: [{ _type: 'span', text: '旅行先のホテルやレストランでの決済時に発動すると「旅行中で詰む」可能性があるので要注意！' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '4. 回避する方法（ここ重要）' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '通帳の刑の発動は、日常的な心掛けで多くの場合回避できます。' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '利用額は徐々に増やす' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '支払い遅延ゼロを徹底' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '高額決済は事前連絡する' }]
        },
        {
            _type: 'block',
            style: 'normal',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '無理な決済修行はNG' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '特に', marks: ['strong'] }, { _type: 'span', text: '「事前連絡」はかなり有効', marks: ['strong'] }, { _type: 'span', text: 'らしいです。普段より桁が変わるような決済をする前は、アプリやデスクから連絡を入れておきましょう。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '5. マイル・ポイ活勢は注意' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'アメックス案件や紹介狙いで、短期的に大量決済を繰り返すと、通帳の刑のリスクが一気にアップします。ポイ活目的であっても、常識の範囲内での利用を心がけるのが長く付き合うコツです。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '最後に' }]
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '通帳の刑＝信用チェックです。\n不自然な使い方をした時に発動する防犯システムのようなものなので、安全に使っていれば基本的には問題ありません。\nこれさえおさえておけば、アメックスは超絶おすすめです！' }]
        },
        {
            _type: 'affiliateLink',
            title: 'アメリカン・エキスプレス・ゴールド・プリファード・カード',
            description: '年間のご利用金額に応じて継続特典（無料宿泊）がもらえる、ポイ活・マイル派に大人気のゴールドカード。紹介プログラム専用の入会特典をご案内可能です。',
            badgeText: '紹介プログラム限定特典',
            buttonText: '紹介URLをメールで受け取る',
            href: '/contact?subject=AmexGoldPreferred',
            points: [
                '年間200万円決済でフリー・ステイ・ギフト（無料宿泊）',
                'メンバーシップ・リワード・プラスが自動付帯でマイル高還元',
                '日常の決済をこれ1枚に集約して特典を最大化'
            ]
        }
    ];

    const postDoc = {
        _type: 'post',
        title: '【要注意】アメリカン・エキスプレスの「通帳の刑」とは？突然カード停止の理由と回避法',
        slug: { _type: 'slug', current: 'amex-warning' },
        excerpt: '昨日まで使えていたアメックスが突然停止！？噂の「通帳の刑」の条件と、カードを安全に使い続けるための回避のコツを解説します。',
        publishedAt: new Date().toISOString(),
        author: 'はるふー',
        categories: [{
            _type: 'reference',
            _ref: categoryId,
            _key: 'cat-ref-1'
        }],
        mainImage: {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: imageAsset._id
            }
        },
        body: body,
        isSponsored: true 
    };

    console.log('Creating post in Sanity...');
    const result = await client.create(postDoc);
    console.log('Post created successfully:', result._id);
}

run().catch(console.error);
