'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR08_1, DIR08_2, DIR08_3} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'beach-2011'

const linkTais = <Link href="/girls/tais2011" />
const linkElena = <Link href="/girls/elena-vasileva" />
const linkIrina = <Link href="/girls/irina" />

export const Beach2011Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{br: <br />, linkTais, linkElena, linkIrina}}
          defaults={`The tournament was held in two rounds without a time limit. The competition featured:<br/>- <linkTais>Tais</linkTais> (5'7" / 130 lb) - a frequent winner of club submission grappling tournaments;<br/>- <linkElena>Elena Vasilyeva</linkElena> (5'6" / 134 lb) - a young and promising Namazonian fighter;<br/>- <linkIrina>Irina (Vlasta)</linkIrina> (5'9" / 154 lb) - a newcomer to our competitions.<br/>Experienced Tais handled her opponents with relative ease, employing various grappling techniques such as chokes and joint locks. Tais secured the 1st place, defeating both Elena and Irina by a score of 2-0.`}
        />
      </p>
      <h5>{tr('pairTaisElena', 'Tais vs. Elena Vasilyeva')}</h5>
      <ButtonGallery images={DIR08_1} buttonName={tr('seePhotos', 'See photos')} />
      <h5>{tr('pairTaisIrina', 'Tais vs. Irina (Vlasta)')}</h5>
      <ButtonGallery images={DIR08_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.secondPlace`}
          components={{br: <br />}}
          defaults={`The battle for 2nd place between Elena and Irina proved to be intense and uncompromising. In their first fight, Elena executed a successful throw, bringing Irina to the ground and eventually securing a victory with a choke. In the second fight, Irina gained the upper hand, persistently attempting to submit Elena, who resiliently defended herself. Eventually, Irina seemed to lose steam or confidence, allowing Elena to escape and gain a dominant position, resulting in Irina conceding the fight.`}
        />
      </p>
      <h5>{tr('pairIrinaElena', 'Irina (Vlasta) vs. Elena Vasilyeva')}</h5>
      <ButtonGallery images={DIR08_3} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.finalResults`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Elena</1> claimed 2nd place, while <2>Irina (Vlasta)</2> secured the 3rd place.`}
        />
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`Curious to see how it all unfolded? Purchase now on <2>Patreon</2> (<1>VIDEO 8.</1> Beach Tournament. Submission Grappling. June, 2011) and witness the action yourself.`}
        />
      </p>
    </>
  )
}
