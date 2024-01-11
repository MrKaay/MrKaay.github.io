import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Fieldset from "./Fieldset";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const role = formData.get("role");

    const data = {
      name,
      email,
      message,
      role,
    };

    // Use your EmailJS template ID, user ID, and service ID
    emailjs
      .send("service_mqe7hus", "ejs-test-mail-service", data, "fYfG1Q0J4EsMoC6n4")
      .then((response) => {
        alert("Email sent successfully!");
        setFormSubmitted(true);
      })
      .catch((error) => {
        alert("Email failed to send!");
      });
  };

  const resetForm = () => {
    setFormSubmitted(false);
    document.getElementById("contact-form").reset();
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="header">Contact Me</h2>
        {formSubmitted ? (
          <div className="success-message">
            <FontAwesomeIcon icon={["far", "check-circle"]} />
            <p>Form submitted successfully!</p>
            {resetForm}
          </div>
        ) : (
          <>
            <p>
              Hello! Please feel free to reach out to me using the form below.
              I'm interested in hearing from you!
            </p>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <Fieldset legend="Select your role:" className="roles">
                <div>
                  <label htmlFor="recruiter">Recruiter</label>
                  <input
                    type="radio"
                    id="recruiter"
                    name="role"
                    value="Recruiter"
                  />
                </div>
                <div>
                  <label htmlFor="developer">Developer</label>
                  <input
                    type="radio"
                    id="developer"
                    name="role"
                    value="Developer"
                  />
                </div>
                <div>
                  <label htmlFor="interested">Other role</label>
                  <input
                    type="radio"
                    id="interested"
                    name="role"
                    value="Interested"
                  />
                </div>
              </Fieldset>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
        )}

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/khayelihle-manyathi-499362139"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://wa.me/27817900048" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/khayelihle.manyathi.71/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/mrkaay_hlanti/?next=%2F"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:manyathikhayelihle3@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+27817900048">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
