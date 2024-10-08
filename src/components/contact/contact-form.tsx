import Link from "next/link";
import React from "react";


// contact_info
const contact_info = {
  email: 'namazonclub@gmail.com',
  telegram: "@namazonclub",
  telegram_link: 'https://t.me/namazonclub',
  facebook: "namazonclub",
  facebook_link: 'https://www.facebook.com/groups/namazonclub',
  vk: 'namazon',
  vk_link: 'https://vk.com/namazon',
};

const { email, telegram,  telegram_link, facebook, facebook_link, vk, vk_link } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            {/* Column for email */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/mail.png" alt="Address Icon" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Email</h4>
                    <span>
                      <Link href={`mailto:${email}`}>{email}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column for telegram */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/telegram.png" alt="Phone Icon" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Telegram</h4>
                    <span>
                      <a href={telegram_link}>{telegram}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column for Facebook */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/facebook.png" alt="Opening Hours Icon" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Facebook</h4>
                    <span>
                      <a href={facebook_link}>{facebook}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column for Facebook */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="tpcontact mr-60 mb-60">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/vk.jpg" alt="Opening Hours Icon" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">VK</h4>
                    <span>
                      <a href={vk_link}>{vk}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
