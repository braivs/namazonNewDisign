import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "@/common/common"
import React from "react"
import {Video_data} from "@/data/video-data/video-data"
import s from './video-data.module.scss'
import {formatNumber} from "@/common/helpers"
import sC from '@/common/styles.module.scss'

export default function VideoData({videoData, youtubeID}: Props) {
  console.log('videoData: ', videoData)
  let videoDataIdFormatted = ''
  if (videoData) videoDataIdFormatted = formatNumber(videoData.id)

  return (
      <div className={sC.compArticlesVideoGirl}>
        <h3>{`NC${videoDataIdFormatted}`}</h3>
        <h4>{videoData?.title}</h4>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            {
              youtubeID && <MyYouTube videoId={youtubeID}/>
            }
          </Col>
        </Row>
        <section className="pt-10">
          {videoData?.description()}
        </section>
        <Row>
          <hr/>
          <p>
            You can purchase <b>video {`NC${videoDataIdFormatted}`}</b> on <a className={s.violet} href={`https://namazonclub.gumroad.com/l/nc${videoDataIdFormatted}`}><b>Gumroad</b></a>.
          </p>
        </Row>
      </div>
  )
}

type Props = {
  videoData:  Video_data | undefined
  youtubeID: string | undefined
}