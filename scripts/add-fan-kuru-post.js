const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
const { basename } = require('path');

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
    title: '外食がお得になる「ファンくる」とは？仕組み・やり方・注意点',
    excerpt: '外食や美容をお得に楽しみたい方におすすめの「ファンくる」。\nうまく使えば実質半額〜無料で利用できることもあります。',
    date: new Date().toISOString(),
    category: 'ポイント・ポイ活',
    slug: 'fan-kuru-guide',
    imageUrl: '/fan-kuru-header.png',
    body: [
        // Introduction
        { _type: 'block', children: [{ _type: 'span', text: '外食や美容をお得に楽しみたい方におすすめなのが「ファンくる」です。\nうまく使えば、実質半額〜無料で利用できることもあります。\nこの記事では、初心者でもわかるように仕組み・やり方・注意点をシンプルにまとめました。' }] },
        // Section 1
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1.ファンくるとは？' }] },
        { _type: 'block', children: [{ _type: 'span', text: '「ファンくる」は、飲食店やサービスを利用してアンケートに回答すると、利用料金の一部がポイントで還元されるサービスです。\nいわゆる「覆面調査（モニター）」の一種で、店舗側はサービス改善、ユーザーはお得に利用できる仕組みです。' }] },
        // Section 2
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2.どれくらいお得になる？' }] },
        { _type: 'block', children: [{ _type: 'span', text: '* 居酒屋：50％還元\n* 居酒屋以外の飲食店：30〜100％還元\n* 美容院：50％前後\n* 通販（サプリ・化粧品など）：40〜80％還元\n\n👉 うまく使えば実質無料〜半額で外食やサービスを楽しめます。' }] },
        // Section 3
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3.ファンくるのやり方（簡単3ステップ）' }] },
        { _type: 'block', children: [{ _type: 'span', text: '① 会員登録\n② 行きたいお店に応募・当選\n③ 利用後にアンケート提出\nこれだけでOKです。\n※レシート提出やアンケート回答が必要です。\n店舗にもよりますが、そこそこ時間がかかることもあります。' }] },
        // Section 4
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4.メリット' }] },
        { _type: 'block', children: [{ _type: 'span', text: '* 外食費を節約できる\n* 普段行かないお店を開拓できる\n* 案件数が多い' }] },
        // Section 5
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5.デメリット・注意点（重要）' }] },
        { _type: 'block', children: [{ _type: 'span', text: '* 事前応募が必要（抽選あり）\n* 利用条件がある（注文数など）\n* アンケート提出期限がある\n* ポイント付与はグルメ案件以外は時間がかかる\n👉 ルールを守らないと還元されない' }] },
        // Section 6
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '6.こんな人におすすめ' }] },
        { _type: 'block', children: [{ _type: 'span', text: '* 外食が多い人\n* 節約しながら楽しみたい人\n* 旅行・ホテル好きな人' }] },
        // Section 7
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '7.実際に使ってみた感想' }] },
        { _type: 'block', children: [{ _type: 'span', text: '実際に使ってみると、いつもの外食をファンくる案件に置き換えることができます。\nただし、条件確認とアンケートは少し手間なので、👉「確実にこなせる案件だけやる」のがコツです。' }] },
        // Section 8
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '8.私のやらかした失敗談' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'ファンくるは外食や通販をお得に利用できる便利なサービスですが、ルールをしっかり理解していないと普通に損します。' }] },
        {
            _type: 'block',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '* 一番ショックだったのが、案件の条件は「現金払いのみ」なのにクレジットカードで支払ってしまい、還元対象外に。' }]
        },
        {
            _type: 'block',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '* 複数通販案件を進行中に、期限に間に合わないと勘違いしてキャンセルしたが、実際はすでに購入済みで、後日商品が届くというケースがあり、結果的に還元なしで普通に購入しただけに。' }]
        },
        {
            _type: 'block',
            listItem: 'bullet',
            children: [{ _type: 'span', text: '* 店舗レシートの時間が実際の利用時間とずれ、アンケート内容と整合性が取れず再提出対応になることもありました。' }]
        },
        // Section 9
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '9.最後に' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'ファンくるは外食やサービスをお得に体験できる優秀なポイ活サービスです。\n最初は簡単な案件から始めて、慣れていくのがおすすめです。' }] },
        // PR section header
        {
            _type: 'block',
            children: [{ _type: 'span', text: ' お得な紹介プログラムのご案内 ', marks: ['strong'] }],
            markDefs: [],
            style: 'h2'
        }
    ]
};

async function run() {
    if (!client.config().token) {
        console.error('Error: SANITY_API_TOKEN is not set.');
        process.exit(1);
    }
    console.log('Updating FanKuru blog post with revised failure story text...');

    // Find category ID
    let categoryDoc = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: postData.category });
    if (!categoryDoc) {
        const newCat = await client.create({ _type: 'category', title: postData.category });
        categoryDoc = newCat;
    }

    // Upload main header image
    let mainImageAsset = null;
    const mainImagePath = path.join(process.cwd(), 'public', postData.imageUrl);
    if (fs.existsSync(mainImagePath)) {
        console.log(`Uploading header image: ${mainImagePath}`);
        mainImageAsset = await client.assets.upload('image', fs.createReadStream(mainImagePath), { filename: basename(mainImagePath) });
    }

    // Upload campaign image for PR block
    let campaignImageAsset = null;
    const campaignImagePath = path.join(process.cwd(), 'public/images/fancrew-campaign.png');
    if (fs.existsSync(campaignImagePath)) {
        console.log(`Uploading campaign image: ${campaignImagePath}`);
        campaignImageAsset = await client.assets.upload('image', fs.createReadStream(campaignImagePath), { filename: 'fancrew-campaign.png' });
    }

    // Create the updated PR block
    const fancrewBlock = {
        _type: 'affiliateLink',
        _key: 'fancrew_' + Math.random().toString(36).substring(2, 9),
        title: 'ファンくる',
        description: '外食やサービスを利用して最大100%ポイント還元！貯まったポイントはマイルに交換可能です。',
        href: 'https://www.fancrew.jp/about?inflow_id=fri_e12-9034462&lk=9034462&lk1=b&d=1',
        badgeText: '期間限定キャンペーン中！',
        points: [
            '外食モニターで食費を節約しながらマイルが貯まる',
            '覆面調査気分で楽しくポイ活',
            '貯まったポイントはドットマネー経由などでANAマイルへ'
        ],
        buttonText: 'ファンくるを始める',
        campaignImage: campaignImageAsset ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: campaignImageAsset._id }
        } : undefined
    };

    // Construct full body
    const fullBody = [...postData.body, fancrewBlock];

    const sanityPost = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        author: 'はるふー',
        categories: [{ _type: 'reference', _ref: categoryDoc._id, _key: Math.random().toString(36).substring(7) }],
        mainImage: mainImageAsset ? { _type: 'image', asset: { _type: 'reference', _ref: mainImageAsset._id } } : undefined,
        body: fullBody,
        isSponsored: true
    };

    const existingPost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: postData.slug });
    if (existingPost) {
        console.log('Updating existing post...');
        await client.patch(existingPost._id).set(sanityPost).commit();
    } else {
        await client.create(sanityPost);
        console.log(`Created post: ${postData.title}`);
    }
    console.log('Success!');
}

run().catch(console.error);
