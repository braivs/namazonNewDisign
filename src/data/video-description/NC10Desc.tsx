'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR10} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC10Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.10.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <>
          <p>
            <Trans i18nKey="descriptions.10.p2" ns="video" components={{b: <b />}} />
          </p>
          <p>
            <Trans i18nKey="descriptions.10.p3" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <p>{t('descriptions.10.p2')}</p>
      )}
      <ButtonGallery
        images={DIR10}
        buttonName={t('descriptions.10.screenshots', {defaultValue: 'See photos'})}
      />
    </>
  )
}
