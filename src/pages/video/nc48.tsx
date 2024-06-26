import {useExtractVideoID} from "../../../hooks/extractVideo"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "@/common/common"
import React from "react"
import VideoDetails from "@/components/video-details"

const Nc48 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'zvHDGMyqyXc'
  return (
    <VideoDetails>
      <>
        <h3>{videoNumber}</h3>
        <h4>NC48 - Competitions Spring 2017</h4>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>
            <MyYouTube videoId={youtubeID}/>
          </Col>
        </Row>
        <p>
          Women&apos;s strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana
          (Tais), Murtazalieva Kurmandi, Piven Alyona.
        </p>
        <Row>
          <hr/>
          <p>
            You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://namazonclub.gumroad.com/l/nc51">Gumroad</a>.
          </p>
        </Row>
      </>
    </VideoDetails>
  )
}

export default Nc48

