const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configure the Sanity client
let token = process.env.SANITY_API_TOKEN;
if (!token && fs.existsSync(path.join(process.cwd(), '.env.local'))) {
    const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = envFile.match(/^SANITY_API_TOKEN=["']?([^"'\s]+)["']?$/m);
    if (match) token = match[1];
}

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: token,
});

const postData = {
    title: "海外旅行で使うならどれ？実際に使った我が家が語るWise・Revolut・IDAREの違いと失敗しない選び方",
    excerpt: "海外旅行のお金まわり、意外と悩みますよね。我が家が使ってきたIDAREと、評価の高いWise・Revolutを実体験ベースで徹底比較。各カードの強みと、我が家が辿り着いた最強の布陣を解説します。",
    date: new Date().toISOString(),
    category: "マイル・ポイ活",
    slug: "travel-money-comparison-wise-revolut-idare",
    body: [
        {
            _type: 'block',
            children: [{ _type: 'span', text: '海外旅行のお金まわり、意外と悩みますよね。「クレジットカードだけでいい？」「現金はいくら持っていく？」そんな悩みを解決してくれるのが、最近人気の外貨特化型カードです。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '我が家はこれまで IDARE（旧IDEA） をメインに使ってきましたが、最近は評判の良い Wise や Revolut も気になり、実際に比較してみました。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '結論から言うと、どれも便利ですが「旅のスタイル」によって正解が違います。\n今回は実体験ベースで、その違いをわかりやすくまとめます。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '1. そもそもIDARE（旧IDEA）を愛用してきた理由' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '昨年の我が家の海外旅行を支えてくれたのはIDAREでした。\n理由はとにかくシンプルだったからです👇' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'チャージするだけで即・使える' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '操作がとにかく簡単' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '管理しやすい' }] },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 初めての海外旅行や、家計管理をしっかりしたい家族旅行には、この「シンプルさ」が最大の安心材料でした。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '2. WiseとRevolutが加わると、ここが変わる！（重要）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'IDAREとの一番大きな違いは、「為替の透明性」と「コスト」、そして「スマホ決済（Apple Pay）」です。' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '■ IDARE' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '特徴：プリペイドカード式。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'コスト：レートにVisaの事務手数料が少し上乗せされる（わかりやすいが、やや割高）。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'スマホ：現時点ではApple Pay等のタッチ決済に非対応。' }] },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '■ Wise (ワイズ)' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '特徴：外貨口座＋デビットカード。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'コスト：常に「実際の為替レート」に少額の手数料。透明性が高く、土日もレートが変わらないのが強み。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '強み：世界中で最も信頼されている「安定感」の王道。' }] },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '■ Revolut (レボリュート)' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '特徴：銀行アプリに近い多機能型。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'コスト：平日の両替手数料が無料（最強レート）。ただし、土日は1.0%の手数料がかかるという罠も。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '強み：Apple Pay / Google Pay対応！スマホ1つでタッチ決済できるのはRevolutだけ。' }] },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 「簡単さのIDARE」 vs 「安定のWise」 vs 「スマホ決済・多機能のRevolut」', marks: ['strong'] }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '3. 実は一番の差が出る「ATMで現金が引き出せるか」' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ここが海外では生死を分けるポイントです👇' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '■ Wise・Revolutは海外ATMで現金が引き出せる！' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '現地のATMで、スマホ操作一つで現地通貨が現金で出てきます。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Wise：合計3万円/月まで無料枠あり（2回まで）。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Revolut：合計2.5万円/月まで無料枠あり。' }] },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 「両替所に並ぶ」というタイムロスがなくなります。', marks: ['strong'] }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '■ IDAREは？' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '残念ながら、チャージした残高を海外ATMで引き出すことはできません。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'あくまで「カード決済専用」と割り切る必要があります。' }] },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 現地でチップや屋台など「現金」が必要な場面が多いなら、WiseかRevolutが必須です。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '4. 旅行スタイル別・あなたへのおすすめ' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '🔰 初めての海外・子連れでとにかく安心したい' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 IDARE がおすすめ\n→ 複雑な両替操作なし。日本円をチャージするだけ。' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '✈️ マイル旅・個人手配のベテラン派' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 Wise がおすすめ\n→ 「土日にレートが落ちる」のを気にせず、いつでも安定した最安級レートで決済。' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '📱 キャッシュレス命！スマホだけで旅したい' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 Revolut がおすすめ\n→ Apple Pay対応なので、財布を出さずに地下鉄やカフェでスマートに決済。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '5. 結論：我が家が辿り着いた「併用が最強」説' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'いろいろ比較して思った結論はこれです👇' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '👉 メイン（クレカ） ＋ 決済（Revolut） ＋ 予備・ATM（Wise）', marks: ['strong'] }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'クレジットカード：高額決済や旅行保険のため。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Revolut：街中でのスマホタッチ決済（Apple Pay）用。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'Wise：現金が必要になった時のATM出金 ＆ Revolutの手数料が高くなる「土日」の決済用。' }] },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '最後に' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '海外旅行で大切なのは 「安心」と「コスト」と「自由度」 のバランスです。' }]
        },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '簡単・安心 → IDARE' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '節約・安定 → Wise' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'スマート・多機能 → Revolut' }] },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '海外ではまだまだ現金が必要な場面も多いので、ATM出金ができるカードを最低1枚は持っておくことを強くおすすめします。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '自分のスタイルに合わせて、最適な「お守り」を選んでみてください。' }]
        },
        {
            _type: 'affiliateLink',
            title: 'Wise (ワイズ) - 海外利用でお得なデビットカード',
            description: '実際の為替レートで両替でき、海外ATMでの現金引き出しも可能。旅行者や海外送金をする方に必須のカードです。',
            badgeText: '海外旅行の必需品',
            buttonText: 'Wiseを詳しく見る（手数料無料クーポン付）',
            href: 'https://wise.com/invite/dlpc/aiharan',
            points: [
                '実際の為替レート＋明確な手数料で格安',
                '世界中のATMで現地通貨を引き出し可能',
                '複数の通貨を一つのアカウントで管理'
            ]
        }
    ]
};

