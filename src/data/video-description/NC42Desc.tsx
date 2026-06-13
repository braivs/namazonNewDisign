'use client'

import Link from 'next/link'
import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NC42} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC42Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.42.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.42.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.42.p2"
          ns="video"
          components={{
            b: <b />,
            link36: <Link href="/video/nc36" />,
          }}
        />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.42.p3')}</p>
          <p>{t('descriptions.42.p4')}</p>
        </>
      ) : (
        <>
          <p>
            <Trans
              i18nKey="descriptions.42.p3"
              ns="video"
              components={{
                b: <b />,
                br: <br />,
              }}
            />
          </p>
          <p>{t('descriptions.42.p4')}</p>
        </>
      )}
      <ButtonGallery images={DIR_NC42} buttonName={screenshots} />
    </>
  )
}
