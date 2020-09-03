import React from "react";
import sideNavBarStyles from "./sideNavBar.module.css";
import coverStyles from "./coverComponentStyles.module.css";
import {AiOutlineFileProtect} from "react-icons/ai";
import {Link} from "gatsby";


const SideNavBar = (props) => {
console.log('this is sidenav and  ' + props.pageLoading);


  return(
    <div className={`${sideNavBarStyles.container} ${(props.active)?sideNavBarStyles.enter:sideNavBarStyles.leave} ${(props.pageLoading)?sideNavBarStyles.noSideNav:null}`} >
      <div className={coverStyles.echoesHeadMobile} style={{marginTop: `1rem`, marginLeft: `1rem`, marginBottom: '2rem', alignSelf: `flex-start`}}>
        <div className={`${coverStyles.echoesTextMobile} ${sideNavBarStyles.changeColorOfHeadToBlack}`}>Echo<span className={coverStyles.pink}>es</span></div>
        <div className={`${coverStyles.echoesHeadByLine} ${sideNavBarStyles.changeColorOfHeadToBlack}`}>Lorem Ipsum is simply</div>
      </div>
      <div className={sideNavBarStyles.listContainer}>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Read Interview</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>MH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>KH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>TH Report</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Professional Activities</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Meet the WIE Team</div>
        </div></Link>
        <Link to={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Developers</div>
        </div></Link>
      </div>
      <div className={sideNavBarStyles.underline}>
      </div>
      <div className={sideNavBarStyles.listContainer}>
        <a href={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>IEEE</div>
        </div></a>
        <a href={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Women In Engineering</div>
        </div></a>
        <a href={'#'} className={`linkWrap`} style={{width: '100%'}}><div className={sideNavBarStyles.navBarItemContainer}>
          <AiOutlineFileProtect className={sideNavBarStyles.icon} />
          <div className={sideNavBarStyles.itemName}>Linkline</div>
        </div></a>
      </div>
    </div>
  );
};


export default SideNavBar;