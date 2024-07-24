import SEO from "@/components/seo";
import Girls from "@/components/girls/girls";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Girls" />
      <Girls />
    </Wrapper>
  );
};

export default index;
