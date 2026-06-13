'use client'

import Link from 'next/link'
import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR36} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC36Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.36.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.36.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.36.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
            link33: <Link href="/video/nc33" />,
          }}
        />
      </p>
      <p>
        {isRu ? (
          t('descriptions.36.p3')
        ) : (
          <Trans
            i18nKey="descriptions.36.p3"
            ns="video"
            components={{
              b: <b />,
              br: <br />,
            }}
          />
        )}
      </p>
      <ButtonGallery images={DIR36} buttonName={screenshots} />
      <p>{t('descriptions.36.p4')}</p>
    </>
  )
}
