'use client'

import Link from 'next/link'
import {Container, Row, Col} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'
import s from './footer-4.module.scss'
import {SocialIcons} from '@/components/social-icons/SocialIcons'

const FooterFour = ({style_2 = false}) => {
  const {t} = useTranslation(['footer', 'menu'])

  return (
    <div className={`footer-area ${style_2 ? 'pt-105' : 'tp-footer-white-content theme-bg pt-95'}`}>
      <div>
        <Container>
          <Row className={s.row}>
            <Col xl={4} lg={4} md={6}>
              <div className="tp-footer-widget footer-2-col-1 mb-40">
                <div className="tp-footer-widget__content mb-95">
                  <i>{t('footer:contactPrompt')}</i>
                  <h4 className="tp-footer-widget__contact mb-20">
                    <a href="mailto:namazonclub@gmail.com">namazonclub@gmail.com</a>
                  </h4>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className="tp-footer-widget footer-2-col-2 mb-40">
                <span className="tp-footer-widget__title mb-15">{t('footer:usefulLinks')}</span>
                <div className="tp-footer-widget__links mb-35">
                  <ul>
                    <li>
                      <Link href="/video">{t('menu:video')}</Link>
                    </li>
                    <li>
                      <Link href="/girls">{t('menu:girls')}</Link>
                    </li>
                    <li>
                      <Link href="https://www.patreon.com/namazon/shop">{t('menu:shop')}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t('menu:contact')}</Link>
                    </li>
                    <li>
                      <Link href="/join-us">{t('menu:joinUs')}</Link>
                    </li>
                    <li>
                      <Link href="https://www.malevsfemale.org/">
                        {t('footer:mixedWrestlingForum')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className="tp-footer-widget footer-2-col-4 mb-40">
                <span className="tp-footer-widget__title mb-15">{t('footer:contactInfo')}</span>
                <SocialIcons />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-area-bottom fw-border">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} xs={12}>
              <div className="footer-widget__copyright copyright-white">
                <span>
                  {t('footer:copyright')} {new Date().getFullYear()}
                  <Link href="/public"> {t('footer:clubName')}</Link>.
                  <i> {t('footer:rightsReserved')}</i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default FooterFour
