'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR05} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC5Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.5.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans i18nKey="descriptions.5.p2" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery
        images={DIR05}
        buttonName={t('descriptions.5.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
