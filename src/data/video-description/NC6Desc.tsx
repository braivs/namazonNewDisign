'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR06} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC6Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.6.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.6.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <ButtonGallery
        images={DIR06}
        buttonName={t('descriptions.6.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
