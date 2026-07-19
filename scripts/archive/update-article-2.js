const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

const slug = 'reason-for-getting-serious';

const newBody = [
    { _type: 'block', _key: 'b1', children: [{ _type: 'span', _key: 's1', text: '日々仕事をして、「お金を貯めることこそが人生の正解」そう信じていた私は、投資信託や株のクロス取引など、資産を増やす仕組みを学ぶことに没頭していました。\nそんな私の価値観を変えたのは、沖縄旅行と愛犬との別れでした。' }] },
    { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '1.「車旅」から「飛行機旅」へ' }] },
    { _type: 'block', _key: 'b3', children: [{ _type: 'span', _key: 's3', text: '愛犬を溺愛していた我が家の旅行は、常に「犬と一緒に移動できる車旅」が基本。\nしかし、上の子の小学校入学を前に、どうしても「若い頃に行った沖縄へ、もう一度行きたい」という思いが強まりました。\n意を決して、初めて愛犬を親に預け、飛行機で沖縄へ。\nそこで味わった空の旅と沖縄の景色は、家族にとって忘れられない最高の思い出になりました。' }] },
    { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '2.突然の別れと、マイルとの出会い' }] },
    { _type: 'block', _key: 'b5', children: [{ _type: 'span', _key: 's5', text: 'しかし帰宅後すぐに、愛犬が病気で急死するという悲しい出来事が起こります。\n深い喪失感の中で、私は「人生で何が大切か」を考えました。\n愛犬への愛はもちろん、あの旅で感じた高揚感もまた、家族にとってかけがえのない財産だったのだと。\n「もう一度、家族で飛行機に乗って旅に出たい」そう願った時に出会ったのが、マイルという手段でした。' }] },
    { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: '3.投資の知識を、旅の原動力に' }] },
    { _type: 'block', _key: 'b7', children: [{ _type: 'span', _key: 's7', text: 'これまでは節約や投資ばかりに目を向けていましたが、マイルを攻略すれば、家計を守りながら何度でも旅に出られる。\nそう気づいてからは、以前から細々と続けていた「ポイ活」に本腰を入れ始めました。\n投資の勉強で培った「仕組みを理解する楽しさ」は、マイルを貯めるプロセスにもぴったり合致したのです。' }] },
    { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: '最後に' }] },
    { _type: 'block', _key: 'b9', children: [{ _type: 'span', _key: 's9', text: 'お金を貯めることは大切です。\nでも、そのお金や知識を使って「どんな経験をするか」はもっと大切。\n愛犬が教えてくれたこと、そして沖縄の空が教えてくれたことを胸に、私は今日もコツコツとマイルを貯めています。\nこれからはこのブログを通して、私が学んだ効率的なポイ活やマイルの貯め方を発信していきたいと思います。' }] },
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
    console.log('✅ Article 2 updated successfully!');
}

run().catch(console.error);
