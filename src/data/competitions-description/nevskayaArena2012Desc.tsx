import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {COMPETITIONS_BUTTON_TEXT} from '@/common/constants'
import {DIR_NEVSKAYA_ARENA_1, DIR_NEVSKAYA_ARENA_2} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const NevskayaArena2012Desc: React.FC = () => {
  return (
    <>
      <p>
        <b>Nevsky Arena</b> is an open-air women&apos;s MMA tournament inspired by the well-known Strelka street
        fighting events in Russia. The Strelka has gained international fame for its democratic nature and tough
        competition.
      </p>
      <p>
        The inaugural Nevsky Arena took place in Park Sosnovka on July 1, 2012. Participants included:{' '}
        <Link href="/girls/kara_teller">Kara Teller</Link> (Vityaz Club, Moscow, 5&apos;7&quot; / 123 lb),{' '}
        <Link href="/girls/darya_balina">Darya Balina</Link> (Panther Female Self-Defense Club, St. Petersburg,
        5&apos;4&quot; / 124 lb), <b>Yulia Fedutenko</b> (Tibron Mixed Martial Arts Club, St. Petersburg, 5&apos;8&quot; / 130 lb),
        and newcomer <b>Olga</b> (St. Petersburg, 5&apos;7&quot; / 139 lb). Each fight consisted of 3 rounds lasting 4 minutes
        each, with 2-minute breaks in between.
      </p>
      <h5>
        <u>The First Fight:</u> Kara Teller (Moscow) vs Yulia Fedutenko (St. Petersburg)
      </h5>
      <p>
        <b>Yulia</b> relies more on striking and is less confident in wrestling, while <b>Kara</b> has established
        herself as a versatile fighter, often winning her fights with choke holds on the ground.
      </p>
      <p>
        The three-round fight was a hard and uncompromising struggle. Yulia focused on striking, throwing punches and
        kicks, while Kara actively worked to bring the fight to the ground and secure a submission with a choke hold.
        Kara was more aggressive in ground fighting, but Yulia proved to be a resilient opponent, effectively defending
        herself and delivering punches whenever she gained advantageous positions.
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_1} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        After the twelve-minute fight, no clear winner emerged. Yulia gained an advantage in the score, but Kara was
        eager to settle it in an additional fourth round.
      </p>
      <h5>
        <u>The Second Fight:</u> Darya Balina (St. Petersburg) vs Olga (St. Petersburg)
      </h5>
      <p>
        This fight proved to be just as intense as the first, featuring exchanges of punches standing up, ground
        wrestling, and attempts to finish off.
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        Once again, after three rounds, determining a winner was difficult as the fight remained evenly matched. It ended
        in a draw.
      </p>
      <hr />
      <p>
        Visit our store on <a href={LINK_SHOP_MAIN}>Patreon</a> to purchase videos of both MMA fights: Kara Teller vs
        Yulia Fedutenko (<b><u>VIDEO 20</u></b>) and Darya Balina vs Olga (<b><u>VIDEO 21</u></b>).
      </p>
    </>
  )
}
