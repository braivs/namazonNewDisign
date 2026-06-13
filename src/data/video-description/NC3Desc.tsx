'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR03_1, DIR03_2, DIR03_3} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC3Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'
  const screenshots = t('descriptions.3.screenshots', {defaultValue: 'SCREENSHOTS'})

  if (isRu) {
    return (
      <>
        <p>
          <Trans i18nKey="descriptions.3.p1" ns="video" components={{b: <b />}} />
        </p>
        <p>
          <Trans
            i18nKey="descriptions.3.p2"
            ns="video"
            components={{
              link: <Link href="/articles/submission" />,
              b: <b />,
            }}
          />
        </p>
        <h5>{t('descriptions.3.section1')}</h5>
        <ButtonGallery images={DIR03_3} buttonName={screenshots} />
      </>
    )
  }

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.3.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>{t('descriptions.3.p2')}</p>
      <p>
        <Trans i18nKey="descriptions.3.p3" ns="video" components={{b: <b />}} />
      </p>
      <h5>{t('descriptions.3.section1')}</h5>
      <ButtonGallery images={DIR03_1} buttonName={screenshots} />
      <h5>{t('descriptions.3.section2')}</h5>
      <ButtonGallery images={DIR03_2} buttonName={screenshots} />
      <h5>{t('descriptions.3.section3')}</h5>
      <ButtonGallery images={DIR03_3} buttonName={screenshots} />
    </>
  )
}
