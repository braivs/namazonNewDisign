'use client'

import imgMain from 'public/assets/img/August_2026_2parts.jpg'
import sC from '@/common/styles.module.scss'
import ArticleTitleRow from '@/components/articles/article-title-row'
import cn from 'classnames'
import Image from 'next/image'
import {Col} from 'react-bootstrap'
import React from 'react'
import {useTranslation} from 'react-i18next'

export const AugustUpdateDesc: React.FC = () => {
  const {t} = useTranslation('articles')
  const items = t('august-update.items', {returnObjects: true}) as string[]

  return (
    <>
      <ArticleTitleRow id="august-update" />
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image
          className={sC.MainImg}
          src={imgMain}
          alt=""
          width={imgMain.width}
          height={imgMain.height}
          style={{width: '80%', height: 'auto', maxWidth: '100%'}}
        />
      </Col>
      {items.map((item) => (
        <p key={item}>- {item}</p>
      ))}
    </>
  )
}
