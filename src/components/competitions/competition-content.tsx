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
      <h4 style={{whiteSpace: 'pre-line'}}>{data.title}</h4>
      <div className="text-center mb-40">
        <img src={data.imgRef} alt="" className="img-fluid" style={{maxWidth: 400}} />
      </div>
      <section className={cn('pt-10', sC.compArticlesVideoGirl)}>{data.description()}</section>
    </>
  )
}

type Props = {
  data: Competition_data | undefined
}
