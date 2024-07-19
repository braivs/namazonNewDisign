import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR03_1, DIR03_2, DIR03_3} from "@/common/constants/ImageContexts"

export const NC3Desc = () => {
  return (
    <>
      <p>
        <b>Alex</b> came to St. Petersburg at the weekend and offered Tais (5'7" / 132 lb) and <b>Natalia
        Mysik</b> (5'11" / 154 lb) to hold a mixed tournament on beach wrestling. He had been practicing
        wrestling a lot recently, and had become physically stronger - 5'9" / 150 lb, which allowed him to count
        on a successful performance.
      </p>
      <p>The mixed beach tournament went in three rounds. The fights between the girls were hard enough,
        especially in the first two rounds. The mixed contests started with Alex’s convincing win over Natalia .
        Then the luck turned away from Alex ...</p>
      <p>If you like <b>mixed competitive wrestling</b>, then we believe you will love our film. Watch how
        everything was!</p>
      <h5>Natalia Mysik vs Alex </h5>
      <ButtonGallery images={DIR03_1}/>
      <h5>Alex vs Tais</h5>
      <ButtonGallery images={DIR03_2}/>
      <h5>Natalia Mysik vs Tais</h5>
      <ButtonGallery images={DIR03_3}/>
    </>
  )
}

//todo: Need to combine this with 03wm from previous site version