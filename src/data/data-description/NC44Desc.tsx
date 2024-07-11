import Link from "next/link"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {GalleryFromArray} from "@/common/GalleryFromArray"
import VSmorodina_vs_VVardugina1 from "../../../public/assets/img/videoGallery/nc44/1_V.Smorodina_vs_V.Vardugina.jpg"
import VSmorodina_vs_VVardugina2 from "../../../public/assets/img/videoGallery/nc44/2_V.Smorodina_vs_V.Vardugina.jpg"
import p1_OGrigorenko_vs_VVardugina
  from "../../../public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Vardugina.jpg"
import p2_OGrigorenko_vs_VVardugina
  from "../../../public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Vardugina.jpg"
import p1_OGrigorenko_vs_VSmorodina
  from "../../../public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Smorodina.jpg"
import p2_OGrigorenko_vs_VSmorodina
  from "../../../public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Smorodina.jpg"
import React from "react"

export const Nc44Desc = () => {
  return (
      <>
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
  )
}