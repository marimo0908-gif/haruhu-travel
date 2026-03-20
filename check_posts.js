const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2024-03-01',
});

async function checkPosts() {
    const posts = await client.fetch('*[_type == "post"]{title, "slug": slug.current, isSponsored}');
    console.log('Current Posts in Sanity:');
    posts.forEach(p => console.log(`- ${p.title} (${p.slug}) [Sponsored: ${p.isSponsored}]`));
}

checkPosts().catch(console.error);
