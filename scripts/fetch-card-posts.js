const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

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
    console.log('Fetching all posts...');
    const posts = await client.fetch('*[_type == "post"]{ title, slug, body }');
    
    console.log(`Found ${posts.length} posts.`);
    posts.forEach(post => {
        console.log(`\nPost: ${post.title} (slug: ${post.slug?.current})`);
        
        // Scan body for affiliateLink or references to cards
        if (post.body) {
            post.body.forEach(block => {
                if (block._type === 'affiliateLink') {
                    console.log(`  - Affiliate Link block:`);
                    console.log(`    Title: ${block.title}`);
                    console.log(`    Description: ${block.description}`);
                    console.log(`    Points: ${JSON.stringify(block.points)}`);
                    console.log(`    Badge: ${block.badgeText}`);
                }
                
                // Scan regular block text for credit card keywords
                if (block._type === 'block' && block.children) {
                    const text = block.children.map(c => c.text).join('');
                    if (text.match(/(アメックス|マリオット|Marriott|Amex|カード|ゴールド)/i)) {
                        // Print snippet of card mention
                        if (text.length > 100) {
                            console.log(`  - Mention: "${text.substring(0, 100)}..."`);
                        } else {
                            console.log(`  - Mention: "${text}"`);
                        }
                    }
                }
            });
        }
    });
}

run().catch(console.error);
