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
            if (text.includes('ポイ活目的であっても、常識の範囲内での利用を心がけるのが長く付き合うコツです。')) {
                return {
                    ...block,
                    children: [{
                        ...block.children[0],
                        text: text.replace('ポイ活目的', '\nポイ活目的')
                    }]
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
