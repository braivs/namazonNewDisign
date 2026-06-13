'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR03_1, DIR03_2, DIR03_3} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'beach-mix-2010'
const IMG_MAIN = '/assets/img/videoGallery/03mix/wm1/12.jpg'

const linkNatalia = <Link href="/girls/natalia-mysik" />
const linkTais = <Link href="/girls/tais2011" />

export const BeachMix2010Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={IMG_MAIN} alt="" className={sC.videosMainImg} />
      </div>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, br: <br />, linkNatalia, linkTais}}
          defaults={`<linkNatalia>Natalia Mysik</linkNatalia> (5'11" / 154 lb) and <linkTais>Tais</linkTais> (5'7" / 132 lb) represented the Namazon Club. <1>Alex</1> (5'9" / 150 lb) from Moscow was the male participant. The competition unfolded in three rounds without a time limit for each fight. Matches continued until one opponent submitted through joint locks or chokes.<br/>Natalia and Alex went first on the slightly damp sand. Alex brought Natalia down and made her submit — an unexpected result for Natalia, who had apparently expected an easy win.<br/>Angered by the defeat, Natalia wrestled Alex very confidently in the second and third rounds, pinning him to the sand and eliminating his ability to resist.<br/>The overall score was 2-1 in favor of Natalia Mysik.`}
        />
      </p>
      <h5>{tr('pairAlexNatalia', 'Alex vs Natalia Mysik')}</h5>
      <ButtonGallery images={DIR03_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.taisVsAlex`}
          components={{br: <br />}}
          defaults={`Tais gave our guest from Moscow no chance of victory. Complete domination by Tais — the fights ended with chokes or an elbow lock.<br/>As a result, Tais defeated Alex 3-0.`}
        />
      </p>
      <h5>{tr('pairAlexTais', 'Alex vs Tais')}</h5>
      <ButtonGallery images={DIR03_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.nataliaVsTais`}
          components={{br: <br />}}
          defaults={`The first two fights between Natalia Mysik and Tais were quite dramatic. Once the loose sand let Tais down, and Tais made a couple of mistakes herself. Natalia had good chances to win on the sand (in groundwork). However, although Natalia tried hard, she could not capitalize on the advantageous moments and lost.<br/>In the final round, Natalia's fatigue showed, and Tais won convincingly.<br/>There were no surprises — Tais defeated Natalia Mysik with an overall score of 3-0.`}
        />
      </p>
      <h5>{tr('pairNataliaTais', 'Natalia Mysik vs Tais')}</h5>
      <ButtonGallery images={DIR03_3} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.results`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults={`Thus, <1>Tais</1> took 1st place, <2>Natalia Mysik</2> took 2nd, and <3>Alex</3> took 3rd.`}
        />
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`The video of the mixed beach tournament featuring two Namazon girls (Natalia Mysik and Tais) and Alex (<1>VIDEO 3</1>) is available for purchase in our online store on <2>Patreon</2>.`}
        />
      </p>
    </>
  )
}
