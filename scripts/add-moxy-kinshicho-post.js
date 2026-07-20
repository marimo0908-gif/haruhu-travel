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
    title: 'モクシー東京錦糸町に宿泊しました【2026年2月】',
    excerpt: 'マリオットプラチナ修行の滞在先として選んだモクシー東京錦糸町。コンパクトながら機能的なお部屋と、夜の活気あふれるロビーラウンジでの体験をレポートします。',
    date: '2026-04-13T00:00:00Z', // Published on 2026-04-13
    category: '宿泊',
    slug: 'moxy-tokyo-kinshicho-2026-02',
    body: [
        { _type: 'block', children: [{ _type: 'span', text: 'マリオットプラチナを目指して修行中のはるふーです！\n今回は、2026年2月に宿泊した「モクシー東京錦糸町」の滞在記をお届けします。' }] },
        
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. はじめに' }] },
        { _type: 'block', children: [{ _type: 'span', text: '実は今回の滞在、正直あまり期待していなかったのですが、結果的には大満足！\n特にロビーラウンジでの体験が素晴らしく、子供と一緒に東京の夜を存分に楽しむことができました。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. 第一印象・エントランス' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'ホテルに到着してまず驚いたのが、そのインパクトのある入り口です。\nモクシーブランドらしいスタイリッシュでポップなデザインが目を引き、一気にテンションが上がります。\nチェックインは、ロビーの奥にあるカウンターで行います。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. お部屋について' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'お部屋は全体的にコンパクトにまとめられています。\n広々とした空間を求める方には少し不向きかもしれませんが、非常に機能的な造りになっています。' }] },

        { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'お部屋の設備' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '窓からの景色：昼間は気づきませんでしたが、夜になると6階のお部屋からはライトアップされたスカイツリーが綺麗に見えました！' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '効率的なレイアウト：テレビや机は壁掛けタイプになっており、限られたスペースを有効活用しています。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '冷蔵庫：ドリンクが数本入る程度のコンパクトなサイズ。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '部屋着：1枚で着られるワンピースタイプ。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'インテリア：レトロなデザインの電話が置いてあり、インテリアとしてもとても可愛いです。' }] },

        { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'バスルーム' }] },
        { _type: 'block', children: [{ _type: 'span', text: '洗面所とバスルームは一体型。バスタブはなく、シャワーのみのスタイルです。\nベッドルームとの間は曇りガラスになっていて、モダンな印象です。' }] },
        { _type: 'block', children: [{ _type: 'span', text: '初めて見るタイプのウォーターサーバーが設置されており、つまみをひねるだけで簡単にお水が頂けました。\nアメニティは、シャンプー・コンディショナー・ボディソープが備え付けられています。' }] },

        { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'アメニティ' }] },
        { _type: 'block', children: [{ _type: 'span', text: '嬉しいことに、人数分より少し多めにアメニティが用意されていました。\nハブラシ、コットン、綿棒など、必要なものが一通り揃っています。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4. マリオットボンヴォイ会員特典' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'マリオットゴールド会員の特典として、チェックイン時に人数分のドリンクチケット（アルコールまたはソフトドリンク）をいただきました。\nちょっとしたサービスですが、旅行の始まりに嬉しいおもてなしです。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5. ロビーラウンジが最高！' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'モクシー最大の魅力は、なんといってもこのロビーラウンジだと思います。\n遊び心あふれる雰囲気は、どこか星野リゾートを彷彿とさせ、滞在をワクワクさせてくれます。' }] },

        { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'ラウンジの施設・サービス' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'DJブース：夜は心地よい音楽が流れ、お酒を片手に雰囲気を楽しめます。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'ビリヤード台：自由に使用でき、友人や家族とプレーできます。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'レンタサイクル：ホテルの外には自転車があり、周辺散策にも便利そうです。' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'セルフスタイルの食事：カジュアルに食事を楽しむことができます。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '6. 宿泊者特典' }] },
        { _type: 'block', children: [{ _type: 'span', text: '宿泊者はソフトドリンクが飲み放題！というのも大きなポイント。\n子供と一緒に好きな時にドリンクを楽しめるのは、家族連れにも非常にありがたい特典ですね。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '7. 夜のラウンジ体験' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'DJの流す音楽に合わせて、下の子がノリノリで踊り出す場面も（笑）。\n大人っぽい雰囲気の中に、こうして子供も一緒に楽しめる懐の広さがあるのがモクシーの良さだと感じました。\nファミリーでも気兼ねなく、都会的でアーティスティックな夜を過ごすことができました。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '8. 最後に' }] },
        { _type: 'block', children: [{ _type: 'span', text: '正直なところ、宿泊前はそこまで期待していなかった「モクシー東京錦糸町」でしたが、ラウンジの雰囲気と子供たちの楽しそうな様子を間近に見て、とても満足度の高い滞在となりました。\n\nお部屋のコンパクトさやバスタブがない点はありますが、ホテルを「寝る場所」としてだけでなく、「夜のラウンジや雰囲気を楽しむ場所」として利用したい方には、これ以上ない選択肢だと思います。\nおしゃれな空間で、いつもと違う特別な夜を過ごしたい方にぜひおすすめしたいホテルです！' }] },
        
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'ホテル情報' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'モクシー 東京錦糸町' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '評価：★4.2（Googleレビュー 1,538件） ※2026年4月時点' }] },
        {
            _type: 'block',
            listItem: 'bullet',
            children: [
                { _type: 'span', text: '動画レポート：' },
                {
                    _type: 'span',
                    text: 'YouTubeでチェックする',
                    marks: ['link']
                }
            ],
            markDefs: [
                {
                    _key: 'link',
                    _type: 'link',
                    href: 'https://youtu.be/p_IRxKeSoNE?si=SSVXtl0H1Jm6ymdZ'
                }
            ]
        },
        {
            _type: 'affiliateLink',
            title: 'マリオットボンヴォイ・アメリカン・エキスプレス・プレミアム・カード',
            description: 'マリオット系列ホテルでの宿泊が劇的に変わる、旅好き必携の最強カード。紹介プログラムからの入会が最もお得です。',
            badgeText: '修行・旅好き必携',
            buttonText: '紹介URLをメールで受け取る',
            href: '/contact?subject=MarriottAmexPremium',
            points: [
                '年間400万円以上の決済で世界中のホテルに泊まれる「無料宿泊特典」をプレゼント',
                '年間500万円以上の決済でマリオット「プラチナエリート」会員資格を付与',
                '持っているだけで「ゴールドエリート」会員資格が自動付帯'
            ]
        }
    ]
};

