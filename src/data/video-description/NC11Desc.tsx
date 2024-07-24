import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR11} from "@/common/constants/ImageContexts"

export const NC11Desc = () => {
  return (
    <>
      <p>
        Alex vs Elena Vasilyeva. Mixed Beach Wrestling. July, 2011<br/>
        This film features two fights for the 3rd place between <b>Elena Vasilyeva</b> (5’6” / 135 lb)
        and <b>Alex</b> (5’9” / 154 lb), which were held as part of a mixed wrestling tournament in St.
        Petersburg, July 2011. Each individual fight had no time limit, according to the tournament rules.<br/>
        The struggle between Elena and Alex proved to be extremely hard and exhausting. Their first fight lasted more
        than 12 minutes.
      </p>
      <p>
        If you enjoy sporting mixed wrestling with choke holds, body scissors, and head scissors, then we believe you
        will love our film. Watch to find out who - <b>Elena</b> or <b>Alex</b> - took 3rd place in this mixed
        tournament.
      </p>
      <ButtonGallery images={DIR11}/>
    </>
  )
}