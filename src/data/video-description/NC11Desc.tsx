'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR11} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC11Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.11.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>
        <Trans i18nKey="descriptions.11.p2" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery
        images={DIR11}
        buttonName={t('descriptions.11.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
