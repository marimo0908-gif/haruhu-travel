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
    console.log('Fetching all posts to scan for card keywords...');
    const posts = await client.fetch('*[_type == "post"]{ title, slug, body }');
    
    // We want to find any text mentioning年会費, 無料宿泊, プラチナ, or points
    const keywords = ['年会費', '無料宿泊', 'プラチナ', 'ポイント', 'マイル', 'アメックス', 'ゴールド'];
    
    posts.forEach(post => {
        if (!post.body) return;
        
        let found = false;
        post.body.forEach((block, blockIndex) => {
            if (block._type === 'block' && block.children) {
                const text = block.children.map(c => c.text).join('');
                
                // If the block contains any keyword, print it
                const matched = keywords.filter(kw => text.includes(kw));
                if (matched.length >= 2) { // Print if it matches at least 2 keywords to filter out generic posts
                    if (!found) {
                        console.log(`\nPost: ${post.title} (slug: ${post.slug?.current})`);
                        found = true;
                    }
                    console.log(`  - Block ${blockIndex} (Matches: ${matched.join(', ')}):`);
                    console.log(`    "${text.trim()}"`);
                }
            }
        });
    });
}

run().catch(console.error);
