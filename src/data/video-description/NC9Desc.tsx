'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR09_1, DIR09_2, DIR09_3} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC9Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.9.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.9.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.9.p2')}</p>
      {isRu ? (
        <>
          <p>{t('descriptions.9.p3')}</p>
          <p>
            <Trans i18nKey="descriptions.9.p4" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <p>{t('descriptions.9.p3')}</p>
      )}
      <h5>{t('descriptions.9.section1')}</h5>
      <ButtonGallery images={DIR09_1} buttonName={screenshots} />
      <h5>{t('descriptions.9.section2')}</h5>
      <ButtonGallery images={DIR09_2} buttonName={screenshots} />
      <h5>{t('descriptions.9.section3')}</h5>
      <ButtonGallery images={DIR09_3} buttonName={screenshots} />
    </>
  )
}
