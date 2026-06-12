import React from 'react'
import type {Competition_data} from '@/data/competitions/competitions-data'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'

export default function CompetitionContent({data}: Props) {
  if (!data) {
    return <p>Competition not found.</p>
  }

  return (
    <>
      <h3>Competitions: {data.period}</h3>
      <h4>{data.title.replace(/\n/g, ' ')}</h4>
      {/* These competitions render the hero image inside their article body at a specific position. */}
      {data.id !== 'tournament-2013' && data.id !== 'tournament-2014' && data.id !== 'grappling-2014' && (
        <img
          src={data.heroImgRef ?? data.imgRef}
          alt=""
          className={cn('img-fluid w-100', sC.videosMainImg)}
        />
      )}
      <section className={cn('pt-10', sC.compArticlesVideoGirl)}>{data.description()}</section>
    </>
  )
}

type Props = {
  data: Competition_data | undefined
}
