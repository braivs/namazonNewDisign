'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_CHRISTMAS_2011_1, DIR_CHRISTMAS_2011_2} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'christmas-2011'

const linkNatalia = <Link href="/girls/natalia-mysik" />
const linkTais = <Link href="/girls/tais2013" />

export const Christmas2011Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, 2: <b />, 3: <b />, 4: <b />, br: <br />}}
          defaults={`The Submission Grappling tournament <1>"Christmas Cup 2011"</1>, organized by the Namazon Club and Kempo-Kan School of Martial Arts, took place on January 6, 2011, in a school sports hall. The tournament featured two rounds and included the following participants: <2>Natalia Mysik</2> (5'11" / 154 lb), <3>Ksenia Voloshina</3> (5'3" / 141 lb), and <4>Valentina Perfilyeva</4> (5'8" / 139 lb).<br/>One notable feature of the competition was the significant disparity in weight and height among the wrestlers. Natalia, being much heavier and taller than her opponents, frequently utilized her size advantage to secure pinning holds, especially School Girl Pins, which she would then convert into armlocks or chokes. One of these chokes even resulted in her opponent being knocked out.`}
        />
      </p>
      <ButtonGallery images={DIR_CHRISTMAS_2011_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.results`}
          components={{br: <br />, linkTais, linkNatalia}}
          defaults={`Natalia emerged victorious in the tournament, with Ksenia and Valentina taking 2nd and 3rd places respectively.<br/>Additionally, there was a prize fight between <linkTais>Tais</linkTais> (5'7" / 127 lb) and <linkNatalia>Natalia Mysik</linkNatalia> (5'11" / 154 lb).`}
        />
      </p>
      <ButtonGallery images={DIR_CHRISTMAS_2011_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>{tr('taisWin', 'Natalia, having been exhausted from her tournament victory, was convincingly defeated by Tais in their subsequent fight.')}</p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`If you enjoy watching long pinning holds, head scissors, and chokes in women's fights, you will appreciate the video recording of this tournament. Want to witness all the action? Purchase now on <2>Patreon</2> (<1>VIDEO 4.</1> "Christmas Cup 2011". Tournament on Submission Grappling) and experience it for yourself.`}
        />
      </p>
    </>
  )
}
