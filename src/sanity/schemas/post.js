export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    type: 'affiliateLink',
                },
            ],
        },
        {
            name: 'isSponsored',
            title: 'Sponsored Content (PR)',
            type: 'boolean',
            description: 'Check this if the post contains affiliate links or is sponsored content',
            initialValue: false,
        },
        {
            name: 'views',
            title: 'Views',
            type: 'number',
            initialValue: 0,
            readOnly: true,
            description: 'Total number of views (automatically updated)',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage',
            views: 'views',
        },
        prepare(selection) {
            const { author, views } = selection;
            return { 
                ...selection, 
                subtitle: `${author ? `by ${author}` : ''} ${views ? `| ${views} views` : '| 0 views'}`.trim() 
            };
        },
    },
};
