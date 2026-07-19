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
    const post = await client.fetch('*[_type == "post" && slug.current == "amex-warning"][0]');
    
    if (!post) {
        console.log('Post not found');
        return;
    }

    const newBody = post.body.map(block => {
        if (block._type === 'block' && block.children && block.children[0] && block.children[0].text) {
            const text = block.children[0].text;
            if (['通帳コピー提出', '残高証明', '収入証明'].includes(text) || text.startsWith('・通帳コピー提出') || text.startsWith('・残高証明') || text.startsWith('・収入証明')) {
                // Remove list format and add Japanese bullet point just to be safe
                const baseText = text.replace(/^・/, '');
                return {
                    ...block,
                    listItem: undefined,
                    children: [{ _type: 'span', text: `・${baseText}` }]
                };
            }
        }
        return block;
    });

    console.log(`Patching post...`);
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
