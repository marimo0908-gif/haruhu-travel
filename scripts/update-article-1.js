const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

const slug = 'poi-katsu-steps-and-failures';

const newBody = [
    { _type: 'block', _key: 'b1', children: [{ _type: 'span', _key: 's1', text: 'マイルを貯めるために本格始動した私のポイ活。\n今回は、実際に取り組んできたステップと、手痛い失敗から学んだ教訓をお話しします。' }] },
    { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '1. まずは王道の「モッピー」と「ハピタス」から' }] },
    { _type: 'block', _key: 'b3', children: [{ _type: 'span', _key: 's3', text: 'ポイ活を始めるにあたって、まず登録したのがモッピーとハピタスです。\n案件の豊富さと使いやすさでこの2つを選びました。\n初心者の私でも始めやすかったのが、クレジットカードの発行です。\n普段使っているカードを、ポイントサイトを経由して作るだけで数千〜１万ポイント以上が手に入る。\n「こんなに簡単に貯まるんだ！」と、ポイ活の面白さを実感した入り口でした。\nただし、世間で言われているのを参考に、多くても月２枚程度の発行にとどめております。' }] },
    { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '2. 投資の知識を活かして「証券口座」を開設' }] },
    { _type: 'block', _key: 'b5', children: [{ _type: 'span', _key: 's5', text: '次に取り組んだのが、証券口座の開設です。\nもともとNISAと絡めた口座開設は、同時にポイントがもらえ一石二鳥でした。\n「投資を始めてみたいけれど、きっかけがない」という方にも、ポイ活経由での開設は背中を押してくれる良いきっかけになるはずです。' }] },
    { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: '3. FX案件での手痛い失敗と教訓' }] },
    { _type: 'block', _key: 'b7', children: [{ _type: 'span', _key: 's7', text: '次に挑戦したのが、高還元で知られるFX案件です。\n解説サイトを参考に挑んだのですが、ここで一つ大きな失敗をしてしまいました。' }] },
    { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: '【失敗談：実質利益がわずか600円に……】' }] },
    { _type: 'block', _key: 'b9', children: [{ _type: 'span', _key: 's9', text: '4,000ポイント獲得の案件に挑戦した際、参考にしていたサイトの解説画像と、実際のスマホ画面が微妙に違っていたのです。\n操作に戸惑い、焦ってしまった結果、取引でマイナス3,400円を出してしまいました。\nポイントは入ったものの、実質の利益はわずか600円ほど。\n準備不足で挑んでしまった結果でした。' }] },
    { _type: 'block', _key: 'b10', style: 'h2', children: [{ _type: 'span', _key: 's10', text: '失敗から学んだ「FX案件」の極意' }] },
    { _type: 'block', _key: 'b11', children: [{ _type: 'span', _key: 's11', text: 'この失敗を経て、3つを徹底しています。\n・FXの仕組みは軽く、解説サイトをしっかり理解する\n・取引手順を頭の中でイメージしてから案件を実践する' }] },
    { _type: 'block', _key: 'b12', children: [{ _type: 'span', _key: 's12', text: '今は焦らず、冷静に案件に取り組めるようになりました\nポイ活は「正しく知ること」が、損をせずに利益を最大化する一番の近道だと痛感しています。' }] },
    { _type: 'block', _key: 'b13', style: 'h2', children: [{ _type: 'span', _key: 's13', text: '最後に' }] },
    { _type: 'block', _key: 'b14', children: [{ _type: 'span', _key: 's14', text: '失敗もありましたが、それも含めてポイ活の面白さだと感じています。\nまずはクレジットカードなどハードルの低いものから始めて、少しずつステップアップしてみてくださいね。' }] },
];

async function run() {
    if (!client.config().token) {
        console.error('Error: SANITY_API_TOKEN is not set.');
        process.exit(1);
    }

    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
    if (!post) {
        console.error(`Post with slug "${slug}" not found.`);
        process.exit(1);
    }

    console.log(`Updating post: ${post.title}`);
    await client.patch(post._id).set({ body: newBody }).commit();
    console.log('✅ Article 1 updated successfully!');
}

run().catch(console.error);
