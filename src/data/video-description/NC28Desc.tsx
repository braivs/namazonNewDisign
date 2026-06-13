'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR28_TAIS_ALEXANDER, DIR28_TAIS_VILLIAN} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC28Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.28.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.28.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.28.p2')}</p>
          <p>
            <Trans i18nKey="descriptions.28.p3" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <p>{t('descriptions.28.p2')}</p>
      )}
      <h5>{t('descriptions.28.section1')}</h5>
      <ButtonGallery images={DIR28_TAIS_ALEXANDER} buttonName={screenshots} />
      <h5>{t('descriptions.28.section2')}</h5>
      <ButtonGallery images={DIR28_TAIS_VILLIAN} buttonName={screenshots} />
    </>
  )
}
