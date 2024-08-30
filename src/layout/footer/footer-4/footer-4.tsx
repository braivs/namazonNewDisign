import Link from "next/link";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import s from './footer-4.module.scss'

const FooterFour = ({ style_2 = false }) => {
  return (
    <div className={`footer-area ${style_2 ? 'pt-105' : 'tp-footer-white-content theme-bg pt-95'}`}>
      <div>
        <Container>
          <Row className={s.row}>
            <Col xl={4} lg={4} md={6}>
              <div className="tp-footer-widget footer-2-col-1 mb-40">
                <div className="tp-footer-widget__content mb-95">
                  <i>FEEL FREE TO CONTACT US</i>
                  <h4 className="tp-footer-widget__contact mb-20">
                    <a href="mailto:namazonclub@gmail.com">namazonclub@gmail.com</a>
                  </h4>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className="tp-footer-widget footer-2-col-2 mb-40">
                <span className="tp-footer-widget__title mb-15">Useful links</span>
                <div className="tp-footer-widget__links mb-35">
                  <ul>
                    <li>
                      <Link href="/video">Video</Link>
                    </li>
                    <li>
                      <Link href="/girls">Girls</Link>
                    </li>
                    <li>
                      <Link href="https://www.patreon.com/namazon/shop">Shop</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className="tp-footer-widget footer-2-col-4 mb-40">
                <span className="tp-footer-widget__title mb-15">Contact Info</span>
                <div className="tp-footer-widget__social fw-social">
                  <a href="https://t.me/namazonclub">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a href="https://www.youtube.com/@namazonclub">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.facebook.com/groups/namazonclub">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://vk.com/namazon">
                    <i className="fa-brands fa-vk"></i>
                  </a>
                </div>
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
                  © Copyright {new Date().getFullYear()}
                  <Link href="/public"> Namazon club</Link>.
                  <i> All Rights Reserved</i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

//todo: fix adaptive

export default FooterFour;
