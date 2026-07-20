const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    console.log("Fetching post...");
    const existingPost = await client.fetch(`*[_type == "post" && slug.current == "singapore-vlog-marriott-amex"][0]`);
    if (!existingPost) {
        console.error("Post not found");
        return;
    }

    const imagePath = '/Users/aiharanoriko/.gemini/antigravity/brain/5a9b1f7e-060d-48cd-9f76-d14d880bf6d0/media__1778981405270.png';
    console.log("Uploading image...");
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'singapore_vlog_top.png'
    });

    console.log("Patching post with main image...");
    await client.patch(existingPost._id).set({
        mainImage: {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: imageAsset._id
            }
        }
    }).commit();

    console.log("Success!");
}

run().catch(console.error);
