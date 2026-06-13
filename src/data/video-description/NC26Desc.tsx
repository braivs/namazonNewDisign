'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR26} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC26Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.26.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.26.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.26.p2')}</p>
          <p>{t('descriptions.26.p3')}</p>
          <p>
            <Trans i18nKey="descriptions.26.p4" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <p>{t('descriptions.26.p2')}</p>
      )}
      <ButtonGallery images={DIR26} buttonName={screenshots} />
    </>
  )
}
