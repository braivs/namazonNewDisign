'use client'

import Link from 'next/link'
import React from 'react'
import {useTranslation} from 'react-i18next'
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
  const {t} = useTranslation('competitions')
  const {t: tCommon} = useTranslation('common')
  const href = toLink({
    ...card,
    variant: 'competition',
  })
  const inProgress = card.isInProgress === true
  const title = t(`titles.${card.id}`, {defaultValue: card.title})

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
        <div className={cn('research-item__content', s.researchItemContent, cardS.cardContent)}>
          <h4 className={cn('research-item__title mb-20', cardS.title)}>
            {inProgress ? title : <Link href={href}>{title}</Link>}
          </h4>
          {!inProgress && (
            <Link href={href} className="research-item__btn">
              {tCommon('readMore')}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
