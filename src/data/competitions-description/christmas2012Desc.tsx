'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR09_2,
  DIR09_3,
  DIR_CHRISTMAS2012_1,
  DIR_CHRISTMAS2012_2,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'christmas-2012'

const linkElena = <Link href="/girls/elena_vasileva2013" />
const linkKara = <Link href="/girls/kara_teller" />
const linkTais = <Link href="/girls/tais2013" />

export const Christmas2012Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{linkElena, linkKara, linkTais}}
          defaults={`Three fighters participated in the competition: <linkElena>Elena Vasilyeva</linkElena> (St. Petersburg, 5'6" / 132 lb); <linkKara>Kara Teller</linkKara>, a newcomer from the Namazon Club (Moscow, 5'7" / 119 lb); <linkTais>Tais</linkTais> (St. Petersburg, 5'7" / 130 lb). The tournament was held in a single-round format where each fighter competed in two fights. Each fight consisted of three 4-minute rounds with a 1-minute rest between rounds.`}
        />
      </p>
      <h5>
        <u>{tr('fight1Title', 'The First Fight')}</u> {tr('fight1Match', 'Elena Vasilyeva vs Kara Teller')}
      </h5>
      <p>
        {tr(
          'fight1Round12',
          'In the first two rounds, Elena had the advantage, managing to take Kara down to the mat several times and presenting numerous opportunities to finish the fight on the ground. However, Kara skillfully defended herself throughout.',
        )}
      </p>
      <ButtonGallery images={DIR_CHRISTMAS2012_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'fight1Round3',
          "In the 3rd round, the advantage gradually shifted to Kara. She achieved full-mount on Elena, forcing her to defend herself. During one of Elena\'s attempts to dislodge Kara, the Moscow guest capitalized on Elena\'s unprotected neck and executed a flawless choke.",
        )}
      </p>
      <ButtonGallery images={DIR_CHRISTMAS2012_2} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('fight2Title', 'The Second Fight')}</u> {tr('fight2Match', 'Kara Teller vs Tais')}
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight2`}
          components={{br: <br />}}
          defaults={`Tais defeated Kara in the first round with an aggressive attack primarily consisting of kicks, many of which missed their mark. The fight went to the ground, where Tais secured the dominant position.<br/>While wrestling on top, Tais attempted an armlock. Although Kara managed to free herself, she exposed her neck to Tais, who capitalized on the opportunity and won by chokehold.`}
        />
      </p>
      <ButtonGallery images={DIR09_2} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('fight3Title', 'The Third Fight')}</u> {tr('fight3Match', 'Elena Vasilyeva vs Tais')}
      </h5>
      <p>
        {tr(
          'fight3',
          'The third fight was as brief as the second. Tais had previously defeated Elena in the first round. After taking the fight to the ground, Tais executed her favorite armlock, forcing Elena to submit.',
        )}
      </p>
      <ButtonGallery images={DIR09_3} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.results`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults="As a result, <1>Tais</1> took 1st place, <2>Kara Teller</2> secured 2nd, and <3>Elena Vasilyeva</3> took 3rd place."
        />
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`The girls fought fiercely and without compromise in all three fights. If you enjoy such competitions, purchase our film (<1>VIDEO 9</1>. MMA Tournament "Christmas Cup 2012") on <2>Patreon</2> to witness it all for yourself.`}
        />
      </p>
    </>
  )
}
