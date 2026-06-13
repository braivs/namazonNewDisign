'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR17_1, DIR17_2, DIR17_3} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'mma-2012'

const linkKara = <Link href="/girls/kara_teller" />

export const Mma2012Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, br: <br />, linkKara}}
          defaults={`<1>Svetlana Solovyova</1> (St. Petersburg, 5'7" / 124 lb) excels in striking combat sports like boxing and kickboxing, showcasing impressive physical strength with a hand grip measure exceeding her own body weight.<br/><linkKara>Kara Teller</linkKara> (Moscow, 5'7" / 121 lb) is a familiar face in competitions in St. Petersburg, known for her "street fight" style.`}
        />
      </p>
      <p>
        {tr(
          'fight1',
          "Initially, during the stand-up exchanges where blows and kicks were traded, Svetlana managed to hold her own against Kara. However, once the fight transitioned to the ground, Kara's experience and technique became apparent. Kara secured victory with a choke hold at 1:13.",
        )}
      </p>
      <ButtonGallery images={DIR17_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.extraFightIntro`}
          components={{1: <b />, 2: <b />}}
          defaults={`Since Kara's bout with Svetlana was relatively short and not too taxing for the fighters, an additional, unscheduled MMA fight between <1>Kara</1> and <2>Tais</2> (St. Petersburg, 5'7" / 132 lb) was arranged.`}
        />
      </p>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.karaTais`}
          components={{br: <br />}}
          defaults={`This was their second encounter on the mat. In their previous match, Tais had emerged victorious over Kara. The rematch proved even more intense and enduring, lasting significantly longer. While Kara managed to gain moments of control intermittently, she ultimately couldn't withstand Tais's formidable strength and grappling ability. After a few minutes of fierce struggle, Tais secured another victory over Kara with a choke hold.`}
        />
      </p>
      <ButtonGallery images={DIR17_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.grapplingIntro`}
          components={{1: <b />, 2: <b />}}
          defaults="To conclude the event, <1>Kara Teller</1> and <2>Svetlana Solovyova</2> faced off in a submission grappling match."
        />
      </p>
      <ButtonGallery images={DIR17_3} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'grapplingResult',
          "The match ended in a draw. Despite Svetlana's superior physical strength, Kara's skill prevented her from securing a victory, and Kara's technical ability was insufficient to overcome Svetlana's power. Perhaps with less fatigue, the outcome could have been different.",
        )}
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`You can purchase a video featuring Kara's MMA fights against Svetlana and Tais, as well as her submission grappling bout with Svetlana, from our online store on <2>Patreon</2> (<1>VIDEO 17.</1> MMA and Submission Grappling).`}
        />
      </p>
    </>
  )
}
