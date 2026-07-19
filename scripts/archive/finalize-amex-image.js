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
    console.log(`Checking if file exists: ${imagePath}`);
    if (!fs.existsSync(imagePath)) {
        throw new Error('File not found!');
    }

    console.log('Uploading new main image...');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'amex_warning_cat_hero.png',
        contentType: 'image/png'
    });
    console.log(`Image uploaded successfully. Asset ID: ${imageAsset._id}`);

    console.log('Fetching post...');
    const post = await client.fetch('*[_type == "post" && slug.current == "amex-warning"][0]');
    
    if (!post) {
        throw new Error('Post "amex-warning" not found!');
    }

    console.log(`Patching post ${post._id} mainImage...`);
    const result = await client.patch(post._id)
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
    
    console.log('Post updated successfully!', result._id);
}

run().catch(err => {
    console.error('FAILED:', err);
    process.exit(1);
});
