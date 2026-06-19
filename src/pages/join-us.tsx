import JoinUs from "@/components/join-us/join-us"
import SEO from "@/components/seo"
import Wrapper from "@/layout/wrapper"
import React from "react"

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitleKey="joinUs" />
      <JoinUs />
    </Wrapper>
  )
}

export default index
