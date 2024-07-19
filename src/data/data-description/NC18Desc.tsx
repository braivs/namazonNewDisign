import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2} from "@/common/constants/ImageContexts"

export const NC18Desc = () => {
  return (
    <>
      <p>
        The first match is between the experienced fighter <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) and the
        newcomer <b>Darya Balina</b> (St. Petersburg, 5’4” / 124 lb). Almost the entire fight is contested standing
        up,
        where Kara clearly dominates. Despite this, Darya proves to be very strong and holds her own for nearly two
        rounds.
      </p>
      <p>The second fight (Kara Teller vs Tais), unlike the first, primarily takes place on the mat. Over two rounds,
        Tais strives to secure victory with a chokehold or submission lock, occasionally enduring strikes from her
        opponent. The final outcome is quite surprising.</p>
      <h5><u>MMA:</u> Darya Balina vs Kara Teller</h5>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1}/>
      <h5><u>MMA:</u> Kara Teller vs Tais</h5>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_2}/>
    </>
  )
}