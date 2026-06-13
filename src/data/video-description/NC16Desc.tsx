'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR16} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC16Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.16.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.16.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.16.p3" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery
        images={DIR16}
        buttonName={t('descriptions.16.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
