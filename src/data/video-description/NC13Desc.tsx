'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR13} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC13Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.13.p1" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <p>
          <Trans
            i18nKey="descriptions.13.p2"
            ns="video"
            components={{
              b: <b />,
              br: <br />,
            }}
          />
        </p>
      ) : (
        <>
          <p>{t('descriptions.13.p2')}</p>
          <p>{t('descriptions.13.p3')}</p>
        </>
      )}
      <ButtonGallery
        images={DIR13}
        buttonName={t('descriptions.13.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
