import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR17_1, DIR17_2, DIR17_3} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const Mma2012Desc: React.FC = () => {
  return (
    <>
      <p>
        The participants in the fights were{' '}
        <Link href="/girls/kara_teller">Kara Teller</Link> (Moscow, 5&apos;7&quot; / 121 lb) and Svetlana Solovyova
        (St. Petersburg, 5&apos;7&quot; / 124 lb). Kara is a familiar face in competitions in St. Petersburg, known for her
        &quot;street fight&quot; style. Svetlana, on the other hand, excels in striking combat sports like boxing and kickboxing,
        showcasing impressive physical strength with a hand grip measure exceeding her own body weight.
      </p>
      <p>
        Initially, during the stand-up exchanges where blows and kicks were traded, Svetlana managed to hold her own against
        Kara. However, once the fight transitioned to the ground, Kara&apos;s experience and technique became apparent. Kara
        secured victory with a choke hold at 1:13.
      </p>
      <ButtonGallery images={DIR17_1} buttonName="See photos" />
      <p>
        Since Kara&apos;s bout with Svetlana was relatively short and not too taxing for the fighters, an additional, unscheduled
        MMA fight between <b>Kara</b> and <b>Tais</b> (St. Petersburg, 5&apos;7&quot; / 132 lb) was arranged.
      </p>
      <p>
        This was their second encounter on the mat. In their previous match, Tais had emerged victorious over Kara. The
        rematch proved even more intense and enduring, lasting significantly longer. While Kara managed to gain moments of
        control intermittently, she ultimately couldn&apos;t withstand Tais&apos;s formidable strength and grappling ability. After a
        few minutes of fierce struggle, Tais secured another victory over Kara with a choke hold.
      </p>
      <ButtonGallery images={DIR17_2} buttonName="See photos" />
      <p>
        To conclude the event, <b>Kara Teller</b> and <b>Svetlana Solovyova</b> faced off in a submission grappling match.
      </p>
      <ButtonGallery images={DIR17_3} buttonName="See photos" />
      <p>
        The match ended in a draw. Despite Svetlana&apos;s superior physical strength, Kara&apos;s skill prevented her from securing
        a victory, and Kara&apos;s technical ability was insufficient to overcome Svetlana&apos;s power. Perhaps with less fatigue,
        the outcome could have been different.
      </p>
      <hr />
      <p>
        You can purchase a video featuring Kara&apos;s MMA fights against Svetlana and Tais, as well as her submission grappling
        bout with Svetlana, from our online store on <a href={LINK_SHOP_MAIN}>Patreon</a> (<b><u>VIDEO 17.</u></b> MMA and
        Submission Grappling).
      </p>
    </>
  )
}
