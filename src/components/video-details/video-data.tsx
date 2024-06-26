import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "@/common/common"
import React from "react"
import {Video_data} from "@/data/video-data"

export default function VideoData({videoData, youtubeID}: Props) {
  return (
      <>
        <h3>{`NC${videoData?.id}`}</h3>
        <h4>{videoData?.title}</h4>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            {
              youtubeID && <MyYouTube videoId={youtubeID}/>
            }

          </Col>
        </Row>
        <section className="pt-10">
          {videoData?.description}
        </section>
        <Row>
          <hr/>
          <p>
            You can purchase <b>video {`NC${videoData?.id}`}</b> on <a href={`https://namazonclub.gumroad.com/l/${videoData?.id}`}>Gumroad</a>.
          </p>
        </Row>
      </>
  )
}

type Props = {
  videoData:  Video_data | undefined
  youtubeID: string | undefined
}