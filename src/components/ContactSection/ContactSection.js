import React from "react";
import { Title, TopTitle } from "../../assets/styles/Global.styles";
import { ContactWrapper } from "./ConatctSection.styles";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <TopTitle style={{ textAlign: "center" }}>CONTACT ME</TopTitle>
        <Title style={{ textAlign: "center" }}>Get In Touch</Title>
        <ContactForm />
      </div>
    </ContactWrapper>
  );
};

export default ContactSection;
