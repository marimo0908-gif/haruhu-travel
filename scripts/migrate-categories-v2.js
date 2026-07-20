const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    console.log("Starting migration...");

    // 1. Rename existing "宿泊" category to "宿泊レビュー"
    // ID: MBFcgcInpGJJp5FcfvjA4l
    await client.patch('MBFcgcInpGJJp5FcfvjA4l')
        .set({ title: '宿泊レビュー' })
        .commit();
    console.log("Renamed '宿泊' to '宿泊レビュー'");

    const stayReviewId = 'MBFcgcInpGJJp5FcfvjA4l';
    const milePointsId = 'SlhvY9im97XlCzZ6PP52bf'; // "マイル・ポイ活"

    // 2. Assign "宿泊レビュー" to Sheraton and Moxy posts
    const hotelPostIds = [
        '1bjAmhTPC266c62IspxOx3', // モクシー東京錦糸町
        'GZnUc19l6f4Og5dzkuFP1M'  // シェラトン・グランデ・トーキョーベイ
    ];

    for (const postId of hotelPostIds) {
        await client.patch(postId)
            .set({
                categories: [{
                    _type: 'reference',
                    _ref: stayReviewId,
                    _key: Math.random().toString(36).substring(7)
                }]
            })
            .commit();
        console.log(`Updated post ${postId} to '宿泊レビュー'`);
    }

    // 3. Move other posts from old categories to "マイル・ポイ活"
    const oldCategoryIds = [
        'JRIowonhkHAgqqci2RFyeI', // ポイ活
        'vset6CQloMcqF0AzIoDaRe'  // ポイント・ポイ活
    ];

    for (const oldId of oldCategoryIds) {
        const postsToMove = await client.fetch(`*[_type == "post" && references($id)]`, { id: oldId });
        console.log(`Moving ${postsToMove.length} posts from category ${oldId} to 'マイル・ポイ活'`);
        
        for (const post of postsToMove) {
            await client.patch(post._id)
                .set({
                    categories: [{
                        _type: 'reference',
                        _ref: milePointsId,
                        _key: Math.random().toString(36).substring(7)
                    }]
                })
                .commit();
        }
        
        // Delete old category
        await client.delete(oldId);
        console.log(`Deleted old category ${oldId}`);
    }

    console.log("Migration completed successfully!");
}

run().catch(console.error);
