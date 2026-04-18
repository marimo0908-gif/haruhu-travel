import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  "category": categories[0]->{title},
  publishedAt,
  excerpt,
  "isSponsored": isSponsored || count(body[_type == "affiliateLink"]) > 0 || count(body[].children[text match "moppy*"]) > 0 || count(body[].children[text match "hapitas*"]) > 0 || count(body[].children[text match "モッピー*"]) > 0 || count(body[].children[text match "ハピタス*"]) > 0
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  author,
  mainImage,
  "category": categories[0]->{title},
  publishedAt,
  excerpt,
  body,
  "isSponsored": isSponsored || count(body[_type == "affiliateLink"]) > 0 || count(body[].children[text match "moppy*"]) > 0 || count(body[].children[text match "hapitas*"]) > 0 || count(body[].children[text match "モッピー*"]) > 0 || count(body[].children[text match "ハピタス*"]) > 0
}`;

export const POST_SLUGS_QUERY = groq`*[_type == "post"] {
  "slug": slug.current
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`;

export const POSTS_BY_CATEGORY_QUERY = groq`*[_type == "post" && references(*[_type == "category" && title == $category]._id)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  mainImage,
  "category": categories[0]->{title},
  publishedAt,
  excerpt,
  "isSponsored": isSponsored || count(body[_type == "affiliateLink"]) > 0 || count(body[].children[text match "moppy*"]) > 0 || count(body[].children[text match "hapitas*"]) > 0 || count(body[].children[text match "モッピー*"]) > 0 || count(body[].children[text match "ハピタス*"]) > 0
}`;
