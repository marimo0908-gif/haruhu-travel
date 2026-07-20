const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

const postData = {
    title: "【子連れシンガポール旅行記】マリオット修行＆アメックスポイントで豪華ホテルホッピング！フライト遅延のハプニングも…？",
    excerpt: "家族でシンガポールへ旅行に行ってきた様子をまとめたVlogです。アメックスのポイント活用やマリオットプラチナ修行を兼ねてホテルホッピングを満喫しました。",
    date: new Date().toISOString(),
    category: "旅行・ホテル", // Assuming a valid category. We'll fallback if not found.
    slug: "singapore-vlog-marriott-amex",
    body: [
        {
            _type: 'block',
            markDefs: [
                {
                    _key: 'youtubeLink',
                    _type: 'link',
                    href: 'https://youtu.be/PvRcfwcEwdE?si=SyhE4bX-ig_1xlB'
                }
            ],
            children: [
                { _type: 'span', text: 'こんにちは、Haruhuです！\n\n今回は、家族でシンガポールへ旅行に行ってきた様子をまとめたVlog動画をYouTubeにアップしました！\n\n実は今回の旅行、アメックス・ゴールド・プリファードの入会キャンペーンで獲得したポイントをマイルに交換して発券したものなんです！\nさらに、マリオットプラチナ修行を兼ねて、マリオット系列ホテルをホッピングするという、陸マイラー・ホテル好きにはたまらない内容になっています。\n\nまさかの「フライト15時間遅延」（Youtubeでは13時間遅延としてしまいました💦）という大ハプニングから始まった今回の旅ですが、高級ホテルや王道観光、ローカルグルメまで、子連れでたっぷり満喫してきました。\n\n' },
                { _type: 'span', marks: ['youtubeLink'], text: 'まずは、こちらの動画をご覧ください！' }
            ]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '１. 波乱の幕開け！15時間のフライト遅延とANAラウンジ' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '子連れ旅の第一関門、早朝フライトをクリアのため、一休.comで予約した羽田空港直結のホテルに前泊。\n大浴場プランでリラックスして、いざ出発！' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER'
            },
            alt: 'ヴィラフォンティーヌホテルグランド'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'SFC修行を終えたばかりなので、まずはANAラウンジへ。\n名物のラーメンとカレーを満喫し、いよいよ搭乗…と思いきや、ここで大事件が発生！\nなんとエンジントラブルにより、8時55分発のシンガポール航空便が、最終的に翌0時30分発まで約15時間も遅延することに…。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_2'
            },
            alt: 'フライト遅延'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '深夜便は避けたかったのですが背に腹は代えられず、なんとか気合いで乗り切りました。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '2. チャンギ空港到着！絶品カヤトーストで朝食' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '深夜便を子供と共に乗り越え、無事シンガポール・チャンギ空港に到着！\nあっさり入国できたので、まずは空港地下2階にある「ヤクン・カヤ・トースト (Ya Kun Kaya Toast)」へ。\nカリカリのトーストに甘いカヤジャムとバター、それに醤油を垂らした半熟卵をつけて食べるシンガポールの定番朝食は、疲れた体にちょうど良かったです。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_3'
            },
            alt: 'カヤトースト'
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '3. マリオットプラチナ修行！怒涛のホテルホッピング' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '持っているマイルをぜーんぶ使い果たすほど今年は発券しました（旅行は計画的に）。\nそれならばマリオットプラチナを目指そうとマリオット系列ホテルホッピング！\nちょうどマリオットボンヴォイのキャンペーンで宿泊実績の積み上げが効率的になる期間だったのです。\n宿泊した魅力的なホテルたちをご紹介します。' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '1) ザ・エディション・シンガポール (The Singapore EDITION)' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'オーチャードにある憧れの最新ラグジュアリーホテル。\n今回の旅で一番お気に入りのホテルになりました！\nチェックイン担当のスタッフさんの対応が素晴らしく、お部屋も広々とした素敵なお部屋にアップグレード！（我が家はマリオットゴールドメンバーです）\n「映え」を狙う何人ものインフルエンサーらしき人達を見かけました。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_4'
            },
            alt: 'ザ・エディション・シンガポール'
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '2) シンガポール・マリオット・タンプラザ・ホテル' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '地下鉄直結でアクセス抜群の好立地ホテル。\n少し年季は感じましたが、朝食のラクサが絶品で、バラエティ豊かなメニューが楽しめました。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_5'
            },
            alt: 'シンガポール・マリオット・タンプラザ'
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '3) ウェスティン・シンガポール' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'マリーナベイエリアのホテル。\n地下鉄の駅に直結で、ガーデンズ・バイ・ザ・ベイへは一駅。\nお部屋にはバスタブがあり、ウェスティンオリジナルのアメニティも充実。\n朝食のそばが地味に嬉しかった。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_6'
            },
            alt: 'ウェスティン・シンガポール'
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '4) Wシンガポール・セントーサコーヴ' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'セントーサ島にあるデザイナーズホテル。\nUSSで疲れ切った体に大きなバスタブは癒されました。' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_7'
            },
            alt: 'Wシンガポール・セントーサコーヴのバスタブ'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'キッズ大喜びのウォータースライダー付きプールも満喫！' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_8'
            },
            alt: 'Wシンガポール・セントーサコーヴのプール'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '眺めはイマイチだったのですが、遠くにマリーナベイサンズが見えて、年末の花火鑑賞を計画中なので、これはアリかもと考え中です。\nちなみにマリーナベイエリアでホテルから見るにはかなり高額になるようです（1泊20万程度 haruhu調べ）\n早朝には停泊していたディズニークルーズっぽいきらびやかな船も見えました！' }]
        },
        {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', text: '5) クラウンプラザ・チャンギ・エアポート' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '最終日は空港第3ターミナル直結のこちらへ。（※こちらはIHG系列です）\nなんと三井住友インフィニティカードの特典でアップグレードされ、窓の外がすぐプールという最高のお部屋に！' }]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_9'
            },
            alt: 'クラウンプラザ・チャンギ・エアポート'
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '4. 観光＆グルメも大満喫！お得な裏技も' }]
        },
        {
            _type: 'block',
            children: [
                { _type: 'span', text: 'ホテルステイの合間には、定番観光スポットにも足を運びました。\n\n・' },
                { _type: 'span', marks: ['strong'], text: 'マリーナベイサンズ展望台' },
                { _type: 'span', text: ': 実は楽天のプラチナランク以上の特典でマリーナベイサンズの会員ランクがアップグレードされ、通常約5,000円かかる展望台に無料（もしくは格安）で上ることができました！これは超お得です。\n・' },
                { _type: 'span', marks: ['strong'], text: 'ガーデンズ・バイ・ザ・ベイ' },
                { _type: 'span', text: ': 恐竜好きな子供のために、ジュラシック・ワールドのコラボイベントへ。\n・' },
                { _type: 'span', marks: ['strong'], text: 'ユニバーサル・スタジオ・シンガポール (USS)' },
                { _type: 'span', text: ': 暑さと子供の体調不良（休憩して回復！）もありましたが、USJにはないトランスフォーマーグッズに興奮しました。\n・' },
                { _type: 'span', marks: ['strong'], text: 'グルメ' },
                { _type: 'span', text: ': 有名店での絶品チリクラブや、マリーナベイサンズのフードコートにあるミシュラン・ビブグルマン獲得店など、シンガポールグルメも堪能しました。' }
            ]
        },
        {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'IMAGE_ASSET_ID_PLACEHOLDER_10'
            },
            alt: 'チャンギ空港のソンファバクテー'
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '※チャンギ空港のソンファバクテー' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '5. 最後に' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '帰りはチャンギ空港の巨大な滝「ジュエル」を見学し、クリスフライヤー・ゴールドラウンジを利用して帰路へ（個人的にはANAラウンジの方が好みでした笑）。\nちなみに、行きのフライト遅延のお詫びとしてシンガポール航空からギフトコードをもらっていたので、空港で大人気の「バシャコーヒー (Bacha Coffee)」をお土産に購入できました！\n\n15時間の遅延というトラブルはありましたが、アメックスのポイントと各種ホテルのステータスをフル活用し、家族で素晴らしい体験ができたシンガポール旅行でした。' }]
        },
        {
            _type: 'block',
            style: 'blockquote',
            children: [{ _type: 'span', text: '💡 Haruhu Travelからのポイント\n今回のように、クレジットカードのポイント（アメックス等）やホテルの上級ステータス（マリオット、楽天経由のMBSステータスマッチ等）を活用すると、旅行の質が劇的に向上し、思わぬVIP待遇を受けられることがあります。\n旅行好きなら絶対に知っておきたいテクニックです！' }]
        },
        {
            _type: 'affiliateLink',
            title: 'マリオットボンヴォイ・アメリカン・エキスプレス・プレミアム・カード',
            description: 'ホテルステイをワンランク上に引き上げる、旅行好き必携のクレジットカード。紹介プログラム経由での入会で、通常より多くのボーナスポイントを獲得可能です。',
            badgeText: '紹介プログラム限定特典',
            buttonText: '紹介URLをメールで受け取る',
            href: '/contact?subject=MarriottBonvoyAmex',
            points: [
                '年間400万円以上の決済と継続で無料宿泊特典をプレゼント',
                '持っているだけでマリオット「ゴールドエリート」会員資格が自動付帯',
                '年間500万円以上の決済で「プラチナエリート」会員資格を取得可能'
            ]
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
    // Check if token exists in env
    const token = process.env.SANITY_API_TOKEN;
    if (!token) {
        console.error("Error: SANITY_API_TOKEN is not set.");
        process.exit(1);
    }
    
    const configuredClient = client.withConfig({ token });

    console.log("Uploading Villa Fontaine image...");
    const imageAsset = await configuredClient.assets.upload('image', fs.createReadStream('./assets/villa-fontaine-haneda.png'), {
        filename: 'villa-fontaine-haneda.png'
    });

    console.log("Uploading Delay image...");
    const imageAsset2 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/IMG_9169.jpg'), {
        filename: 'IMG_9169.jpg'
    });

    console.log("Uploading Kaya Toast image...");
    const imageAsset3 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/49CF365B-7D70-45AC-92E4-EAF8AC680C13.JPG'), {
        filename: '49CF365B-7D70-45AC-92E4-EAF8AC680C13.JPG'
    });

    console.log("Uploading Edition Singapore image...");
    const imageAsset4 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/the-singapore-edition.png'), {
        filename: 'the-singapore-edition.png'
    });

    console.log("Uploading Marriott Tang Plaza image...");
    const imageAsset5 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/marriott-tang-plaza.png'), {
        filename: 'marriott-tang-plaza.png'
    });

    console.log("Uploading Westin Singapore image...");
    const imageAsset6 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/westin-singapore.png'), {
        filename: 'westin-singapore.png'
    });

    console.log("Uploading W Singapore image...");
    const imageAsset7 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/w-singapore-sentosa.png'), {
        filename: 'w-singapore-sentosa.png'
    });

    console.log("Uploading W Singapore Pool image...");
    const imageAsset8 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/w-singapore-pool.jpg'), {
        filename: 'w-singapore-pool.jpg'
    });

    console.log("Uploading Crowne Plaza image...");
    const imageAsset9 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/crowne-plaza-changi.png'), {
        filename: 'crowne-plaza-changi.png'
    });

    console.log("Uploading Song Fa image...");
    const imageAsset10 = await configuredClient.assets.upload('image', fs.createReadStream('./assets/song-fa-bak-kut-teh.jpg'), {
        filename: 'song-fa-bak-kut-teh.jpg'
    });

    console.log("Updating blog post...");
    // Replace placeholder with actual asset ID
    let bodyStr = JSON.stringify(postData.body).replace('IMAGE_ASSET_ID_PLACEHOLDER', imageAsset._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_2', imageAsset2._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_3', imageAsset3._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_4', imageAsset4._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_5', imageAsset5._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_6', imageAsset6._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_7', imageAsset7._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_8', imageAsset8._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_9', imageAsset9._id);
    bodyStr = bodyStr.replace('IMAGE_ASSET_ID_PLACEHOLDER_10', imageAsset10._id);
    postData.body = JSON.parse(bodyStr);

    // Find category ID
    const categories = await configuredClient.fetch(`*[_type == "category"]`);
    let categoryDoc = categories.find(c => c.title === postData.category);
    
    if (!categoryDoc && categories.length > 0) {
        console.log(`Category "${postData.category}" not found. Falling back to first available category: ${categories[0].title}`);
        categoryDoc = categories[0];
    }

    const sanityPost = {
        _type: 'post',
        title: postData.title,
        slug: { _type: 'slug', current: postData.slug },
        excerpt: postData.excerpt,
        publishedAt: postData.date,
        author: "はるふー",
        categories: categoryDoc ? [{
            _type: 'reference',
            _ref: categoryDoc._id,
            _key: Math.random().toString(36).substring(7)
        }] : [],
        body: postData.body,
        isSponsored: true
    };

    const existingPost = await configuredClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: postData.slug });
    if (existingPost) {
        console.log(`Post already exists. Updating...`);
        await configuredClient.patch(existingPost._id).set(sanityPost).commit();
    } else {
        await configuredClient.create(sanityPost);
        console.log(`Created post: ${postData.title}`);
    }

    console.log("Success!");
}

run().catch(console.error);
