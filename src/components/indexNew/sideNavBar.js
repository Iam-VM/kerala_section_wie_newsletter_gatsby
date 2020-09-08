import React from "react";
import sideNavBarStyles from "./sideNavBar.module.css";
import coverStyles from "./coverComponentStyles.module.css";
import {RiProfileLine, RiTeamFill, RiGatsbyFill} from "react-icons/ri";
import {FaFortAwesomeAlt, FaReadme} from "react-icons/fa";
import {FcEngineering} from "react-icons/fc";
import { GiSwordwoman } from "react-icons/gi";
import {Link} from "gatsby";



const SideNavBar = (props) => {
const vh = window.innerHeight;


  return(
    <div style={{height: `calc(var(--${vh}, 1vh) * 100)`}} className={`${sideNavBarStyles.container} ${(props.active)?sideNavBarStyles.enter:sideNavBarStyles.leave} ${(props.pageLoading)?sideNavBarStyles.noSideNav:null}`} >
      <div className={coverStyles.echoesHeadMobile} style={{marginTop: `1rem`, marginLeft: `1rem`, marginBottom: '2rem', alignSelf: `flex-start`}}>
        <div className={`${coverStyles.echoesTextMobile} ${sideNavBarStyles.changeColorOfHeadToBlue}`}>Echo<span className={coverStyles.pink}>es</span></div>
        <div className={`${coverStyles.echoesHeadByLine} ${sideNavBarStyles.changeColorOfHeadToBlue}`}>Lorem Ipsum is simply</div>
      </div>
      <div className={sideNavBarStyles.listContainer}>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <FaReadme className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Read Interview</div>
        </div></Link>
         <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <FaFortAwesomeAlt className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>MH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <FaFortAwesomeAlt className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>KH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <FaFortAwesomeAlt className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>TH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <RiProfileLine className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Professional Activities</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <RiTeamFill className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Meet the WIE Team</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <RiGatsbyFill className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Developers</div>
        </div></Link>
      </div>
      <div className={sideNavBarStyles.underline}>
      </div>
      <div className={sideNavBarStyles.listContainer}>
        <a href={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <FcEngineering className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>IEEE</div>
        </div></a>
        <a href={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <GiSwordwoman className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Women In Engineering</div>
        </div></a>
      </div>
    </div>
  );
};


export default SideNavBar;