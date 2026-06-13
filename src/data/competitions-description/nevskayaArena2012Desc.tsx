'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NEVSKAYA_ARENA_1, DIR_NEVSKAYA_ARENA_2} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'nevskaya-arena-2012'

const linkKara = <Link href="/girls/kara_teller" />
const linkDarya = <Link href="/girls/darya_balina" />

export const NevskayaArena2012Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />}}
          defaults={`<1>Nevsky Arena</1> is an open-air women's MMA tournament inspired by the well-known Strelka street fighting events in Russia. The Strelka has gained international fame for its democratic nature and tough competition.`}
        />
      </p>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.participants`}
          components={{br: <br />, linkKara, linkDarya, 2: <b />, 3: <b />}}
          defaults={`The inaugural Nevsky Arena took place in Park Sosnovka on July 1, 2012. Participants included: <linkKara>Kara Teller</linkKara> (Vityaz Club, Moscow, 5'7" / 123 lb), <linkDarya>Darya Balina</linkDarya> (Panther Female Self-Defense Club, St. Petersburg, 5'4" / 124 lb), <2>Yulia Fedutenko</2> (Tibron Mixed Martial Arts Club, St. Petersburg, 5'8" / 130 lb), and newcomer <3>Olga</3> (St. Petersburg, 5'7" / 139 lb). Each fight consisted of 3 rounds lasting 4 minutes each, with 2-minute breaks in between.`}
        />
      </p>
      <h5>
        <u>{tr('fight1Title', 'The First Fight:')}</u>{' '}
        {tr('fight1Match', 'Kara Teller (Moscow) vs Yulia Fedutenko (St. Petersburg)')}
      </h5>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.fight1Intro`}
          components={{1: <b />, 2: <b />}}
          defaults={`<1>Yulia</1> relies more on striking and is less confident in wrestling, while <2>Kara</2> has established herself as a versatile fighter, often winning her fights with choke holds on the ground.`}
        />
      </p>
      <p>
        {tr(
          'fight1',
          'The three-round fight was a hard and uncompromising struggle. Yulia focused on striking, throwing punches and kicks, while Kara actively worked to bring the fight to the ground and secure a submission with a choke hold. Kara was more aggressive in ground fighting, but Yulia proved to be a resilient opponent, effectively defending herself and delivering punches whenever she gained advantageous positions.',
        )}
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_1} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'fight1Result',
          'After the twelve-minute fight, no clear winner emerged. Yulia gained an advantage in the score, but Kara was eager to settle it in an additional fourth round.',
        )}
      </p>
      <h5>
        <u>{tr('fight2Title', 'The Second Fight:')}</u>{' '}
        {tr('fight2Match', 'Darya Balina (St. Petersburg) vs Olga (St. Petersburg)')}
      </h5>
      <p>
        {tr(
          'fight2Intro',
          'This fight proved to be just as intense as the first, featuring exchanges of punches standing up, ground wrestling, and attempts to finish off.',
        )}
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'fight2Result',
          'Once again, after three rounds, determining a winner was difficult as the fight remained evenly matched. It ended in a draw.',
        )}
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.shop`}
          components={{1: <b />, 2: <b />, 3: <a href={LINK_SHOP_MAIN} />}}
          defaults={`Visit our store on <3>Patreon</3> to purchase videos of both MMA fights: Kara Teller vs Yulia Fedutenko (<1>VIDEO 20</1>) and Darya Balina vs Olga (<2>VIDEO 21</2>).`}
        />
      </p>
    </>
  )
}
