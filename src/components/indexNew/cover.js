import React from "react";
import {Link} from "gatsby";
import indexComponentStyles from "./coverComponentStyles.module.css";
import {AiFillInstagram, AiFillFacebook} from "react-icons/ai";


const Cover = () => {
  return (
    <div className={indexComponentStyles.coverContainer}>
      <div className={indexComponentStyles.navBarContainer}>
        <div className={indexComponentStyles.purpleRectangle}>
          <Link className={`linkWrap ${indexComponentStyles.echoesTextLink}`} to={"/"}><span className={indexComponentStyles.echoesText}>echoes</span></Link>
        </div>
        <div className={indexComponentStyles.navBarButtonsContainer}>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>IEEE</div></a>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>IEEE WIE</div></a>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>IEEE KERALA SECTION</div></a>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>WIE AG KERALA SECTION</div></a>
          <Link to={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>CONTACT</div></Link>
          {/*<a href={"#"} className={"linkWrap"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillInstagram /></div></a>*/}
          {/*<a href={"#"} className={"linkWrap"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillFacebook /></div></a>*/}
        </div>
      </div>
      <div className={indexComponentStyles.coverBodyContainer}>
        <div className={indexComponentStyles.verticalNavBar}>
          <a href={"#"} className={"linkWrap"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillInstagram /></div></a>
          <a href={"#"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillFacebook /></div></a>
        </div>
      </div>
    </div>
  );
};


export default Cover;