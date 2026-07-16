'use client'

import React from 'react'
import {useTranslation} from 'react-i18next'

type Props = {
  duration: number | string
}

export function VideoDurationLine({duration}: Props) {
  const {t} = useTranslation('video')

  if (typeof duration === 'string') {
    const exact = duration.trim()
    if (!exact) {
      return null
    }

    return <p>{t('details.videoDurationExact', {duration: exact})}</p>
  }

  return <p>{t('details.videoDuration', {count: duration, minutes: duration})}</p>
}
