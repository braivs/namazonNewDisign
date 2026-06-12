import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR36_TOURNAMENT2014_1,
  DIR36_TOURNAMENT2014_2,
  DIR36_TOURNAMENT2014_3,
  DIR37_TOURNAMENT2014_1,
  DIR37_TOURNAMENT2014_2,
} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const PODIUM_IMG = '/assets/img/competitions/2013_2014/tournament_2014/DSC03831.jpg'

export const Tournament2014Desc: React.FC = () => {
  return (
    <>
      <p>
        As practice shows, every girl possesses fighting skills and instincts of self-defense, and is even
        capable of participating in special athletic competitions. It just takes belief in oneself and not
        being afraid of opponents.
        <br />
        Our tournament was conducted under submission grappling rules enhanced by an additional rule allowing the girls
        to defeat an opponent by pinning and holding her down on her back until a count of 10.
      </p>
      <p>
        Five girls participated in the tournament (lightweight class): <b>Christina Shvets</b> (67.4 kg / 148.5
        lb), <b>Daria Uvarova</b> (66.5 kg / 146.6 lb), <b>Irina Dzhanaeva</b> (70.7 kg / 155.9 lb), <b>Nina
        Trofimova</b> (61.1 kg / 134.7 lb), and <b>Victoria Vardugina</b> (70.7 kg / 155.9 lb).
        <br />
        For all the girls, except Victoria, this was their first experience in this type of competition. Victoria,
        unlike them, had previously won{' '}
        <Link href="/competition/2013_2014/tournament-2013">a female single combat tournament in October 2013</Link>{' '}
        by submitting the young ambitious wrestler Lidiya Oslopovskih in the final submission grappling match.
        <br />
        Vika is a strong girl, especially in terms of physical strength. Additionally, she competes successfully in
        college arm wrestling events.
      </p>
      <p>
        All girls fought each other until achieving two wins. Each round of every match was limited to four minutes.
      </p>
      <h5><u>Preliminary Fights</u></h5>
      <p>
        There were three fights in the preliminary part of the tournament. In the first one, <b>Victoria
        Vardugina</b> fought against <b>Nina Trofimova</b> and defeated her twice, finishing the 1st round with a hold
        down and the 2nd with a choke.
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_1} buttonName="See photos" />
      <p>
        The second fight was between <b>Daria Uvarova</b> and <b>Irina Dzhanaeva</b>. Daria won two rounds consecutively
        (the 1st one by applying an arm lock, the 2nd by hold down).
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_2} buttonName="See photos" />
      <p>
        The third fight was the most intense and exciting of all three, with <b>Christina Shvets</b> struggling hard
        against the big and strong <b>Victoria Vardugina</b>. The winner was declared only after the end of the 3rd
        round.
        Christina won the first round with a choke, but in the next two rounds, to her disappointment, she was defeated
        (choked) by Victoria, although she fought desperately until the very last second.
      </p>
      <ButtonGallery images={DIR36_TOURNAMENT2014_3} buttonName="See photos" />
      <h5><u>Final Fights</u></h5>
      <p>
        According to the results of the preliminary fights, the 3rd place went to <b>Christina Shvets</b>. Then <b>Nina
        Trofimova</b> and <b>Irina Dzhanaeva</b> competed for the 4th place. After a short struggle, Nina secured
        victory by submitting her opponent twice (first with an armbar in the 1st round and then with a chokehold in the 2nd).
      </p>
      <ButtonGallery images={DIR37_TOURNAMENT2014_1} buttonName="See photos" />
      <p>
        The final fight was an interesting encounter between <b>Daria Uvarova</b> and <b>Victoria Vardugina</b>. The
        wrestlers were almost evenly matched. The first round of their match did not determine a winner, although
        Victoria had a slight advantage over her young, beautiful opponent. In the second round, Victoria finally secured victory
        with a well-executed pinning hold that Daria could not escape despite her efforts.
      </p>
      <ButtonGallery images={DIR37_TOURNAMENT2014_2} buttonName="See photos" />
      <p>
        <b>Victoria Vardugina</b>, <b>Daria Uvarova</b>, and <b>Christina Shvets</b> eventually won 1st, 2nd, and 3rd
        places respectively.
      </p>
      <img
        src={PODIUM_IMG}
        alt=""
        className={cn('img-fluid w-100', sC.videosMainImg)}
      />
      <p>
        From left to right: Victoria, Daria, Christina
      </p>
      <hr />
      <p>
        VIDEO 36 of our video collection features the preliminary fights of the tournament, while VIDEO 37 covers the
        final fights. Both videos are available for purchase in our online store on{' '}
        <a href={LINK_SHOP_MAIN}>Patreon</a>.
      </p>
    </>
  )
}
