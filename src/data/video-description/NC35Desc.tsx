'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR35} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC35Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.35.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.35.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.35.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.35.p3" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery images={DIR35} buttonName={screenshots} />
    </>
  )
}
