import React from "react";
import { Title, TopTitle } from "../../assets/styles/Global.styles";
import { ContactWrapper } from "./ConatctSection.styles";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-duration="2000"
          data-aos-once="true"
          // data-aos-delay="1000"
        >
          <TopTitle style={{ textAlign: "center" }}>CONTACT ME</TopTitle>
          <Title style={{ textAlign: "center" }}>Get In Touch</Title>
        </div>
        <ContactForm />
      </div>
    </ContactWrapper>
  );
};

export default ContactSection;
