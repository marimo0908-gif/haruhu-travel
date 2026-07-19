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

    // Process the body to replace the bullet list in the introduction with ✔
    const newBody = post.body.map(block => {
        if (block._type === 'block' && block.listItem === 'bullet') {
            const text = block.children[0].text;
            if (['通帳の刑の正体', '発動する条件', '回避するコツ'].includes(text)) {
                return {
                    ...block,
                    listItem: undefined,
                    children: [{ _type: 'span', text: `✔ ${text}` }]
                };
            }
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
