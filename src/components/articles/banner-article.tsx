import sC from '@/common/styles.module.scss'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

const BannerArticle = () => {
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
                <span className={sC.return}>HOME</span>
              </Link>
              <h2 className={cn(sC.selectedCategory, 'tp-breadcrumb__title')}>ARTICLE</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerArticle
