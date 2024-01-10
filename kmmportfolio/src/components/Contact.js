import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './Contact.css';

const Contact = () => {
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

    console.log(data);
  };

  return (
    <div className="contact-container">
      <h2 className="header">Contact Me</h2>
      <p>
        Hello! Please feel free to reach out to me using the form below. I'm
        interested in hearing from you!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <label>Role:</label>
          <div>
            <label htmlFor="recruiter">Recruiter</label>
            <input type="radio" id="recruiter" name="role" value="Recruiter" />
          </div>
          <div>
            <label htmlFor="developer">Developer</label>
            <input type="radio" id="developer" name="role" value="Developer" />
          </div>
          <div>
            
            <label htmlFor="interested">Other</label>
            <input
              type="radio"
              id="interested"
              name="role"
              value="Interested"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="social-icons">
        <a href="#linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:manyathikhayelihle3@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="tel:+1234567890">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
