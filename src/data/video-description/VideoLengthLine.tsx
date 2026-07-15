'use client'

import React from 'react'
import {useTranslation} from 'react-i18next'

type Props = {
  minutes: number
}

export function VideoLengthLine({minutes}: Props) {
  const {t} = useTranslation('video')

  return (
    <p>{t('details.videoLength', {count: minutes, minutes})}</p>
  )
}
