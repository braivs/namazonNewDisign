'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR25_VILLIAN_ELENA, DIR25_VILLIAN_LYUDMILA, DIR25_VILLIAN_TAIS} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC25Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.25.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.25.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>{t('descriptions.25.p2')}</p>
      <p>
        {isRu ? (
          <Trans i18nKey="descriptions.25.p3" ns="video" components={{b: <b />}} />
        ) : (
          t('descriptions.25.p3')
        )}
      </p>
      <h5>{t('descriptions.25.section1')}</h5>
      <ButtonGallery images={DIR25_VILLIAN_ELENA} buttonName={screenshots} />
      <h5>{t('descriptions.25.section2')}</h5>
      <ButtonGallery images={DIR25_VILLIAN_LYUDMILA} buttonName={screenshots} />
      <h5>{t('descriptions.25.section3')}</h5>
      <ButtonGallery images={DIR25_VILLIAN_TAIS} buttonName={screenshots} />
    </>
  )
}
