import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.style.css";

const Footer = () => {
  return (
    <section>
      <div class="call-contact">
        <h1>
          Enroll For Our Online Courses Anywhere in the world, <br />
          click on the button below to find out more.
        </h1>
        <a href="" class="btn-hero">
          CONTACT US
        </a>
      </div>
      <div class="footer">
        <h4>ABOUT Us</h4>
        <p>
          You can learn more about our teaching, our courses, teachers and much
          more. If you still have any questions, <br />
          we are at your disposal, contact us at any time.
        </p>
        <div class="contact-medias">
          <FaFacebook
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
          <FaInstagram
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
          <FaLinkedin
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
          <FaYoutube
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
