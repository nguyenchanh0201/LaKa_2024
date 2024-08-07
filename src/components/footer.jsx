import React from "react";
import Logo from "../img/logo.png";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from 'react-scroll/modules';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="cfs-footer">
        
      <ScrollLink className="link" to="home" spy={true} 
      smooth={true} 
      offset={-100} 
      duration={700}>
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </ScrollLink>



        <div className="img-container">
            <img src={Logo} alt="" />
        </div>

        <div className="nav-container">
          <span>Tìm Kà</span>
          <span>Về La Kà</span>
          <span>Liên hệ</span>
        </div>


        <div className="contact-info">
            <div className="contact" >
                <span>Địa chỉ: 123 Đường ABC</span>
                <span>Điện thoại: 123456789</span>
                <span>Email: laka@gmail.com </span>
            </div>

            <div className="social-media">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
        </div>
      </div>

      <div className="app-footer">
        <span>
          © 2024 La Kà. All Rights Reserved
        </span>
      </div>







    </div>
  );
}

export default Footer;