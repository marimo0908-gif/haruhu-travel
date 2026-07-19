const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    const imagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/e132f281-a078-4de2-bae9-6de759bf10d2/travel_summary_2026_hero_1773956321195.png';
    console.log('Uploading main image...');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'travel_summary_2026_hero.png'
    });

    const categoryId = 'SlhvY9im97XlCzZ6PP52bf'; // マイル・ポイ活

    const body = [
        {
            _type: 'block',
            children: [{ _type: 'span', text: '2026年は、マイルやポイントを最大限に活用して、国内外さまざまな場所へ旅行する計画を立てました。\n実際に行った旅と、これから予定している旅を月ごとにまとめてみます。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '1月｜名古屋旅行（ANA減額マイルキャンペーン活用）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '2026年の旅は名古屋からスタート。ANAの減額マイルキャンペーンを利用してお得にフライトを確保しました。\n今回の目的は、\n・レゴランド\n・中部国際空港のフライトパーク\nと、子どもも楽しめる内容に。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '宿泊はヒルトンホテルを利用。ヒルトン・オーナーズ アメリカン・エキスプレス・カードの特典で、本人＋同伴者1名の朝食が無料になり、かなりお得に滞在できました。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'さらに別日で、マリオットボンヴォイのキャンペーンを活用し、15,000ポイント追加でウェスティン横浜に宿泊。実質の手出しは15,000ポイントでした。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '2月｜カード継続特典でウェスティン横浜' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'アメックス・ゴールド・プリファードカードの継続特典（年間200万円決済）を達成し、無料宿泊特典を獲得。\nこの特典を利用して、再びウェスティン横浜に宿泊しました。カード決済をうまく活用することで、高級ホテル宿泊が実現できるのは大きなメリット。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '3月｜ポイント宿泊で宇都宮へ' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'マリオットボンヴォイの1月ウエスティン横浜と同キャンペーンを活用し、フェアフィールド・バイ・マリオット栃木宇都宮に宿泊。こちらは追加ポイントなしで宿泊でき、実質手出しなし。\n地方のフェアフィールドはコスパが非常に良く、気軽な旅行に最適です。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '5月｜シンガポール旅行（アメックスポイント活用）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ゴールデンウィークは海外へ。アメックスポイントをシンガポール航空のマイルに交換して、シンガポール旅行を予定しています。\nアメックスポイントは移行先が豊富なので、使い道としては非常に優秀。特に海外特典航空券との相性は抜群です。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '6月｜石垣島旅行（ANA＋ユナイテッド併用）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '6月は石垣島へ。\n・ANAマイル\n・ユナイテッド航空マイル\nを組み合わせて発券予定です。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ユナイテッドのマイルは、モッピーで貯めたポイントをマリオットボンヴォイポイントに交換。\nキャンペーンでボーナスマイルが付く期間だったのでお得に交換できました。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'ANAマイルについては、\n・モッピー\n・ファンくる\n・アメックスポイント（等価交換）\nと、複数ルートで効率よく貯めています。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '8月｜ハワイ旅行（ANAマイル）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '夏休みは定番のハワイへ。ANAマイルを使って特典航空券を確保予定です。\n行きはエコノミーにカウチシートを追加、帰りはプレエコを発券。\n繁忙期のハワイは現金だと高額になりがちなので、マイルの価値を最も実感できる使い方の一つです。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '9月｜タイ旅行＋発券テクニック' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'シルバーウィークはタイへ。もともとはマイルで発券していましたが、3泊と短かったため→ 有償航空券を組み合わせて5泊に延長。\nここで重要なのがANAのルール：「国際線航空券に国内線を1区間追加できる」\nこの仕組みを利用して、\n・タイ旅行の帰国便（有償）\n＋\n・10月の沖縄行き（国内線）\nを同時に発券しています。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '10月｜沖縄旅行（9月発券の延長）' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '10月の3連休は沖縄へ。\n・往路：9月タイ旅行の有償航空券に含めて発券済み\n・復路：ANAマイルで3人分確保\n・子ども1人は有償発券\n発券を分けることで、マイル不足でも柔軟に対応できました。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '12月｜ベトナム＆シンガポール年越し' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '年末は少し大きめの旅行。\nまずは、ANAマイルでベトナム（ホーチミン）へビジネスクラス発券。空席開放日ではないタイミングでも発券できました。\nただし、家族4人中2人分は特典が取れず、→ 有償航空券も組み合わせて対応。' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'その後は、ANAマイルでベトナム → シンガポールへ移動し、年越しを予定しています。' }]
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: '最後に｜2026年は「組み合わせ」が鍵' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '2026年の旅行計画を通して感じたポイントは以下です。\n・マイルは1種類に依存しない（ANA＋ユナイテッド＋シンガポールなど）\n・ポイントサイト（モッピー・ファンくる）を活用する\n・クレジットカード特典を最大化する\n・有償と特典を組み合わせて柔軟に発券する\n・ANAのルール（国内線追加など）を理解する' }]
        },
        {
            _type: 'block',
            children: [{ _type: 'span', text: '単純にマイルを貯めるだけでなく、「どう組み合わせるか」で旅の自由度が大きく変わると実感した1年になりそうです。\nこれからマイルやポイントを貯めたい方の参考になれば嬉しいです。' }]
        }
    ];

    const postDoc = {
        _type: 'post',
        title: '2026年の旅実績と今後の予定まとめ｜マイルとポイントをフル活用！',
        slug: { _type: 'slug', current: 'travel-summary-2026' },
        excerpt: '2026年はマイルやポイントを最大限に活用して、名古屋、石垣、ハワイ、そしてシンガポール・ベトナムへの年越し旅まで、計画的に旅を楽しみます。',
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
        isSponsored: false // No affiliate links in this list, but "moppy" mentioned. 
        // Our auto-detection will pick up "moppy" and show PR badge anyway if needed.
    };

    console.log('Creating post in Sanity...');
    const result = await client.create(postDoc);
    console.log('Post created successfully:', result._id);
}

run().catch(console.error);
