'use client'

import Link from 'next/link'
import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR40} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC40Desc = () => {
  const {t} = useTranslation('video')
  const screenshots = t('descriptions.40.screenshots', {defaultValue: 'See photos'})

  return (
    <>
      <p>
        <Trans
          i18nKey="descriptions.40.p1"
          ns="video"
          components={{
            b: <b />,
            link39: <Link href="/video/nc39" />,
          }}
        />
      </p>
      <p>
        <Trans
          i18nKey="descriptions.40.p2"
          ns="video"
          components={{
            b: <b />,
            br: <br />,
          }}
        />
      </p>
      <ButtonGallery images={DIR40} buttonName={screenshots} />
    </>
  )
}
