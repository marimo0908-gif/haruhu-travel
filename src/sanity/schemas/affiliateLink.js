export default {
    name: 'affiliateLink',
    title: 'Affiliate Link',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'href',
            title: 'Affiliate URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            initialValue: 'BEST BUY',
        },
        {
            name: 'points',
            title: 'Key Points',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features or benefits',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: '公式サイトを見る',
        },
        {
            name: 'campaignImage',
            title: 'Campaign Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Optional campaign banner image to display at the top of the card',
        },
        {
            name: 'relatedArticleTitle',
            title: 'Related Article Title',
            type: 'string',
            description: 'e.g. カード発行前に読みたい記事',
        },
        {
            name: 'relatedArticleHref',
            title: 'Related Article URL',
            type: 'string',
            description: 'e.g. /blog/amex-warning',
        },
    ]
};
