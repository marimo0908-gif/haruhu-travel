import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
    useCdn: false, // Set to false to always fetch latest data
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
