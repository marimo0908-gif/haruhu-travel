const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Manual env parsing
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim().replace(/^"(.*)"$/, '$1');
    }
});

const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    token: env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2023-05-03',
});

async function updatePost() {
    try {
        // 1. Find the post
        const post = await client.fetch('*[_type == "post" && title match "2026年の旅実績*"][0]');
        if (!post) {
            console.error('Post not found');
            return;
        }
        console.log('Found post:', post.title, post._id);

        // 2. Upload the campaign image
        const imagePath = path.join(process.cwd(), 'public/images/fancrew-campaign.png');
        const imageData = fs.readFileSync(imagePath);
        const asset = await client.assets.upload('image', imageData, {
            filename: 'fancrew-campaign.png'
        });
        console.log('Uploaded image asset:', asset._id);

        // 3. Prepare the monetization blocks
        // We'll insert these at the end of the post content (body)
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
            campaignImage: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: asset._id
                }
            }
        };

        const amexBlock = {
            _type: 'affiliateLink',
            _key: 'amex_' + Math.random().toString(36).substring(2, 9),
            title: 'アメリカン・エキスプレス・ゴールド・プリファード・カード',
            description: '年間のご利用金額に応じて継続特典（無料宿泊）がもらえる、ポイ活・マイル派に大人気のゴールドカード。紹介プログラム専用の入会特典をご案内可能です。',
            href: '/contact?subject=AmexGoldPreferred',
            badgeText: '紹介プログラム限定特典',
            points: [
                '年間200万円決済でフリー・ステイ・ギフト（無料宿泊）',
                'メンバーシップ・リワード・プラスが自動付帯でマイル高還元',
                '日常の決済をこれ1枚に集約して特典を最大化'
            ],
            buttonText: '紹介URLをメールで受け取る'
        };

        // 4. Update the post
        // We add them as separate blocks at the end of the body array
        // We also set isSponsored: true and unset the accidental 'content' field
        await client
            .patch(post._id)
            .set({ isSponsored: true })
            .append('body', [
                {
                    _type: 'block',
                    _key: 'header_monetization_' + Math.random().toString(36).substring(2, 9),
                    children: [{ _type: 'span', text: ' お得な紹介プログラムのご案内 ', marks: ['strong'] }],
                    markDefs: [],
                    style: 'h2'
                },
                fancrewBlock,
                amexBlock
            ])
            .unset(['content'])
            .commit();

        console.log('Post updated successfully with monetization blocks!');
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

updatePost();
