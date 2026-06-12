import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR09_2,
  DIR09_3,
  DIR_CHRISTMAS2012_1,
  DIR_CHRISTMAS2012_2,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const Christmas2012Desc: React.FC = () => {
  return (
    <>
      <p>
        Three fighters participated in the competition:{' '}
        <Link href="/girls/elena_vasileva2013">Elena Vasilyeva</Link> (St. Petersburg, 5&apos;6&quot; / 132 lb);{' '}
        <Link href="/girls/kara_teller">Kara Teller</Link>, a newcomer from the Namazon Club (Moscow, 5&apos;7&quot; / 119 lb);{' '}
        <Link href="/girls/tais2013">Tais</Link> (St. Petersburg, 5&apos;7&quot; / 130 lb). The tournament was held
        in a single-round format where each fighter competed in two fights. Each fight consisted of three 4-minute rounds
        with a 1-minute rest between rounds.
      </p>
      <h5><u>The First Fight</u> Elena Vasilyeva vs Kara Teller</h5>
      <p>
        In the first two rounds, Elena had the advantage, managing to take Kara down to the mat several times and
        presenting numerous opportunities to finish the fight on the ground. However, Kara skillfully defended herself
        throughout.
      </p>
      <ButtonGallery images={DIR_CHRISTMAS2012_1} buttonName="See photos" />
      <p>
        In the 3rd round, the advantage gradually shifted to Kara. She achieved full-mount on Elena, forcing her to defend
        herself. During one of Elena&apos;s attempts to dislodge Kara, the Moscow guest capitalized on Elena&apos;s unprotected neck
        and executed a flawless choke.
      </p>
      <ButtonGallery images={DIR_CHRISTMAS2012_2} buttonName="See photos" />
      <h5><u>The Second Fight</u> Kara Teller vs Tais</h5>
      <p>
        Tais defeated Kara in the first round with an aggressive attack primarily consisting of kicks, many of which missed
        their mark. The fight went to the ground, where Tais secured the dominant position.
        <br />
        While wrestling on top, Tais attempted an armlock. Although Kara managed to free herself, she exposed her neck to
        Tais, who capitalized on the opportunity and won by chokehold.
      </p>
      <ButtonGallery images={DIR09_2} buttonName="See photos" />
      <h5><u>The Third Fight</u> Elena Vasilyeva vs Tais</h5>
      <p>
        The third fight was as brief as the second. Tais had previously defeated Elena in the first round. After taking the
        fight to the ground, Tais executed her favorite armlock, forcing Elena to submit.
      </p>
      <ButtonGallery images={DIR09_3} buttonName="See photos" />
      <p>
        As a result, <b>Tais</b> took 1st place, <b>Kara Teller</b> secured 2nd, and <b>Elena Vasilyeva</b> took 3rd place.
      </p>
      <hr />
      <p>
        The girls fought fiercely and without compromise in all three fights. If you enjoy such competitions, purchase our
        film (<b><u>VIDEO 9</u></b>. MMA Tournament &quot;Christmas Cup 2012&quot;) on{' '}
        <a href={LINK_SHOP_MAIN}>Patreon</a> to witness it all for yourself.
      </p>
    </>
  )
}
