export const metadata = {
    title: "プライバシーポリシー | はるふートラベル",
    description: "はるふートラベルのプライバシーポリシーです。個人情報の取扱い、アフィリエイト、Cookieについて説明しています。",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">プライバシーポリシー</h1>
                <p className="text-sm text-slate-400 mb-10">最終更新日：2026年3月16日</p>

                <div className="space-y-10 text-slate-700 leading-relaxed text-sm md:text-base">

                    {/* 1 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            1. 運営者情報
                        </h2>
                        <p>
                            本ブログ「はるふートラベル」（以下、「当サイト」）は、以下の者が運営しています。
                        </p>
                        <p className="mt-2 pl-4 border-l border-slate-200 text-slate-600">
                            運営者：はるふー<br />
                            サイトURL：<a href="https://haruhu-travel.vercel.app" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://haruhu-travel.vercel.app</a>
                        </p>
                    </section>

                    {/* 2 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            2. 広告について（アフィリエイト）
                        </h2>
                        <p>
                            当サイトは、第三者配信のアフィリエイトプログラムを利用しています。
                            アフィリエイトリンクを経由して商品・サービスのお申し込みや購入が行われた場合、
                            当サイトに紹介料が支払われることがあります。
                        </p>
                        <p className="mt-3">
                            利用しているアフィリエイトサービスには以下が含まれます。
                        </p>
                        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
                            <li>A8.net（株式会社ファンコミュニケーションズ）</li>
                            <li>バリューコマース株式会社</li>
                            <li>モッピー（株式会社セレス）</li>
                            <li>楽天アフィリエイト</li>
                        </ul>
                        <p className="mt-3 p-4 bg-amber-50 rounded-lg text-amber-700 text-sm">
                            ※ 当サイトの記事内にはPR・広告を含むものがあります。
                            紹介する商品・サービスは、実際に利用した経験や信頼できる情報をもとに執筆していますが、
                            掲載内容はあくまで参考情報であり、投資・金融の専門的なアドバイスではありません。
                        </p>
                    </section>

                    {/* 3 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            3. アクセス解析ツールについて
                        </h2>
                        <p>
                            当サイトでは、Google Inc.が提供するアクセス解析ツール「Googleアナリティクス」を使用しています。
                            Googleアナリティクスはデータ収集のためにCookie（クッキー）を使用します。
                            このデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                        <p className="mt-3">
                            Cookieの使用を拒否する場合は、お使いのブラウザの設定より無効にすることができます。
                            詳細はGoogleの
                            <a href="https://policies.google.com/privacy" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                                プライバシーポリシー
                            </a>
                            をご確認ください。
                        </p>
                    </section>

                    {/* 4 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            4. Cookieについて
                        </h2>
                        <p>
                            当サイトでは、一部のページでCookieを使用する場合があります。
                            Cookieはお客様のコンピュータを識別するためのものであり、
                            個人情報（氏名・住所など）を含むものではありません。
                        </p>
                    </section>

                    {/* 5 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            5. 免責事項
                        </h2>
                        <p>
                            当サイトに掲載している情報は、できる限り正確な情報を提供するよう努めていますが、
                            正確性・完全性・最新性を保証するものではありません。
                            当サイトの情報を参考にした結果、万が一損害が発生した場合でも、
                            当サイトは一切の責任を負いません。
                        </p>
                        <p className="mt-3">
                            また、当サイトからリンクしている外部サイトの内容については、
                            当サイトは責任を負いません。
                        </p>
                    </section>

                    {/* 6 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            6. 著作権
                        </h2>
                        <p>
                            当サイトに掲載されている文章・画像・その他コンテンツの著作権は、
                            特別な表記がない限り、運営者に帰属します。
                            無断転載・複製・使用を禁じます。
                        </p>
                    </section>

                    {/* 7 */}
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 border-l-4 border-primary pl-3 mb-3">
                            7. プライバシーポリシーの変更
                        </h2>
                        <p>
                            当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
                            変更後のポリシーは、本ページに掲載した時点から効力が生じるものとします。
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
