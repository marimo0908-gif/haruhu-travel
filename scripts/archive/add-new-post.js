const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
const { basename } = require('path');

// Configure the Sanity client
const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

const postData = {
    title: "初めてのクレジットカード修行はアメリカン・エキスプレス・ゴールド・プリファード",
    excerpt: "クレジットカードを変えただけで、ポイントの価値や旅の選択肢が大きく広がりました。私のクレカ修行の始まり、アメックス・ゴールド・プリファードとの出会いからシンガポール旅行までの体験記です。",
    date: new Date().toISOString(),
    category: "マイル・ポイ活",
    imageUrl: "/amex-gold-preferred-trip.jpg",
    slug: "first-credit-card-training-amex-gold-preferred",
    body: [
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'クレジットカードのポイント、どう使っていますか？\n私が「マイル」という新しい選択肢に出会い、実際に旅を楽しむようになるまでのストーリーをご紹介します。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '1. ポイントは現金派だった頃' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'これまで私はポイントサイトでコツコツと貯めたポイントを、主に現金に交換していました。\nマイルという選択肢はほとんど考えていませんでした。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '2. 旅にハマったきっかけ' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '愛犬との別れをきっかけに沖縄旅行やホテルステイの魅力に気づきました。\n近場でも非日常を楽しむスタイルにハマっていきます。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '3. 楽天経済圏での生活' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '当時のメインカードは楽天カード。\nお買い物マラソンやセールは毎回完走し、貯まったポイントでさらに買い物をする“ポイントループ”が日常でした。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '4. アメックスとの出会い' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'そんな中、SNSでアメリカン・エキスプレス・ゴールド・プリファードの入会キャンペーンを知ります。\n「ポイントをマイルに交換できる！」という点に惹かれ、発行を決意しました。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '5. マイルという新しい選択肢' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ANAマイルへの等価交換や、マリオットボンヴォイへのポイント移行に興味を持ち、これまでとは違う使い方を意識するようになります。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '6. 初めてのマイル活用で悩む' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'しかし、いざポイントを手にしても使い道に迷いました。\nANAマイルにするべきか、他の航空会社にするべきか、初心者には判断が難しかったです。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '7. シンガポール旅行で一歩前進' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'そこで次の旅行先をシンガポールに決め、シンガポール航空のクリスフライヤーに登録。\nちょうど減額マイルのタイミングで、ゴールデンウィークの予約をお得に取ることができました。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ゴールデンウィークという繁忙期ではありましたが、比較的空席があったのはラッキーでした。\n初めての外資系航空会社に大興奮して予約したのを覚えてます。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '8. マイル交換の注意点' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'アメックスポイントをマイルに交換するには「メンバーシップ・リワード・プラス」への登録と航空会社の会員番号が必要です。\n初回は約2週間かかるため、早めの準備がおすすめです。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '9. 最後に' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'クレジットカードを変えただけで、ポイントの価値や旅の選択肢が大きく広がりました。\nこれが、私のクレカ修行の始まりでした。' }]
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
    ]
};

async function run() {
    if (!client.config().token) {
        console.error("Error: SANITY_API_TOKEN is not set.");
        process.exit(1);
    }

    console.log("Updating blog post with PR block...");

    // Find category ID
    const categoryDoc = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: postData.category });
    if (!categoryDoc) {
        console.error(`Category "${postData.category}" not found.`);
        process.exit(1);
    }

    let imageAsset = null;
    const imagePath = path.join(process.cwd(), 'public', postData.imageUrl);
    if (fs.existsSync(imagePath)) {
        console.log(`Uploading image: ${imagePath}`);
        imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
            filename: basename(imagePath)
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
            _type: 'reference',
            _ref: categoryDoc._id,
            _key: Math.random().toString(36).substring(7)
        }],
        mainImage: imageAsset ? {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: imageAsset._id
            }
        } : undefined,
        body: postData.body,
        isSponsored: true
    };

    const existingPost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: postData.slug });
    if (existingPost) {
        console.log(`Post already exists. Updating...`);
        await client.patch(existingPost._id).set(sanityPost).commit();
    } else {
        await client.create(sanityPost);
        console.log(`Created post: ${postData.title}`);
    }

    console.log("Success!");
}

run().catch(console.error);
