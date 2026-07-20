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
    console.log('Fetching all posts to scan for old card information...');
    const posts = await client.fetch('*[_type == "post"]{ title, slug, body }');
    
    const targets = [
        { regex: /150\s*万/g, label: '150万' },
        { regex: /400\s*万.*プラチナ/gi, label: '400万でプラチナ' },
        { regex: /49500|49,500/g, label: '旧年会費 49,500円' },
        { regex: /マリオット.*150/g, label: 'マリオット150万' }
    ];
    
    let foundIssues = [];
    
    posts.forEach(post => {
        if (!post.body) return;
        
        post.body.forEach((block, blockIndex) => {
            // Check text in regular block
            if (block._type === 'block' && block.children) {
                const text = block.children.map(c => c.text).join('');
                targets.forEach(target => {
                    if (text.match(target.regex)) {
                        foundIssues.push({
                            title: post.title,
                            slug: post.slug?.current,
                            type: 'text_block',
                            label: target.label,
                            text: text,
                            blockIndex: blockIndex
                        });
                    }
                });
            }
            
            // Check affiliateLink fields
            if (block._type === 'affiliateLink') {
                const fields = [block.description, ...(block.points || [])];
                fields.forEach(field => {
                    if (!field) return;
                    targets.forEach(target => {
                        if (field.match(target.regex)) {
                            foundIssues.push({
                                title: post.title,
                                slug: post.slug?.current,
                                type: 'affiliate_link',
                                label: target.label,
                                text: field,
                                blockIndex: blockIndex
                            });
                        }
                    });
                });
            }
        });
    });
    
    if (foundIssues.length === 0) {
        console.log('No outdated card information found in Sanity posts!');
    } else {
        console.log(`\nFound ${foundIssues.length} potential outdated references:\n`);
        foundIssues.forEach((issue, index) => {
            console.log(`[${index + 1}] Post: ${issue.title} (slug: ${issue.slug})`);
            console.log(`    Location: ${issue.type} (block ${issue.blockIndex})`);
            console.log(`    Trigger: ${issue.label}`);
            console.log(`    Text: "${issue.text}"\n`);
        });
    }
}

run().catch(console.error);
