import HomeOne from '@/components/home/home/home'
import SEO from '@/components/seo'
import Layout from '@/layout/layout'
import Wrapper from '@/layout/wrapper'
import React from 'react'

export default function HomeOnePage() {
  return (
    <Wrapper>
      <Layout>
        <SEO pageTitle="Home Style 1"/>
        <HomeOne/>
      </Layout>
    </Wrapper>
  )
}
