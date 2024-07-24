import SEO from "@/components/seo";
import TeamOne from "@/components/team/team/team-one";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Girls" />
      <TeamOne />
    </Wrapper>
  );
};

export default index;
