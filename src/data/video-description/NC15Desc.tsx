import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR15} from "@/common/constants/ImageContexts"

export const NC15Desc = () => {
  return (
    <>
      <p>
        In this video, you can see what happened a few days after the 1st part of the mixed beach tournament (<b>Video
        14</b>).
        <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5’8” / 177 lb) insisted on continuing to wrestle.
        <b>Tais</b> (5’7” / 130 lb) accepted the challenge of the two men and wrestled them a few more times.
      </p>
      <p>The action took place on the sandy beach and on the grass. It was a nice sunny day, which helped us capture
        colorful footage. The video includes several fights, each ending with the submission of one fighter.</p>
      <p>If you like competitive mixed wrestling where a woman struggles hard against men, then this video is for
        you.</p>
      <ButtonGallery images={DIR15}/>
    </>
  )
}