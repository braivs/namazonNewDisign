import Sidebar from "@/common/sidebar"
import useSticky from "../../../hooks/use-sticky"
import cn from "classnames"
import React, {useState} from "react"
import NavMenu from "./nav-menu"
import youtube from '../../../public/assets/img/icon/youtube_small_color.png'
import telegram from '../../../public/assets/img/icon/telegram_color.png'
import x from '../../../public/assets/img/icon/X_logo.png'
import reddit from '../../../public/assets/img/icon/reddit-icon.png'
import s from './header-two.module.scss'
import {Logo} from "@/components/logo/Logo"
import HeaderSlider from './header-slider'
import LanguageSwitcher from '@/components/language-switcher'

const Youtube = () => {
  return (
    <div className={`header-top-mob ${s.socialLinks}`}>
      <a className={s.socialLinkGroup} href="https://x.com/NamazonClub">
        <img className={s.socialIconSquare} src={x.src} alt="x"/>
        <span>X.com</span>
      </a>
      <a className={s.socialLinkGroup} href="https://t.me/namazonclub_channel">
        <img className={s.socialIconSquare} src={telegram.src} alt="telegram"/>
        <span>Telegram</span>
      </a>
      <a className={s.socialLinkGroup} href="https://www.reddit.com/r/NamazonClub">
        <img className={s.socialIconSquare} src={reddit.src} alt="reddit"/>
        <span>Reddit</span>
      </a>
      <a className={s.socialLinkGroup} href="https://www.youtube.com/@namazonclub">
        <img className={s.socialIcon} src={youtube.src} alt="youtube"/>
        <span>YouTube</span>
      </a>
    </div>
  )
}

const HeaderTwo = () => {
  const {sticky} = useSticky()
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
          sticky ? "header-sticky" : ""
        } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <Logo/>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <Youtube/>
                </div>
                <div className={`tp-bt-btn-banner d-none d-md-block d-xl-none mr-30 ${s.mobileLanguage}`}>
                  <LanguageSwitcher/>
                </div>
                <button
                  onClick={() => setIsActive(true)}
                  className="tp-menu-toggle"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div
          className={`header-custom ${sticky ? "header-sticky" : ""}`}
          id="header-sticky"
        >
          <Logo/>
          <div className="header-menu-box">
            <div className={s.headerMenuInner}>
              <div className={s.headerMenuMain}>
                <div className="header-menu-top">
                  <div className={s.headerTopMob}>
                    <Youtube/>
                  </div>
                </div>
                <div className="header-menu-bottom">
                  <div className={s.navRow}>
                    <div className={cn('main-menu main-menu-second', s.navMenu)}>
                      <nav id="mobile-menu">
                        <NavMenu/>
                      </nav>
                    </div>
                    <LanguageSwitcher/>
                  </div>
                </div>
              </div>
              <div className={s.headerSlider}>
                <HeaderSlider/>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive}/>
      {/* side bar end */}
    </>
  )
}

export default HeaderTwo
