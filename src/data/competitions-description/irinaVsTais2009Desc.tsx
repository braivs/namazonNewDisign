import sC from '@/common/styles.module.scss'
import React from 'react'

const IMG_MAIN = '/assets/img/girl/irina/beachgr/6.jpg'

export const IrinaVsTais2009Desc: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={IMG_MAIN} alt="" className={sC.videosMainImg} />
      </div>
      <p>
        <b>Irina</b> (5&apos;9&quot; / 150 lb) and <b>Tais</b> (5&apos;7&quot; / 132 lb), the two strongest women of
        the Namazon Club, took to the beach to determine who was the superior wrestler on sand. While this type of
        wrestling is typically known as &quot;beach wrestling,&quot; they competed according to the rules of submission
        grappling, unlike standard beach competitions.
      </p>
      <p>
        Irina wrestled aggressively as usual, while Tais employed a more strategic and skillful approach, transitioning
        smoothly from defense to offense. Initially grappling standing up, they eventually tumbled onto the sand,
        continuing their struggle to gain upper body control.
      </p>
      <p>
        Wrestling on sand poses unique challenges compared to mats. The soft and uneven surface does not provide secure
        footing, especially in stand-up wrestling. Additionally, grappling on the ground results in sand getting in hair
        and mouths, complicating matters further, especially for those on the bottom position.
      </p>
      <p>
        Irina and Tais have wrestled each other numerous times, having trained together in the same gym. Historically,
        Tais has often emerged victorious. However, looking back over the years, it&apos;s possible that different rules,
        such as allowing hair grabbing and pulling, might have altered the outcomes. Irina&apos;s resilience in enduring
        pain and persevering in tough fights could have made her a formidable catfighter.
      </p>
    </>
  )
}
