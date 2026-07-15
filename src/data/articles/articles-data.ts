export const ARTICLE_SLUGS = ['july-update', 'june-update', 'submission', 'mix', 'mma'] as const

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number]

export function isArticleSlug(slug: string): slug is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(slug)
}
