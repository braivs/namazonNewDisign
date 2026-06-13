'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR31_1} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC31_1Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.31_1.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.31_1.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.31_1.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <ButtonGallery images={DIR31_1} buttonName={screenshots} />
    </>
  )
}
