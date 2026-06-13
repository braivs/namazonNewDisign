'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR30} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC30Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.30.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.30.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.30.p2')}</p>
          <p>
            <Trans
              i18nKey="descriptions.30.p3"
              ns="video"
              components={{
                b: <b />,
                br: <br />,
              }}
            />
          </p>
        </>
      ) : (
        <p>{t('descriptions.30.p2')}</p>
      )}
      <ButtonGallery images={DIR30} buttonName={screenshots} />
    </>
  )
}
