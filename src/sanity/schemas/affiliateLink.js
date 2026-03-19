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
    ]
};
