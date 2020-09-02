import React from "react";
import footerStyles from "./footer.module.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.devNamesContainer}>
        <div className={footerStyles.devNamesHeadContainer}>
          <div className={footerStyles.devHead}>Dev</div>
        </div>
        <div className={footerStyles.devNamesListContainer}>
          <div className={footerStyles.devName}>Aysha Rasheed</div>
          <div className={footerStyles.devName}>Greeshma Thankachan</div>
          <div className={footerStyles.devName}>Neema Francis</div>
          <div className={footerStyles.devName}>Vishnu Mohanan</div>
        </div>
        <div className={footerStyles.contactNo}>+91 9544236163</div>
      </div>
      <div className={footerStyles.verticalSocialMediaContainer}>
        <div className={footerStyles.followText}>follow us on</div>
        <div className={footerStyles.verticalSocialButtonsContainer}>
          <a href={"#"} className={`${footerStyles.socialButton} linkWrap`}><AiFillInstagram /></a>
          <a href={"#"} className={`${footerStyles.socialButton} linkWrap`}><AiFillFacebook /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;