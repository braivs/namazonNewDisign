import Link from 'next/link'
import React from 'react'
import {toLink} from '@/common/helpers'
import cn from 'classnames'
import s from '@/components/video/video-area/video-area.module.scss'
import cardS from '@/components/competitions/competition-card.module.scss'
import inProgressS from '@/components/girls/girls-area/girls-area.module.scss'
import type {Competition_data} from '@/data/competitions/competitions-data'

type Props = {
  card: Competition_data
}

export default function CompetitionCard({card}: Props) {
  const href = toLink({
    ...card,
    variant: 'competition',
  })
  const inProgress = card.isInProgress !== false

  const thumb = inProgress ? (
    <div className={inProgressS.imageContainer}>
      <img src={card.imgRef} className={inProgressS.filter} alt="" />
      <div className={inProgressS.textOverlay}>In progress</div>
    </div>
  ) : (
    <Link href={href} className={cardS.thumbLink}>
      <img src={card.imgRef} alt="" />
    </Link>
  )

  return (
    <div className={cn('col-lg-3 col-md-6', s.videoCol)}>
      <div className="research-item mb-50p">
        <div className={cn('research-item__thum fix mb-20', cardS.competitionThumb)}>
          {thumb}
        </div>
        <div className={cn('research-item__content', s.researchItemContent)}>
          <h4 className="research-item__title mb-20" style={{fontSize: '19px', whiteSpace: 'pre-line'}}>
            {inProgress ? card.title : <Link href={href}>{card.title}</Link>}
          </h4>
          {!inProgress && (
            <Link href={href} className="research-item__btn">
              Read More
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
