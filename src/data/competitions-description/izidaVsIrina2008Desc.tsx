'use client'

import sC from '@/common/styles.module.scss'
import React from 'react'
import {Trans} from 'react-i18next'

const NS = 'IzidaVsIrina2008'
const IMG_MAIN = '/assets/img/girl/irina/subgr/07.jpg'

export const IzidaVsIrina2008Desc: React.FC = () => {
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
          defaults={`The wrestling match between <1>Izida</1> (Kherson, Ukraine) and <2>Irina</2> (Namazon Club, St. Petersburg) took place during Izida's second visit to St. Petersburg. Izida (5'6" / 154 lb) found a very tough and aggressive opponent in Irina, who by then (5'9" / 150 lb) had already gained experience with several impressive victories, including one over Tais. With both fighters being equally fit and strong, it promised to be an intense and powerful match.<br/>The rules required the fighters to achieve at least two wins to determine the winner. The match was competitive and evenly matched, with the outcome being decided in the third and decisive round.<br/>It's worth noting that the result of the second round was disputed. Izida later claimed that her tap on the mat was a casual strike rather than a signal of submission. However, this clarification came only after the fight had ended, not immediately.<br/>Watch our clip and see for yourself.`}
        />
      </p>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.outro`}
          components={{1: <b />, br: <br />}}
          defaults={`Izida and Irina faced each other only once, and a rematch between them seems unlikely in the near future.<br/>On that day, we also invited another Ukrainian bodybuilder, <1>Anna Michailenko</1>, to participate in our wrestling event. Both Izida and Irina were prepared to face her, but Anna chose to remain in the role of a spectator.`}
        />
      </p>
    </>
  )
}
