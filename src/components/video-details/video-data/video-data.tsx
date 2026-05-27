import {Col, Nav, Row} from "react-bootstrap"
import cn from "classnames"
import {MyDirectVideo, MyMvTube, MyYouTube} from "@/common/common"
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
    // Support both a single url and an array of fallbacks.
    if (Array.isArray(raw)) {
      return raw.filter((u): u is string => typeof u === "string" && u.trim() !== "")
    }
    if (typeof raw === "string" && raw.trim() !== "") return [raw.trim()]
    return []
  }, [videoData?.directVideoUrl])

  const [directPlayerTab, setDirectPlayerTab] = useState(0)

  useEffect(() => {
    // Reset to primary player when user opens another video page.
    setDirectPlayerTab(0)
  }, [videoData?.id])

  const hasDirect = directUrls.length > 0

  const facebookPreview = videoData?.facebookPreview?.trim()
  // If set, we render MixedWrestling iframe before legacy YouTube/Facebook fallbacks.
  const mvtubeId = videoData?.mvtubeId?.trim()
  const hasMvTube = Boolean(mvtubeId)

  const previewUnavailableText = ''

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
          {/* Priority 1: direct mp4 sources (single or tabbed fallback players). */}
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
              {directUrls.map((url, i) => (
                // Keep players mounted to avoid fetch-abort runtime errors on fast tab switching.
                <div key={`${i}-${url}`} hidden={directPlayerTab !== i}>
                  <MyDirectVideo src={url} isActive={directPlayerTab === i} />
                </div>
              ))}
              <p className="text-muted mt-2 mb-0 text-center px-2 small">
                {directUrls.length >= 2 ?
                  'If the preview isn`t available, please try alternative player or email us.'
                  : 'If the preview isn`t available please email us.'
                }

              </p>
            </>
          )}
          {
            // Priority 3: external preview page (e.g. Facebook) when direct/mvtube are absent.
            !hasDirect &&
            !hasMvTube &&
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
            // Priority 4: clickable YouTube poster (opens YouTube page, no inline iframe).
            !hasDirect &&
            !hasMvTube &&
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
            // Priority 2: MixedWrestling inline embed (used when there is no direct mp4).
            !hasDirect && hasMvTube && mvtubeId && <MyMvTube videoId={mvtubeId}/>
          }
          {
            // Priority 5: default inline YouTube player fallback.
            !hasDirect && !hasMvTube && !facebookPreview && youtubeID && !videoData?.isClickable && <MyYouTube videoId={youtubeID}/>
          }
        </Col>
      </Row>
      {
        // Secondary YouTube block is shown only for legacy dual-YouTube entries.
        !hasDirect &&
        !hasMvTube &&
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