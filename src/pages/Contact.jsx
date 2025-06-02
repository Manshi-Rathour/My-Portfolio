import React, { useEffect } from "react";
import ContactHeader from "../components/ContactHeader";
import ContactMe from "../components/ContactMe";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div id="contact" className="contact-page">
      <ContactHeader />
      <ContactMe />
    </div>
  );
}

export default Contact;
