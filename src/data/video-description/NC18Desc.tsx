'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC18Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.18.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.18.p1" ns="video" components={{b: <b />}} />
      </p>
      {!isRu && <p>{t('descriptions.18.p2')}</p>}
      <h5>{t('descriptions.18.section1')}</h5>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1} buttonName={screenshots} />
      <h5>{t('descriptions.18.section2')}</h5>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_2} buttonName={screenshots} />
    </>
  )
}
