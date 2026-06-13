'use client'

import Link from 'next/link'
import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR37} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC37Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.37.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      {!isRu && <p>{t('descriptions.37.intro')}</p>}
      <p>
        {isRu ? (
          <Trans i18nKey="descriptions.37.p1" ns="video" components={{b: <b />}} />
        ) : (
          <Trans
            i18nKey="descriptions.37.p1"
            ns="video"
            components={{
              b: <b />,
              link36: <Link href="/video/nc36" />,
            }}
          />
        )}
      </p>
      {isRu ? (
        <p>{t('descriptions.37.p2')}</p>
      ) : (
        <>
          <p>{t('descriptions.37.p2')}</p>
          <p>{t('descriptions.37.p3')}</p>
        </>
      )}
      <ButtonGallery images={DIR37} buttonName={screenshots} />
      <p>{t(isRu ? 'descriptions.37.p3' : 'descriptions.37.p4')}</p>
    </>
  )
}
