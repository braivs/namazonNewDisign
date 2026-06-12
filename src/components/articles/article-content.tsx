'use client'

import {ARTICLE_MAP, isArticleSlug} from '@/common/constants/ARTICLE_MAP'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import React from 'react'

type Props = {
  article: string
}

export default function ArticleContent({article}: Props) {
  if (!isArticleSlug(article)) {
    return <p>Article not found.</p>
  }

  const Component = ARTICLE_MAP[article]

  return (
    <section className={cn('pt-10', sC.compArticlesVideoGirl)}>
      <Component />
    </section>
  )
}
