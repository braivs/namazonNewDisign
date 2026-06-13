'use client'

import sC from '@/common/styles.module.scss'
import React from 'react'
import {Trans} from 'react-i18next'

const NS = 'IrinaVsTais2009'
const IMG_MAIN = '/assets/img/girl/irina/beachgr/6.jpg'

export const IrinaVsTais2009Desc: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={IMG_MAIN} alt="" className={sC.videosMainImg} />
      </div>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Irina</1> (5'9" / 150 lb) and <2>Tais</2> (5'7" / 132 lb), the two strongest women of the Namazon Club, took to the beach to determine who was the superior wrestler on sand. While this type of wrestling is typically known as "beach wrestling," they competed according to the rules of submission grappling. Irina wrestled aggressively as usual, while Tais employed a more strategic and skillful approach, transitioning smoothly from defense to offense. Initially grappling standing up, they eventually tumbled onto the sand, continuing their struggle to gain upper body control.<br/>Wrestling on sand poses unique challenges compared to mats. The soft and uneven surface does not provide secure footing, especially in stand-up wrestling. Additionally, grappling on the ground results in sand getting in hair and mouths, complicating matters further, especially for those on the bottom position.<br/>You can see the full beach fight between Irina and Tais in our clip.`}
        />
      </p>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.outro`}
          defaults={`Irina and Tais have wrestled each other numerous times, having trained together in the same gym. Historically, Tais has often emerged victorious. However, looking back over the years, it's possible that different rules, such as allowing hair grabbing and pulling, might have altered the outcomes. Irina's resilience in enduring pain and persevering in tough fights suggests this.`}
        />
      </p>
    </>
  )
}
