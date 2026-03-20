import AffiliateLink from "@/components/monetization/AffiliateLink";
import PRBadge from "@/components/monetization/PRBadge";

export default function PreviewMonetization() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                    <PRBadge />
                    <span className="text-sm text-slate-500">記事の冒頭に表示されるPR表記の例です</span>
                </div>
                
                <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">
                    収益化コンポーネントのプレビュー
                </h1>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        ファンくるの紹介例
                    </h2>
                    <AffiliateLink
                        title="ファンくる"
                        description="外食やサービスを利用して最大100%ポイント還元！貯まったポイントはマイルに交換可能です。"
                        href="https://www.fancrew.jp/about?inflow_id=fri_e12-9034462&lk=9034462&lk1=b&d=1"
                        badgeText="期間限定キャンペーン中！"
                        points={[
                            "外食モニターで食費を節約しながらマイルが貯まる",
                            "覆面調査気分で楽しくポイ活",
                            "貯まったポイントはドットマネー経由などでANAマイルへ"
                        ]}
                        buttonText="ファンくるを始める"
                    >
                        <div className="relative aspect-[3420/910] w-full overflow-hidden">
                            <img 
                                src="/images/fancrew-campaign.png" 
                                alt="ファンくる キャンペーン" 
                                className="w-full absolute top-0 left-0"
                                style={{ transform: 'translateY(-18.06%)' }}
                            />
                        </div>
                    </AffiliateLink>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        クレジットカードの紹介例
                    </h2>
                    <AffiliateLink
                        title="アメリカン・エキスプレス・ゴールド・プリファード・カード"
                        description="年間のご利用金額に応じて継続特典（無料宿泊）がもらえる、ポイ活・マイル派に大人気のゴールドカード。紹介プログラム専用の入会特典をご案内可能です。"
                        href="/contact?subject=AmexGoldPreferred"
                        badgeText="紹介プログラム限定特典"
                        points={[
                            "年間200万円決済でフリー・ステイ・ギフト（無料宿泊）",
                            "メンバーシップ・リワード・プラスが自動付帯でマイル高還元",
                            "日常の決済をこれ1枚に集約して特典を最大化"
                        ]}
                        buttonText="紹介URLをメールで受け取る"
                    />
                </section>

                <div className="mt-12 p-4 bg-blue-50 text-blue-700 rounded-xl text-sm italic">
                    ※これらは記事の中で自然な位置（セクションの最後など）に挿入されます。
                </div>
            </div>
        </div>
    );
}
