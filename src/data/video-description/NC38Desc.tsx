'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR38} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC38Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.38.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.38.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        {isRu ? (
          <Trans i18nKey="descriptions.38.p2" ns="video" components={{b: <b />}} />
        ) : (
          t('descriptions.38.p2')
        )}
      </p>
      <ButtonGallery images={DIR38} buttonName={screenshots} />
    </>
  )
}
