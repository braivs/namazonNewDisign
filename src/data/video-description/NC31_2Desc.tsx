'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR31_2} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC31_2Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.31_2.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.31_2.p1"
          ns="video"
          components={{
            b: <b />,
            link31_1: <Link href="/video/nc31_1" />,
          }}
        />
      </p>
      <p>{t('descriptions.31_2.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.31_2.p3" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery images={DIR31_2} buttonName={screenshots} />
    </>
  )
}
