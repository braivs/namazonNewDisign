import FooterFour from "@/layout/footer/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import ContactForm from "./contact-form"

const ContactUs = () => {
  return (
    <>
      <HeaderTwo />
      {/*<BannerVideo />*/}
      <ContactForm />
      <FooterFour />
    </>
  );
};

export default ContactUs;

//todo: MVP, commented BannerVideo. But looks not good, maybe will find power to do it.
