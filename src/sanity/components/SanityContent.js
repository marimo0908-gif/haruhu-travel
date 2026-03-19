import { PortableText } from '@portabletext/react';
import { urlFor } from '../client';
import AffiliateLink from '@/components/monetization/AffiliateLink';

const components = {
    types: {
        image: ({ value }) => {
            return (
                <div className="my-10 overflow-hidden rounded-xl border border-slate-200">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || 'article image'}
                        className="w-full h-auto"
                    />
                    {value.caption && (
                        <p className="px-4 py-2 text-center text-sm text-slate-500 bg-slate-50">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
        affiliateLink: ({ value }) => {
            return (
                <AffiliateLink
                    title={value.title}
                    description={value.description}
                    href={value.href}
                    badgeText={value.badgeText}
                    points={value.points}
                    buttonText={value.buttonText}
                />
            );
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="mt-10 mb-8 text-2xl font-bold text-slate-900">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="mt-8 mb-4 text-xl font-bold text-slate-900">{children}</h3>
        ),
        normal: ({ children }) => <p className="mb-6 leading-relaxed text-slate-700">{children}</p>,
        callout: ({ children }) => (
            <p className="my-8 text-center text-xl font-bold text-slate-900">{children}</p>
        ),
    },
    marks: {
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                {children}
            </a>
        ),
    },
};

export function SanityContent({ value }) {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}
