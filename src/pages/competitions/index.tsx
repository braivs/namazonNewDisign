import Competitions from '@/components/competitions/competitions'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const CompetitionsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Competitions" />
      <Competitions />
    </Wrapper>
  )
}

export default CompetitionsPage
