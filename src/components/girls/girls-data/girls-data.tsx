import React from "react"
import {GirlData} from "@/common/types"
import sC from '@/common/styles.module.scss'
import cn from "classnames"

export default function GirlsData({GirlData}: Props) {

  return (
    <>
      <h3>Participants of competitions {GirlData?.years}</h3>
      <h4>{GirlData?.name}</h4>
      <section className={cn("pt-10", sC.compArticlesVideoGirl)}>
        {GirlData?.description()}
      </section>
    </>
  )
}

type Props = {
  GirlData: GirlData | undefined
}