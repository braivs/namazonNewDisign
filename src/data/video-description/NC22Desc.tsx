'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR22} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC22Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.22.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.22.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.22.p2')}</p>
      <ButtonGallery images={DIR22} buttonName={screenshots} />
    </>
  )
}
