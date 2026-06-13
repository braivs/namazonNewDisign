'use client'

import Link from 'next/link'
import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR39} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC39Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.39.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.39.p1"
          ns="video"
          components={{
            b: <b />,
            link38: <Link href="/video/nc38" />,
          }}
        />
      </p>
      <p>
        {isRu ? (
          <Trans
            i18nKey="descriptions.39.p2"
            ns="video"
            components={{
              b: <b />,
              br: <br />,
            }}
          />
        ) : (
          t('descriptions.39.p2')
        )}
      </p>
      <ButtonGallery images={DIR39} buttonName={screenshots} />
    </>
  )
}
