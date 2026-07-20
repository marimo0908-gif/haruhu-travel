const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Read token from .env.local if not set in environment
let token = process.env.SANITY_API_TOKEN;
if (!token && fs.existsSync(path.join(process.cwd(), '.env.local'))) {
    const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = envFile.match(/^SANITY_API_TOKEN=["']?([^"'\s]+)["']?$/m);
    if (match) token = match[1];
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: token,
});

async function run() {
    const imagePath = path.join(process.cwd(), 'public/images/fancrew-campaign.png');
    if (!fs.existsSync(imagePath)) {
        console.error(`Error: Local image not found at ${imagePath}`);
        return;
    }

    console.log('Uploading new campaign image to Sanity...');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
        filename: 'fancrew-campaign-july.png'
    });
    console.log(`Uploaded image asset ID: ${imageAsset._id}`);

    console.log('Fetching fan-kuru-guide post...');
    const post = await client.fetch('*[_type == "post" && slug.current == "fan-kuru-guide"][0]');
    
    if (!post) {
        console.error('Error: Post "fan-kuru-guide" not found.');
        return;
    }

    // Find the affiliateLink block for "ファンくる" and update it
    let updated = false;
    const newBody = post.body.map(block => {
        if (block._type === 'affiliateLink' && block.title === 'ファンくる') {
            console.log('Found affiliateLink block for "ファンくる". Updating campaignImage...');
            updated = true;
            return {
                ...block,
                campaignImage: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id
                    }
                }
            };
        }
        return block;
    });

    if (!updated) {
        console.error('Error: Could not find "ファンくる" affiliateLink block in the post body.');
        return;
    }

    console.log('Patching post body in Sanity...');
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
