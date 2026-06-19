import HomeNamazon from '@/components/home/home-namazon/home-namazon'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitleKey="home" />
      <HomeNamazon />
    </Wrapper>
  )
}
