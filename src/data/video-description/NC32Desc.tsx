'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR32} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC32Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.32.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.32.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.32.p2')}</p>
      {isRu ? (
        <p>
          <Trans i18nKey="descriptions.32.p3" ns="video" components={{b: <b />}} />
        </p>
      ) : (
        <p>{t('descriptions.32.p3')}</p>
      )}
      <ButtonGallery images={DIR32} buttonName={screenshots} />
    </>
  )
}
