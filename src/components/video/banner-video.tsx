'use client'

import React from 'react'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {selected_categorySelector, videoActions} from '@/data/video-data/video-data.slice'
import cn from 'classnames'
import sC from '@/common/styles.module.scss'
import {useAppSelector} from '@/app/store/store'
import {useTranslation} from 'react-i18next'

const BannerVideo = () => {
  const {t} = useTranslation('banner')
  const dispatch = useAppDispatch()

  const onAll = () => dispatch(videoActions.allVideos())
  const onWrestling = () => dispatch(videoActions.filterVideos('SUBMISSION WRESTLING'))
  const onMMA = () => dispatch(videoActions.filterVideos('MMA'))
  const onMixedWrestling = () => dispatch(videoActions.filterVideos('MIXED WRESTLING'))

  const selected_category = useAppSelector(selected_categorySelector)

  return (
    <section
      className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
      style={{
        backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className={sC.tpBreadcrumb}>
              <h2 className={sC.title}>{t('video.title')}</h2>
              <div className={sC.group}>
                <div
                  className={cn(sC.element, selected_category === 'ALL' && sC.selectedCategory)}
                  onClick={onAll}
                >
                  {t('video.all')}
                </div>
                <div
                  className={cn(sC.element, selected_category === 'SUBMISSION WRESTLING' && sC.selectedCategory)}
                  onClick={onWrestling}
                >
                  {t('video.wrestling')}
                </div>
                <div
                  className={cn(sC.element, selected_category === 'MMA' && sC.selectedCategory)}
                  onClick={onMMA}
                >
                  {t('video.mma')}
                </div>
                <div
                  className={cn(sC.element, selected_category === 'MIXED WRESTLING' && sC.selectedCategory)}
                  onClick={onMixedWrestling}
                >
                  {t('video.mixedWrestling')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerVideo
