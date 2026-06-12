'use client'

import sC from '@/common/styles.module.scss'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import {useTranslation} from 'react-i18next'

const BannerArticle = () => {
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
            <div className="tp-breadcrumb">
              <Link className="tp-breadcrumb__element" href="/">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className={sC.return}>{t('article.back')}</span>
              </Link>
              <h2 className={cn(sC.selectedCategory, 'tp-breadcrumb__title')}>{t('article.title')}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerArticle
