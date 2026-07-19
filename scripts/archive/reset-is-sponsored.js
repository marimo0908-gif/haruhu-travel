const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    if (!client.config().token) {
        console.error('Error: SANITY_API_TOKEN is not set.');
        process.exit(1);
    }

    const posts = await client.fetch(`*[_type == "post"]`);
    console.log(`Found ${posts.length} posts. Analyzing content for affiliate links...`);

    for (const post of posts) {
        // Broad detection for affiliate content:
        // 1. Custom 'affiliateLink' block type
        const hasCustomBlock = post.body?.some(block => block._type === 'affiliateLink');
        
        // 2. Standard links pointing to known affiliate domains (moppy, hapitas, etc.)
        const hasTextLink = post.body?.some(block => {
            if (block._type !== 'block' || !block.markDefs) return false;
            return block.markDefs.some(def => 
                def._type === 'link' && 
                (def.href?.includes('moppy.jp') || def.href?.includes('hapitas.jp'))
            );
        });

        // 3. Plain text mentions of affiliate URLs (just in case)
        const hasPlainUrl = JSON.stringify(post.body).includes('moppy.jp') || JSON.stringify(post.body).includes('hapitas.jp');

        const isActuallySponsored = hasCustomBlock || hasTextLink || hasPlainUrl;
        
        console.log(`Analyzing: "${post.title}" -> Sponsored: ${isActuallySponsored} (Block: ${hasCustomBlock}, Link: ${hasTextLink}, Text: ${hasPlainUrl})`);

        // Update isSponsored flag
        await client.patch(post._id).set({ isSponsored: isActuallySponsored }).commit();
        console.log(`✅ Updated isSponsored to ${isActuallySponsored} for: ${post.title}`);
    }
    console.log('🎉 All posts processed.');
}

run().catch(console.error);
