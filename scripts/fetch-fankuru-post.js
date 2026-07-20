const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xfkazu61',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

async function run() {
    console.log('Fetching fan-kuru-guide post...');
    const post = await client.fetch('*[_type == "post" && slug.current == "fan-kuru-guide"][0]');
    console.log(JSON.stringify(post, null, 2));
}

run().catch(console.error);
