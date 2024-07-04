import React from "react"
import {DIR_NC46, DIR_NC47} from "@/common/ImageContexts"
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
    description: (
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
    description: (
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
    description: (
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
    description: (
      <>
        <GalleryNext images={DIR_NC46}/>
      </>
    )
  },
  44: {
    id: 44,
    youtubeID: 'bc9RU5hP4k4',
    color: '',
    img: '/assets/img/video/NC44.jpg',
    category: 'Submission wrestling',
    title: 'The Female Power Competition for the Maslenitsa Festival, 2016. Wrestling',
    des: 'You can read the report on the competitions, the main part of which was these fights...',
    description: (
      <>
        <p>You can read the report on the competitions, the main part of which was these fights, <Link
          href={'/competition/2015-2017/maslenitsa-2016'}>here</Link>. There you will find a short report on
          the fights, as well as many photos. For extra beauty, we have added a couple of photos from each fight here.
        </p>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore todo: need to add Image ts type*/}
        <GalleryNextFromArray images={[VSmorodina_vs_VVardugina1.src, VSmorodina_vs_VVardugina2.src]} />
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryNextFromArray images={[p1_OGrigorenko_vs_VVardugina.src, p2_OGrigorenko_vs_VVardugina.src]} />
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryNextFromArray images={[p1_OGrigorenko_vs_VSmorodina.src, p2_OGrigorenko_vs_VSmorodina.src]} />
      </>
    )
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
  description: React.ReactNode
}
