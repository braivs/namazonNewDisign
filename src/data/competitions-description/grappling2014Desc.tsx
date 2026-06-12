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

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const PODIUM_IMG = '/assets/img/competitions/2013_2014/grappling_2014/2014-sg-tournament-winners.jpg'
const grappling2014Data = findCompetitionData('2013_2014', 'grappling-2014')
const grappling2014HeroSrc =
  grappling2014Data?.heroImgRef ?? grappling2014Data?.imgRef ?? ''

export const Grappling2014Desc: React.FC = () => {
  return (
    <>
      <p>
        Three girls participated in this October grappling tournament. Two of them had previously competed against each
        other in{' '}
        <Link href="/competition/2013_2014/tournament-2014">the grappling tournament for beginners</Link>{' '}
        held on May 9, 2014, at the club. Once again, Victoria Vardugina (144 lb) emerged as the winner. Christina
        Shvets (152 lb) secured the 2nd place, an improvement from her previous performance in May. The newcomer to our
        competitions, Zoya Dorofeeva (124 lb), claimed the 3rd place.
      </p>
      {grappling2014HeroSrc && (
        <img
          src={grappling2014HeroSrc}
          alt=""
          className={cn('img-fluid w-100', sC.videosMainImg)}
        />
      )}
      <p>
        The fights were conducted under Submission Grappling rules, with victories also attainable by pinning an
        opponent&apos;s back to the mat for a 5-count pin.
        <br />
        The tournament consisted of two rounds. Each fight in the first round lasted for 4 minutes. If no winner emerged
        during the regular time, a 2-minute rest break followed, after which the fight continued for an additional two
        minutes.
        <br />
        In the second round, after the initial four minutes and another two minutes of rest, the girls battled intensely
        for an additional 10 minutes of overtime!
      </p>
      <p>Below, you can view some snapshots from our intense October tournament.</p>
      <h5><u>Christina Shvets vs Zoya Dorofeeva</u></h5>
      <p>
        Despite being a newcomer to our competitions, Zoya was not inexperienced in combat sports. She had several years
        of training in Russian martial arts. Despite the significant weight difference (Christina - 152 lb, Zoya - 124 lb),
        both fights between these girls were evenly matched and highly strenuous. In their first-round contest, after the
        regular four minutes plus two additional minutes, neither opponent could decide the winner, resulting in a draw
        after six minutes of intense struggle.
        <br />
        However, in the second round, the stronger Christina secured victory over Zoya by pinning her down before the end
        of the regular time.
      </p>
      <ButtonGallery images={DIR41_KZ} buttonName="See photos" />
      <h5><u>Victoria Vardugina vs Zoya Dorofeeva</u></h5>
      <p>
        Victoria easily defeated Zoya, submitting her in both rounds within the regular time. It&apos;s worth noting that
        there were moments when Zoya could have taken the initiative and even submitted Victoria, but she couldn&apos;t capitalize
        on those opportunities.
      </p>
      <ButtonGallery images={DIR41_VZ} buttonName="See photos" />
      <h5><u>Victoria Vardugina vs Christina Shvets</u></h5>
      <p>
        Christina and Victoria had faced each other five months earlier in{' '}
        <Link href="/competition/2013_2014/tournament-2014">the grappling tournament for beginners</Link>, where
        Victoria emerged victorious after a hard-fought match. Since then, Christina had dedicated herself to training,
        improving her wrestling skills, strength, and experience, transforming herself into a formidable fighter and a
        dangerous opponent for others on the mat. Meanwhile, Victoria had reduced her weight, leading to an 8-pound
        difference by the time of their October rematch. We wondered if Christina could capitalize on this and avenge her
        previous loss to Victoria. The fight between these two rivals promised to be intriguing, and it lived up to
        expectations. In the first round, neither regular time nor overtime produced a winner, resulting in a draw. In the
        second round, Victoria managed to submit Christina with a choke hold on the 10th minute of extra time.
        <br />
        By the end, both wrestlers were exhausted. Their physical conditioning and wrestling endurance were decisive factors
        in this intense and thrilling final bout.
      </p>
      <ButtonGallery images={DIR_NC42} buttonName="See photos" />
      <p>
        As a result, <b>Victoria Vardugina</b>, <b>Christina Shvets</b>, and <b>Zoya Dorofeeva</b> took the 1st, 2nd,
        and 3rd places respectively.
      </p>
      <ButtonGallery images={DIR_GRAPPLING2014_AWARDS} buttonName="Awards photos" />
      <img
        src={PODIUM_IMG}
        alt=""
        className={cn('img-fluid w-100', sC.videosMainImg)}
      />
      <p>From left to right: Zoya, Christina, and Victoria.</p>
      <hr />
      <p>
        Watch the fights <b>Zoya vs Christina</b> and <b>Zoya vs Vika</b> in <b>VIDEO 41</b>, and the fight
        between Vika and Christina in <b>VIDEO 42</b>. Both videos are available on{' '}
        <a href={LINK_SHOP_MAIN}>Patreon</a>.
      </p>
    </>
  )
}
