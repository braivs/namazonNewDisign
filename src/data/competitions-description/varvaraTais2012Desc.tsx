'use client'

import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'varvara-tais-2012'
const IMG_MAIN2 = '/assets/img/videoGallery/19/main2.jpg'
const IMG_01 = '/assets/img/videoGallery/19/01.jpg'
const IMG_05 = '/assets/img/videoGallery/19/05.jpg'

const linkTais = <Link href="/girls/tais2013" />
const linkSpbAc = (
  <a href="http://www.spb-ac.ru/var.htm" target="_blank" rel="noopener noreferrer" />
)
const linkWarnet = (
  <a
    href="https://warnet.ws/2007/07/13/varvara-akulova-samaya-silnaya-devochka-na-planete-39-foto.html"
    target="_blank"
    rel="noopener noreferrer"
  />
)
const linkNow = (
  <a
    href="https://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno"
    target="_blank"
    rel="noopener noreferrer"
  />
)

export const VarvaraTais2012Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro1`}
          components={{
            1: <b />,
            br: <br />,
            linkSpbAc,
            linkWarnet,
            linkNow,
            linkTais,
          }}
          defaults={`<1>Varvara Akulova</1> (born 1992, 5'9" / 165 lb) is a great athlete. As a child and teenager she was several times recognized as the strongest girl on the planet, which was twice confirmed by the Guinness Book of World Records. Varvara's strength results in the various periods of her life have been presented, for example, on the <linkSpbAc>official website of the St. Petersburg Athletic Center</linkSpbAc>. Look also <linkWarnet>here</linkWarnet>.<br/><linkNow>Today</linkNow>, Akulova is an acting sportswoman, master of sports in weightlifting and in powerlifting. It is especially notable that she has achieved these results without the use of any steroids, which is very rare in the strength sports. Varvara is 175 cm tall and weighs 75 kg.<br/><linkTais>Tais</linkTais> is the leader of the Namazon Club. She specializes in wrestling and MMA.`}
        />
      </p>
      <p>
        {tr(
          'intro2',
          'In this fight Varvara has a significant advantage in weight (about 15 kg / 33 lb) and in strength, but Tais is more experienced and technically skilled.',
        )}
      </p>
      <img src={IMG_MAIN2} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <img src={IMG_01} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <img src={IMG_05} alt="" className={cn('img-fluid w-100', sC.videosMainImg)} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intrigue`}
          components={{1: <b />, 2: <b />}}
          defaults="The fight is fought in the grappling style. The intrigue of it is that nobody knows in advance who would win in the end. The principal question is WHICH will be better, the skill or pure strength."
        />
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <a href={LINK_SHOP_MAIN} />}}
          defaults={`It is really a hard fight! Clearly a big, strong Varvara does not want to lose to her smaller opponent. In turn, Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her skill and competitiveness. Who will prevail? Buy the video (<1>VIDEO 19.</1> Varvara Akulova vs Tais. Submission Grappling. May, 2012) on <2>Patreon</2> and find out.`}
        />
      </p>
    </>
  )
}
