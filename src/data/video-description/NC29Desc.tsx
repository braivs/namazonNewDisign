'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR29} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC29Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.29.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.29.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        {isRu ? (
          <Trans
            i18nKey="descriptions.29.p2"
            ns="video"
            components={{
              b: <b />,
              br: <br />,
            }}
          />
        ) : (
          t('descriptions.29.p2')
        )}
      </p>
      <p>
        {isRu ? (
          <Trans i18nKey="descriptions.29.p3" ns="video" components={{b: <b />}} />
        ) : (
          t('descriptions.29.p3')
        )}
      </p>
      <ButtonGallery images={DIR29} buttonName={screenshots} />
    </>
  )
}
