import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Blog from "./blog";
import HeroBanner from "./hero-banner";
import NavTab from "../../../common/nav-tab";
import Service from "./service";
import VideoArea from "./video-area";

const Home_Three = () => {
  return (
    <>
      <div className="content-layout-right">
        <HeroBanner />
        <About />
        <Service />
        <Counter  cls="tp-common-area pt-130" />
        <NavTab />
        <VideoArea />
        <Blog />
      </div>
    </>
  );
};

export default Home_Three;
