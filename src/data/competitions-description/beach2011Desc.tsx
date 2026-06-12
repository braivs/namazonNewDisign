import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {COMPETITIONS_BUTTON_TEXT} from '@/common/constants'
import {DIR08_1, DIR08_2, DIR08_3} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const Beach2011Desc: React.FC = () => {
  return (
    <>
      <p>
        The tournament was held in two rounds without a time limit.
        <br />
        The competition featured three fighters:
      </p>
      <ul>
        <li>
          <Link href="/girls/tais2011">Tais</Link> (5&apos;7&quot; / 130 lb) - a frequent winner of club submission
          grappling tournaments;
        </li>
        <li>
          <Link href="/girls/elena-vasileva">Elena Vasilyeva</Link> (5&apos;6&quot; / 134 lb) - a young and promising
          Namazonian fighter who also practices judo and armwrestling;
        </li>
        <li>
          <Link href="/girls/irina">Irina (Vlasta)</Link> (5&apos;9&quot; / 154 lb) - a newcomer to our
          competitions who is involved in Muay Thai and pole dancing.
        </li>
      </ul>
      <p>
        Experienced Tais handled her opponents with relative ease, employing various grappling techniques such as chokes
        and joint locks. Tais secured the 1st place, defeating both Elena and Irina by a score of 2-0.
      </p>
      <h5>Tais vs. Elena Vasilyeva</h5>
      <ButtonGallery images={DIR08_1} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <h5>Tais vs. Irina (Vlasta)</h5>
      <ButtonGallery images={DIR08_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        The battle for 2nd place between Elena and Irina proved to be intense and uncompromising. In their first fight,
        Elena executed a successful throw, bringing Irina to the ground and eventually securing a victory with a choke.
        In the second fight, Irina gained the upper hand, persistently attempting to submit Elena, who resiliently
        defended herself. Eventually, Irina seemed to lose steam or confidence, allowing Elena to escape and gain a
        dominant position, resulting in Irina conceding the fight.
      </p>
      <h5>Irina (Vlasta) vs. Elena Vasilyeva</h5>
      <ButtonGallery images={DIR08_3} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>Elena claimed 2nd place, while Irina (Vlasta) secured the 3rd place.</p>
      <hr />
      <p>
        Curious to see how it all unfolded? Purchase now on <a href={LINK_SHOP_MAIN}>Patreon</a> (<b><u>VIDEO 8.</u></b>{' '}
        Beach Tournament. Submission Grappling. June, 2011) and witness the action yourself.
      </p>
    </>
  )
}
