const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
const { basename } = require('path');

// Configure the Sanity client
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

// Since data.js has ES6 exports, we'll read and extract it using a quick regex or we can just require a transpiled version.
// For simplicity, we are going to define the data directly here for the script based on the exact content of data.js.

const blogPosts = [
    {
        title: "初めての海外旅行はANAマイルでグアムへ",
        excerpt: "初めての海外旅行として、ゴールデンウィークにANAマイルを使ってグアムへ行きました。必要だったマイルは往復2万マイルで、これに加えて諸税や燃油サーチャージが1人あたり約2万円強かかりましたが、繁忙期のゴールデンウィークに海外へ行けたことを考えると満足度は高かったです。",
        date: "2026-02-11T12:00:00Z",
        category: "マイル・ポイ活",
        imageUrl: "/guam-first-trip.png",
        slug: "first-overseas-trip-guam",
        body: [
            { _type: 'block', children: [{ _type: 'span', text: '初めての海外旅行として、ゴールデンウィークにANAマイルを使ってグアムへ行きました。必要だったマイルは往復2万マイルで、これに加えて諸税や燃油サーチャージが1人あたり約2万円強かかりましたが、繁忙期のゴールデンウィークに海外へ行けたことを考えると満足度は高かったです。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'マイル以外にかかった費用と実際のコスト感' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'ANAマイルで特典航空券を発券しましたが、完全に無料というわけではなく、税金や燃油サーチャージなどの諸費用は現金で支払いました。それでも、現金で航空券を購入するよりは出費を抑えられたと感じています。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '飛行時間と時差は子連れでも無理のない範囲' }] },
            { _type: 'block', children: [{ _type: 'span', text: '飛行時間は約4時間と、沖縄より少し長い程度。さらに時差はわずか1時間なので、体への負担も少なく、子どもにとっても移動が苦になりにくい距離でした。初めての海外旅行先として、グアムはとても行きやすいと感じました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '初海外だからこそホテルは安心と快適さを優先' }] },
            { _type: 'block', children: [{ _type: 'span', text: '初めての海外旅行だったため、移動の負担や安全面を重視し、ツバキタワーのクラブラウンジアクセス付きプランを選びました。ホテル代は高額でしたが、ホテル内でゆっくり過ごせたことで、子どもへの負担も減り、結果的に満足度の高い滞在になりました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '機内での子ども対策と初めての機内食' }] },
            { _type: 'block', children: [{ _type: 'span', text: '機内では、子ども用のAmazonタブレットやおやつを持参。さらに初めての機内食も楽しめたことで、ぐずることなく落ち着いて過ごすことができました。事前準備の大切さを実感しました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '親子で感じた海外旅行の刺激と学び' }] },
            { _type: 'block', children: [{ _type: 'span', text: '子どもにとっては「外国の人が多い場所に来た」という感覚だったようで、積極的にコミュニケーションを取る場面はありませんでした。一方で、親としては英語力不足を痛感する場面もあり、親子共々多くの刺激を受けた旅となりました。' }] }
        ]
    },
    {
        title: "貯めたポイントで沖縄へ！ANAマイル＆ホテルをお得に賢く貯めるコツ",
        excerpt: "ポイ活で貯まったポイント、どうしていますか？ 実はそのポイント、「みずほルート」を使えば驚くほどお得にANAマイルへ交換できるんです！賢い旅行術をご紹介します。",
        date: "2026-02-07T12:00:00Z",
        category: "マイル・ポイ活",
        imageUrl: "/2027.2.71.png",
        slug: "okinawa-ana-miles-tips",
        body: [
            { _type: 'block', children: [{ _type: 'span', text: 'ポイ活で貯まったポイント、どうしていますか？ 実はそのポイント、「みずほルート」を使えば驚くほどお得にANAマイルへ交換できるんです！\n今回は、ポイント交換から特典航空券の予約テクニックまで、賢い旅行術をご紹介します。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '高還元率！みずほルートでANAマイルへ' }] },
            { _type: 'block', children: [{ _type: 'span', text: '貯まったポイントをANAマイルに換えるなら、「みずほルート」が最強です。70%という高レートで交換可能です。' }] },
            { _type: 'block', children: [{ _type: 'span', text: '重要なお知らせ：このルートに必須の「みずほマイレージクラブカード/ANA」は、2026年1月に新規発行が終了しました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '特典航空券を確実にゲットする予約術' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'マイルは貯まりやすいものの、人気路線の空席は見つけづらいのが現実。確実に予約するための戦略がこちらです。' }] },
            { _type: 'block', children: [{ _type: 'span', text: '・国内線（沖縄など）： 予約開始日である搭乗の355日前に即座に予約を入れる。\n・国際線： ビジネスクラスは争奪戦。予約開始日を狙って試行錯誤あるのみ！\n・繁忙期・家族旅行： 全員分確保は至難の業。マイル予約と有償発券（現金購入）を組み合わせて柔軟に。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '🔍 鍵は「日々検索」！空席は変動する' }] },
            { _type: 'block', children: [{ _type: 'span', text: '特典航空券の空席状況は日々変わります。一度検索してダメでも、諦めずに何度も自分で手を動かして検索しましょう。\nキャンセルによって、前日や直前になって急に空席が出ることも珍しくありません。粘り強いチェックが成功への近道です。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'ホテルはマリオットポイントで！' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'マイルだけでなく、マリオットボンヴォイポイントへの移行もおすすめ。高級ホテルにお得に宿泊し、旅行の満足度をさらに上げましょう。' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'コツコツ貯めたポイントで、最高の旅行を楽しみましょう！' }] }
        ]
    },
    {
        title: "挫折も経験！初心者がポイ活で着実に稼ぐためのステップと注意点",
        excerpt: "マイルを貯めるために本格始動した私のポイ活。一歩ずつ進むことで着実に成果が出てきました。今回は、実際に取り組んできたステップと、手痛い失敗から学んだ教訓をお話しします。",
        date: "2026-01-27T12:00:00Z",
        category: "ポイ活",
        imageUrl: "/2026.1.271.png",
        slug: "poi-katsu-steps-and-failures",
        body: [
            { _type: 'block', children: [{ _type: 'span', text: 'マイルを貯めるために本格始動した私のポイ活。一歩ずつ進むことで着実に成果が出てきました。今回は、実際に取り組んできたステップと、手痛い失敗から学んだ教訓をお話しします。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. まずは王道の「モッピー」と「ハピタス」から' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'ポイ活を始めるにあたって、まず登録したのがモッピーとハピタスです。数あるサイトの中でも、案件の豊富さと使いやすさでこの2つを選びました。初心者でも始めやすかったのが、クレジットカードの発行です。普段使っているカードを、ポイントサイトを経由して作るだけで数千〜一万ポイント以上が手に入る。「こんなに簡単に貯まるんだ！」と、ポイ活の面白さを実感した入り口でした。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. 投資の知識を活かして「証券口座」を開設' }] },
            { _type: 'block', children: [{ _type: 'span', text: '次に取り組んだのが、証券口座の開設です。もともとNISAと絡めた口座開設は、同時にポイントがもらえ一石二鳥でした。「投資を始めてみたいけれど、きっかけがない」という方にも、ポイ活経由での開設は背中を押してくれる良いきっかけになるはずです。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. FX案件での手痛い失敗と教訓' }] },
            { _type: 'block', children: [{ _type: 'span', text: '最近挑戦しているのが、高還元で知られるFX案件です。多くの解説サイトを参考に挑んだのですが、ここで一つ大きな失敗をしてしまいました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '【失敗談：実質利益がわずか600円に……】' }] },
            { _type: 'block', children: [{ _type: 'span', text: '4,000ポイント獲得の案件に挑戦した際、参考にしていたサイトの解説画像と、実際のスマホ画面が微妙に違っていたのです。操作に戸惑い、焦ってしまった結果、取引でマイナス3,400円を出してしまいました。ポイントは入ったものの、実質の利益はわずか600円ほど。準備不足で挑んでしまった結果でした。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '失敗から学んだ「FX案件」の極意' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'この失敗を経て、現在は以下の3つを徹底しています。' }] },
            { _type: 'block', children: [{ _type: 'span', text: '・解説サイトをしっかり理解し、FXの仕組みを軽く学んでおく\n・取引手順を頭の中でイメージしてから案件を実践する' }] },
            { _type: 'block', children: [{ _type: 'span', text: '今は焦らず、冷静に案件に取り組めるようになりました。ポイ活は「正しく知ること」が、損をせずに利益を最大化する一番の近道だと痛感しています。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '最後に' }] },
            { _type: 'block', children: [{ _type: 'span', text: '失敗もありましたが、それも含めてポイ活の面白さだと感じています。皆さんも、まずはクレジットカードなどハードルの低いものから始めて、少しずつステップアップしてみてくださいね。' }] },
            // Keeping the HTML part simple for now, as Sanity PortableText needs mapping for raw HTML
            { _type: 'block', children: [{ _type: 'span', text: '👇 モッピーでお得にポイ活を始めよう！\nhttps://pc.moppy.jp/entry/invite.php?invite=TTFVA18b' }] }
        ]
    },
    {
        title: "私がマイルとポイ活に本気になった理由",
        excerpt: "日々仕事をして、「お金を貯めることこそが人生の正解」そう信じていた私。そんな私の価値観を変えたのは、沖縄旅行と愛犬との別れでした。",
        date: "2026-01-27T12:00:00Z",
        category: "マイル・ポイ活",
        imageUrl: "/blog-2026-01-27.png",
        slug: "reason-for-getting-serious",
        body: [
            { _type: 'block', children: [{ _type: 'span', text: '日々仕事をして、「お金を貯めることこそが人生の正解」そう信じていた私は、投資信託や株のクロス取引など、資産を増やす仕組みを学ぶことに没頭していました。そんな私の価値観を変えたのは、沖縄旅行と愛犬との別れでした。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '「車旅」から「飛行機旅」へ' }] },
            { _type: 'block', children: [{ _type: 'span', text: '愛犬を溺愛していた我が家の旅行は、常に「犬と一緒に移動できる車旅」が基本。しかし、上の子の小学校入学を前に、どうしても「若い頃に行った沖縄へ、もう一度行きたい」という思いが強まりました。意を決して、初めて愛犬を親に預け、飛行機で沖縄へ。そこで味わった空の旅と沖縄の景色は、家族にとって忘れられない最高の思い出になりました。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '突然の別れと、マイルとの出会い' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'しかし帰宅後すぐに、愛犬が病気で急死するという悲しい出来事が起こります。深い喪失感の中で、私は「人生で何が大切か」を考えました。愛犬への愛はもちろん、あの旅で感じた高揚感もまた、家族にとってかけがえのない財産だったのだと。「もう一度、家族で飛行機に乗って旅に出たい」そう願った時に出会ったのが、マイルという手段でした。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '投資の知識を、旅の原動力に' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'これまでは節約や投資ばかりに目を向けていましたが、マイルを攻略すれば、家計を守りながら何度でも旅に出られる。そう気づいてからは、以前から細々と続けていた「ポイ活」に本腰を入れ始めました。投資の勉強で培った「仕組みを理解する楽しさ」は、マイルを貯めるプロセスにもぴったり合致したのです。' }] },
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '最後に' }] },
            { _type: 'block', children: [{ _type: 'span', text: 'お金を貯めることは大切です。でも、そのお金や知識を使って「どんな経験をするか」はもっと大切。愛犬が教えてくれたこと、そして沖縄の空が教えてくれたことを胸に、私は今日もコツコツとマイルを貯めています。これからはこのブログを通して、私が学んだ効率的なポイ活やマイルの貯め方を発信していきたいと思います。' }] }
        ]
    }
];

async function run() {
    if (!client.config().token) {
        console.error("Error: SANITY_API_TOKEN is not set.");
        console.error("Please run `npx sanity login` and then run this script with `npx sanity exec scripts/migrate.js --with-user-token`");
        process.exit(1);
    }

    console.log("Starting data migration...");

    // Create categories
    const categories = {
        "マイル・ポイ活": { _type: 'category', title: 'マイル・ポイ活' },
        "ポイ活": { _type: 'category', title: 'ポイ活' }
    };
    const categoryIds = {};

    for (const [title, doc] of Object.entries(categories)) {
        // Check if category exists
        const existing = await client.fetch(`*[_type == "category" && title == $title][0]`, { title });
        if (existing) {
            console.log(`Category "${title}" already exists.`);
            categoryIds[title] = existing._id;
        } else {
            const created = await client.create(doc);
            console.log(`Created category: ${created.title}`);
            categoryIds[title] = created._id;
        }
    }

    // Import posts
    for (const post of blogPosts) {
        console.log(`Processing post: ${post.title}`);

        let imageAsset = null;
        if (post.imageUrl) {
            const imagePath = path.join(process.cwd(), 'public', post.imageUrl);
            if (fs.existsSync(imagePath)) {
                console.log(`Uploading image: ${imagePath}`);
                imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
                    filename: basename(imagePath)
                });
            } else {
                console.log(`Image not found: ${imagePath}`);
            }
        }

        const sanityPost = {
            _type: 'post',
            title: post.title,
            slug: { _type: 'slug', current: post.slug },
            excerpt: post.excerpt,
            publishedAt: post.date,
            author: "はるふー",
            categories: post.category ? [{
                _type: 'reference',
                _ref: categoryIds[post.category],
                _key: Math.random().toString(36).substring(7)
            }] : [],
            mainImage: imageAsset ? {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id
                }
            } : undefined,
            body: post.body
        };

        const existingPost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: post.slug });
        if (existingPost) {
            console.log(`Post "${post.title}" already exists. Updating...`);
            await client.patch(existingPost._id).set(sanityPost).commit();
        } else {
            await client.create(sanityPost);
            console.log(`Created post: ${post.title}`);
        }
    }

    console.log("Migration completed successfully!");
}

run().catch(console.error);
