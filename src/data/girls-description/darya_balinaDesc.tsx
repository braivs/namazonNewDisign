import imgMain from 'public/assets/img/videoGallery//21/mma-pervaya-nevskaya-arena-2012-2/37.jpg'
import sC from '@/common/styles.module.scss'
import Image from "next/image"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_NEVSKAYA_ARENA_2} from "@/common/constants/ImageContexts"
import Link from "next/link"

export const DaryaBalinaDesc = () => {
  const buttonText = 'See photos'

  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="imgMain"/>
      <p>
        <b>Darya Balina</b> is a young fighter from St. Petersburg (5’4” / 124 lb). She trains in martial arts at the
        female self-defense club "Panther". At the Namazon Club, she had a pair of hard-fought MMA fights where she
        displayed stamina and a will to win. In her last fight there, Darya faced an opponent who exceeded her weight by
        about 15 pounds. Despite this disadvantage, she was able to avoid defeat.
      </p>
      <p>
        The first MMA fight that Darya Balina had at the Namazon Club was against our guest from Moscow, <Link
        href="/girl/2012_2013/kara-teller">Kara Teller</Link> (5’7” / 123 lb). It went two rounds with the more
        experienced Kara prevailing, winning by a choke in the middle of the second round.
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1} buttonName={buttonText}/>
      <p>
        The second time Darya fought in MMA was in July 2012 when she participated in the Nevskaya Arena Tournament
        organized by the club. In that fight, her opponent was another MMA newcomer, <b>Olga</b> (5’7” / 139 lb). Both
        girls were highly motivated to show themselves in the best possible way. They fought three rounds of four
        minutes each, with one minute of rest between rounds. Olga was 15 lb (7 kg) heavier than Darya and had heavier
        punches as well, so Darya took quite a beating from her. However, Darya toughed it out through all the rounds
        and tied the match. It was a hard-won draw.
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={buttonText}/>
      <h4><u>Results for MMA fight 2012</u></h4>
      <p>Win-loss-draw record – 0:1:1 (as of July 1, 2012)</p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase full videos of Darya’s
        MMA fights held at the Namazon Club (Videos 18 and 21).
      </p>
    </>
  )
}

//todo: add links style
//todo: check links
