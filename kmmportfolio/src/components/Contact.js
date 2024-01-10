import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope,
  faPhone,    
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input type="radio" id="recruiter" name="role" value="recruiter" />
          <label htmlFor="recruiter">Recruiter</label>
          <input type="radio" id="developer" name="role" value="developer" />
          <label htmlFor="developer">Developer</label>
          <input type="radio" id="other" name="role" value="other" />
          <label htmlFor="other">Other</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <p>Contact us:</p>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
  );
};

export default Contact;
