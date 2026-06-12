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
      <h3>{data.period}</h3>
      <h4>{data.title.replace(/\n/g, ' ')}</h4>
      {/* Hero inside article, or no hero on the page at all. */}
      {data.id !== 'tournament-2013' &&
        data.id !== 'tournament-2014' &&
        data.id !== 'grappling-2014' &&
        data.id !== 'IzidaVsTais2008' &&
        data.id !== 'IzidaVsIrina2008' &&
        data.id !== 'IrinaVsTais2009' &&
        data.id !== 'beach-mix-2010' && (
          <div className="d-flex justify-content-center">
            <img
              src={data.heroImgRef ?? data.imgRef}
              alt=""
              className={sC.videosMainImg}
            />
          </div>
        )}
      <section className={cn('pt-10', sC.compArticlesVideoGirl)}>{data.description()}</section>
    </>
  )
}

type Props = {
  data: Competition_data | undefined
}
