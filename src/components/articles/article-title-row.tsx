'use client'

import {home_cards} from '@/data/home/home-cards-data'
import type {ArticleSlug} from '@/data/articles/articles-data'
import React from 'react'
import {useTranslation} from 'react-i18next'
import s from './article-title-row.module.scss'

type Props = {
  id: ArticleSlug
}

export default function ArticleTitleRow({id}: Props) {
  const {t} = useTranslation('articles')
  const date = home_cards.find((card) => card.id === id)?.date

  return (
    <div className={s.titleRow}>
      <h3 className={s.title}>{t(`${id}.title`)}</h3>
      {date && <span className={s.date}>{date}</span>}
    </div>
  )
}
