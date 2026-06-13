'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR41_KZ, DIR41_VZ} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC41Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.41.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.41.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans i18nKey="descriptions.41.p2" ns="video" components={{b: <b />}} />
      </p>
      {!isRu && <p>{t('descriptions.41.p3')}</p>}
      <h5>{t('descriptions.41.section1')}</h5>
      <ButtonGallery images={DIR41_KZ} buttonName={screenshots} />
      {!isRu && <p>{t('descriptions.41.p4')}</p>}
      <h5>{t('descriptions.41.section2')}</h5>
      <ButtonGallery images={DIR41_VZ} buttonName={screenshots} />
    </>
  )
}
