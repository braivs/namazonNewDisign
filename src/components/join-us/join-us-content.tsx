'use client'

import React from 'react'
import {Trans, useTranslation} from 'react-i18next'
import s from './join-us.module.scss'

const PATREON_MEMBERSHIP_URL = 'https://www.patreon.com/c/namazon/membership'

const membershipTierIds = ['freshPack', 'videoAccess', 'siyaPack'] as const

const JoinUsContent = () => {
  const {t} = useTranslation('joinUs')

  return (
    <section className="contact-area pt-130 pb-115">
      <div className="container">
        <div className="row justify-content-center g-4">
          {membershipTierIds.map((tierId) => (
            <div key={tierId} className="col-lg-4 col-md-6 col-12">
              <article className={s.membershipCard}>
                <h3 className={s.membershipTitle}>{t(`tiers.${tierId}.title`)}</h3>
                <p className={s.membershipPrice}>{t(`tiers.${tierId}.price`)}</p>
                <p className={s.membershipText}>
                  <Trans
                    i18nKey={`joinUs:tiers.${tierId}.description`}
                    components={{em: <em />}}
                  />
                </p>
                <a
                  className={s.membershipLink}
                  href={PATREON_MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('joinOnPatreon')}
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinUsContent
