const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    console.log('Fetching post...');
    const post = await client.fetch('*[_type == "post" && slug.current == "travel-summary-2026"][0]');
    
    if (!post) {
        console.log('Post not found');
        return;
    }

    const newBody = post.body.map(block => {
        if (block._type === 'affiliateLink' && block.title.includes('アメリカン・エキスプレス・ゴールド・プリファード')) {
            return {
                ...block,
                relatedArticleTitle: 'カード発行前に読みたい記事',
                relatedArticleHref: '/blog/amex-warning'
            };
        }
        return block;
    });

    console.log('Patching post...');
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
