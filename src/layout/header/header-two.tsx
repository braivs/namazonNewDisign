import Sidebar from "@/common/sidebar"
import useSticky from "../../../hooks/use-sticky"
import React, {useState} from "react"
import NavMenu from "./nav-menu"
import youtube from '../../../public/assets/img/icon/youtube_small_color.png'
import telegram from '../../../public/assets/img/icon/telegram_color.png'
import x from '../../../public/assets/img/icon/X_logo.png'
import s from './header-two.module.scss'
import {Logo} from "@/components/logo/Logo"

const Youtube = () => {
  return (
    <div className={`header-top-mob ${s.socialLinks}`}>
      <div className={s.socialLinkGroup}>
        <img className={s.socialIcon} src={youtube.src} alt="youtube"/>
        <span>YouTube:</span>
        <a href="https://www.youtube.com/@namazonclub"> @namazonclub </a>
      </div>
      <div className={s.socialLinkGroup}>
        <img className={s.socialIconSquare} src={telegram.src} alt="telegram"/>
        <span>TG: </span>
        <a href="https://t.me/namazonclub_channel">@namazonclub_channel </a>
      </div>
      <div className={s.socialLinkGroup}>
        <img className={s.socialIconSquare} src={x.src} alt="x"/>
        <span>X.COM: </span>
        <a href="https://x.com/NamazonClub">namazonclub </a>
      </div>
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
            <div className="header-menu-top">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className={s.headerTopMob}>
                    <Youtube/>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-menu-bottom">
              <div className="row">
                <div className="col-lg-7">
                  <div className="main-menu main-menu-second">
                    <nav id="mobile-menu">
                      <NavMenu/>
                    </nav>
                  </div>
                </div>
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
