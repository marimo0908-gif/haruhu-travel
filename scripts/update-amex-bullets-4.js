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
    
    const targets = [
        'カードが突然使えなくなる',
        'アメックスから電話が来る',
        '書類提出しないと復活しない',
        '最悪の場合は強制解約'
    ];

    for (const block of post.body) {
        if (block._type === 'block' && block.children && block.children[0] && block.children[0].text) {
            let text = block.children[0].text;
            
            // Just in case they already have '・'
            const cleanText = text.replace(/^・/, '');
            
            if (targets.includes(cleanText)) {
                combinedLines.push(`・${cleanText}`);
                if (combinedLines.length === 4) {
                    newBody.push({
                        ...block,
                        listItem: undefined,
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
