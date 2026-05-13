import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyDirectVideo, MyYouTube} from "@/common/common"
import React from "react"
import {Video_data} from "@/data/video-data/video-data"
import s from './video-data.module.scss'
import {formatNumber} from "@/common/helpers"
import sC from '@/common/styles.module.scss'

function patreonUrlForVideo(patreonId: string, isPost?: boolean): string {
  if (!patreonId) return ''
  if (isPost) {
    return `https://www.patreon.com/posts/${patreonId}`
  }
  return `https://www.patreon.com/namazon/shop/${patreonId}`
}

export default function VideoData({videoData, youtubeID, youtubeID2}: Props) {
  let videoDataIdFormatted = ''
  if (videoData) videoDataIdFormatted = formatNumber(videoData.id)

  const directUrl = videoData?.directVideoUrl
  const facebookPreview = videoData?.facebookPreview?.trim()

  return (
    <div className={sC.compArticlesVideoGirl}>
      <h3>{`NC${videoDataIdFormatted}`}</h3>
      <h4>{videoData?.title}</h4>
      <Row>
        <Col
          className={cn(
            'd-flex',
            'justify-content-center',
            directUrl && 'flex-column align-items-center',
          )}
        >
          {directUrl && (
            <>
              <MyDirectVideo src={directUrl} />
              <p className="text-muted mt-2 mb-0 text-center px-2 small">
                If the preview isn&apos;t available, try again in a few minutes.
              </p>
            </>
          )}
          {
            !directUrl &&
            facebookPreview &&
            (videoData && videoData.img) && (
              <a
                className={s.youtubeCoverLink}
                href={facebookPreview}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="click to see the video"
              >
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>click to see the video</span>
                </span>
              </a>
            )
          }
          {
            !directUrl &&
            !facebookPreview &&
            youtubeID &&
            videoData?.isClickable &&
            videoData.img && (
              <a
                className={s.youtubeCoverLink}
                href={`https://www.youtube.com/watch?v=${youtubeID}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="click to see the video on YouTube"
              >
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>click to see the video</span>
                </span>
              </a>
            )
          }
          {
            !directUrl && !facebookPreview && youtubeID && !videoData?.isClickable && <MyYouTube videoId={youtubeID}/>
          }
        </Col>
      </Row>
      {
        !directUrl &&
        !facebookPreview &&
        youtubeID2 &&
          <Row className={s.youtube2}>
              <Col className={cn('d-flex', 'justify-content-center')}> <MyYouTube videoId={youtubeID2}/> </Col>
          </Row>
      }
      {
        videoData && <section className="pt-10">
          {videoData?.description()}
          </section>

      }

      <Row>
        <hr/>
        <p>
          You can purchase <b>video {`NC${videoDataIdFormatted}`}</b> on <a className={s.violet}
                                                                            href={videoData ? patreonUrlForVideo(videoData.patreonId, videoData.isPost) : '#'}><b>Patreon</b></a>.
        </p>
      </Row>
    </div>
  )
}

type Props = {
  videoData: Video_data | undefined
  youtubeID: string | undefined
  youtubeID2?: string
}