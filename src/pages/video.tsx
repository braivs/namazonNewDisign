import Video from "@/components/video/video";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitleKey="video" />
      <Video />
    </Wrapper>
  );
};

export default index;
