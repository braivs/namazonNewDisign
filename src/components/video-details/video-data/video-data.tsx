import {Col, Nav, Row} from "react-bootstrap"
import cn from "classnames"
import {MyDirectVideo, MyMvTube, MyYouTube} from "@/common/common"
import React, {useEffect, useMemo, useState} from "react"
import {Video_data} from "@/data/video-data/video-data"
import s from './video-data.module.scss'
import {formatNumber} from "@/common/helpers"
import sC from '@/common/styles.module.scss'
import {videoTitleKey} from '@/data/video-data/video-i18n'
import {useTranslation} from 'react-i18next'

function patreonUrlForVideo(patreonId: string, isPost?: boolean): string {
  if (!patreonId) return ''
  if (isPost) {
    return `https://www.patreon.com/posts/${patreonId}`
  }
  return `https://www.patreon.com/namazon/shop/${patreonId}`
}

export default function VideoData({videoData, youtubeID, youtubeID2}: Props) {
  const {t} = useTranslation('video')
  let videoDataIdFormatted = ''
  if (videoData) videoDataIdFormatted = formatNumber(videoData.id)

  const title = videoData
    ? t(`titles.${videoTitleKey(videoData.id)}`, {defaultValue: videoData.title})
    : ''

  const videoCode = `NC${videoDataIdFormatted}`
  const hasPurchase = Boolean(videoData?.patreonId?.trim())
  const hasDownload = Boolean(videoData?.downloadUrl?.trim())
  const hasSecondPurchase = Boolean(videoData?.patreonId2?.trim())
  const primaryPatreonUrl = videoData?.patreonId
    ? patreonUrlForVideo(videoData.patreonId, videoData.isPost)
    : '#'
  const secondaryPatreonUrl = videoData?.patreonId2
    ? patreonUrlForVideo(videoData.patreonId2, videoData.isPost2)
    : '#'
  const downloadUrl = videoData?.downloadUrl?.trim() || '#'

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
  const willBeAvailableString = videoData?.willBeAvailableString?.trim()
  // If set, we render MixedWrestling iframe before legacy YouTube/Facebook fallbacks.
  const mvtubeId = videoData?.mvtubeId?.trim()
  const mvtubeId2 = videoData?.mvtubeId2?.trim()
  const hasMvTube = Boolean(mvtubeId || mvtubeId2)

  const playerLabel = (index: number) => {
    if (index === 0) return t('details.playerPrimary')
    if (index === 1) return t('details.playerAlternative')
    return t('details.playerN', {n: index + 1})
  }

  return (
    <div className={sC.compArticlesVideoGirl}>
      <h3>{`NC${videoDataIdFormatted}`}</h3>
      <h4>{title}</h4>
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
                        {playerLabel(i)}
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
                {directUrls.length >= 2
                  ? t('details.previewUnavailableMultiple')
                  : t('details.previewUnavailableSingle')}
              </p>
            </>
          )}
          {
            // Priority 3a: poster with “preview coming soon” overlay (no link).
            !hasDirect &&
            !hasMvTube &&
            willBeAvailableString &&
            videoData?.img && (
              <div className={s.youtubeCoverLink}>
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>
                    {t(`details.${willBeAvailableString}`)}
                  </span>
                </span>
              </div>
            )
          }
          {
            // Priority 3b: external preview page (e.g. Facebook) when direct/mvtube are absent.
            !hasDirect &&
            !hasMvTube &&
            !willBeAvailableString &&
            facebookPreview &&
            (videoData && videoData.img) && (
              <a
                className={s.youtubeCoverLink}
                href={facebookPreview}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('details.clickToSeePreviewFacebook')}
              >
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>
                    {t('details.clickToSeePreviewFacebook')}
                  </span>
                </span>
              </a>
            )
          }
          {
            // Priority 4: clickable YouTube poster (opens YouTube page, no inline iframe).
            !hasDirect &&
            !hasMvTube &&
            !willBeAvailableString &&
            !facebookPreview &&
            youtubeID &&
            videoData?.isClickable &&
            videoData.img && (
              <a
                className={s.youtubeCoverLink}
                href={`https://www.youtube.com/watch?v=${youtubeID}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('details.clickToSeeVideoYoutube')}
              >
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>{t('details.clickToSeeVideo')}</span>
                </span>
              </a>
            )
          }
          {
            // Priority 2: MixedWrestling inline embed (used when there is no direct mp4).
            !hasDirect && hasMvTube && mvtubeId && (
              <MyMvTube videoId={mvtubeId} aspectRatio={videoData?.mvtubeAspectRatio} />
            )
          }
          {
            // Priority 5: default inline YouTube player fallback.
            !hasDirect && !hasMvTube && !willBeAvailableString && !facebookPreview && youtubeID && !videoData?.isClickable && <MyYouTube videoId={youtubeID}/>
          }
          {
            // Final fallback: link the video cover to its Patreon post when no preview exists.
            !hasDirect &&
            !hasMvTube &&
            !willBeAvailableString &&
            !facebookPreview &&
            !youtubeID &&
            !youtubeID2 &&
            videoData?.patreonId &&
            videoData.img && (
              <a
                className={s.youtubeCoverLink}
                href={patreonUrlForVideo(videoData.patreonId, videoData.isPost)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('details.clickToSeePreviewPatreon')}
              >
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
                <span className={s.youtubeCoverOverlay} aria-hidden>
                  <span className={s.youtubeCoverText}>
                    {t('details.clickToSeePreviewPatreon')}
                  </span>
                </span>
              </a>
            )
          }
          {
            // Free / no-source placeholder: show cover without purchase or external link.
            !hasDirect &&
            !hasMvTube &&
            !willBeAvailableString &&
            !facebookPreview &&
            !youtubeID &&
            !youtubeID2 &&
            !videoData?.patreonId &&
            videoData?.img && (
              <div className={s.youtubeCoverLink}>
                <img className={s.youtubeCoverImg} src={videoData.img} alt="" />
              </div>
            )
          }
        </Col>
      </Row>
      {
        // Optional second MixedWrestling player is shown below the primary player.
        !hasDirect &&
        hasMvTube &&
        mvtubeId2 &&
          <Row className={s.youtube2}>
              <Col className={cn('d-flex', 'justify-content-center')}> <MyMvTube videoId={mvtubeId2}/> </Col>
          </Row>
      }
      {
        // Secondary YouTube block is shown only for legacy dual-YouTube entries.
        !hasDirect &&
        !hasMvTube &&
        !willBeAvailableString &&
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

      {
        hasPurchase && (
          <Row>
            <hr/>
            <div className={s.purchasePanel}>
              <p className={s.purchaseTitle}>
                {hasSecondPurchase
                  ? t('details.purchaseTitleMultiple')
                  : t('details.purchaseTitleSingle')}
              </p>
              <div className={s.purchaseActions}>
                {hasSecondPurchase ? (
                  <>
                    <a
                      className={s.purchaseBtn}
                      href={primaryPatreonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('details.purchasePart1')}
                    </a>
                    <a
                      className={s.purchaseBtn}
                      href={secondaryPatreonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('details.purchasePart2')}
                    </a>
                  </>
                ) : (
                  <a
                    className={s.purchaseBtn}
                    href={primaryPatreonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('details.purchaseBtnSingle', {code: videoCode})}
                  </a>
                )}
              </div>
            </div>
          </Row>
        )
      }
      {
        !hasPurchase && hasDownload && (
          <Row>
            <hr/>
            <div className={s.purchasePanel}>
              <p className={s.purchaseTitle}>{t('details.downloadTitle')}</p>
              <div className={s.purchaseActions}>
                <a
                  className={s.purchaseBtn}
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('details.downloadBtn', {code: videoCode})}
                </a>
              </div>
            </div>
          </Row>
        )
      }
    </div>
  )
}

type Props = {
  videoData: Video_data | undefined
  youtubeID: string | undefined
  youtubeID2?: string
}