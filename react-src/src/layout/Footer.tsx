import React from "react";
import "../styles/components/footer.scss";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
function Footer() {
  return (
    <>
      <footer className="footer">
        <span className="footer-copy">
          <b>hotcoffee</b> 2020 copyright all rights reserved
        </span>
        <div className="footer-container">
          <a className="container-icons" href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a className="container-icons" href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a className="container-icons" href="/">
            <img src={linkedin} alt="likedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
