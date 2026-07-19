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

    let newBody = [];

    for (const block of post.body) {
        if (block._type === 'block' && block.children && block.children[0] && block.children[0].text) {
            const text = block.children[0].text;
            if (text.includes('これらを提出し、審査を通過するまではカードの利用が制限されることがあります。')) {
                // Add an empty block before this one
                newBody.push({
                    _type: 'block',
                    style: 'normal',
                    _key: 'empty_space_' + Math.random().toString(36).substring(2, 9),
                    children: [{ _type: 'span', text: '', _key: 'empty_span_' + Math.random().toString(36).substring(2, 9) }]
                });
            }
        }
        newBody.push(block);
    }

    console.log(`Patching post...`);
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
