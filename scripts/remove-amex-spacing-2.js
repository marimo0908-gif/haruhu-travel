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

    const newBody = [];
    let skipNextIfEmpty = false;

    // We want to remove the empty block that is immediately preceding "これらを提出し、..."
    // Let's iterate backwards or just look ahead
    for (let i = 0; i < post.body.length; i++) {
        const block = post.body[i];
        
        // Check if the current block is empty
        const isEmptyBlock = block._type === 'block' && block.children && block.children.length === 1 && block.children[0].text === '';

        // If it's an empty block, look at the next block to see if it's the target string
        if (isEmptyBlock && i + 1 < post.body.length) {
            const nextBlock = post.body[i + 1];
            if (nextBlock._type === 'block' && nextBlock.children && nextBlock.children.length > 0 && nextBlock.children[0].text && nextBlock.children[0].text.includes('これらを提出し、審査を通過するまではカードの利用が制限されることがあります。')) {
                // Skip adding this empty block
                console.log('Found empty block before target, removing...');
                continue;
            }
        }
        
        newBody.push(block);
    }

    console.log(`Patching post... Old blocks: ${post.body.length}, New blocks: ${newBody.length}`);
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
