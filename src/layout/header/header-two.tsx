'use client'

import Sidebar from '@/common/sidebar'
import useSticky from '../../../hooks/use-sticky'
import cn from 'classnames'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import NavMenu from './nav-menu'
import youtube from '../../../public/assets/img/icon/youtube_small_color.png'
import telegram from '../../../public/assets/img/icon/telegram_color.png'
import x from '../../../public/assets/img/icon/X_logo.png'
import reddit from '../../../public/assets/img/icon/reddit-icon.png'
import s from './header-two.module.scss'
import {Logo} from '@/components/logo/Logo'
import HeaderSlider from './header-slider'
import LanguageSwitcher from '@/components/language-switcher'

const SocialLinks = () => {
  const {t} = useTranslation('header')

  return (
    <div className={`header-top-mob ${s.socialLinks}`}>
      <a className={s.socialLinkGroup} href="https://x.com/NamazonClub">
        <img className={s.socialIconSquare} src={x.src} alt="x" />
        <span>{t('social.x')}</span>
      </a>
      <a className={s.socialLinkGroup} href="https://t.me/namazonclub_channel">
        <img className={s.socialIconSquare} src={telegram.src} alt="telegram" />
        <span>{t('social.telegram')}</span>
      </a>
      <a className={s.socialLinkGroup} href="https://www.reddit.com/r/NamazonClub">
        <img className={s.socialIconSquare} src={reddit.src} alt="reddit" />
        <span>{t('social.reddit')}</span>
      </a>
      <a className={s.socialLinkGroup} href="https://www.youtube.com/@namazonclub">
        <img className={s.socialIcon} src={youtube.src} alt="youtube" />
        <span>{t('social.youtube')}</span>
      </a>
    </div>
  )
}

const HeaderTwo = () => {
  const router = useRouter()
  const [mobileView, setMobileView] = useState(false)
  const isVideoPage = router.pathname === '/video/[videoId]'
  // No sticky header on mobile video pages — keeps header from covering the player.
  const {sticky} = useSticky({disabled: isVideoPage && mobileView})
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Match d-xl-none mobile header breakpoint (1199px).
    const mq = window.matchMedia('(max-width: 1199px)')
    const update = () => setMobileView(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${sticky ? 'header-sticky' : ''} `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <Logo />
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <SocialLinks />
                </div>
                <div className={`tp-bt-btn-banner d-none d-md-block d-xl-none mr-30 ${s.mobileLanguage}`}>
                  <LanguageSwitcher />
                </div>
                <button onClick={() => setIsActive(true)} className="tp-menu-toggle">
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div className={`header-custom ${sticky ? 'header-sticky' : ''}`} id="header-sticky">
          <Logo />
          <div className="header-menu-box">
            <div className={s.headerMenuInner}>
              <div className={s.headerMenuMain}>
                <div className="header-menu-top">
                  <div className={s.headerTopMob}>
                    <SocialLinks />
                  </div>
                </div>
                <div className="header-menu-bottom">
                  <div className={s.navRow}>
                    <div className={cn('main-menu main-menu-second', s.navMenu)}>
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
              <div className={s.headerSlider}>
                <HeaderSlider />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  )
}

export default HeaderTwo
