import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR09_3, DIR_TAIS_MAIN, DIR_TAIS_VS_KARA_SHORT} from "@/common/constants/ImageContexts"
import imgMain from 'public/assets/img/girl/tais2013/main_gallery/tais-03.jpg'
import imgMain2 from 'public/assets/img/videoGallery/09/mma-rozhdestvenskij-kubok-2012-4/01.jpg'
import imgMain3 from 'public/assets/img/girl/tais2013/tais_vs_kara_short/01.jpg'
import imgMain4 from 'public/assets/img/girl/tais2013/tais-varvara.jpg'
import imgMain5 from 'public/assets/img/girl/tais2013/2013-sg-elena-vasilyeva-tais.jpg'
import Image from "next/image"
import Link from "next/link"
import sC from '@/common/styles.module.scss'

export const tais2013Desc = () => {
  const buttonText = 'Other photos'
  
  return (
    <>
      <Image src={imgMain} alt={'imgMain'} className={sC.MainImg}/>
      <ButtonGallery images={DIR_TAIS_MAIN}
                     buttonName={buttonText} imagesSize={{width: 330, height: 220}}/>
      <p>
        <b>Tais</b> (5’7” / 130 lb) is a skilled and strong woman specializing in various combative sports. She
        competes successfully in Submission Grappling and MMA competitions. Tais has a beautiful, flexible body and
        the character of a dominant fighter. Outside of the gym, she is warm, open, and approachable. Meeting her, one
        would never think that this charming lady could be a formidable opponent on the mat. Looking at her, it's hard
        to imagine she could overpower you, pin you down, or squeeze you senseless between her powerful thighs. Yet,
        she excels at all these skills!
      </p>
      <h4><u>Tais in MMA fights</u></h4>
      <h4>Tais vs Elena Vasilyeva. Christmas Cup 2012</h4>
      <Image src={imgMain2} alt={'imgMain2'} className={sC.MainImg}/>
      <p>
        The fight was scheduled for 3 four-minute rounds with a one-minute rest period between each round. Tais
        defeated <Link href="/girl/2012_2013/elena-vasileva2013">Lena</Link> (5'6" / 132 lb) already in
        the first round.
      </p>
      <ButtonGallery images={DIR09_3} buttonName={buttonText}/>
      <p>After mounting her opponent, Tais could have delivered punches to Kara’s head from the top position, but
        instead chose to make her submit with an arm lock.</p>
      <h4>Tais vs Kara Teller. 2012</h4>
      <Image className={sC.MainImg} src={imgMain3} alt="imgMain"/>
      <p>
        In 2012, Tais fought three times against <Link href="/girl/2012_2013/kara-teller">Kara
        Teller</Link>
        (5'7" / 119 lb), winning two matches by fall. In the third fight, she was disqualified for arguing with the
        referee, and Kara was declared the winner.<br/>
        The photo album below shows images from their second fight, where Tais dominated her opponent in the first
        round.
      </p>
      <ButtonGallery images={DIR_TAIS_VS_KARA_SHORT} buttonName={buttonText}/>
      <p>Unlike their first match, Kara offered strong resistance and even counterattacked a few times, fighting
        fiercely. However, the odds were not in her favor.</p>
      <h4><u>Tais in Submission Grappling fights</u></h4>
      <p>
        Tais won all submission grappling tournaments organized by the Namazon Club from 2008 to 2011. She was
        unmatched as a wrestler, both on mats and sandy beaches.<br/>
        Additionally, Tais defeated well-known Ukrainian bodybuilders such as <b>Irina Dergacheva</b> (Izida) and <b>Anna
        Mihailenko</b>, bringing them to submission. She also defeated <b>Alesya Veresova</b>, a multiple champion of
        Belarus in arm wrestling and now a freestyle wrestling coach.
      </p>
      <p>In 2012, Tais overpowered <b>Varvara Akulova</b> (5'9" / 165 lb), who was twice recognized by the Guinness
        Book of Records as the world's strongest girl during her early years, and is now a master of sports in
        weightlifting and powerlifting.</p>
      <Image className={sC.MainImg} src={imgMain4} alt="imgMain4"/>
      <p><b>Tais</b> vs <b>Varvara Akulova</b></p>
      <p>In June 2013, Tais faced her old rival <Link
        href="/girl/2012_2013/elena-vasileva2013">Elena Vasilyeva</Link> (5'7" / 157 lb), who had been
        away from the Namazon Club for nearly two years, during which she gained weight, strength, and improved
        wrestling abilities.<br/>
        It was a hard-fought and fairly even match, with submissions coming from both sides. After over 20 minutes of
        struggle, Lena finally defeated her more experienced opponent. This marked Tais's first loss against Elena in
        wrestling.
      </p>
      <Image className={sC.MainImg} src={imgMain5} alt="imgMain5"/>
      <p><b>Tais</b> vs <b>Elena Vasilyeva</b></p>
      <h4><u>Results for 2012 MMA Tournaments</u></h4>
      <p>Win-loss-draw record – 3:1:0 (as of May 8, 2012)</p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase full videos of Tais’s
        fights from 2012-2013 – MMA fights (Videos 9, 17, and 18), submission grappling fights (Videos 19, 29, 33, and
        35), and mixed wrestling fights (Videos 28, 30, 31-1, 31-2, 32, and 34).
      </p>
    </>
  )
}

//todo: check links