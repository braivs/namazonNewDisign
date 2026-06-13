'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_LIDA_VIKA, DIR_TAIS_YULIA} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC33Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.33.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.33.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      {isRu ? (
        <>
          <p>
            <Trans
              i18nKey="descriptions.33.p2"
              ns="video"
              components={{
                b: <b />,
                br: <br />,
              }}
            />
          </p>
          <p>
            <Trans i18nKey="descriptions.33.p3" ns="video" components={{b: <b />}} />
          </p>
          <p>
            <Trans i18nKey="descriptions.33.p4" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <p>{t('descriptions.33.p2')}</p>
      )}
      <h5>{t('descriptions.33.section1')}</h5>
      <ButtonGallery images={DIR_LIDA_VIKA} buttonName={screenshots} />
      <h5>{t('descriptions.33.section2')}</h5>
      <ButtonGallery images={DIR_TAIS_YULIA} buttonName={screenshots} />
    </>
  )
}
