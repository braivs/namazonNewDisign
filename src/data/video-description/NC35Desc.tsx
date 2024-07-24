import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR35} from "@/common/constants/ImageContexts"

export const NC35Desc = () => {
  return (
    <>
      <p>
        Lovely young lady, <b>Lidiya Oslopovskih</b> (53 kg / 117 lbs), is a newcomer to the Namazon wrestling
        competitions. She is a small but agile fighter, with a very well-built body. In this video, you can see
        her three fights with the strongest and most experienced woman of the club, <b>Tais</b> (60 kg / 132 lb).
      </p>
      <p>
        It’s somewhat interesting and exciting to watch how Lidiya struggles, especially on the ground.
        The rules required the opponents to wrestle to submission only, regardless of whether one wrestler would pin
        the
        other to submission or use another move. This time Tais decided to use a little &quot;naughty&ldquo; tactic
        for
        success.
      </p>
      <p>
        If you like to watch competitive mat wrestling between two strong and fit women and if you like to see
        some long pin holds, as well as some hard attempts of the bottom lady to bridge out of these pins, then
        this video is highly recommended for you.
      </p>
      <ButtonGallery images={DIR35}/>
    </>
  )
}