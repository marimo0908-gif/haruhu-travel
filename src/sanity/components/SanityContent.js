import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../client';
import AffiliateLink from '@/components/monetization/AffiliateLink';
import { CreditCard, Compass, Smartphone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

function replaceEmojis(node) {
    if (!node) return node;
    
    if (typeof node === 'string') {
        const regex = /(👉|👇)/g;
        const parts = node.split(regex);
        if (parts.length === 1) return node;
        
        return parts.map((part, i) => {
            if (part === '👉') {
                return (
                    <ArrowRight 
                        key={i} 
                        className="inline-block w-[1.15em] h-[1.15em] text-[#e88b86] mx-1 shrink-0 align-[-3px] transition-transform duration-300 hover:translate-x-0.5" 
                    />
                );
            }
            if (part === '👇') {
                return (
                    <Sparkles 
                        key={i} 
                        className="inline-block w-[1.15em] h-[1.15em] text-rose-400 mx-1 shrink-0 align-[-3px] animate-pulse" 
                    />
                );
            }
            return part;
        });
    }
    
    if (React.isValidElement(node)) {
        if (node.props && node.props.children) {
            try {
                const mappedChildren = React.Children.map(node.props.children, replaceEmojis);
                return React.cloneElement(node, {
                    ...node.props,
                    children: mappedChildren
                });
            } catch (e) {
                return node;
            }
        }
        return node;
    }
    
    if (Array.isArray(node)) {
        return node.map(replaceEmojis);
    }
    
    return node;
}

function replaceIcon(children) {
    if (!children) return children;
    
    let text = "";
    if (typeof children === 'string') {
        text = children;
    } else if (Array.isArray(children) && typeof children[0] === 'string') {
        text = children[0];
    } else {
        return children;
    }
    
    let icon = null;
    let newText = text;
    
    if (text.startsWith("■")) {
        icon = <CreditCard className="inline-block w-5 h-5 text-emerald-600 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^■\s*/, "");
    } else if (text.startsWith("🔰")) {
        icon = <ShieldCheck className="inline-block w-5 h-5 text-emerald-500 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^🔰\s*/, "");
    } else if (text.startsWith("✈")) {
        icon = <Compass className="inline-block w-5 h-5 text-sky-500 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^✈\s*/, "");
    } else if (text.startsWith("📱")) {
        icon = <Smartphone className="inline-block w-5 h-5 text-indigo-500 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^📱\s*/, "");
    } else if (text.startsWith("👉")) {
        icon = <ArrowRight className="inline-block w-5 h-5 text-amber-500 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^👉\s*/, "");
    } else if (text.startsWith("👇")) {
        icon = <Sparkles className="inline-block w-5 h-5 text-rose-400 mr-2 shrink-0 align-[-2px]" />;
        newText = text.replace(/^👇\s*/, "");
    }
    
    if (icon) {
        if (typeof children === 'string') {
            return <span className="inline-flex items-center">{icon}<span>{newText}</span></span>;
        } else {
            const newChildren = [...children];
            newChildren[0] = newText;
            return <span className="inline-flex items-center">{icon}<span>{newChildren}</span></span>;
        }
    }
    
    return children;
}

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
                    relatedArticleTitle={value.relatedArticleTitle}
                    relatedArticleHref={value.relatedArticleHref}
                    trackerImageUrl={value.trackerImageUrl}
                    campaignImage={value.campaignImage ? (
                        typeof value.campaignImage === 'string' 
                            ? value.campaignImage 
                            : { url: urlFor(value.campaignImage).url() }
                    ) : null}
                />
            );
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="font-maru mt-10 mb-8 text-2xl font-bold text-slate-800 flex items-center">{replaceIcon(replaceEmojis(children))}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-maru mt-8 mb-4 text-xl font-bold text-slate-800 flex items-center">{replaceIcon(replaceEmojis(children))}</h3>
        ),
        normal: ({ children }) => <p className="mb-6 leading-relaxed text-slate-700">{replaceEmojis(children)}</p>,
        callout: ({ children }) => (
            <p className="font-maru my-8 text-center text-xl font-bold text-slate-800">{replaceEmojis(children)}</p>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-2 leading-relaxed text-slate-700 list-disc ml-6">{replaceEmojis(children)}</li>,
        number: ({ children }) => <li className="mb-2 leading-relaxed text-slate-700 list-decimal ml-6">{replaceEmojis(children)}</li>,
    },
    marks: {
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                {replaceEmojis(children)}
            </a>
        ),
    },
};

export function SanityContent({ value }) {
    if (!value) return null;
    return <PortableText value={value} components={components} />;
}
