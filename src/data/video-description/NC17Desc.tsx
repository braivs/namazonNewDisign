'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR17_1, DIR17_2, DIR17_3} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC17Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.17.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.17.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>{t('descriptions.17.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.17.p3" ns="video" components={{b: <b />}} />
      </p>
      <h5>{t('descriptions.17.section1')}</h5>
      <ButtonGallery images={DIR17_1} buttonName={screenshots} />
      <h5>{t('descriptions.17.section2')}</h5>
      <ButtonGallery images={DIR17_2} buttonName={screenshots} />
      <h5>{t('descriptions.17.section3')}</h5>
      <ButtonGallery images={DIR17_3} buttonName={screenshots} />
    </>
  )
}
