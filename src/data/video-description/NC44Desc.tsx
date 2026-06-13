'use client'

import Link from 'next/link'
import {Col, Row} from 'react-bootstrap'
import cn from 'classnames'
import {GalleryFromArray} from '@/common/GalleryFromArray'
import VSmorodina_vs_VVardugina1 from '../../../public/assets/img/videoGallery/nc44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from '../../../public/assets/img/videoGallery/nc44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina
  from '../../../public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina
  from '../../../public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina
  from '../../../public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina
  from '../../../public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Smorodina.jpg'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

export const NC44Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.44.p1"
          ns="video"
          components={{
            linkMaslenitsa: <Link href="/competition/2015_2017/maslenitsa-2016" />,
          }}
        />
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>{t('descriptions.44.section1')}</Col>
      </Row>
      <GalleryFromArray images={[VSmorodina_vs_VVardugina1.src, VSmorodina_vs_VVardugina2.src]} />
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>{t('descriptions.44.section2')}</Col>
      </Row>
      <GalleryFromArray images={[p1_OGrigorenko_vs_VVardugina.src, p2_OGrigorenko_vs_VVardugina.src]} />
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>{t('descriptions.44.section3')}</Col>
      </Row>
      <GalleryFromArray images={[p1_OGrigorenko_vs_VSmorodina.src, p2_OGrigorenko_vs_VSmorodina.src]} />
    </>
  )
}
