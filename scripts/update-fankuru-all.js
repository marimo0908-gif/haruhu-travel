const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Read token from note/haruhu-travel/.env.local (which has the correct credentials)
let token = process.env.SANITY_API_TOKEN;
const projectEnvPath = '/Users/aiharanoriko/note/haruhu-travel/.env.local';
if (!token && fs.existsSync(projectEnvPath)) {
    const envFile = fs.readFileSync(projectEnvPath, 'utf8');
    const match = envFile.match(/^SANITY_API_TOKEN=["']?([^"'\s]+)["']?$/m);
    if (match) token = match[1];
}

if (!token) {
    console.error("Error: SANITY_API_TOKEN not found.");
    process.exit(1);
}

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: token,
});

async function run() {
    const targetAssetId = 'image-5c9aaa0292f35bb3086525fe25814cfa969eb2b8-1272x644-png';
    
    console.log('Fetching posts containing "ファンくる" affiliateLink...');
    const posts = await client.fetch('*[_type == "post" && count(body[_type == "affiliateLink" && title == "ファンくる"]) > 0]');
    
    console.log(`Found ${posts.length} posts to update.`);
    
    for (const post of posts) {
        console.log(`Updating post: ${post.title} (${post.slug.current})`);
        
        const newBody = post.body.map(block => {
            if (block._type === 'affiliateLink' && block.title === 'ファンくる') {
                return {
                    ...block,
                    campaignImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: targetAssetId
                        }
                    }
                };
            }
            return block;
        });
        
        await client.patch(post._id)
            .set({ body: newBody })
            .commit();
            
        console.log(`Updated post: ${post.title}`);
    }
    
    console.log('All posts updated successfully!');
}

run().catch(console.error);
