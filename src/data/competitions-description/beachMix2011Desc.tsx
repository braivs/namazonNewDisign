import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {COMPETITIONS_BUTTON_TEXT} from '@/common/constants'
import {
  DIR11,
  DIR14_1,
  DIR14_2,
  DIR_BEACH_MIX_2011,
  DIR_BEACH_MIX_2011_2,
  DIR_BEACH_MIX_2011_3,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const BeachMix2011Desc: React.FC = () => {
  return (
    <>
      <p>
        The tournament was held in two rounds on a beach, with each fight having no time limit. Four fighters participated
        in the official part of the tournament: <Link href="/girls/tais2011">Tais</Link> (5&apos;7&quot; / 130 lb) - a
        repeated winner of club tournaments in submission grappling and champion in kickboxing, karate, and sanda
        competitions, <Link href="/girls/elena-vasileva">Elena Vasilyeva</Link> (5&apos;6&quot; / 135 lb) - a young and
        promising fighter from Namazon, <b>Alex</b> (5&apos;9&quot; / 154 lb), and <b>Villian</b> (5&apos;8&quot; / 177 lb),
        both experienced male wrestlers in submission grappling competitions. Villian defeated Alex in both of their
        fights.
      </p>
      <h5>Villian vs Alex</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>Villian wrestled Elena with some leniency, allowing her to showcase her attacking prowess.</p>
      <h5>Villian vs Elena Vasilyeva</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>Nevertheless, Villian ultimately won 2-0.</p>
      <p>
        Tais also secured victories over both Elena Vasilyeva and Alex. While Villian won all his fights by chokes, Tais
        utilized a variety of techniques including chokes, body scissors, neck scissors, and other joint locks.
      </p>
      <h5>Tais vs Elena Vasilyeva</h5>
      <ButtonGallery images={DIR_BEACH_MIX_2011_3} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <h5>Tais vs Alex</h5>
      <ButtonGallery images={DIR14_1} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        The outcome of the tournament was decided by the two matches between Villian and Tais. Villian won the first,
        Tais won the second, resulting in a draw for the top positions.
      </p>
      <h5>Tais vs Villian</h5>
      <ButtonGallery images={DIR14_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        The battle for the 3rd place between Elena Vasilyeva and Alex was particularly fierce. Their first fight lasted
        over 12 minutes, and the organizers regretted not dividing the fights into rounds. In the end, Elena won by a
        choke hold.
      </p>
      <h5>Elena Vasilyeva vs Alex</h5>
      <ButtonGallery images={DIR11} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>Elena also won the second fight, securing the 3rd place with a 2-0 result.</p>
      <hr />
      <p>
        Visit our store on <a href={LINK_SHOP_MAIN}>Patreon</a> to purchase the full video of Elena Vasilyeva&apos;s match
        against Alex (<b>VIDEO 11.</b> Alex vs. Elena Vasilyeva. Mixed Beach Wrestling. July, 2011), and also the full
        videos of three matches featuring Tais against men (<b>VIDEO 14.</b> Two Men Against One Woman. Mixed Wrestling.
        Part 1. 2011).
      </p>
    </>
  )
}
