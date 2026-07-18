# はるふ旅 ブログサイト

ワーママ向けの旅行・マイル・ポイ活ブログ。https://haruhu-travel.com で公開中（Cloudflare Pagesに自動デプロイ）。
mainブランチにpushすると Cloudflare Pages が自動でビルド・公開する（Vercelは切り離し済み）。

## 構成

- Next.js 14（App Router）+ Tailwind CSS
- 記事データは Sanity（プロジェクトID: xfkazu61 / dataset: production）
- ページ: `src/app/`（blog, cards, campaigns, english-quiz, faq など）
- 部品: `src/components/`（home, blog, layout, monetization など）
- Sanityスキーマ: `src/sanity/schemas/`（post, category, affiliateLink）
- `/studio` で Sanity Studio（記事の管理画面）が開く

## 記事の追加・修正

必ず先に `../docs/sanity-guide.md` を読むこと。
書き込みには `.env.local` の `SANITY_API_TOKEN` を使う。

## 開発コマンド

```bash
npm run dev     # http://localhost:3000（普段の開発用）
npm run build   # 本番ビルド確認

# Cloudflare（本番）と同じ環境でローカル確認したいとき
npx @cloudflare/next-on-pages                          # Cloudflare向けにビルド
npx wrangler pages dev .vercel/output/static \
  --compatibility-date=2024-11-01 \
  --compatibility-flag=nodejs_compat --port 8788        # http://localhost:8788 で確認
```

## デプロイ

mainブランチにpushすると Cloudflare Pages が自動デプロイする。
環境変数を変えたあとなど、コード変更なしで再デプロイしたいときは空コミットを使う:
`git commit --allow-empty -m "再デプロイ" && git push`

## 注意

- `scripts/archive/` は過去の使い捨てスクリプト置き場。参考にはできるが実行しない
- デザインは水色×緑×コーラルのやわらかい配色（tailwind.config.js 参照）
