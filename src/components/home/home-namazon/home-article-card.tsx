'use client'

import Link from 'next/link'
import React from 'react'
import {useTranslation} from 'react-i18next'
import type {HomeCard} from '@/data/home/home-cards-data'

type Props = {
  card: HomeCard
}

export default function HomeArticleCard({card}: Props) {
  const {t} = useTranslation('home')
  const {t: tCommon} = useTranslation('common')

  return (
    <div className="blog-item">
      <Link href={card.href}>
        <div className="blog-item__thumb fix">
          <img
            src={card.imgRef}
            alt={t(`cards.${card.id}.title`)}
            className="w-100"
          />
          {card.imgRef2 && (
            <img
              src={card.imgRef2}
              alt={t(`cards.${card.id}.title`)}
              className="w-100"
              style={{marginTop: 10}}
            />
          )}
        </div>
      </Link>
      <div className="blog-item__content">
        <h5 className="blog-item__title mb-15">
          <Link href={card.href}>{t(`cards.${card.id}.title`)}</Link>
        </h5>
        <p style={{whiteSpace: 'pre-line'}}>{t(`cards.${card.id}.excerpt`)}</p>
        <div className="blog-item__date-info">
          <ul className="d-flex align-items-center">
            <li>
              <Link href={card.href}>
                {tCommon('readMore')}
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
