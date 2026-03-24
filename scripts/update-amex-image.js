const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    const imagePath = '/Users/aiharanoriko/Desktop/名称未設定のデザイン.png';
    console.log('Uploading new main image...');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'amex_warning_new_hero.png'
    });

    console.log('Fetching post...');
    const post = await client.fetch('*[_type == "post" && slug.current == "amex-warning"][0]');
    
    if (!post) {
        console.log('Post not found');
        return;
    }

    console.log('Patching post mainImage...');
    await client.patch(post._id)
        .set({
            mainImage: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id
                }
            }
        })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
