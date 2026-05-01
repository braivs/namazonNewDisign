import FooterFour from '@/layout/footer/footer-4/footer-4'
import HeaderTwo from '@/layout/header/header-two'
import React from 'react'
import BannerCompetitions from '@/components/competitions/banner-competitions'
import CompetitionsArea from '@/components/competitions/competitions-area'

const Competitions = () => {
  return (
    <>
      <HeaderTwo />
      <BannerCompetitions />
      <CompetitionsArea />
      <FooterFour />
    </>
  )
}

export default Competitions
