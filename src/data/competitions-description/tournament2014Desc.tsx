'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR36_TOURNAMENT2014_1,
  DIR36_TOURNAMENT2014_2,
  DIR36_TOURNAMENT2014_3,
  DIR37_TOURNAMENT2014_1,
  DIR37_TOURNAMENT2014_2,
} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import {findCompetitionData} from '@/data/competitions/competitions-data'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'tournament-2014'
const PODIUM_IMG = '/assets/img/competitions/2013_2014/tournament_2014/DSC03831.jpg'
const tournament2014Data = findCompetitionData('2013_2014', 'tournament-2014')
const tournament2014HeroSrc =
  tournament2014Data?.heroImgRef ?? tournament2014Data?.imgRef ?? ''

const link2013 = <Link href="/competition/2013_2014/tournament-2013" />

export const Tournament2014Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{br: <br />}}
          defaults={`As practice shows, every girl possesses fighting skills and instincts of self-defense, and is even capable of participating in special athletic competitions. It just takes belief in oneself and not being afraid of opponents.<br/>Our tournament was conducted under submission grappling rules enhanced by an additional rule allowing the girls to defeat an opponent by pinning and holding her down on her back until a count of 10.`}
        />
      </p>
      {tournament2014HeroSrc && (
        <img
          src={tournament2014HeroSrc}
          alt=""
          className={cn('img-fluid w-100', sC.videosMainImg)}
        />
      )}
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.participants`}
          components={{
            1: <b />,
            2: <b />,
            3: <b />,
            4: <b />,
            5: <b />,
            br: <br />,
            link2013,
          }}
          defaults={`Five girls participated in the tournament (lightweight class): <1>Christina Shvets</1> (67.4 kg / 148.5 lb), <2>Daria Uvarova</2> (66.5 kg / 146.6 lb), <3>Irina Dzhanaeva</3> (70.7 kg / 155.9 lb), <4>Nina Trofimova</4> (61.1 kg / 134.7 lb), and <5>Victoria Vardugina</5> (70.7 kg / 155.9 lb).<br/>For all the girls, except Victoria, this was their first experience in this type of competition. Victoria, unlike them, had previously won <link2013>a female single combat tournament in October 2013</link2013> by submitting the young ambitious wrestler Lidiya Oslopovskih in the final submission grappling match.<br/>Vika is a strong girl, especially in terms of physical strength. Additionally, she competes successfully in college arm wrestling events.`}
        />
      </p>
      <p>
        {tr(
          'rules',
          'All girls fought each other until achieving two wins. Each round of every match was limited to four minutes.',
        )}
      </p>
      <h5>
        <u>{tr('preliminaryTitle', 'Preliminary Fights')}</u>
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight1`}
          components={{1: <b />, 2: <b />}}
          defaults={`There were three fights in the preliminary part of the tournament. In the first one, <1>Victoria Vardugina</1> fought against <2>Nina Trofimova</2> and defeated her twice, finishing the 1st round with a hold down and the 2nd with a choke.`}
        />
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight2`}
          components={{1: <b />, 2: <b />}}
          defaults={`The second fight was between <1>Daria Uvarova</1> and <2>Irina Dzhanaeva</2>. Daria won two rounds consecutively (the 1st one by applying an arm lock, the 2nd by hold down).`}
        />
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight3`}
          components={{1: <b />, 2: <b />}}
          defaults={`The third fight was the most intense and exciting of all three, with <1>Christina Shvets</1> struggling hard against the big and strong <2>Victoria Vardugina</2>. The winner was declared only after the end of the 3rd round. Christina won the first round with a choke, but in the next two rounds, to her disappointment, she was defeated (choked) by Victoria, although she fought desperately until the very last second.`}
        />
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_3} buttonName={tr('seePhotos', 'See photos')} />
      <h5>
        <u>{tr('finalTitle', 'Final Fights')}</u>
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.thirdAndFourth`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults={`According to the results of the preliminary fights, the 3rd place went to <1>Christina Shvets</1>. Then <2>Nina Trofimova</2> and <3>Irina Dzhanaeva</3> competed for the 4th place. After a short struggle, Nina secured victory by submitting her opponent twice (first with an armbar in the 1st round and then with a chokehold in the 2nd).`}
        />
      </p>
      <ButtonGallery images={DIR37_TOURNAMENT2014_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.finalFight`}
          components={{1: <b />, 2: <b />}}
          defaults={`The final fight was an interesting encounter between <1>Daria Uvarova</1> and <2>Victoria Vardugina</2>. The wrestlers were almost evenly matched. The first round of their match did not determine a winner, although Victoria had a slight advantage over her young, beautiful opponent. In the second round, Victoria finally secured victory with a well-executed pinning hold that Daria could not escape despite her efforts.`}
        />
      </p>
      <ButtonGallery images={DIR37_TOURNAMENT2014_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.results`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults={`<1>Victoria Vardugina</1>, <2>Daria Uvarova</2>, and <3>Christina Shvets</3> eventually won 1st, 2nd, and 3rd places respectively.`}
        />
      </p>
      <img
        src={PODIUM_IMG}
        alt=""
        className={cn('img-fluid w-100', sC.videosMainImg)}
      />
      <p>{tr('podiumCaption', 'From left to right: Victoria, Daria, Christina')}</p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <b />, 3: <a href={LINK_SHOP_MAIN} />}}
          defaults={`VIDEO 36 of our video collection features the preliminary fights of the tournament, while VIDEO 37 covers the final fights. Both videos are available for purchase in our online store on <3>Patreon</3>.`}
        />
      </p>
    </>
  )
}
