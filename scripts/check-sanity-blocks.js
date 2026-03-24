const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-03-01',
});

async function checkBody() {
    const post = await client.fetch('*[_type == "post" && slug.current == "travel-summary-2026"][0]');
    if (!post) {
        console.log('Post not found');
        return;
    }
    console.log('Post body blocks:');
    post.body.forEach((block, index) => {
        if (block._type === 'affiliateLink') {
            console.log(`${index}: ${block._type} - ${block.title} (Key: ${block._key})`);
        } else if (block._type === 'block') {
            const text = block.children ? block.children.map(c => c.text).join('') : '';
            console.log(`${index}: ${block._type} [${block.style || 'normal'}] - ${text.substring(0, 30)}...`);
        } else {
            console.log(`${index}: ${block._type}`);
        }
    });
}

checkBody().catch(console.error);
