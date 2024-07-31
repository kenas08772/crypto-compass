import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
      Crypto Compass
      </h2>
      <div className="social-links">
       
        <a href="kenasbiju2@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/kenas01?s=21&t=y0QNBKgfSTUnKtPPfnHiEw">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/kenazz_?igsh=MTQ3Nm5mNmkycHp1MQ==">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
