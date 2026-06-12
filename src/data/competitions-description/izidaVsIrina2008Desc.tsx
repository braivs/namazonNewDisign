import sC from '@/common/styles.module.scss'
import React from 'react'

const IMG_MAIN = '/assets/img/girl/irina/subgr/07.jpg'

export const IzidaVsIrina2008Desc: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={IMG_MAIN} alt="" className={sC.videosMainImg} />
      </div>
      <p>
        The wrestling match between <b>Izida</b> (Kherson, Moscow) and <b>Irina</b> (Namazon Club, St. Petersburg) took
        place during Izida&apos;s second visit to St. Petersburg. Izida (5&apos;6&quot; / 154 lb) found a very tough and
        aggressive opponent in Irina, who by then (5&apos;9&quot; / 150 lb) had already gained experience with several
        impressive victories, including one over Tais. With both fighters being equally fit and strong, it promised to be
        an intense and powerful match.
      </p>
      <p>
        The rules required the fighters to achieve at least two wins to determine the winner. The match was competitive
        and evenly matched, with the outcome being decided in the third and decisive round.
        <br />
        It&apos;s worth noting that the result of the second round was disputed. Izida later claimed that her tap on the
        mat was a casual strike rather than a signal of submission. However, this clarification came only after the fight
        had ended, not immediately.
      </p>
      <p>
        <b>Izida</b> and <b>Irina</b> faced each other only once, and a rematch between them seems unlikely in the near
        future.
        <br />
        On that day, we also invited another Ukrainian bodybuilder, <b>Anna Michailenko</b>, to participate in our
        wrestling event. Both Izida and Irina were prepared to face her, but Anna chose to remain in the role of a
        spectator.
      </p>
    </>
  )
}
