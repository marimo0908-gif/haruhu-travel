'use client';

import { useEffect, useRef } from 'react';

export default function ViewCounter({ slug }) {
    const hasIncremented = useRef(false);

    useEffect(() => {
        if (!slug || hasIncremented.current) return;

        // Prevent double-counting in development double-rendering
        hasIncremented.current = true;

        const incrementView = async () => {
            try {
                await fetch(`/api/views/${slug}`, {
                    method: 'POST',
                });
                console.log(`View incremented for: ${slug}`);
            } catch (error) {
                console.error('Failed to increment view:', error);
            }
        };

        // Delay slightly to ensure it's a real view and not a bounce (optional)
        const timer = setTimeout(incrementView, 1000);

        return () => clearTimeout(timer);
    }, [slug]);

    // This component is invisible to third parties
    return null;
}
