import Link from 'next/link';
import { Plane } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full animate-bounce">
            <Plane size={64} className="text-primary" />
          </div>
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">ページが見つかりませんでした</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          お探しのページは削除されたか、URLが変更された可能性があります。<br />
          トップページから目的の情報を探してみてください。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
