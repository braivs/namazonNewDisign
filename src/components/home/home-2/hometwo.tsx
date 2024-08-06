import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";

const HomeTwo = () => {                               
  return (
    <>
      <HeroBanner />
      <About />
      <Service />
      <Gallery />
      <Counter cls="pt-80 pb-100" />
      <Team />
      <Testimonial bg_img={true} />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default HomeTwo;
