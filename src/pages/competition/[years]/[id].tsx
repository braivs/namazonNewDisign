import ElementDetails from '@/common/element-details/element-details'
import React from 'react'
import {findCompetitionData, getAllCompetitionPaths} from '@/data/competitions/competitions-data'
import CompetitionContent from '@/components/competitions/competition-content'
import type {GetStaticPaths, GetStaticProps} from 'next'

type Props = {
  years: string
  id: string
}

export default function CompetitionDetailPage({years, id}: Props) {
  const data = findCompetitionData(years, id)

  return (
    <ElementDetails variant="competition">
      <CompetitionContent data={data} />
    </ElementDetails>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllCompetitionPaths().map(({years, id}) => ({
    params: {years, id},
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const years = params?.years
  const id = params?.id
  if (typeof years !== 'string' || typeof id !== 'string') {
    return {notFound: true}
  }
  if (!findCompetitionData(years, id)) {
    return {notFound: true}
  }
  return {props: {years, id}}
}
