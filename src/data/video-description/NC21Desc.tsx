'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NEVSKAYA_ARENA_2} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC21Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.21.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.21.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.21.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      {isRu ? (
        <p>
          <Trans i18nKey="descriptions.21.p3" ns="video" components={{b: <b />}} />
        </p>
      ) : (
        <p>{t('descriptions.21.p3')}</p>
      )}
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={screenshots} />
    </>
  )
}
