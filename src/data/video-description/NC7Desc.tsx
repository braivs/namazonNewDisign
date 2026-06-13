'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR07} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC7Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      {isRu ? (
        <>
          <p>
            <Trans i18nKey="descriptions.7.p1" ns="video" components={{b: <b />}} />
          </p>
          <p>
            <Trans i18nKey="descriptions.7.p2" ns="video" components={{b: <b />}} />
          </p>
          <p>
            <Trans i18nKey="descriptions.7.p3" ns="video" components={{b: <b />}} />
          </p>
        </>
      ) : (
        <>
          <p>
            <Trans
              i18nKey="descriptions.7.p1"
              ns="video"
              components={{
                link: <Link href="/video/nc03" />,
                b: <b />,
                br: <br />,
              }}
            />
          </p>
          <p>{t('descriptions.7.p2')}</p>
        </>
      )}
      <ButtonGallery
        images={DIR07}
        buttonName={t('descriptions.7.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
