'use client'

import imgMain from 'public/assets/img/Jule_2026_4parts.jpg'
import imgSecondary from 'public/assets/img/Jule_2026_3parts.jpg'
import sC from '@/common/styles.module.scss'
import ArticleTitleRow from '@/components/articles/article-title-row'
import cn from 'classnames'
import Image from 'next/image'
import React from 'react'
import {useTranslation} from 'react-i18next'
import s from './julyUpdateDesc.module.scss'

export const JulyUpdateDesc: React.FC = () => {
  const {t} = useTranslation('articles')
  const items = t('july-update.items', {returnObjects: true}) as string[]

  return (
    <>
      <ArticleTitleRow id="july-update" />
      <div className={s.imagesRow}>
        <div className={s.imageCol}>
          <Image
            className={cn(sC.MainImg, s.image)}
            src={imgMain}
            alt=""
            width={imgMain.width}
            height={imgMain.height}
          />
        </div>
        <div className={s.imageCol}>
          <Image
            className={cn(sC.MainImg, s.image)}
            src={imgSecondary}
            alt=""
            width={imgSecondary.width}
            height={imgSecondary.height}
          />
        </div>
      </div>
      {items.map((item) => (
        <p key={item}>- {item}</p>
      ))}
    </>
  )
}
