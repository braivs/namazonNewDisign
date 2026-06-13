'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR14_1, DIR14_2} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC14Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.14.screenshots', {defaultValue: 'SCREENSHOTS'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.14.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>
        <Trans i18nKey="descriptions.14.p2" ns="video" components={{b: <b />}} />
      </p>
      <h5>{t('descriptions.14.section1')}</h5>
      <ButtonGallery images={DIR14_1} buttonName={screenshots} />
      <h5>{t('descriptions.14.section2')}</h5>
      <ButtonGallery images={DIR14_2} buttonName={screenshots} />
    </>
  )
}
