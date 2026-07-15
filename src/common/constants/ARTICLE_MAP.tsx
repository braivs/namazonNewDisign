import type {FC} from 'react'
import {JulyUpdateDesc} from '@/data/articles-description/julyUpdateDesc'
import {JuneUpdateDesc} from '@/data/articles-description/juneUpdateDesc'
import {SubmissionDesc} from '@/data/articles-description/submissionDesc'
import {MixDesc} from '@/data/articles-description/mixDesc'
import {MmaDesc} from '@/data/articles-description/mmaDesc'
import type {ArticleSlug} from '@/data/articles/articles-data'

export type {ArticleSlug} from '@/data/articles/articles-data'
export {ARTICLE_SLUGS, isArticleSlug} from '@/data/articles/articles-data'

export const ARTICLE_MAP: Record<ArticleSlug, FC> = {
  'july-update': JulyUpdateDesc,
  'june-update': JuneUpdateDesc,
  submission: SubmissionDesc,
  mix: MixDesc,
  mma: MmaDesc,
}
