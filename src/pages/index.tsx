import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core'; // fix for fontawesome big size issue on first start
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/video');
  }, [router]);

  return null;
}

/*
OLD CONTENT, BEFORE MVP:
import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default index;
*/

//todo v2: need to return home page