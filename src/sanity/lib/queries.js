import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  mainImage,
  category->{title},
  publishedAt,
  excerpt,
  isSponsored
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  mainImage,
  category->{title},
  publishedAt,
  excerpt,
  body,
  isSponsored
}`;

export const POST_SLUGS_QUERY = groq`*[_type == "post"] {
  "slug": slug.current
}`;
