'use client'

import Link from 'next/link'
import React from 'react'
import {formatNumber} from '@/common/helpers'
import s from './video-area.module.scss'
import cn from 'classnames'
import {Category} from '@/common/types'
import {useAppSelector} from '@/app/store/store'
import {videosSelector} from '@/data/video-data/video-data.slice'
import {videoTitleKey} from '@/data/video-data/video-i18n'
import {useTranslation} from 'react-i18next'

const stylePicker = (category: Category) => {
  switch (category) {
    case 'SUBMISSION WRESTLING':
      return s.blue
    case 'MIXED WRESTLING':
      return s.green
    case 'MMA':
      return s.red
    case 'BOXING':
      return s.violet
    default:
      return ''
  }
}

const VideoArea = () => {
  const {t} = useTranslation('video')
  const {t: tCommon} = useTranslation('common')
  const videos = useAppSelector(videosSelector)

  return (
    <section className="research-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {videos.map((item) => {
            const categoryLabel = t(`categories.${item.category}`, {defaultValue: item.category})
            const title = t(`titles.${videoTitleKey(item.id)}`, {defaultValue: item.title})

            return (
              <div key={item.id} className={cn('col-lg-3 col-md-6', s.videoCol)}>
                <div className={`research-item ${item.color} mb-50p`}>
                  <div className="research-item__thum fix mb-20">
                    <img src={item.img} alt="research-thumb" />
                  </div>
                  <div className={cn('research-item__content', s.researchItemContent)}>
                    <div className={cn(s.previousStyle, stylePicker(item.category))}>
                      {categoryLabel} - NC{item.id}
                    </div>
                    <h4 className="research-item__title mb-20" style={{fontSize: '19px'}}>
                      <Link href={`/video/nc${formatNumber(item.id)}`}>{title}</Link>
                    </h4>
                    {item.des ? <p>{item.des}</p> : null}
                    <Link href={`/video/nc${formatNumber(item.id)}`} className="research-item__btn">
                      {tCommon('readMore')}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default VideoArea
