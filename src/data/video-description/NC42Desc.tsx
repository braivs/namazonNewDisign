import Link from "next/link"
import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_NC42} from "@/common/constants/ImageContexts"

export const NC42Desc = ()  => {
  return (
    <>
      <p><b>This video</b> is the second part of our full HD video featuring the submission grappling
        mini-tournament
        that took place on October 13, 2014. It includes two fights between <b>Christina Shvets</b> (68.9 kg / 151.9
        lb)
        and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). After defeating Zoya Dorofeeva (see <b>VIDEO 41</b>),
        they competed to determine the winner of this small wrestling event.
      </p>
      <p>This was their second encounter. The first was at a <Link
        href="/video/nc36">tournament for beginners held on May 9th of that year</Link>, where Victoria emerged
        victorious. Here they were again on the same mat, with Christina determined for a rematch!</p>
      <p>
        According to the rules, to win an individual fight, it was necessary to either submit the opponent or pin
        her for a count of 5.<br/>
        By this time, they were evenly matched in weight and strength. The fight began cautiously, with both studying
        and feeling each other out for a long while, avoiding takedowns. However, the pace picked up, and once on the
        ground, Christina found herself in a precarious position: Victoria applied a headlock and attempted a pin,
        from which Christina narrowly escaped! It was an exhilarating moment, but neither emerged as the victor. The
        regular time ended in a draw, leading to a short rest break followed by an additional 2-minute extension, yet
        neither wrestler managed to secure a submission or pin.
      </p>
      <p>
        The second fight followed a similar pattern to the first. After regular time, it also resulted in a draw.
        However, adhering to our rules to determine a clear winner, we extended the extra time from 2 to 10 minutes.
        The remainder of the fight became an endurance test. As the struggle persisted, controlling the match became
        increasingly challenging for Christina, who appeared fatigued by the end, unlike Victoria.
      </p>
      <ButtonGallery images={DIR_NC42}/>
    </>
  )
}

//todo: looks like link is works, but because it is dynamic page, so ts error. Understand ho to fix.