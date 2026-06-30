'use client'

import FooterFour from '@/layout/footer/footer-4/footer-4'
import HeaderTwo from '@/layout/header/header-two'
import React from 'react'
import {useTranslation} from 'react-i18next'
import s from './vladimir-ustimov-memory.module.scss'

const VladimirUstimovMemory = () => {
  const {t} = useTranslation('memory')

  return (
    <>
      <HeaderTwo />
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: 'url(/assets/img/banner/breadcrumb-01.jpg)',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-10 col-12">
              <div className={`tp-breadcrumb ${s.bannerBreadcrumb}`}>
                <h2 className="tp-breadcrumb__title">{t('vladimirUstimov.title')}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`contact-area pt-130 pb-115 ${s.section}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10 col-12">
              <article className={s.card}>
                <img
                  className={s.photo}
                  src="/assets/img/Vladimir_Ustimov_grey.jpg"
                  alt={t('vladimirUstimov.name')}
                />
                <div className={s.content}>
                  <p className={s.kicker}>{t('vladimirUstimov.kicker')}</p>
                  <h3 className={s.name}>{t('vladimirUstimov.name')}</h3>
                  <p className={s.text}>{t('vladimirUstimov.text')}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  )
}

export default VladimirUstimovMemory
