'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR04} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC4Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.4.p1"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      {!isRu && <p>{t('descriptions.4.p2')}</p>}
      <ButtonGallery
        images={DIR04}
        buttonName={t('descriptions.4.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
