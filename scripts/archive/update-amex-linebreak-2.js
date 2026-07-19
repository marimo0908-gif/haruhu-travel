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
            if (text.includes('以下のような書類の提出を求められます。')) {
                // Insert a newline before "以下のような..."
                // If it's at the start of the block, we might want to split it or just add \n
                // The user said "の前で開業（改行）"
                return {
                    ...block,
                    children: [{
                        ...block.children[0],
                        text: text.replace('以下のような', '\n以下のような')
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
