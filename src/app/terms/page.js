export const metadata = {
    title: "利用規約 | はるふートラベル",
    description: "はるふートラベルの利用規約です。",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">利用規約</h1>
                <p className="text-sm text-slate-400 mb-10">最終更新日：2026年3月16日</p>

                <div className="space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            1. はじめに
                        </h2>
                        <p>
                            「はるふートラベル」（以下、「当サイト」）をご利用いただく際は、
                            本利用規約に同意いただいたものとみなします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            2. コンテンツの利用
                        </h2>
                        <p>
                            当サイトに掲載するすべてのコンテンツ（文章・画像・その他）は、
                            著作権法によって保護されています。
                            個人での閲覧・参考利用を超えた複製・転載・商用利用は、
                            事前に運営者の許可を得た場合を除き禁止します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            3. 禁止事項
                        </h2>
                        <p>当サイトの利用にあたり、以下の行為を禁止します。</p>
                        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
                            <li>当サイトのコンテンツの無断転載・複製</li>
                            <li>当サイトや運営者の名誉・信用を傷つける行為</li>
                            <li>その他、法令または公序良俗に反する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            4. 免責事項
                        </h2>
                        <p>
                            当サイトの情報は可能な限り正確に記載していますが、
                            その内容の完全性・正確性・最新性を保証するものではありません。
                            当サイトの情報をもとにした行動による損害について、運営者は一切の責任を負いません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            5. 利用規約の変更
                        </h2>
                        <p>
                            当サイトは、必要に応じて本利用規約を変更することがあります。
                            変更後の規約は、本ページに掲載した時点から効力が生じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            6. お問い合わせ
                        </h2>
                        <p>
                            ご不明点がありましたら、
                            <a href="/contact" className="text-primary underline">お問い合わせページ</a>
                            よりご連絡ください。
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
