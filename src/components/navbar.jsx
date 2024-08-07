import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { Link as ScrollLink } from 'react-scroll/modules';
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 400) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", setFixed);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);



  

  return (
    <div  className={`navbar ${fix ? 'fixed' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <ScrollLink className="link" to="home" spy={true} 
      smooth={true} 
      // offset={-100} 
      duration={1000}>
            <h6>Tìm Kà</h6>
          </ScrollLink>
          <ScrollLink className="link" to="about" spy={true} 
      smooth={true} 
      offset={-200} 
      duration={1000}>
            <h6>Về La Kà</h6>
          </ScrollLink>
          <ScrollLink className="link" to="footer" spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1000}>
            <h6>Liên hệ</h6>
          </ScrollLink>
        </div>
        <div className="authen">
          
          <RouterLink  className="link" to="/?cat=register">
            <button type="button" className="btn-register">Đăng kí</button>
          </RouterLink>
          <RouterLink className="link" to="/?cat=login">
            <button type="button" className="btn-login">Đăng nhập</button>
          </RouterLink >
        </div>
      </div>
    </div>
  );
}

export default Navbar;
