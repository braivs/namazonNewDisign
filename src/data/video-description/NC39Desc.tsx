import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR39} from "@/common/constants/ImageContexts"
import Link from "next/link"

export const NC39Desc = ()  => {
  return (
    <>
      <p>
        In comparison with Alexandr, whom you can see in our <Link href="/video/nc38">VIDEO
        38</Link>, <b>Villian</b> doesn’t appear as big and strong, weighing only 180 pounds. However, he compensates
        with speed, experience, and wrestling skill. In their personal matches, Villian usually emerges as the victor.
        Interestingly, despite being 44 pounds lighter than Villian, <b>Tais</b> finds it easier to fight Villian than
        Alexandr because she can more effectively apply her techniques against him.
      </p>
      <p>
        This video showcases six competitive fights, all of which were real and intense! You can judge from the screens
        below how intense and uncompromising the battles were. If you enjoy competitive mixed wrestling,
        then this video is definitely for you.
      </p>
      <ButtonGallery images={DIR39}/>
    </>
  )
}