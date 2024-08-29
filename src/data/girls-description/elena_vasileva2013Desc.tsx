import imgMain from 'public/assets/img/videoGallery/nc29/08.jpg'
import imgMain2 from 'public/assets/img/videoGallery/nc29/04.jpg'
import sC from '@/common/styles.module.scss'
import Image from "next/image"
import Link from "next/link"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR09_1} from "@/common/constants/ImageContexts"

export const ElenaVasileva2013Desc = () => {
  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="imgMain"/>
      <p>
        <b>Elena Vasilyeva</b> (5'6" / from 132 lb (2012) to 157 lb (2013)) is one of the youngest sportswomen
        who have ever participated in the tournaments and individual fights organized by the Namazon Club. She
        specializes in MMA and submission grappling (submission-style wrestling). Currently, she’s prioritizing
        arm wrestling, in which she has achieved great success on the international level.
      </p>
      <h4><u>Elena Vasilyeva in MMA fights</u></h4>
      <p>
        The most memorable of all Elena’s fights is likely her MMA fight held as part of the
        Christmas Cup Tournament 2012, where she fought against our guest from Moscow,
        <Link href="/girls/kara_teller"> Kara Teller</Link> (5'7" / 119 lb).<br/>
        If not counting multiple sparring MMA matches, her fight with Kara in that tournament was Elena’s debut
        in MMA competitions.<br/>
        The fight consisted of 3 rounds, each lasting 4 minutes with 1 minute of rest between each round. Elena
        was in control during the first two rounds. There were several moments when she could
        possibly end the fight early by forcing Kara to submit. But Kara was brave and resilient. She
        fought as though her life depended on it. Struggling in the bottom position and taking punches to
        her head, she refused to give up, showing incredible will to win.
      </p>
      <ButtonGallery images={DIR09_1} buttonName={'See photos'}/>
      <p>
        Minutes into the third round, Elena started to grow tired. Her movements slowed down a bit, and
        her attacks lost their strength. She began to make mistakes, and eventually one of those mistakes was
        fatal. After a failed takedown attempt, Elena found herself on her back with Kara on top of her in mount
        position. Then, trying to avoid blows landing on her head, Elena rolled over, turning her back to her
        opponent, which Kara immediately took advantage of and submitted Elena with a choke.
      </p>
      <h4><u>Elena Vasilyeva in submission grappling fights</u></h4>
      <p>
        During the period 2012-2013, Elena was out of wrestling. However, one day in June 2013, she returned and
        had a new match with Tais (5'7" / 135 lb), her traditional opponent in the Namazon Club.<br/>
        It had been about two years since the girls had last fought each other. You may remember that Tais, being more
        experienced, had always dominated Elena in their previous individual fights. But since then, Elena has
        improved significantly as an athlete. She has gained weight, and her muscles have become a lot bigger
        and stronger through fitness and weightlifting activities. By the time of the arranged fight, she
        was 22 lb (10 kg) heavier than Tais.<br/>
        Already in the first round, Elena was able to secure a choke hold from the bottom position. Tais found
        herself in unexpected trouble and was forced to submit to her younger rival.
      </p>
      <p>
        Especially remarkable was Elena’s win in the third round, which lasted a bit more than 30 seconds. There
        was an excellent takedown followed by a successfully applied headscissors that forced Tais to submit.
      </p>
      <Image className={sC.MainImg} src={imgMain2} alt="imgMain2"/>
      <p>
        It was a pretty long match by Namazon standards. The entire match lasted about 20 minutes, and in its
        second half, the fight leveled out. But the final victory of Elena Vasilyeva had been already
        predetermined. The total score at the end of the match was 4-2 in her favor (she won 4, lost 2, and tied
        one round).<br/>
        For a long while now, many wrestling fans have been eagerly waiting for a rematch between these two
        rivals, which will supposedly prove that Elena’s win over Tais was no fluke. But in any case,
        Elena has already risen to become a new star in submission grappling.
      </p>
      <h4><u>Results for MMA fights 2012</u></h4>
      <p>Win-loss-draw record – 0:2:0 (as of January 2012).</p>
      <hr/>
      <p>
        The video of Elena's MMA fight (Video 9), as well as the video of her submission grappling fight
        (Video 29) 2012-2013, are available for purchase in our online store on In our store on <a
        href="https://www.patreon.com/namazon/shop">Patreon</a>.
      </p>
    </>
  )
}

//todo: check links