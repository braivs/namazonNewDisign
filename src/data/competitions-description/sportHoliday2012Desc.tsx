import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_MMA_SPORT_HOLIDAY_1,
  DIR_MMA_SPORT_HOLIDAY_2,
  DIR_MMA_SPORT_HOLIDAY_3,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

export const SportHoliday2012Desc: React.FC = () => {
  return (
    <>
      <p>
        Two rating MMA fights were held in our club May 8, 2012. Each fight consists of 3 rounds, each round lasts 3
        minutes. The participants in the fights:
      </p>
      <ul>
        <li>
          <Link href="/girls/tais2013">Tais</Link> (St. Petersburg, 5&apos;7&quot; / 132 lb) – the best fighter of the club,
          she had never lost before;
        </li>
        <li>
          <Link href="/girls/kara_teller">Kara Teller</Link> (Moscow, 5&apos;7&quot; / 119 lb) – a young promising fighter who
          has by now gained a victory over two girls from the Namazon Club;
        </li>
        <li>
          <Link href="/girls/darya_balina">Darya Balina</Link> (St. Petersburg, 5&apos;4&quot; / 124 lb) – a newcomer in our
          competitions, going in hard for ultimate fightings lately.
        </li>
      </ul>
      <h5><u>The first fight</u> Kara Teller vs Darya Balina</h5>
      <p>
        The fight was already interesting because a newcomer took part in it. The whole first round the girls fought in
        standing position. The round was won by Kara. She worked on a long distance and she did shake Darya a few times
        with accurate punches. The start of the second round was similar to the first one, but at the middle of the
        round the two girls fell down grappling with each other on the floor, and Kara proved to be stronger there.
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1} buttonName="See photos" />
      <h5><u>The second fight</u> Kara Teller vs Tais</h5>
      <p>
        <b>Kara</b> and <b>Tais</b> had already met before and knew each other well. During the most part of the match
        the girls wrestled on the ground. Tais had some advantage, however, Kara defended skillfully. At the end of the
        first round Tais did not fulfill the command of the ref on the mat, entered into conversation with him and as a
        result she received a foul. Thus, the first score went to Kara. In the second round Tais managed to use her
        advantage in wrestling. She defeated Kara via submission with a chokehold. However, after more careful review of
        the match, the FOUL received by Tais was changed to DISQUALIFICATION. The final victory was awarded to Kara
        Teller. The total score of their matches became 2-1 in favor of Tais.
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_2} buttonName="See photos" />
      <p>
        At the festival there were also submission grappling matches (MM, WW, WM) and the contests on legwrestling and
        pushing the opponent out of the mat.
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_3} buttonName="See photos" />
      <hr />
      <p>
        If you like such fights, buy our film (<b><u>VIDEO 18.</u></b> MMA tournament. May, 2012) on{' '}
        <a href={LINK_SHOP_MAIN}>Patreon</a> and you will be able to see everything yourself.
      </p>
    </>
  )
}
