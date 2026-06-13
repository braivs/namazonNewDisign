'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR01} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC1Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.1.p1"
          ns="video"
          components={{
            link: <Link href="/articles/submission" />,
            b: <b />,
          }}
        />
      </p>
      <p>
        <Trans i18nKey="descriptions.1.p2" ns="video" components={{b: <b />}} />
      </p>
      {isRu && <p>{t('descriptions.1.p3')}</p>}
      <ButtonGallery
        images={DIR01}
        buttonName={t('descriptions.1.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
