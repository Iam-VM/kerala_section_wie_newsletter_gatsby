import React, { useEffect, useState } from "react"
import {Link} from "gatsby";
import coverStyles from "./coverComponentStyles.module.css";
import {AiFillInstagram, AiFillFacebook, AiFillCode, AiOutlineArrowRight} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import {RiArrowDropDownFill} from "react-icons/ri";
import {BsThreeDots} from "react-icons/bs";
import {MdKeyboardArrowDown} from "react-icons/md";
import SideNavBar from "./sideNavBar";
import sideNavBarStyles from "./sideNavBar.module.css";

let i = 0;
const Cover = () => {
  const [footerNumber, setFooterNumber] = useState(i);
  const [hamburgerButtonClicked, setHamburgerButtonClicked] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      i += 1;
      if (i === 3) i = 0;
      setFooterNumber(i);
    }, 4000);
    return () => clearTimeout(timer);
  });

  const scrollToWelcomeNote = () => {
    window.scrollBy({top: document.documentElement.clientHeight - window.scrollY + 50, behavior: 'smooth'});
  };


  return (
    <div className={`${coverStyles.coverContainer}`} onClick={() => {
      if (hamburgerButtonClicked) {
        setHamburgerButtonClicked(false);
      }
    }}>
      <div className={coverStyles.verticalNavBarContainer}>
        <div className={coverStyles.verticalContainerTopIconContainer}><BiMenuAltRight className={coverStyles.verticalContainerMenuIcon}/></div>
        <div className={coverStyles.verticalNavBarBottomButtonContainer}>
          <a href={"#"} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><AiFillInstagram /></a>
          <a href={"#"} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><AiFillFacebook /></a>
          <a href={"#"} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><AiFillCode /></a>
        </div>
      </div>
      <div className={coverStyles.coverBody}>
        <div className={coverStyles.horizontalNavBarContainer}>
          <div className={coverStyles.horizontalNavBarNameElementLeft}>
            <div className={coverStyles.horizontalNavBarNameElementLeftHead}>ECHOES</div>
            <div className={coverStyles.horizontalNavBarHeadText}>Lorem Ipsum is simply</div>
          </div>
          <div className={coverStyles.horizontalNavBarButtonsContainer}>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>IEEE</div></a>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>WOMEN IN ENGINEERING</div></a>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>KERALA SECTION</div></a>
          </div>
        </div>
        <div className={coverStyles.bodyMain}>
          <div className={coverStyles.bodyMainHeadContainer}>
            <div className={coverStyles.bodyMainHeadHead}>Lorem</div>
            <div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>Ipsum Lorem</div>
            <div className={coverStyles.bodyMainHeadText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </div>
        </div>
        {/*for desktop*/}
        <div className={coverStyles.coverFooterContainer}>
          <div className={coverStyles.footerBlock}>
            <div className={coverStyles.footerBlockHead}>Reports</div>
            <div className={coverStyles.footerBlockText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <Link to={"#"} className={`${coverStyles.footerBlockReadText} linkWrap`}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>
          </div>
          <div className={coverStyles.footerBlock}>
            <div className={`${coverStyles.footerBlockText} ${coverStyles.onlyText}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
            <Link to={"/emi-yano"} className={`${coverStyles.footerBlockReadText} linkWrap`}>Read</Link>
          </div>
          <div className={`${coverStyles.footerBlock} ${coverStyles.smallerFooterBlock}`}>
          </div>
          <div className={coverStyles.footerBlock}>
            <div className={`${coverStyles.footerBlockText} ${coverStyles.onlyText}`}>Lorem Ipsum is simply dummy text <span className={coverStyles.bold}>WIE Team.</span></div>
            <Link to={"#"} className={`${coverStyles.footerBlockReadText} linkWrap`}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>
          </div>
          {/*<div className={`${coverStyles.footerBlock} ${coverStyles.footerBlockWithSwipeLine}`}>*/}
          {/*  <div className={coverStyles.scrollText}>scroll</div>*/}
          {/*  <div className={coverStyles.footerArrow}><div className={coverStyles.footerLongDownLine}></div><RiArrowDropDownFill className={coverStyles.arrowHead}/></div>*/}
          {/*</div>*/}
        </div>
        {/*end of for desktop*/}
      </div>
      {/*entirely for mobile*/}
      {(hamburgerButtonClicked)?<SideNavBar active={true} />:<SideNavBar active={false} pageLoading={pageLoading} />}
      <div className={coverStyles.navBarContainerMobile}>
        <div className={coverStyles.echoesHeadMobile}>
          <div className={coverStyles.echoesTextMobile}>Echo<span className={coverStyles.pink}>es</span></div>
          <div className={coverStyles.echoesHeadByLine}>Lorem Ipsum is simply</div>
        </div>
        <div className={coverStyles.hamburgerButtonMobile}><BiMenuAltRight style={(hamburgerButtonClicked)?{backgroundColor: `#333333`}:{}} className={coverStyles.hamburgerIcon} onClick={() => {
          if (!hamburgerButtonClicked) {
            setHamburgerButtonClicked(true);
            setPageLoading(false);
          }
        }} /></div>
      </div>

      <div className={coverStyles.mainTextMobileContainer}>
        <div className={coverStyles.mainTextMobileHead1}>Lorem</div>
        <div className={`${coverStyles.mainTextMobileHead1} ${coverStyles.mainTextMobileHead2}`}>Ipsum Lorem</div>
        <div className={coverStyles.mainTextMobileByLine}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>

      {(footerNumber === 0)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Reports</div>
        <div className={coverStyles.footerBlockTextMobile}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <Link to={"#"} className={`${coverStyles.footerBlockReadTextMobile} linkWrap`}><div className={coverStyles.arrowMobile}><BsThreeDots /></div></Link>
      </div> : null
      }
      {(footerNumber === 1)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Interview with Emi Yano</div>
        <div className={`${coverStyles.footerBlockTextMobile}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
        <Link to={"/emi-yano"} className={`${coverStyles.footerBlockReadTextMobile} linkWrap`}>Read</Link>
      </div> : null
      }
      {(footerNumber === 2)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Meet The WIE Team</div>
        <div className={`${coverStyles.footerBlockTextMobile}`}>Lorem Ipsum is simply dummy text <span className={coverStyles.bold}>WIE Team.</span></div>
        <Link to={"#"} className={`${coverStyles.footerBlockReadTextMobile} linkWrap`}><div className={coverStyles.arrowMobile}><BsThreeDots /></div></Link>
      </div> : null
      }

      <div className={coverStyles.socialButtonsMobileContainer}>
        <a href={"#"} className={`${coverStyles.socialButton} linkWrap`}><AiFillInstagram /></a>
        <a href={"#"} className={`${coverStyles.socialButton} linkWrap`}><AiFillFacebook /></a>
        <a href={"#"} className={`${coverStyles.socialButton} linkWrap`}><AiFillCode /></a>
      </div>


      <div className={coverStyles.goDownMobileContainer} onClick={scrollToWelcomeNote}>
        <MdKeyboardArrowDown />
      </div>

    </div>
  );
};


export default Cover;