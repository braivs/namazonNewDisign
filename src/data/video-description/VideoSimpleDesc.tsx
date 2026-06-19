'use client'

import React from 'react'
import {Trans, useTranslation} from 'react-i18next'
import {videoTitleKey} from '@/data/video-data/video-i18n'

type Props = {
  id: number
}

export function VideoSimpleDesc({id}: Props) {
  const {t} = useTranslation('video')
  const key = videoTitleKey(id)
  const i18nKey = `descriptions.${key}.p1`

  if (!t(i18nKey, {defaultValue: ''})) {
    return null
  }

  return (
    <p>
      <Trans i18nKey={i18nKey} ns="video" components={{br: <br />}} />
    </p>
  )
}
