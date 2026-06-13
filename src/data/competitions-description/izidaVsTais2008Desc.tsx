'use client'

import React from 'react'
import {Trans} from 'react-i18next'

const NS = 'IzidaVsTais2008'

export const IzidaVsTais2008Desc: React.FC = () => {
  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.intro`}
          components={{1: <b />, 2: <b />, 3: <b />, 4: <b />, br: <br />}}
          defaults={`The fight between Tais and the well-known Ukrainian bodybuilder Izida can be called one of the most interesting sporting events of 2008. At that time, <1>Izida</1> (5'6" / 155 lb) was relatively new to wrestling, but she was a powerful competitor and demonstrated excellent form. <2>Tais</2> (5'7" / 132 lb), while also physically strong, was expectedly inferior to her muscular opponent in raw physical power. However, Tais was more skilled than Izida as a wrestler.<br/>We anticipated an intriguing match because it's always fascinating to witness a contest between <3>SKILL</3> and pure physical <4>POWER</4>. You can observe how one prevailed over the other in this struggle by watching the video clip.`}
        />
      </p>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.outro`}
          components={{1: <b />, 2: <b />, 3: <b />, 4: <b />, br: <br />}}
          defaults={`Unfortunately, <1>Izida</1> had only one fight with <2>Tais</2>.<br/>Since then, Izida has continued wrestling (mostly in mixed competitions) and has performed in the <3>Professional Wrestling Federation (PWF)</3>.<br/>One might expect that, with more experience under her belt, <2>Izida</2> would demonstrate her character by seeking to amend her defeat and challenge Tais to a <4>rematch</4>. However, this has yet to happen.`}
        />
      </p>
    </>
  )
}
