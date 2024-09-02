import FooterFour from "@/layout/footer/footer-4/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import ContactForm from "./contact-form"
import BannerContact from "@/components/contact/banner-contact"

const ContactUs = () => {
  return (
    <>
      <HeaderTwo />
      <BannerContact />
      <ContactForm />
      <FooterFour />
    </>
  );
};

export default ContactUs;