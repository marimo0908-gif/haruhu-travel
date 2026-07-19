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
    console.log(`Found ${posts.length} posts. Applying isSponsored: true to all...`);

    for (const post of posts) {
        console.log(`Updating post: ${post.title}`);
        await client.patch(post._id).set({ isSponsored: true }).commit();
        console.log(`✅ Updated: ${post.title}`);
    }
    console.log('🎉 All posts updated.');
}

run().catch(console.error);
