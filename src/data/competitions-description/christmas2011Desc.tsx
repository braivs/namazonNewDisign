import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {COMPETITIONS_BUTTON_TEXT} from '@/common/constants'
import {DIR_CHRISTMAS_2011_1, DIR_CHRISTMAS_2011_2} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const Christmas2011Desc: React.FC = () => {
  return (
    <>
      <p>
        The Submission Grappling tournament <b>&quot;Christmas Cup 2011&quot;</b>, organized by the Namazon Club and
        Kempo-Kan School of Martial Arts, took place on January 6, 2011, in a school sports hall. The tournament
        featured two rounds and included the following participants:{' '}
        <Link href="/girls/natalia-mysik">Natalia Mysik</Link> (5&apos;11&quot; / 154 lb),{' '}
        <Link href="/girls/kseniya-voloshina">Ksenia Voloshina</Link> (5&apos;3&quot; / 141 lb), and{' '}
        <Link href="/girls/valentina-perfileva">Valentina Perfilyeva</Link> (5&apos;8&quot; / 139 lb).
        <br />
        One notable feature of the competition was the significant disparity in weight and height among the wrestlers.
        Natalia, being much heavier and taller than her opponents, frequently utilized her size advantage to secure
        pinning holds, especially School Girl Pins, which she would then convert into armlocks or chokes. One of these
        chokes even resulted in her opponent being knocked out.
      </p>
      <ButtonGallery images={DIR_CHRISTMAS_2011_1} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        Natalia emerged victorious in the tournament, with Ksenia and Valentina taking 2nd and 3rd places respectively.
      </p>
      <p>
        Additionally, there was a prize fight between <Link href="/girls/tais2013">Tais</Link> (5&apos;7&quot; / 127 lb) and{' '}
        <Link href="/girls/natalia-mysik">Natalia Mysik</Link> (5&apos;11&quot; / 154 lb).
      </p>
      <ButtonGallery images={DIR_CHRISTMAS_2011_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        Natalia, having been exhausted from her tournament victory, was convincingly defeated by Tais in their subsequent
        fight.
      </p>
      <hr />
      <p>
        If you enjoy watching long pinning holds, head scissors, and chokes in women&apos;s fights, you will appreciate the
        video recording of this tournament.
        <br />
        Want to witness all the action? Purchase now on <a href={LINK_SHOP_MAIN}>Patreon</a> (<b><u>VIDEO 4.</u></b>{' '}
        &quot;Christmas Cup 2011&quot;. Tournament on Submission Grappling) and experience it for yourself.
      </p>
    </>
  )
}
