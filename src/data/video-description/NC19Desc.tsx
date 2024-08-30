import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR19} from "@/common/constants/ImageContexts"

export const NC19Desc = () => {
  return (
    <>
      <p>
        <b>Varvara Akulova</b> is a great athlete. As a child and teenager, she was several times recognized as the
        strongest girl on the planet, which was twice confirmed by the Guinness Book of World Records. Varvara&apos;s
        strength results at various periods of her life have been presented, for example, on the official website of
        the <a href="http://www.spb-ac.ru/var.htm">St. Petersburg Athletic Center</a>. Look also <a
        href="http://warnet.ws/news/16167">here</a>.
      </p>
      <p>
        <a
          href="http://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">Today</a>,
        Akulova is an active sportswoman, a master of sports in weightlifting and powerlifting. Her height/weight are
        175 cm (5'9") / 75 kg (165 lb). <b>Tais</b> (5'7" / 130 lb) is the leader of the Namazon Club. She specializes
        in wrestling and MMA.
      </p>
      <p>In this fight, Varvara has a significant advantage in weight (about 33 lb) and in strength, but Tais is more
        experienced and technically skilled. The fight is fought in the grappling style. The intrigue is that nobody
        knows in advance who will win in the end. The principal question is <b>WHICH will be better, the skill or pure
          strength</b>.</p>
      <p>It is really a hard fight! Clearly, the big, strong Varvara does not want to lose to her smaller opponent. In
        turn, Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her skill and
        competitiveness. Who will prevail?</p>
      <ButtonGallery images={DIR19}/>
    </>
  )
}

//todo: v2: http://warnet.ws/news/16167 is not working