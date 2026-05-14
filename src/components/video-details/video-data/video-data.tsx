import {Col, Nav, Row} from "react-bootstrap"
import cn from "classnames"
import {MyDirectVideo, MyYouTube} from "@/common/common"
import React, {useEffect, useMemo, useState} from "react"
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

  const directUrls = useMemo(() => {
    const raw = videoData?.directVideoUrl
    if (raw == null) return []
    if (Array.isArray(raw)) {
      return raw.filter((u): u is string => typeof u === "string" && u.trim() !== "")
    }
    if (typeof raw === "string" && raw.trim() !== "") return [raw.trim()]
    return []
  }, [videoData?.directVideoUrl])

  const [directPlayerTab, setDirectPlayerTab] = useState(0)

  useEffect(() => {
    setDirectPlayerTab(0)
  }, [videoData?.id])

  const activeDirectSrc = directUrls[Math.min(directPlayerTab, Math.max(directUrls.length - 1, 0))]
  const hasDirect = directUrls.length > 0

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
            hasDirect && 'flex-column align-items-center',
          )}
        >
          {hasDirect && (
            <>
              {directUrls.length >= 2 && (
                <Nav variant="tabs" className="mb-3 justify-content-center border-0">
                  {directUrls.map((_, i) => (
                    <Nav.Item key={i}>
                      <Nav.Link
                        href="#"
                        active={directPlayerTab === i}
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault()
                          setDirectPlayerTab(i)
                        }}
                        role="tab"
                      >
                        {i === 0 ? "Primary player" : i === 1 ? "Alternative player" : `Player ${i + 1}`}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              )}
              {activeDirectSrc && <MyDirectVideo key={activeDirectSrc} src={activeDirectSrc} />}
              <p className="text-muted mt-2 mb-0 text-center px-2 small">
                If the preview isn&apos;t available, try alternative player or email us.
              </p>
            </>
          )}
          {
            !hasDirect &&
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
            !hasDirect &&
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
            !hasDirect && !facebookPreview && youtubeID && !videoData?.isClickable && <MyYouTube videoId={youtubeID}/>
          }
        </Col>
      </Row>
      {
        !hasDirect &&
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