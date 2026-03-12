import Link from 'next/link';
import { Plane, ArrowRight } from 'lucide-react';

export default function EnglishQuizBanner() {
    return (
        <div className="my-12 bg-gradient-to-br from-primary/5 to-slate-50 rounded-2xl p-8 sm:p-10 border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 text-primary/5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-2">
                <Plane size={160} className="transform rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-3xl">✈️</span>
                        旅行英語クイズに挑戦！
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-xl">
                        海外旅行をもっと楽しむためのプラスアルファ！<br className="hidden sm:block" />
                        入国審査やレストランなど、実際の旅行で使える実用的な英語フレーズをクイズ形式で楽しく学べます。
                    </p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <Link
                        href="/english-quiz"
                        className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95 w-full"
                    >
                        クイズを始める
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
