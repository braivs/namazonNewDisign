'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR34} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC34Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.34.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.34.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.34.p2')}</p>
      {isRu && (
        <p>
          <Trans i18nKey="descriptions.34.p3" ns="video" components={{b: <b />}} />
        </p>
      )}
      <ButtonGallery images={DIR34} buttonName={screenshots} />
    </>
  )
}
