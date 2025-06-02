import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import addressIcon from "../assets/address-img.png";

const ContactMe = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbm3cm6",
        "template_cmetyqp",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="address-bg">
      <div className="address address-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea name="message" placeholder="Message" rows="5" required />
          <button type="submit" className="send-button">
            Send
          </button>
          {sent && <p className="success-msg">Message sent successfully!</p>}
        </form>
      </div>

      <div className="address address-img">
        <img src={addressIcon} alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default ContactMe;
