'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR41_KZ,
  DIR41_VZ,
  DIR_GRAPPLING2014_AWARDS,
  DIR_NC42,
} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import {findCompetitionData} from '@/data/competitions/competitions-data'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'grappling-2014'
const PODIUM_IMG = '/assets/img/competitions/2013_2014/grappling_2014/2014-sg-tournament-winners.jpg'
const grappling2014Data = findCompetitionData('2013_2014', 'grappling-2014')
const grappling2014HeroSrc =
  grappling2014Data?.heroImgRef ?? grappling2014Data?.imgRef ?? ''

const link2014 = <Link href="/competition/2013_2014/tournament-2014" />

export const Grappling2014Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, 2: <b />, 3: <b />, link2014}}
          defaults={`Three girls participated in this October grappling tournament. Two of them had previously competed against each other in <link2014>the grappling tournament for beginners</link2014> held on May 9, 2014, at the club. Once again, <1>Victoria Vardugina</1> (144 lb) emerged as the winner. <2>Christina Shvets</2> (152 lb) secured the 2nd place, an improvement from her previous performance in May. The newcomer to our competitions, <3>Zoya Dorofeeva</3> (124 lb), claimed the 3rd place.`}
        />
      </p>
      {grappling2014HeroSrc && (
        <img
          src={grappling2014HeroSrc}
          alt=""
          className={cn('img-fluid w-100', sC.videosMainImg)}
        />
      )}
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.rules`}
          components={{br: <br />}}
          defaults={`The fights were conducted under Submission Grappling rules, with victories also attainable by pinning an opponent's back to the mat for a 5-count pin.<br/>The tournament consisted of two rounds. Each fight in the first round lasted for 4 minutes. If no winner emerged during the regular time, a 2-minute rest break followed, after which the fight continued for an additional two minutes.<br/>In the second round, after the initial four minutes and another two minutes of rest, the girls battled intensely for an additional 10 minutes of overtime!`}
        />
      </p>
      <p>{tr('photosIntro', 'Below, you can view some snapshots from our intense October tournament.')}</p>
      <h5>
        <u>{tr('pairKristinaZoya', 'Christina Shvets vs Zoya Dorofeeva')}</u>
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.kristinaZoya`}
          components={{br: <br />}}
          defaults={`Despite being a newcomer to our competitions, Zoya was not inexperienced in combat sports. She had several years of training in Russian martial arts. Despite the significant weight difference (Christina - 152 lb, Zoya - 124 lb), both fights between these girls were evenly matched and highly strenuous. In their first-round contest, after the regular four minutes plus two additional minutes, neither opponent could decide the winner, resulting in a draw after six minutes of intense struggle.<br/>However, in the second round, the stronger Christina secured victory over Zoya by pinning her down before the end of the regular time.`}
        />
      </p>
      <ButtonGallery images={DIR41_KZ} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('pairVikaZoya', 'Victoria Vardugina vs Zoya Dorofeeva')}</u>
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.vikaZoya`}
          components={{br: <br />}}
          defaults={`Victoria easily defeated Zoya, submitting her in both rounds within the regular time. It's worth noting that there were moments when Zoya could have taken the initiative and even submitted Victoria, but she couldn't capitalize on those opportunities.`}
        />
      </p>
      <ButtonGallery images={DIR41_VZ} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('pairVikaKristina', 'Victoria Vardugina vs Christina Shvets')}</u>
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.vikaKristina`}
          components={{br: <br />, link2014}}
          defaults={`Christina and Victoria had faced each other five months earlier in <link2014>the grappling tournament for beginners</link2014>, where Victoria emerged victorious after a hard-fought match. Since then, Christina had dedicated herself to training, improving her wrestling skills, strength, and experience, transforming herself into a formidable fighter and a dangerous opponent for others on the mat. Meanwhile, Victoria had reduced her weight, leading to an 8-pound difference by the time of their October rematch. We wondered if Christina could capitalize on this and avenge her previous loss to Victoria. The fight between these two rivals promised to be intriguing, and it lived up to expectations. In the first round, neither regular time nor overtime produced a winner, resulting in a draw. In the second round, Victoria managed to submit Christina with a choke hold on the 10th minute of extra time.<br/>By the end, both wrestlers were exhausted. Their physical conditioning and wrestling endurance were decisive factors in this intense and thrilling final bout.`}
        />
      </p>
      <ButtonGallery images={DIR_NC42} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.results`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults={`As a result, <1>Victoria Vardugina</1>, <2>Christina Shvets</2>, and <3>Zoya Dorofeeva</3> took the 1st, 2nd, and 3rd places respectively.`}
        />
      </p>
      <ButtonGallery images={DIR_GRAPPLING2014_AWARDS} buttonName={tr('awardsPhotos', 'Awards photos')} />
      <img
        src={PODIUM_IMG}
        alt=""
        className={cn('img-fluid w-100', sC.videosMainImg)}
      />
      <p>{tr('podiumCaption', 'From left to right: Zoya, Christina, and Victoria.')}</p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <b />, 3: <a href={LINK_SHOP_MAIN} />}}
          defaults={`Watch the fights Zoya vs Christina and Zoya vs Vika in <1>VIDEO 41</1>, and the fight between Vika and Christina in <2>VIDEO 42</2>. Both videos are available on <3>Patreon</3>.`}
        />
      </p>
    </>
  )
}
