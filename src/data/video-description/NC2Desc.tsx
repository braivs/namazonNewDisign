'use client'

import React from 'react'
import Link from 'next/link'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR02} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC2Desc = () => {
  const {t} = useTranslation('video')

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.2.p1"
          ns="video"
          components={{
            link: <Link href="/articles/submission" />,
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <p>
        <Trans i18nKey="descriptions.2.p2" ns="video" components={{b: <b />}} />
      </p>
      <ButtonGallery
        images={DIR02}
        buttonName={t('descriptions.2.screenshots', {defaultValue: 'SCREENSHOTS'})}
      />
    </>
  )
}
