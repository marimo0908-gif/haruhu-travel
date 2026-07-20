const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

let token = process.env.SANITY_API_TOKEN;
if (!token && fs.existsSync('.env.local')) {
    const envFile = fs.readFileSync('.env.local', 'utf8');
    const match = envFile.match(/^SANITY_API_TOKEN=["']?([^"'\s]+)["']?$/m);
    if (match) token = match[1];
}

if (!token) {
    console.error("Token not found");
    process.exit(1);
}

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: token,
});

async function del() {
    const id = 'TIVDjbcVIyiRPy2cCWAW1T';
    console.log(`Deleting post with ID: ${id}...`);
    try {
        await client.delete(id);
        console.log(`Successfully deleted post with ID: ${id}`);
    } catch (err) {
        console.error(`Failed to delete post: ${err.message}`);
        process.exit(1);
    }
}
del();
