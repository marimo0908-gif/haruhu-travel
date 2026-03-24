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
        '急な高額決済',
        '利用額の急増（普段数万円の人が急に数十万使うなど）',
        '支払い遅延',
        '決済修行（ポイントや入会キャンペーン目的の不自然な決済）'
    ];

    for (const block of post.body) {
        if (block._type === 'block' && block.children && block.children[0] && block.children[0].text) {
            let text = block.children[0].text;
            
            // Handle cases where the text already starts with '・'
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
