import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ContactForm from "./contact-form";

const ContactUs = () => {
  return (
    <>
      <HeaderTwo />
      {/*<Banner />*/}
      <ContactForm />
      <FooterFour />
    </>
  );
};

export default ContactUs;

//todo: MVP, commented Banner. But looks not good, maybe will find power to do it.
