const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-03-01',
});

async function fixDuplicates() {
    const post = await client.fetch('*[_type == "post" && slug.current == "travel-summary-2026"][0]');
    if (!post) {
        console.log('Post not found');
        return;
    }

    // Keep blocks until the first "お得な紹介プログラムのご案内" h2
    let newBody = [];
    let foundIntro = false;
    let foundFankuru = false;
    let foundAmex = false;

    // We'll just construct a clean array
    for (const block of post.body) {
        if (block._type === 'block' && block.children && block.children[0].text.includes('お得な紹介プログラムのご案内')) {
            if (!foundIntro) {
                newBody.push(block);
                foundIntro = true;
            }
        }
        else if (block._type === 'affiliateLink') {
            if (block.title === 'ファンくる' && !foundFankuru) {
                newBody.push(block);
                foundFankuru = true;
            } else if (block.title.includes('アメリカン・エキスプレス') && !foundAmex) {
                newBody.push(block);
                foundAmex = true;
            }
        }
        else {
            // normal block
            newBody.push(block);
        }
    }

    console.log(`Original body length: ${post.body.length}, New body length: ${newBody.length}`);

    await client.patch(post._id).set({ body: newBody }).commit();
    console.log('Fixed duplicates in Sanity!');
}

fixDuplicates().catch(console.error);
