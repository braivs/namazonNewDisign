import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {COMPETITIONS_BUTTON_TEXT} from '@/common/constants'
import {DIR03_1, DIR03_2, DIR03_3} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import Link from 'next/link'
import React from 'react'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const IMG_MAIN = '/assets/img/videoGallery/03mix/wm1/12.jpg'

export const BeachMix2010Desc: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={IMG_MAIN} alt="" className={sC.videosMainImg} />
      </div>
      <p>
        <b>Alex</b> (5&apos;9&quot; / 150 lb) faced off against two regular members of the Namazon Club:{' '}
        <Link href="/girls/natalia-mysik">Natalia Mysik</Link> (5&apos;11&quot; / 154 lb) and{' '}
        <Link href="/girls/tais2011">Tais</Link> (5&apos;7&quot; / 132 lb). The competition unfolded in two rounds without
        a specific time limit for each fight. Matches continued until one opponent could no longer continue and admitted
        defeat, typically through joint locks or chokes.
      </p>
      <h5>Alex vs Natalia Mysik</h5>
      <p>
        Natalia Mysik initially underestimated Alex, who quickly gained the upper hand by bringing her down on the sand and
        submitting her. This unexpected defeat spurred Natalia into a more aggressive approach in the next two rounds. She
        decisively pinned Alex down with her superior strength and immobilized him on the sand, securing two consecutive
        victories.
      </p>
      <ButtonGallery images={DIR03_1} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <h5>Alex vs Tais</h5>
      <p>
        Tais, on the other hand, dominated Alex completely. She consistently forced him into submission with effective choke
        holds and armlocks, winning all three fights decisively.
      </p>
      <ButtonGallery images={DIR03_2} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <h5>Natalia Mysik vs Tais</h5>
      <p>
        The matches between Natalia Mysik and Tais were intense and dramatic. Both fighters had moments of advantage, with
        the momentum swinging back and forth. Despite Tais making occasional mistakes, Natalia couldn&apos;t capitalize on
        them in the first two rounds. However, as fatigue set in, Tais secured a quick submission victory in the final round
        with a pin combined with an armbar.
      </p>
      <ButtonGallery images={DIR03_3} buttonName={COMPETITIONS_BUTTON_TEXT} />
      <p>
        Ultimately, Tais emerged as the tournament winner, with Natalia Mysik taking second place and Alex finishing third.
      </p>
      <hr />
      <p>
        The full video of the beach mixed wrestling round-robin tournament featuring Natalia Mysik, Tais, and Alex (
        <b>VIDEO 3.</b> Beach Submission Grappling. Two girls vs one man) is available for purchase on our online store at{' '}
        <a href={LINK_SHOP_MAIN}>Patreon</a>.
      </p>
    </>
  )
}
