import { NextResponse } from 'next/server';
import { client } from '@/sanity/client.server';

export async function POST(request, { params }) {
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
    }

    try {
        // Increment the 'views' field for the post with the matching slug
        const result = await client
            .patch({ query: `*[_type == "post" && slug.current == $slug][0]`, params: { slug } })
            .setIfMissing({ views: 0 })
            .inc({ views: 1 })
            .commit();

        return NextResponse.json({ 
            message: 'View count incremented', 
            views: result.views 
        }, { status: 200 });
    } catch (error) {
        console.error('Error incrementing view count:', error);
        return NextResponse.json({ message: 'Error incrementing view count', error: error.message }, { status: 500 });
    }
}
