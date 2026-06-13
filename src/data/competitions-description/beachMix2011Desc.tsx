'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR11,
  DIR14_1,
  DIR14_2,
  DIR_BEACH_MIX_2011,
  DIR_BEACH_MIX_2011_2,
  DIR_BEACH_MIX_2011_3,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'beach-mix-2011'

const linkTais = <Link href="/girls/tais2011" />
const linkElena = <Link href="/girls/elena-vasileva" />

export const BeachMix2011Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, 2: <b />, br: <br />, linkTais, linkElena}}
          defaults={`The tournament was held in two rounds on a beach, with each fight having no time limit. Four fighters participated in the official part of the tournament: <linkTais>Tais</linkTais> (5'7" / 130 lb) - a repeated winner of club tournaments in submission grappling and champion in kickboxing, karate, and sanda competitions, <linkElena>Elena Vasilyeva</linkElena> (5'6" / 135 lb) - a young and promising fighter from Namazon, <1>Alex</1> (5'9" / 154 lb), and <2>Villian</2> (5'8" / 177 lb), both experienced male wrestlers in submission grappling competitions. Villian defeated Alex in both of their fights.`}
        />
      </p>
      <h5>{tr('pairVillianAlex', 'Villian vs Alex')}</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011} buttonName={tr('seePhotos', 'See photos')} />
      <p>{tr('villianElenaSoft', 'Villian wrestled Elena with some leniency, allowing her to showcase her attacking prowess.')}</p>
      <h5>{tr('pairVillianElena', 'Villian vs Elena Vasilyeva')}</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>{tr('villianElenaResult', 'Nevertheless, Villian ultimately won 2-0.')}</p>
      <p>
        {tr(
          'taisWins',
          'Tais also secured victories over both Elena Vasilyeva and Alex. While Villian won all his fights by chokes, Tais utilized a variety of techniques including chokes, body scissors, neck scissors, and other joint locks.',
        )}
      </p>
      <h5>{tr('pairTaisElena', 'Tais vs Elena Vasilyeva')}</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011_3} buttonName={tr('seePhotos', 'See photos')} />
      <h5>{tr('pairTaisAlex', 'Tais vs Alex')}</h5>
      <ButtonGallery images={DIR14_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'taisVillian',
          'The outcome of the tournament was decided by the two matches between Villian and Tais. Villian won the first, Tais won the second, resulting in a draw for the top positions.',
        )}
      </p>
      <h5>{tr('pairTaisVillian', 'Tais vs Villian')}</h5>
      <ButtonGallery images={DIR14_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'thirdPlace',
          'The battle for the 3rd place between Elena Vasilyeva and Alex was particularly fierce. Their first fight lasted over 12 minutes, and the organizers regretted not dividing the fights into rounds. In the end, Elena won by a choke hold.',
        )}
      </p>
      <h5>{tr('pairElenaAlex', 'Elena Vasilyeva vs Alex')}</h5>
      <ButtonGallery images={DIR11} buttonName={tr('seePhotos', 'See photos')} />
      <p>{tr('elenaThird', 'Elena also won the second fight, securing the 3rd place with a 2-0 result.')}</p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <a href={LINK_SHOP_MAIN} />, 2: <b />, 3: <b />}}
          defaults={`Visit our store on <1>Patreon</1> to purchase the full video of Elena Vasilyeva's match against Alex (<2>VIDEO 11.</2> Alex vs. Elena Vasilyeva. Mixed Beach Wrestling. July, 2011), and also the full videos of three matches featuring Tais against men (<3>VIDEO 14.</3> Two Men Against One Woman. Mixed Wrestling. Part 1. 2011).`}
        />
      </p>
    </>
  )
}
