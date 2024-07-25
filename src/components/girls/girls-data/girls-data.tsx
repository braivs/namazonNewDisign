import React from "react"
import {GirlData} from "@/common/types"

export default function GirlsData({GirlData}: Props) {

  return (
      <>
        <h3>Participants of competitions</h3>
        <h4>{GirlData?.name}</h4>
        <section className="pt-10">
          {GirlData?.description()}
        </section>
      </>
  )
}

type Props = {
  GirlData: GirlData | undefined
}