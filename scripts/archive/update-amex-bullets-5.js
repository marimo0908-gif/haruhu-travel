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
        '利用額は徐々に増やす',
        '支払い遅延ゼロを徹底',
        '高額決済は事前連絡する',
        '無理な決済修行はNG'
    ];

    for (const block of post.body) {
        // Handle list merging
        if (block._type === 'block' && block.children && block.children.length > 0 && block.children[0].text) {
            let text = block.children[0].text;
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
                continue;
            }
        }

        // Handle the specific paragraph spacing and line break
        if (block._type === 'block' && block.children) {
            const hasTokuni = block.children.some(span => span.text && span.text.includes('特に'));
            const hasRenraku = block.children.some(span => span.text && span.text.includes('事前連絡'));
            
            if (hasTokuni && hasRenraku) {
                // Add an empty block for extra top margin
                newBody.push({
                    _type: 'block',
                    style: 'normal',
                    _key: 'empty_space_' + Math.random().toString(36).substring(2, 9),
                    children: [{ _type: 'span', text: '', _key: 'empty_span_' + Math.random().toString(36).substring(2, 9) }]
                });

                // Add the line break after "らしいです。"
                const modifiedChildren = block.children.map(span => {
                    if (span.text && span.text.includes('らしいです。')) {
                        return {
                            ...span,
                            text: span.text.replace('らしいです。', 'らしいです。\n')
                        };
                    }
                    return span;
                });

                newBody.push({
                    ...block,
                    children: modifiedChildren
                });
                continue;
            }
        }

        // Push block normally if it hasn't matched above
        newBody.push(block);
    }

    console.log(`Patching post... Old blocks: ${post.body.length}, New blocks: ${newBody.length}`);
    await client.patch(post._id)
        .set({ body: newBody })
        .commit();
    
    console.log('Post updated successfully!');
}

run().catch(console.error);
