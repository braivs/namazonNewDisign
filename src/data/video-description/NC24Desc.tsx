'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR24} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC24Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.24.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.24.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <p>
          <Trans i18nKey="descriptions.24.p2" ns="video" components={{b: <b />}} />
        </p>
      ) : (
        <>
          <p>{t('descriptions.24.p2')}</p>
          <p>{t('descriptions.24.p3')}</p>
        </>
      )}
      <ButtonGallery images={DIR24} buttonName={screenshots} />
    </>
  )
}
