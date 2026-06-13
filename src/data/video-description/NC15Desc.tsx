'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR15} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC15Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.15.p1"
          ns="video"
          components={{
            link11: <Link href="/video/nc11" />,
            link14: <Link href="/video/nc14" />,
            b: <b />,
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.15.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      {!isRu && <p>{t('descriptions.15.p3')}</p>}
      <ButtonGallery
        images={DIR15}
        buttonName={t('descriptions.15.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
