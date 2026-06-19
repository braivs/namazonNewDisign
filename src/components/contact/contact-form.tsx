'use client'

import React from 'react'
import {useTranslation} from 'react-i18next'
import styles from './contactForm.module.scss'


// contact_info
const contact_info = {
  email: 'namazonclub@gmail.com',
  telegram: "@namazonclub",
  telegramChannel: "@namazonclub_channel",
  telegram_link: 'https://t.me/namazonclub',
  telegramChannel_link: 'https://t.me/namazonclub_channel',
  youtube: '@namazonclub',
  youtube_link: 'https://www.youtube.com/@namazonclub',
  facebook: "namazonclub",
  facebook_link: 'https://www.facebook.com/groups/namazonclub',
  x: 'namazonclub',
  x_link: 'https://x.com/namazonclub',
  reddit: 'r/NamazonClub',
  reddit_link: 'https://www.reddit.com/r/NamazonClub',
  vk: 'namazon',
  vk_link: 'https://vk.com/namazon',
};

const {
  email,
  telegram,
  telegramChannel,
  telegram_link,
  telegramChannel_link,
  youtube,
  youtube_link,
  facebook,
  facebook_link,
  x,
  x_link,
  reddit,
  reddit_link,
  vk,
  vk_link,
} = contact_info;

type ContactCardProps = {
  title: string
  href: string
  value: string
  iconSrc: string
  iconAlt: string
  iconClassName?: string
}

const ContactCard = ({title, href, value, iconSrc, iconAlt, iconClassName}: ContactCardProps) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="tpcontact mr-60 mb-60">
        <div className="tpcontact__item text-center">
          <div className="tpcontact__icon mb-20">
            <img src={iconSrc} alt={iconAlt} className={iconClassName}/>
          </div>
          <div className="tpcontact__address">
            <h4 className="tpcontact__title mb-15">{title}</h4>
            <span>
              <a href={href}>{value}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

type ContactCardConfig = ContactCardProps & {
  id: string
  titleKey?: string
}

const contactCards: ContactCardConfig[] = [
  {
    id: 'email',
    title: 'Email',
    href: `mailto:${email}`,
    value: email,
    iconSrc: '/assets/img/icon/mail.png',
    iconAlt: 'Email Icon',
  },
  {
    id: 'telegram',
    title: 'Telegram',
    href: telegram_link,
    value: telegram,
    iconSrc: '/assets/img/icon/telegram.png',
    iconAlt: 'Telegram Icon',
  },
  {
    id: 'telegramChannel',
    titleKey: 'telegramChannel',
    title: 'Telegram channel',
    href: telegramChannel_link,
    value: telegramChannel,
    iconSrc: '/assets/img/icon/telegram.png',
    iconAlt: 'Telegram Icon',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    href: youtube_link,
    value: youtube,
    iconSrc: '/assets/img/icon/youtube_512_black.png',
    iconAlt: 'YouTube Icon',
    iconClassName: styles.x,
  },
  {
    id: 'facebook',
    title: 'Facebook',
    href: facebook_link,
    value: facebook,
    iconSrc: '/assets/img/icon/facebook.png',
    iconAlt: 'Facebook Icon',
  },
  {
    id: 'vk',
    title: 'VK',
    href: vk_link,
    value: vk,
    iconSrc: '/assets/img/icon/vk.jpg',
    iconAlt: 'VK Icon',
  },
  {
    id: 'x',
    title: 'X',
    href: x_link,
    value: x,
    iconSrc: '/assets/img/icon/X_logo.png',
    iconAlt: 'X Icon',
    iconClassName: styles.x,
  },
  {
    id: 'reddit',
    title: 'Reddit',
    href: reddit_link,
    value: reddit,
    iconSrc: '/assets/img/icon/reddit_black_logo_icon.png',
    iconAlt: 'Reddit Icon',
    iconClassName: styles.x,
  },
]

const ContactForm = () => {
  const {t} = useTranslation('contact')

  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            {contactCards.map((card) => (
              <ContactCard
                key={card.id}
                {...card}
                title={card.titleKey ? t(card.titleKey) : card.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
