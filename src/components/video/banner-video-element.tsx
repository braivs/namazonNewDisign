'use client'

import React from 'react'
import cn from 'classnames'
import sC from '@/common/styles.module.scss'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next'

export const BannerVideoElement = () => {
  const {t} = useTranslation('banner')

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
            <div className={cn(sC.videoDetailsBreadcrumb, 'tp-breadcrumb')}>
              <Link className="tp-breadcrumb__element" href="/video">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className={sC.return}>{t('video.back')}</span>
              </Link>
              <h2 className={cn(sC.selectedCategory, 'tp-breadcrumb__title')}>{t('video.details')}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
