import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR17_1, DIR17_2, DIR17_3} from "@/common/constants/ImageContexts"

export const NC17Desc = () => {
  return (
    <>
      <p>
        Our video features two MMA fights: <b>Kara Teller</b> (Moscow, 5’7” / 123 lb) vs <b>Tais</b> (St.
        Petersburg, 5’7” / 130 lb) and <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) vs <b>Svetlana
        Solovyeva</b> (St. Petersburg, 5’7” / 123 lb). Kara and Tais were featured in our previous film (Video
        9), while this was Svetlana's first MMA fight.
      </p>
      <p>In the second part of the movie, you will witness a highly competitive submission grappling fight between Kara
        and Svetlana Solovyeva. Sveta had the edge in strength, while Kara demonstrated superior experience and
        technical skill in this matchup.</p>
      <p>To find out who emerged victorious, you'll have to watch our film.</p>
      <h5><u>MMA:</u> Svetlana Solovyeva vs Kara Teller</h5>
      <ButtonGallery images={DIR17_1}/>
      <h5><u>MMA:</u> Kara Teller vs Tais</h5>
      <ButtonGallery images={DIR17_2}/>
      <h5><u>Submission Grappling:</u> Svetlana Solovyeva vs Kara Teller</h5>
      <ButtonGallery images={DIR17_3}/>
    </>
  )
}