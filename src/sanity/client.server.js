import { createClient } from 'next-sanity';

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // This token allows write access
};

export const client = createClient(config);
