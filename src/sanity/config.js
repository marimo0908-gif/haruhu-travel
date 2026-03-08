import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { jaJPLocale } from '@sanity/locale-ja-jp';
import { schemas } from './schemas';

export default defineConfig({
    name: 'default',
    title: 'Haruhu Travel',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/studio',

    plugins: [structureTool(), visionTool(), jaJPLocale()],

    schema: {
        types: schemas,
    },
});
