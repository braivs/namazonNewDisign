import React from "react"
import {DIR_NC42, DIR_NC46, DIR_NC47} from "@/common/ImageContexts"
import GalleryNext, {GalleryNextFromArray} from "@/common/GalleryNext/GalleryNext"
import Link from "next/link"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import VSmorodina_vs_VVardugina1 from '/public/assets/img/videoGallery/nc44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from '/public/assets/img/videoGallery/nc44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Smorodina.jpg'

console.log(typeof VSmorodina_vs_VVardugina1)

// @ts-ignore
export const video_data: Record<number, Video_data> = {
  51: {
    id: 51,
    youtubeID: 'zvHDGMyqyXc',
    color: '',
    img: '/assets/img/video/NC51.jpg',
    category: 'Submission wrestling',
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
    color: '',
    img: '/assets/img/video/NC48.jpg',
    category: 'Submission wrestling',
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
    color: '',
    img: '/assets/img/video/NC47.jpg',
    category: 'Submission wrestling',
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
        <GalleryNext images={DIR_NC47}/>
      </>
    )
  },
  46: {
    id: 46,
    youtubeID: 'lDgKoh-9KG4',
    color: '',
    img: '/assets/img/video/NC46.jpg',
    category: 'Submission wrestling',
    title: 'Alena Kurmandi 30.03.2017 - 06.04.2017',
    des: '',
    description: () => {
      return <>
        <GalleryNext images={DIR_NC46}/>
      </>
    }
  },
  44: {
    id: 44,
    youtubeID: 'bc9RU5hP4k4',
    color: '',
    img: '/assets/img/video/NC44.jpg',
    category: 'Submission wrestling',
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
        <GalleryNextFromArray images={[VSmorodina_vs_VVardugina1.src, VSmorodina_vs_VVardugina2.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryNextFromArray images={[p1_OGrigorenko_vs_VVardugina.src, p2_OGrigorenko_vs_VVardugina.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryNextFromArray images={[p1_OGrigorenko_vs_VSmorodina.src, p2_OGrigorenko_vs_VSmorodina.src]}/>
      </>
    }
  },
  42: {
    id: 42,
    youtubeID: 'e8fADPtHm7w',
    color: '',
    img: `/assets/img/video/NC42.jpg`,
    category: 'Submission wrestling',
    title: 'Submission grappling tournament. Part 2. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
    description: function() {
      return <>
          <p><b>VIDEO {this.id}</b> is the second part of our full HD video featuring the submission grappling
          mini-tournament
          that took place on October 13, 2014. It includes two fights between <b>Christina Shvets</b> (68.9 kg / 151.9 lb)
          and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). After defeating Zoya Dorofeeva (see <b>VIDEO 41</b>),
          they competed to determine the winner of this small wrestling event.
        </p>
        <p>This was their second encounter. The first was at a <Link
          href="/video/36">tournament for beginners held on May 9th of that year</Link>, where Victoria emerged
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
        <GalleryNext images={DIR_NC42}/>
      </>
    }
  }
};

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