async function run() {
    if (!client.config().token) {
        console.error('Error: SANITY_API_TOKEN is not set.');
        process.exit(1);
    }

    console.log('Syncing "宿泊" category...');
    let categoryDoc = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: postData.category });
    if (!categoryDoc) {
        categoryDoc = await client.create({ _type: 'category', title: postData.category });
        console.log(`Created new category: ${postData.category}`);
    }

    const entranceImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776085715115.png';
    const daytimeViewImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776085794182.jpg';
    const bathroomImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776085948626.png';
    const bedroomImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776086155629.png';
    const drinkImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776086236271.png';
    const loungeImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776086422309.png';
    const djBoothImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776088007392.jpg';
    const heroImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/0b7b4dc6-9554-48c4-9e8f-1538e914a840/media__1776087144144.png';
    let entranceImageAsset = null;
    let daytimeViewImageAsset = null;
    let bathroomImageAsset = null;
    let bedroomImageAsset = null;
    let drinkImageAsset = null;
    let loungeImageAsset = null;
    let djBoothImageAsset = null;
    let heroImageAsset = null;

    if (fs.existsSync(entranceImagePath)) {
        console.log('Uploading entrance image...');
        entranceImageAsset = await client.assets.upload('image', fs.createReadStream(entranceImagePath), {
            filename: 'moxy-entrance.png'
        });
    }

    if (fs.existsSync(daytimeViewImagePath)) {
        console.log('Uploading daytime view image...');
        daytimeViewImageAsset = await client.assets.upload('image', fs.createReadStream(daytimeViewImagePath), {
            filename: 'moxy-daytime-view.jpg'
        });
    }

    if (fs.existsSync(bathroomImagePath)) {
        console.log('Uploading bathroom image...');
        bathroomImageAsset = await client.assets.upload('image', fs.createReadStream(bathroomImagePath), {
            filename: 'moxy-bathroom.png'
        });
    }

    if (fs.existsSync(bedroomImagePath)) {
        console.log('Uploading bedroom image...');
        bedroomImageAsset = await client.assets.upload('image', fs.createReadStream(bedroomImagePath), {
            filename: 'moxy-bedroom.png'
        });
    }

    if (fs.existsSync(drinkImagePath)) {
        console.log('Uploading drink image...');
        drinkImageAsset = await client.assets.upload('image', fs.createReadStream(drinkImagePath), {
            filename: 'moxy-welcome-drink.png'
        });
    }

    if (fs.existsSync(loungeImagePath)) {
        console.log('Uploading lounge image...');
        loungeImageAsset = await client.assets.upload('image', fs.createReadStream(loungeImagePath), {
            filename: 'moxy-lounge.png'
        });
    }

    if (fs.existsSync(djBoothImagePath)) {
        console.log('Uploading bar image (replacing DJ booth)...');
        djBoothImageAsset = await client.assets.upload('image', fs.createReadStream(djBoothImagePath), {
            filename: 'moxy-bar.jpg'
        });
    }

    if (fs.existsSync(heroImagePath)) {
        console.log('Uploading hero image...');
        heroImageAsset = await client.assets.upload('image', fs.createReadStream(heroImagePath), {
            filename: 'moxy-hero.png'
        });
    }

    // Process postData.body to insert images
    let bodyCopy = [...postData.body];

    // Helper function to insert image after target text
    function insertImageAfterText(body, targetText, asset, caption) {
        const index = body.findIndex(block => 
            (block._type === 'block' && block.children && block.children.some(child => child.text.includes(targetText))) ||
            (block.listItem === 'bullet' && block.children && block.children.some(child => child.text.includes(targetText)))
        );
        if (index !== -1 && asset) {
            body.splice(index + 1, 0, {
                _type: 'image',
                _key: `img_${Math.random().toString(36).substring(7)}`,
                asset: {
                    _type: 'reference',
                    _ref: asset._id
                },
                caption: caption
            });
            return true;
        }
        return false;
    }

    // 1. Insert entrance image
    insertImageAfterText(bodyCopy, 'ホテルに到着してまず驚いたのが、そのインパクトのある入り口です。', entranceImageAsset, 'インパクト抜群のモクシー東京錦糸町のエントランス');

    // 2. Insert daytime view image
    insertImageAfterText(bodyCopy, '窓からの景色：昼間は気づきませんでしたが', daytimeViewImageAsset, 'お部屋（6階）からの昼間の景色');

    // 3. Insert bathroom image
    insertImageAfterText(bodyCopy, 'ベッドルームとの間は曇りガラスになっていて、モダンな印象です。', bathroomImageAsset, 'シャワーブースと洗面台の様子');

    // 4. Insert bedroom image
    insertImageAfterText(bodyCopy, '非常に機能的な造りになっています。', bedroomImageAsset, 'コンパクトながら機能的なベッドルーム');

    // 5. Insert drink image
    insertImageAfterText(bodyCopy, '嬉しいおもてなしです。', drinkImageAsset, 'チェックイン時にいただいたウェルカムドリンク（ハイボール）');

    // 6. Insert lounge image
    insertImageAfterText(bodyCopy, 'カジュアルに食事を楽しむことができます。', loungeImageAsset, '遊び心あふれるロビーラウンジの様子');

    // 7. Insert DJ booth image (now bar)
    insertImageAfterText(bodyCopy, '遊び心あふれる雰囲気は、どこか星野リゾートを彷彿とさせ', djBoothImageAsset, 'DJブースがあり、夜は音楽を楽しめるロビーラウンジ');

    const sanityPost = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        author: 'はるふー',
        mainImage: heroImageAsset ? {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: heroImageAsset._id
            }
        } : undefined,
        categories: [{
            _type: 'reference',
            _ref: categoryDoc._id,
            _key: Math.random().toString(36).substring(7)
        }],
        body: bodyCopy,
        isSponsored: true
    };

    const existingPost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: postData.slug });
    if (existingPost) {
        console.log(`Updating existing post: ${postData.title}`);
        await client.patch(existingPost._id).set(sanityPost).commit();
    } else {
        await client.create(sanityPost);
        console.log(`Created new post: ${postData.title}`);
    }

    console.log('Success!');
}

run().catch(console.error);
