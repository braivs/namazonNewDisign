import React from "react"
import {
  DIR35,
  DIR36,
  DIR37,
  DIR41_KZ,
  DIR41_VZ,
  DIR_LIDA_VIKA,
  DIR_NC42,
  DIR_NC46,
  DIR_NC47, DIR_TAIS_YULIA
} from "@/common/ImageContexts"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import Link from "next/link"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import VSmorodina_vs_VVardugina1 from '/public/assets/img/videoGallery/nc44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from '/public/assets/img/videoGallery/nc44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Smorodina.jpg'
import {GalleryFromArray} from "@/common/GalleryFromArray"

export const video_data_src: Record<number, Video_data_src> = {
  51: {
    id: 51,
    youtubeID: 'zvHDGMyqyXc',
    img: '/assets/img/video/NC51.jpg',
    title: 'Kara, Darya, Tais. 08.05.2012',
    des: 'This is a short video, but the price for the full version is not high. You can enjoy it)',
    description: () => (
      <p>
        This is a short video, but the price for the full version is not high. You can enjoy it)
        Featured: Tais, Kara Teller, Darya Balina.
      </p>
    )
  },
  48: {
    id: 48,
    youtubeID: 'fb5NUMSB2qg',
    img: '/assets/img/video/NC48.jpg',
    title: 'Competitions Spring 2017',
    des: 'Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana (Tais), Murtazalieva Kurmandi, Piven Alyona.',
    description: () => (
      <p>
        Women&apos;s strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko
        Oksana
        (Tais), Murtazalieva Kurmandi, Piven Alyona.
      </p>
    )
  },
  47: {
    id: 47,
    youtubeID: 'fb5NUMSB2qg',
    img: '/assets/img/video/NC47.jpg',
    title: "Women's strength competition at Maslenitsa 2017",
    des: "Women`s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling.",
    description: () => (
      <>
        <p>
          Women&lsquo;s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling. Girls:
          Vardugina
          Viktoria, Vasilyeva Elena, Grigorenko Oksana (Tais), Piven Alyona.
          Grigorenko Oksana & Piven Alyona represented Namazon club. Vasilyeva Elena took part only in armwrestling.
        </p>
        <ButtonGallery images={DIR_NC47}/>
      </>
    )
  },
  46: {
    id: 46,
    youtubeID: 'lDgKoh-9KG4',
    img: '/assets/img/video/NC46.jpg',
    title: 'Alena Kurmandi 30.03.2017 - 06.04.2017',
    des: '',
    description: () => {
      return <>
        <ButtonGallery images={DIR_NC46}/>
      </>
    }
  },
  44: {
    id: 44,
    youtubeID: 'bc9RU5hP4k4',
    img: '/assets/img/video/NC44.jpg',
    title: 'The Female Power Competition for the Maslenitsa Festival, 2016. Wrestling',
    des: 'You can read the report on the competitions, the main part of which was these fights...',
    description: () => {
      return <>
        <p>You can read the report on the competitions, the main part of which was these fights, <Link
          href={'/competition/2015-2017/maslenitsa-2016'}>here</Link>. There you will find a short report on
          the fights, as well as many photos. For extra beauty, we have added a couple of photos from each fight here.
        </p>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore todo: need to add Image ts type*/}
        <GalleryFromArray images={[VSmorodina_vs_VVardugina1.src, VSmorodina_vs_VVardugina2.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryFromArray images={[p1_OGrigorenko_vs_VVardugina.src, p2_OGrigorenko_vs_VVardugina.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryFromArray images={[p1_OGrigorenko_vs_VSmorodina.src, p2_OGrigorenko_vs_VSmorodina.src]}/>
      </>
    }
  },
  42: {
    id: 42,
    youtubeID: 'e8fADPtHm7w',
    img: `/assets/img/video/NC42.jpg`,
    title: 'Submission grappling tournament. Part 2. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
    description: function () {
      return <>
        <p><b>VIDEO {this.id}</b> is the second part of our full HD video featuring the submission grappling
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
    }
  },
  41: {
    id: 41,
    youtubeID: 'vE6uc_UXaWc',
    img: `/assets/img/video/NC41.jpg`,
    title: 'Submission grappling tournament. Part 1. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
    description: function () {
      return <>
        <p>Our HD video featuring the submission grappling mini-tournament that was held on October 13, 2014, has been
          divided into two parts: <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights featuring <b>Zoya
            Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer to our competitions.</p>
        <p>Prior to this event, Zoya participated in Russian hand-to-hand fighting. Here, her opponents were two
          competitors who previously faced off in the May 2014 Grappling tournament for beginners – <b>Christina
            Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules remained
          the same – pins-and-submissions, requiring a wrestler to either force her opponent to submit or hold her
          in a pin for a count of five to win an individual fight.
          Zoya proved to be a brave and resilient fighter. Despite being outweighed by her opponents, she
          fought tenaciously, avoiding submissions.</p>
        <p>In the first fight between Zoya and Christina, neither the 4 minutes of regular time nor the 2 extra minutes
          produced a winner. Only in their second encounter did Christina manage to secure a pinfall victory after a
          hard-fought struggle.</p>
        <h5>Christina Shvets vs Zoya Dorofeeva</h5>
        <ButtonGallery images={DIR41_KZ}/>
        <p>Victoria proved to be an even more formidable opponent for Zoya, defeating her twice with chokeholds. Despite
          this, Zoya had several opportunities to defeat Victoria in both their first and second fights. Unfortunately,
          due to her lack of experience in such competitions, she was unable to capitalize on those chances.</p>
        <h5>Victoria Vardugina vs Zoya Dorofeeva</h5>
        <ButtonGallery images={DIR41_VZ}/>
      </>
    }
  },
  37: {
    id: 37,
    youtubeID: 'oxAzT_GWSJA',
    img: `/assets/img/video/NC37.jpg`,
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    des: 'This video is a continuation of the Video 36 that featured the preliminary fights.',
    description: function () {
      return <>
        <p>Weight class: 145 to 160 lb. May, 2014</p>
        <p>
          This video is a continuation of the Video 36 that featured the preliminary fights (see its
          description <Link href="/video/nc36">HERE</Link>). Now here you can see two final fights in
          which the loser and the winner of the tournament
          were determined.
        </p>
        <Row>
        </Row>
        <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
          and in the other Daria and Victoria decided between themselves who was the best wrestler of the
          competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
          other twice by applying submission holds.</p>
        <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
          wrestler was able to gain a victory within the 4 min of time limit.</p>
        <ButtonGallery images={DIR37}/>
        <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
          competitive spirit. You will find it especially entertaining if you are interested to see a fight in
          which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
          finally succeeds after long hard attempts.</p>
      </>
    }
  },
  36: {
    id: 36,
    youtubeID: 'kkbQ7YEQ9nQ',
    img: `/assets/img/video/NC36.jpg`,
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    des: 'In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb).',
    description: function () {
      return <>
        <p>
          In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6
          lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb). Rules:
          fights with submissions or pins counted to 10.
        </p>
        <p>
          All the girls except Victoria Vardugina, who has already wrestled once before at the Namazon Club, are
          beginners in submission grappling and are participating here for the first time.<br/>
          About half a year ago, in October 2013, Vika won a women&apos;s <Link href="/video/nc33">crossfit
          wrestling</Link> competition in our club by forcing the uncompromising wrestler Lidiya Oslopovskih
          to submit in the final fight. Vika is a physically strong young woman who not only learns how to wrestle
          but also competes successfully in college arm wrestling tournaments.
        </p>
        <p>
          Our competition today is notable for its typically FEMALE wrestling. The rules require the winner of a
          match to win at least 2 rounds out of 3. Each round has a 4-minute time limit.<br/>
          The video includes three matches, the first two consisting of two rounds each, and the last one
          (Vika vs Christina) going three rounds.
        </p>
        <ButtonGallery images={DIR36}/>
        <p>We recommend you watch this video (Video 36) if you like to see ambitious, athletic girls with
          beautiful bodies competing with each other in a hard-fought contest where everything is allowed:
          choking, pinning, and submission holds.</p>
      </>
    }
  },
  35: {
    id: 35,
    youtubeID: 'tYIIf2sPt4c',
    img: `/assets/img/video/NC35.jpg`,
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    des: 'Lovely young lady, Lidiya Oslopovskih (53 kg / 117 lbs), is a newcomer to the Namazon wrestling competitions.',
    description: function () {
      return <>
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
    }
  },
  33: {
    id: 33,
    youtubeID: 'UdxhMrIku4A',
    img: `/assets/img/video/NC33.jpg`,
    title: 'Crossfit tournament\nSubmission Grappling. 2013',
    des: ' This video features two submission grappling matches held as the final part of a Crossfit tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.',
    description: function () {
      return <>
        <p>
          This video features two submission grappling matches held as the final part of a Crossfit tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
          The matches were to determine winners in two weight categories: up to 70 kg / 155 lb between <b>Lidia Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb), and in the absolute category between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
        </p>
        <p>
          Despite significant weight differences between the opponents in each pair, their struggle on the mat was strenuous, entertaining, and exciting. The girls fought hard and bravely to win this last decisive part of the tournament.
        </p>
        <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
        <ButtonGallery images={DIR_LIDA_VIKA}/>
        <h5>Yulia Borovik vs Tais</h5>
        <ButtonGallery images={DIR_TAIS_YULIA}/>
      </>
    }
  }
}

export const video_data: Record<number, Video_data> = Object.fromEntries(
  Object.entries(video_data_src).map(([key, video]) => [
    Number(key),
    {
      ...video,
      color: '',
      category: 'Submission wrestling',
    }
  ])
);

export const video_data_blank = {
  id: 0,
  youtubeID: '',
  color: '',
  img: '',
  category: '',
  title: '',
  des: '',
  description: () => {
    return <></>
  }
}

type Video_data_src = {
  id: number
  youtubeID: string
  img: string
  title: string
  des: string,
  description: () => React.ReactNode
}


export type Video_data = {
  id: number
  youtubeID: string
  color: string
  img: string
  category: string
  title: string
  des: string,
  description: () => React.ReactNode
}

//todo: check links
//todo: need to fix on Gumroad nc names