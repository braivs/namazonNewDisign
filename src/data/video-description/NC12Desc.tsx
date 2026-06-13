'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR12} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC12Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.12.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.12.p2')}</p>
      {isRu && (
        <p>
          <Trans i18nKey="descriptions.12.p3" ns="video" components={{b: <b />}} />
        </p>
      )}
      <ButtonGallery
        images={DIR12}
        buttonName={t('descriptions.12.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
