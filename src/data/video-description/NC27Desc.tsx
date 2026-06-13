'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR27} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC27Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.27.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.27.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.27.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.27.p3" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery images={DIR27} buttonName={screenshots} />
    </>
  )
}
