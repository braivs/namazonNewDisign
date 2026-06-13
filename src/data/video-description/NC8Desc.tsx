'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR08_1, DIR08_2, DIR08_3} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC8Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.8.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.8.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>{t('descriptions.8.p2')}</p>
      {isRu && (
        <p>
          <Trans i18nKey="descriptions.8.p3" ns="video" components={{b: <b />}} />
        </p>
      )}
      <h5>{t('descriptions.8.section1')}</h5>
      <ButtonGallery images={DIR08_1} buttonName={screenshots} />
      <h5>{t('descriptions.8.section2')}</h5>
      <ButtonGallery images={DIR08_2} buttonName={screenshots} />
      <h5>{t('descriptions.8.section3')}</h5>
      <ButtonGallery images={DIR08_3} buttonName={screenshots} />
    </>
  )
}
