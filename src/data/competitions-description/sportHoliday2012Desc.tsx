'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_MMA_SPORT_HOLIDAY_1,
  DIR_MMA_SPORT_HOLIDAY_2,
  DIR_MMA_SPORT_HOLIDAY_3,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'sportHoliday-2012'

const linkTais = <Link href="/girls/tais2013" />
const linkKara = <Link href="/girls/kara_teller" />
const linkDarya = <Link href="/girls/darya_balina" />

export const SportHoliday2012Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{br: <br />, linkTais, linkKara, linkDarya}}
          defaults={`Two rating MMA fights were held in our club May 8, 2012. The participants in the fights:<br/><linkTais>Tais</linkTais> (St. Petersburg, 5'7" / 132 lb) – the best fighter of the club, she had never lost before;<br/><linkKara>Kara Teller</linkKara> (Moscow, 5'7" / 119 lb) – a young promising fighter who has by now gained a victory over two girls from the Namazon Club;<br/><linkDarya>Darya Balina</linkDarya> (St. Petersburg, 5'4" / 124 lb) – a newcomer in our competitions, going in hard for ultimate fightings lately.`}
        />
      </p>
      <h5>
        <u>{tr('fight1Title', 'The first fight')}</u> {tr('fight1Match', 'Kara Teller vs Darya Balina')}
      </h5>
      <p>
        {tr(
          'fight1',
          'The fight was already interesting because a newcomer took part in it. The whole first round the girls fought in standing position. The round was won by Kara. She worked on a long distance and she did shake Darya a few times with accurate punches. The start of the second round was similar to the first one, but at the middle of the round the two girls fell down grappling with each other on the floor, and Kara proved to be stronger there.',
        )}
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('fight2Title', 'The second fight')}</u> {tr('fight2Match', 'Kara Teller vs Tais')}
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight2`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Kara</1> and <2>Tais</2> had already met before and knew each other well. During the most part of the match the girls wrestled on the ground. Tais had some advantage, however, Kara defended skillfully. At the end of the first round Tais did not fulfill the command of the ref on the mat, entered into conversation with him and as a result she received a foul. Thus, the first score went to Kara. In the second round Tais managed to use her advantage in wrestling. She defeated Kara via submission with a chokehold. However, after more careful review of the match, the FOUL received by Tais was changed to DISQUALIFICATION. The final victory was awarded to Kara Teller. The total score of their matches became 2-1 in favor of Tais.`}
        />
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'otherEvents',
          'At the festival there were also submission grappling matches (MM, WW, WM) and the contests on legwrestling and pushing the opponent out of the mat.',
        )}
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_3} buttonName={tr('seePhotos', 'See photos')} />
      <p>{tr('mixedPairs', 'Both men and women took part in the grappling matches in MM, WW and WM pairs.')}</p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`If you like such fights, buy our film (<1>VIDEO 18.</1> MMA tournament. May, 2012) on <2>Patreon</2> and you will be able to see everything yourself.`}
        />
      </p>
    </>
  )
}
