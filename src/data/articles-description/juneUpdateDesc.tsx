'use client'

import imgMain from 'public/assets/img/Triple_Namazon_June_update.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import {Col} from 'react-bootstrap'
import React from 'react'
import {useTranslation} from 'react-i18next'

export const JuneUpdateDesc: React.FC = () => {
  const {t} = useTranslation('articles')
  const items = t('june-update.items', {returnObjects: true}) as string[]

  return (
    <>
      <h3>{t('june-update.title')}</h3>
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
