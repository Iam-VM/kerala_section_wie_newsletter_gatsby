import React from "react";
import {Link} from "gatsby";
import indexComponentStyles from "./indexComponents.module.css";
import {AiFillInstagram, AiFillFacebook} from "react-icons/ai";


const Cover = () => {
  return (
    <div className={indexComponentStyles.coverContainer}>
      <div className={indexComponentStyles.navBarContainer}>
        <div className={indexComponentStyles.purpleRectangle}>
          <Link className={"linkWrap"} to={"/"}><span className={indexComponentStyles.echoesText}>echoes</span></Link>
        </div>
        <div className={indexComponentStyles.navBarButtonsContainer}>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>IEEE KS</div></a>
          <a href={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>WIE AG KS</div></a>
          <Link to={"#"} className={"linkWrap"}><div className={indexComponentStyles.navBarButton}>CONTACT</div></Link>
          <a href={"#"} className={"linkWrap"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillInstagram /></div></a>
          <a href={"#"} className={"linkWrap"}><div className={`${indexComponentStyles.navBarButton} ${indexComponentStyles.navBarButtonIcons}`}><AiFillFacebook /></div></a>
        </div>
      </div>
    </div>
  );
};


export default Cover;