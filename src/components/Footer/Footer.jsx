import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css"

function Footer() {
  return (
    <sector className="footer-section">
      <div className="footer-details">
        <div className="icon-holder-footer">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <div className="footer-paragraph">
          <p>Copyright &copy; 2020 All rights reserved</p>
        </div>
      </div>
    </sector>
  );
}

export default Footer