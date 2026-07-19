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
    let combinedLines = [];
    let isCombining = false;

    for (const block of post.body) {
        if (block._type === 'block' && block.children && block.children[0] && block.children[0].text) {
            const text = block.children[0].text;
            if (['✔ 通帳の刑の正体', '✔ 発動する条件', '✔ 回避するコツ'].includes(text)) {
                combinedLines.push(text);
                if (combinedLines.length === 3) {
                    newBody.push({
                        ...block,
                        children: [{ _type: 'span', text: combinedLines.join('\n') }]
                    });
                }
            } else {
                newBody.push(block);
            }
        } else {
            newBody.push(block);
        }
    }

    console.log(`Patching post... Old blocks: ${post.body.length}, New blocks: ${newBody.length}`);
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
