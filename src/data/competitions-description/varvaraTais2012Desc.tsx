import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const IMG_MAIN2 = '/assets/img/videoGallery/19/main2.jpg'
const IMG_01 = '/assets/img/videoGallery/19/01.jpg'
const IMG_05 = '/assets/img/videoGallery/19/05.jpg'

export const VarvaraTais2012Desc: React.FC = () => {
  return (
    <>
      <p>
        <b>Varvara Akulova</b> (born 1992, 5&apos;9&quot; / 165 lb) is a great athlete. As a child and teenager she was
        several times recognized as the strongest girl on the planet, which was twice confirmed by the Guinness Book of
        World Records. Varvara&apos;s strength results in the various periods of her life have been presented, for example,
        on the{' '}
        <a href="https://warnet.ws/2007/07/13/varvara-akulova-samaya-silnaya-devochka-na-planete-39-foto.html">
          official website of the St. Petersburg Athletic Center
        </a>
        . Look also{' '}
        <a href="https://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">
          here
        </a>
        .
      </p>
      <p>
        <a href="https://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">
          Today
        </a>
        , <b>Akulova</b> is an acting sportswoman, master of sports in weightlifting and in powerlifting. It is
        especially notable that she has achieved these results without the use of any steroids, which is very rare in
        the strength sports.
      </p>
      <p>
        <Link href="/girls/tais2013">Tais</Link> is the leader of the Namazon Club. She specializes in wrestling and
        MMA. In this fight Varvara has a significant advantage in weight (about 15 kg / 33 lb) and in strength, but
        Tais is more experienced and technically skilled.
      </p>
      <img src={IMG_MAIN2} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <img src={IMG_01} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <img src={IMG_05} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <p>
        The fight is fought in the grappling style. The intrigue of it is that nobody knows in advance who would win in
        the end. The principal question is WHICH will be better, the skill or pure strength.
      </p>
      <hr />
      <p>
        It is really a hard fight! Clearly a big, strong Varvara does not want to lose to her smaller opponent. In
        turn, Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her skill and
        competitiveness. Who will prevail? Buy the video (<b><u>VIDEO 19.</u></b> Varvara Akulova vs Tais. Submission
        Grappling. May, 2012) on <a href={LINK_SHOP_MAIN}>Patreon</a> and find out.
      </p>
    </>
  )
}