async function run() {
    if (!client.config().token) {
        console.error("Error: SANITY_API_TOKEN is not set.");
        process.exit(1);
    }

    console.log("Syncing post to Sanity...");

    // Find category ID
    let categoryDoc = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: postData.category });
    if (!categoryDoc) {
        console.log(`Category "${postData.category}" not found. Creating...`);
        categoryDoc = await client.create({ _type: 'category', title: postData.category });
    }

    // Upload hero image
    let heroImageAsset = null;
    const heroImagePath = path.join(process.cwd(), 'public', 'travel-money-comparison-hero.png');
    if (fs.existsSync(heroImagePath)) {
        console.log(`Uploading hero image: ${heroImagePath}`);
        heroImageAsset = await client.assets.upload('image', fs.createReadStream(heroImagePath), {
            filename: 'travel-money-comparison-hero.png'
        });
    }

    const sanityPost = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        author: "はるふー",
        categories: [{
            _ref: categoryDoc._id,
            _type: 'reference',
            _key: Math.random().toString(36).substring(7)
        }],
        mainImage: heroImageAsset ? {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: heroImageAsset._id
            }
        } : undefined,
        body: postData.body,
        isSponsored: false
    };

    const existingPost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: postData.slug });
    if (existingPost) {
        console.log(`Updating existing post: ${postData.title}`);
        await client.patch(existingPost._id).set(sanityPost).commit();
    } else {
        await client.create(sanityPost);
        console.log(`Created new post: ${postData.title}`);
    }

    console.log("Success! View it at http://localhost:3000/blog/" + postData.slug);
}

run().catch(console.error);
