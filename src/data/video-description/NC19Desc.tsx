'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR19} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC19Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.19.p1"
          ns="video"
          components={{
            link1: (
              <a href="http://www.spb-ac.ru/var.htm" target="_blank" rel="noopener noreferrer" />
            ),
            link2: (
              <a
                href="https://warnet.ws/2007/07/13/varvara-akulova-samaya-silnaya-devochka-na-planete-39-foto.html"
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
            linkTais: <Link href="/girls/tais2013" />,
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.19.p2')}</p>
          <p>
            <Trans
              i18nKey="descriptions.19.p3"
              ns="video"
              components={{
                b: <b />,
                br: <br />,
              }}
            />
          </p>
        </>
      ) : (
        <>
          <p>
            <Trans
              i18nKey="descriptions.19.p2"
              ns="video"
              components={{
                linkTais: <Link href="/girls/tais2013" />,
                b: <b />,
              }}
            />
          </p>
          <p>
            <Trans i18nKey="descriptions.19.p3" ns="video" components={{b: <b />}} />
          </p>
          <p>{t('descriptions.19.p4')}</p>
        </>
      )}
      <ButtonGallery
        images={DIR19}
        buttonName={t('descriptions.19.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
