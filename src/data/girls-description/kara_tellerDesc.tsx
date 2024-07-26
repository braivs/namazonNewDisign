import imgMain from 'public/assets/img/girl/kara-teller/k01.jpg'
import imgMain2 from 'public/assets/img/videoGallery/09/mma-rozhdestvenskij-kubok-2012-1/01.jpg'
import imgMain3 from 'public/assets/img/videoGallery/17/mma-kara-svetlany-2012-1/01.jpg'
import imgMain4 from 'public/assets/img/videoGallery/18/mma-sportivnyj-prazdnik-2012-1/01.jpg'
import imgMain5 from 'public/assets/img/videoGallery/17/mma-kara-svetlany-2012-3/9.jpg'
import cn from "classnames"
import {Col} from "react-bootstrap"
import sC from '@/common/styles.module.scss'
import Image from "next/image"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {
  DIR09_1,
  DIR_KARA_SVETLANY_1,
  DIR_KARA_SVETLANY_3,
  DIR_KARA_TELLER,
  DIR_MMA_SPORT_HOLIDAY_1
} from "@/common/constants/ImageContexts"
import Link from "next/link"

export const kara_tellerDesc = () => {
  const buttonText = 'Other photos'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
      </Col>
      <ButtonGallery images={DIR_KARA_TELLER} imagesSize={{width: 330, height: 220}} buttonName={buttonText}/>
      <p>
        <b>Kara Teller</b> (the Vityaz Club, Moscow) is a very tender, feminine girl in daily life and a tough, brave,
        stubborn fighter on a wrestling mat and in a ring. She specializes in karate, sambo, MMA, and hand-to-hand
        combat known as street fighting. At 5'7" and weighing 121 lb, she fears nobody and valiantly fights against
        heavier and stronger opponents. At the Namazon Club, she mainly participated in MMA fights.
      </p>
      <h4><u>Kara Teller in MMA fights</u></h4>
      <h4>Kara vs Elena Vasilyeva. Christmas Cup 2012</h4>
      <Image className={sC.MainImg} src={imgMain2} alt="imgMain2" />
      <p>
        This was an intense fight with numerous punches, kicks, throws, and ground wrestling. The match had three
        four-minute rounds with four-minute breaks between each round. <Link
        href="/girl/2012_2013/elena-vasileva2013">Elena</Link> (St. Petersburg, 5'6" / 132 lb) dominated the
        first two rounds, giving Kara a very hard time.
      </p>
      <ButtonGallery images={DIR09_1} buttonName={buttonText}/>
      <p>
        In the third round, it became clear that Elena was getting tired. Kara managed to gain control of the fight due
        to her combative spirit and eventually won by applying a choke hold. It was a very hard and dramatic fight,
        perhaps one of the best we've ever had at the Club.
      </p>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <Image className={sC.MainImg} src={imgMain3} alt="imgMain3"/>
      <p>
        <b>Svetlana Solovyova</b> (St. Petersburg, 5'7" / 124 lb) was clearly superior to Kara in physical power. For
        example, her hand grip strength was measured at 56.3 kg (124 lb), more than her own weight! However, Kara’s
        fighting experience compensated for her lack of strength during their fight.
      </p>
      <p>
        Initially, Svetlana could withstand Kara's attacks during their stand-up exchanges, but when the fight went to
        the ground, Kara's advantage became evident. Kara won by a choke hold in 1:13.
      </p>
      <ButtonGallery images={DIR_KARA_SVETLANY_1} buttonName={buttonText}/>
      <h4>Kara vs Darya Balina. 2012</h4>
      <Image className={sC.MainImg} src={imgMain4} alt="imgMain"/>
      <p>
        Kara was the favorite to win this fight against <Link href="/girl/2012_2013/darya-balina">Darya
        Balina</Link> (the female self-defense Club "Panther", St. Petersburg, 5'4" / 124 lb). While Darya had good
        kickboxing skills, she was less confident in wrestling due to her combat training focus on self-defense. The
        fight format was three four-minute rounds with one-minute rest periods between them.
      </p>
      <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1} buttonName={buttonText} />
      <p>
        It took Kara only two rounds to secure victory. The first round was fought in stand-up, with Kara showing
        superior striking. In the second round, the fight went to the ground where Kara again took advantage and
        finished Darya with a choke hold, a method that has become Kara's trademark.
      </p>
      <h4><u>Kara Teller in Submission Grappling Fights</u></h4>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <Image className={sC.MainImg} src={imgMain5} alt="imgMain"/>
      <p>
        The girls had two fights with each other. The first was a short MMA fight lasting just over a minute. Afterward,
        they decided to test their strengths again under submission grappling rules, with a set time limit.
      </p>
      <ButtonGallery images={DIR_KARA_SVETLANY_3}  buttonName={buttonText}/>
      <p>
        Both were in the same weight class, making their contest interesting and intriguing. Svetlana (St. Petersburg,
        5'7" / 124 lb) was physically more powerful and spent most of the fight on top of Kara. Kara, on her back, used
        a head scissors in defense and struggled to control Svetlana’s arm from the bottom, attempting a submission
        hold. However, neither could secure a victory within the time limit. Svetlana's lack of wrestling skill and
        Kara’s insufficient strength for a successful counterattack led to a <b>draw</b>.
      </p>
      <h4><u>Results for 2012 MMA Tournaments</u></h4>
      <p>Win-loss-draw record: 4:3:0 (as of July 1, 2012)</p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase full videos of Kara’s
        MMA fights held at the Namazon Club (Videos 9, 17, 18, and 20).
      </p>
    </>
  )
}

//todo: check links