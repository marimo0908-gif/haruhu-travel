"use client";

import Button from "@/components/ui/Button";
import { ExternalLink, Gift, Check } from "lucide-react";

export default function AffiliateLink({
    title,
    description,
    href,
    badgeText = "BEST BUY",
    points = [],
    buttonText = "公式サイトを見る"
}) {
    return (
        <div className="my-8 overflow-hidden rounded-2xl border-2 border-primary/20 bg-white shadow-sm relative">
            {badgeText && (
                <div className="absolute top-0 left-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-br-xl z-10">
                    {badgeText}
                </div>
            )}

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-center sm:justify-start gap-2">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                        {description}
                    </p>

                    {points.length > 0 && (
                        <ul className="space-y-2 mb-6 bg-slate-50 p-4 rounded-lg text-left inline-block w-full">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
                    <Button href={href} variant="accent" className="w-full sm:w-auto text-lg py-4 shadow-lg shadow-accent/20">
                        {buttonText} <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                    <div className="text-center">
                        <span className="text-[10px] text-slate-400">
                            ※公式サイトへ移動します
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
