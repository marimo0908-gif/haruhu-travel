import { PortableText } from '@portabletext/react';
import { urlFor } from '../client';

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
    },
    block: {
        h3: ({ children }) => (
            <h3 className="mt-8 mb-4 text-xl font-bold text-slate-900">{children}</h3>
        ),
        normal: ({ children }) => <p className="mb-6 leading-relaxed text-slate-700">{children}</p>,
    },
};

export function SanityContent({ value }) {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}
