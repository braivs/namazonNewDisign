import SEO from '@/components/seo'
import VladimirUstimovMemory from '@/components/memory/vladimir-ustimov/vladimir-ustimov-memory'
import Wrapper from '@/layout/wrapper'
import React from 'react'

const VladimirUstimovMemoryPage = () => {
  return (
    <Wrapper>
      <SEO pageTitleKey="vladimirUstimovMemory" />
      <VladimirUstimovMemory />
    </Wrapper>
  )
}

export default VladimirUstimovMemoryPage
