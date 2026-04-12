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
    title: 'シェラトン・グランデ・トーキョーベイに宿泊しました【2026年3月】',
    excerpt: 'オリエンタルランドの株主優待を使って、舞浜にあるシェラトン・グランデ・トーキョーベイに宿泊してきました！ディズニーランドは行けなかったけれど、ホテルステイを満喫したレポートです。',
    date: new Date().toISOString(),
    category: '宿泊',
    slug: 'sheraton-grande-tokyobay-2026-03',
    body: [
        { _type: 'block', children: [{ _type: 'span', text: 'オリエンタルランドの株主優待を使う目的で、舞浜にあるシェラトン・グランデ・トーキョーベイに宿泊してきました！\n今回はディズニーランドに行く目的で予約したのですが、子供からの猛反対で結局ホテル宿泊のみに（笑）。\nでも結果的にはホテルを満喫できて大満足でした。\nクラブラウンジアクセス付きのお部屋にすると子供の遊び場・プール・大浴場が無料で利用できるので、時間ギリギリまで子供も大喜びでした。\nシェラトンは今回が初めての宿泊ですが、とても良かったのでレポートします！' }] },
        
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1.アクセス・チェックイン' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'ホテルはディズニーリゾートライン（モノレール）ベイサイドからも見えるのですが、ホテル前が坂になっているためシャトルバスの利用がおすすめです。\n舞浜駅からも送迎バスがあるようです。\n早めに到着しましたが、チェックインは15時とのこと。\nロビーにはディズニー映画がテレビで流れており、さすがディズニーオフィシャルホテルならではの雰囲気です。\nマリオットゴールド会員のため、チェックイン時にソフトドリンクをいただきました。\n子供が待ちくたびれてしまったのですが、ありがたいことに14時半にお部屋に入れていただけました！' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2.お部屋について' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'クラブラウンジアクセス付きのお部屋で、大人2名・子供1名・添い寝1名で予約しました。' }] },
        { _type: 'block', children: [{ _type: 'span', text: '良かった点：', marks: ['strong'] }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'お部屋は広めで過ごしやすい' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'ベランダに出ることができ、ディズニーシーが見える絶景' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'ネスプレッソのコーヒーマシン完備' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'お水のボトルが人数分あり' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'アメニティが充実（なぜか多めに用意されていました）' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '大人・子供ともに浴衣が用意されていた（足元がスースーするので苦手です）' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'スリッパは子供用もあり' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '個包装の化粧水類は念の為リクエスト。必要な方は確認してみてください。' }] },
        { _type: 'block', children: [{ _type: 'span', text: '' }] },
        { _type: 'block', children: [{ _type: 'span', text: '気になった点：', marks: ['strong'] }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'インテリアはやや年代を感じる' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '洗面所と浴室が一体型（浴槽が滑るので小さいお子さんは注意）' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'ドライヤーの風量が弱め' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3.クラブラウンジ' }] },
        { _type: 'block', children: [{ _type: 'span', text: '今回の一番の目的と言っても過言ではないクラブラウンジ！\nラウンジアクセス付きのお部屋は、子供の遊び場・プール・大浴場がすべて無料で使えるのが最大の魅力です。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4.ラウンジの眺望' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'ディズニーシーはもちろん、ラウンジからは船や飛行機が見える開放的なロケーションで、景色が楽しめます。\nチェックインの日は朝食が終わった11時以降から利用OKとのことでした。\nチェックイン時に確認してみて下さい。\n\nお酒の提供はカクテルタイムのみ。\n10:30〜16:00の時間帯はソフトドリンク・パン・お菓子が少々という感じでした。\nパンがとても美味しかったです！' }] },

        { _type: 'block', children: [{ _type: 'span', text: '嬉しいポイントとして、カクテルタイムはお子様同伴でもOKです（ホテルでは子供入室不可のところも多いですよね）。\n\n2部制でメニューが違うみたいです。\n前半は子連れ、後半は13歳以上となっているそうで、我が家は前半に。\nわたあめなど子供が喜ぶメニューがありました。\nただ、今回はわたあめ機の調子がちょっと良くなさそうでしたが、うちの子は大喜びでした。\nお酒の種類も豊富です。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5.遊び場・プール' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'カクテルタイムまでの時間、子供たちは遊び場とプールへ。\nラウンジアクセス付きのお部屋なら無料で利用できます。\n子供にとってはラウンジよりこちらがメインイベントだったようです（笑）。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '6.部屋からのディズニーの花火' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'カクテルタイムから部屋に戻ると、ベランダからディズニーの花火がきれいに見えました。\n部屋からの眺めは夜の方オススメです。' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '7.クラブラウンジの朝食' }] },
        { _type: 'block', children: [{ _type: 'span', text: '翌朝のラウンジ朝食は、ライブキッチンで卵料理をその場で作っていただけます。\nライブキッチンがあるだけで満足度がぐっと上がりますね。\n料理の種類も十分に揃っており、大満足でした。\nシェラトンのパンが本当に美味しくて感激！' }] },

        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '8.最後に' }] },
        { _type: 'block', children: [{ _type: 'span', text: 'シェラトン・グランデ・トーキョーベイホテルのクラブラウンジアクセス付きのお部屋は大人だけではなく、子連れでも十分楽しめるホテルでした。\nディズニーに行かなくてもホテル内施設だけで一日を充実させられるのが嬉しいポイントです。\nただ、客室のインテリアやアーケードゲームなど少し古さを感じる部分もあるので、そのあたりは許容できる方に向いているかと思います。\n\nまた泊まりたいホテルリストに入りました！' }] },
        
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'ホテル情報' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'シェラトン・グランデ・トーキョーベイ・ホテル' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: '評価：★4.1（Googleレビュー 9,141件） ※2026年4月データ' }] },
        { _type: 'block', listItem: 'bullet', children: [{ _type: 'span', text: 'アクセス：舞浜駅よりシャトルバスあり、ディズニーリゾートライン（モノレール）ベイサイド徒歩１分' }] },
        {
            _type: 'block',
            listItem: 'bullet',
            children: [
                { _type: 'span', text: '動画レポート：' },
                {
                    _type: 'span',
                    text: 'YouTubeを見る',
                    marks: ['link']
                }
            ],
            markDefs: [
                {
                    _key: 'link',
                    _type: 'link',
                    href: 'https://youtu.be/MYuux5KMIso?si=Ug0ENOqZzE0wdQI2'
                }
            ]
        },

        // A8.net Affiliate Block Placeholder
        {
            _type: 'affiliateLink',
            _key: 'a8_hotel_link',
            title: '一休.comでシェラトン・グランデ・トーキョーベイ・ホテルを予約する',
            description: 'ディズニーオフィシャルホテルで、遊び場やプールも充実。子連れ旅行に最高のホテルです。一休.comなら限定プランも見つかります。',
            href: 'https://px.a8.net/svt/ejp?a8mat=4B1JDJ+55R9IQ+1OK+6N741',
            trackerImageUrl: 'https://www12.a8.net/0.gif?a8mat=4B1JDJ+55R9IQ+1OK+6N741',
            campaignImage: 'https://www20.a8.net/svt/bgt?aid=260412247312&wid=001&eno=01&mid=s00000000218001116000&mc=1',
            badgeText: 'おすすめ',
            buttonText: '宿泊プランを見る',
            points: [
                'ディズニーリゾートライン「ベイサイド駅」徒歩1分',
                '豪華なクラブラウンジで贅沢なひととき',
                '子供が喜ぶ室内遊び場「トレジャーズ！アイランド」あり'
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

    const heroImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775974058554.png';
    const roomImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775975450426.png';
    const breadImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775975917192.png';
    const loungeImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775975966681.png';
    const foodPlateImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775976082807.jpg';
    const wineBottlesImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775976130983.jpg';
    const cottonCandyImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/414e3c1b-7932-4e38-80ad-d71dfa0d4890/media__1775976159406.jpg';
    
    // New images from current session
    const nightViewImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/52801ccc-8eb2-4ac4-b15b-2f5ba3b45a60/media__1775978156864.png';
    const breakfast1ImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/52801ccc-8eb2-4ac4-b15b-2f5ba3b45a60/media__1775978271874.jpg';
    const breakfast2ImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/52801ccc-8eb2-4ac4-b15b-2f5ba3b45a60/media__1775978371454.jpg';
    const breakfast3ImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/52801ccc-8eb2-4ac4-b15b-2f5ba3b45a60/media__1775978449360.jpg';
    const playAreaImagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/52801ccc-8eb2-4ac4-b15b-2f5ba3b45a60/media__1775978626444.png';
    
    let mainImage = undefined;
    let roomImageAsset = null;
    let breadImageAsset = null;
    let loungeImageAsset = null;
    let foodPlateImageAsset = null;
    let wineBottlesImageAsset = null;
    let cottonCandyImageAsset = null;
    
    // New assets
    let nightViewImageAsset = null;
    let breakfast1ImageAsset = null;
    let breakfast2ImageAsset = null;
    let breakfast3ImageAsset = null;
    let playAreaImageAsset = null;

    if (fs.existsSync(heroImagePath)) {
        console.log('Uploading hero image...');
        const imageAsset = await client.assets.upload('image', fs.createReadStream(heroImagePath), {
            filename: path.basename(heroImagePath)
        });
        mainImage = {
            _type: 'image',
            asset: {
                _type: "reference",
                _ref: imageAsset._id
            }
        };
    }

    if (fs.existsSync(roomImagePath)) {
        console.log('Uploading room bed image...');
        roomImageAsset = await client.assets.upload('image', fs.createReadStream(roomImagePath), {
            filename: 'sheraton-room-bed.png'
        });
    }

    if (fs.existsSync(breadImagePath)) {
        console.log('Uploading bread image...');
        breadImageAsset = await client.assets.upload('image', fs.createReadStream(breadImagePath), {
            filename: 'sheraton-bread.png'
        });
    }

    if (fs.existsSync(loungeImagePath)) {
        console.log('Uploading lounge interior image...');
        loungeImageAsset = await client.assets.upload('image', fs.createReadStream(loungeImagePath), {
            filename: 'sheraton-lounge-interior.png'
        });
    }

    if (fs.existsSync(foodPlateImagePath)) {
        console.log('Uploading food plate image...');
        foodPlateImageAsset = await client.assets.upload('image', fs.createReadStream(foodPlateImagePath), {
            filename: 'sheraton-food-plate.jpg'
        });
    }

    if (fs.existsSync(wineBottlesImagePath)) {
        console.log('Uploading wine bottles image...');
        wineBottlesImageAsset = await client.assets.upload('image', fs.createReadStream(wineBottlesImagePath), {
            filename: 'sheraton-wine-bottles.jpg'
        });
    }

    if (fs.existsSync(cottonCandyImagePath)) {
        console.log('Uploading cotton candy image...');
        cottonCandyImageAsset = await client.assets.upload('image', fs.createReadStream(cottonCandyImagePath), {
            filename: 'sheraton-cotton-candy.jpg'
        });
    }

    // Uploading new images from current session
    if (fs.existsSync(nightViewImagePath)) {
        console.log('Uploading night view image...');
        nightViewImageAsset = await client.assets.upload('image', fs.createReadStream(nightViewImagePath), {
            filename: 'sheraton-night-view.png'
        });
    }

    if (fs.existsSync(breakfast1ImagePath)) {
        console.log('Uploading breakfast omelette image...');
        breakfast1ImageAsset = await client.assets.upload('image', fs.createReadStream(breakfast1ImagePath), {
            filename: 'sheraton-breakfast-omelette.jpg'
        });
    }

    if (fs.existsSync(breakfast2ImagePath)) {
        console.log('Uploading breakfast buffet image 1...');
        breakfast2ImageAsset = await client.assets.upload('image', fs.createReadStream(breakfast2ImagePath), {
            filename: 'sheraton-breakfast-buffet-1.jpg'
        });
    }

    if (fs.existsSync(breakfast3ImagePath)) {
        console.log('Uploading breakfast buffet image 2...');
        breakfast3ImageAsset = await client.assets.upload('image', fs.createReadStream(breakfast3ImagePath), {
            filename: 'sheraton-breakfast-buffet-2.jpg'
        });
    }

    if (fs.existsSync(playAreaImagePath)) {
        console.log('Uploading play area image...');
        playAreaImageAsset = await client.assets.upload('image', fs.createReadStream(playAreaImagePath), {
            filename: 'sheraton-play-area.png'
        });
    }

    // Process postData.body to insert images
    let bodyCopy = [...postData.body];

    // Helper function to insert image after target text
    function insertImageAfterText(body, targetText, asset, caption) {
        const index = body.findIndex(block => 
            block._type === 'block' && 
            block.children && 
            block.children.some(child => child.text.includes(targetText))
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

    // Helper function to insert MULTIPLE images after target text
    function insertMultipleImagesAfterText(body, targetText, assetsWithCaptions) {
        const index = body.findIndex(block => 
            block._type === 'block' && 
            block.children && 
            block.children.some(child => child.text.includes(targetText))
        );
        if (index !== -1) {
            const blocksToInsert = assetsWithCaptions
                .filter(item => item.asset)
                .map(item => ({
                    _type: 'image',
                    _key: `img_${Math.random().toString(36).substring(7)}`,
                    asset: {
                        _type: 'reference',
                        _ref: item.asset._id
                    },
                    caption: item.caption
                }));
            body.splice(index + 1, 0, ...blocksToInsert);
            return true;
        }
        return false;
    }

    // 1. Insert room image
    insertImageAfterText(bodyCopy, 'クラブラウンジアクセス付きのお部屋で、大人2名・子供1名・添い寝1名で予約しました。', roomImageAsset, '広々と過ごしやすいお部屋でした');

    // 2. Insert bread and lounge interior images (after "パンがとても美味しかったです！")
    insertMultipleImagesAfterText(bodyCopy, 'パンがとても美味しかったです！', [
        { asset: breadImageAsset, caption: undefined },
        { asset: loungeImageAsset, caption: '開放的でオシャレな雰囲気のクラブラウンジ' }
    ]);

    // 3. Insert food plate, wine bottles, and cotton candy image (after "お酒の種類も豊富です。")
    insertMultipleImagesAfterText(bodyCopy, 'お酒の種類も豊富です。', [
        { asset: foodPlateImageAsset, caption: 'カクテルタイムの豪華なお料理' },
        { asset: wineBottlesImageAsset, caption: 'ずらりと並ぶワインやスパークリングワイン' },
        { asset: cottonCandyImageAsset, caption: '子供たちが大喜びしたわたあめ' }
    ]);

    // 4. Insert night view image
    insertImageAfterText(bodyCopy, '部屋からの眺めは夜の方オススメです。', nightViewImageAsset, '部屋のベランダから見える幻想的なディズニーの夜景');

    // 5. Insert breakfast images
    insertMultipleImagesAfterText(bodyCopy, 'シェラトンのパンが本当に美味しくて感激！', [
        { asset: breakfast1ImageAsset, caption: 'ライブキッチンで作ってもらえるオムレツと絶品デニッシュ' },
        { asset: breakfast2ImageAsset, caption: '種類豊富なジャムやソースのコーナー' },
        { asset: breakfast3ImageAsset, caption: 'コールドカットやサーモンも充実しています' }
    ]);

    // 6. Insert play area image
    insertImageAfterText(bodyCopy, '子供にとってはラウンジよりこちらがメインイベントだったようです（笑）。', playAreaImageAsset, '一日中遊べる室内遊び場「トレジャーズ！アイランド」');

    const sanityPost = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        author: 'はるふー',
        mainImage: mainImage,
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
