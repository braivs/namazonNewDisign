'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR23} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC23Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.23.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.23.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.23.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.23.p3" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery images={DIR23} buttonName={screenshots} />
    </>
  )
}
