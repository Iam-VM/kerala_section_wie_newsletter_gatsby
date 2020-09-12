import React, { useEffect, useState } from "react"
import {Link, navigate} from "gatsby";
import coverStyles from "./coverComponentStyles.module.css";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import {BsThreeDots} from "react-icons/bs";
import {FaDev} from "react-icons/fa";
import {MdKeyboardArrowDown} from "react-icons/md";
import SideNavBar from "./sideNavBar";


let i = 0;
const Cover = (props) => {
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


  return (
    <div className={`${coverStyles.coverContainer}`} onClick={() => {
      if (hamburgerButtonClicked) {
        setHamburgerButtonClicked(false);
      }
    }}>
      <div className={coverStyles.verticalNavBarContainer}>
        <div className={coverStyles.verticalContainerTopIconContainer}><BiMenuAltRight className={coverStyles.verticalContainerMenuIcon}/></div>
        <div className={coverStyles.verticalNavBarBottomButtonContainer}>
          <a href={"https://www.instagram.com/ieeekerala/"} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><AiFillInstagram /></a>
          <a href={"https://www.linkedin.com/company/ieeekerala/"} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><AiFillLinkedin /></a>
          <div onClick={() => {window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}} className={`${coverStyles.verticalNavBarBottomButton} linkWrap`}><FaDev /></div>
        </div>
      </div>
      <div className={coverStyles.coverBody}>
        <div className={coverStyles.horizontalNavBarContainer}>
          <div className={coverStyles.horizontalNavBarNameElementLeft} onClick={() => {navigate('/')}}>
            {/*<img src={'/wieTeam.png'} alt={"ECHOES"} className={coverStyles.horizontalNavBarTextLogoImage}/>*/}
            <div className={coverStyles.horizontalNavBarNameElementLeftHead}>ECHOES</div>
            <div className={coverStyles.horizontalNavBarHeadText}>Voice of WIE</div>
          </div>
          <div className={coverStyles.horizontalNavBarButtonsContainer}>
            <a href={"https://www.ieee.org"} target={"_blank"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>IEEE</div></a>
            <a href={"https://wie.ieee.org"} target={"_blank"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>WOMEN IN ENGINEERING</div></a>
            <a href={"https://ieeekerala.org"} target={"_blank"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>KERALA SECTION</div></a>
            <a href={"https://ieeekerala.org/wie-affinity-group/"} target={"_blank"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>WIE AFFINITY GROUP KS</div></a>
          </div>
        </div>
        {/*<div className={coverStyles.bodyMain}>*/}
        {/*  <div className={coverStyles.bodyMainHeadContainer}>*/}
        {/*    <div className={coverStyles.bodyMainHeadHead}>Lorem</div>*/}
        {/*    <div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>Ipsum Lorem</div>*/}
        {/*    <div className={coverStyles.bodyMainHeadText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*new plan for desktop animation*/}
        <div className={coverStyles.bodyMain}>
          {(footerNumber === 0)?
          <div className={coverStyles.bodyMainHeadContainer}>
            <div className={coverStyles.bodyMainHeadHead}>Reports .</div>
            {/*<div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>Ipsum Lorem</div>*/}
            <div className={coverStyles.bodyMainHeadText}>Synopsis of the activities partaken under the flag of WIE.</div>
            <div className={`${coverStyles.footerBlockReadText} ${coverStyles.arrow}`} onClick={props.scrollToReports}><BsThreeDots /></div>
          </div> : null
        }
        {(footerNumber === 1)? <div className={coverStyles.bodyMainHeadContainer}>
            <div className={coverStyles.bodyMainHeadHead}>Interview</div>
            <div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>With Emi Yano</div>
            <div className={coverStyles.bodyMainHeadText}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
            <Link to={"/interview/emiyano"} className={`${coverStyles.footerBlockReadText} linkWrap`}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>
          </div> : null
        }
        {(footerNumber === 2)? <div className={coverStyles.bodyMainHeadContainer}>
            <div className={coverStyles.bodyMainHeadHead}>Meet</div>
            <div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>the WIE Team</div>
            <div className={coverStyles.bodyMainHeadText}>Meet the <span className={coverStyles.bold}>team of WIE</span> coordinators leading our WIE community.</div>
            <div className={`${coverStyles.footerBlockReadText} ${coverStyles.arrow}`} onClick={props.scrollToMeetTheWieTeam}><BsThreeDots /></div>
          </div> : null
        }
        <img src={'/wie-logo-cropped.png'} alt={'WIE woman'} className={coverStyles.womanImage} />
        {/*end of new plan for desktop animation*/}
        {/*for desktop*/}
        {/*<div className={coverStyles.coverFooterContainer}>*/}
        {/*  <div className={coverStyles.footerBlock}>*/}
        {/*    <div className={coverStyles.footerBlockHead}>Reports</div>*/}
        {/*    <div className={coverStyles.footerBlockText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>*/}
        {/*    <Link to={"#"} className={`${coverStyles.footerBlockReadText} linkWrap`}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>*/}
        {/*  </div>*/}
        {/*  <div className={coverStyles.footerBlock}>*/}
        {/*    <div className={`${coverStyles.footerBlockText} ${coverStyles.onlyText}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>*/}
        {/*    <Link to={"/interview/emiyano"} className={`${coverStyles.footerBlockReadText} linkWrap`}>Read</Link>*/}
        {/*  </div>*/}
        {/*  <div className={`${coverStyles.footerBlock} ${coverStyles.smallerFooterBlock}`}>*/}
        {/*  </div>*/}
        {/*  <div className={coverStyles.footerBlock}>*/}
        {/*    <div className={`${coverStyles.footerBlockText} ${coverStyles.onlyText}`}>Lorem Ipsum is simply dummy text <span className={coverStyles.bold}>WIE Team.</span></div>*/}
        {/*    <Link to={"#"} className={`${coverStyles.footerBlockReadText} linkWrap`}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>*/}
        {/*  </div>*/}
        {/*  /!*<div className={`${coverStyles.footerBlock} ${coverStyles.footerBlockWithSwipeLine}`}>*!/*/}
        {/*  /!*  <div className={coverStyles.scrollText}>scroll</div>*!/*/}
        {/*  /!*  <div className={coverStyles.footerArrow}><div className={coverStyles.footerLongDownLine}></div><RiArrowDropDownFill className={coverStyles.arrowHead}/></div>*!/*/}
        {/*  /!*</div>*!/*/}
        {/*</div>*/}
        {/*end of for desktop*/}
        </div>
      </div>
      {/*entirely for mobile*/}
      {(hamburgerButtonClicked)?<SideNavBar active={true} scrollToMeetTheWieTeam={props.scrollToMeetTheWieTeam} />:<SideNavBar active={false} pageLoading={pageLoading} />}
      <div className={coverStyles.navBarContainerMobile}>
        <div className={coverStyles.echoesHeadMobile} onClick={() => {navigate('/')}}>
          <div className={coverStyles.echoesTextMobile}><span style={{color: '#eaeded'}}>Ech</span>oes</div>
          <div className={coverStyles.echoesHeadByLine}>Voice of WIE</div>
        </div>
        <div className={coverStyles.hamburgerButtonMobile}><BiMenuAltRight style={(hamburgerButtonClicked)?{backgroundColor: `#333333`}:{}} className={coverStyles.hamburgerIcon} onClick={() => {
          if (!hamburgerButtonClicked) {
            setHamburgerButtonClicked(true);
            setPageLoading(false);
          }
        }} /></div>
      </div>

      <div className={coverStyles.mainTextMobileContainer}>
        <div className={coverStyles.mainTextMobileHead1}>Unfurling</div>
        <div className={`${coverStyles.mainTextMobileHead1} ${coverStyles.mainTextMobileHead2}`}>the metamorphosis</div>
        <div className={coverStyles.mainTextMobileByLine}>of the pioneering WIE AG Kerala Section.</div>
      </div>

      {(footerNumber === 0)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Reports</div>
        <div className={coverStyles.footerBlockTextMobile}>Synopsis of the activities partaken under the flag of WIE.</div>
        <div className={coverStyles.arrowMobile} onClick={props.scrollToReports}><BsThreeDots /></div>
      </div> : null
      }
      {(footerNumber === 1)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Interview with Emi Yano</div>
        <div className={`${coverStyles.footerBlockTextMobile}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
        <Link to={"/interview/emiyano"} className={`${coverStyles.footerBlockReadTextMobile} linkWrap`}>Read</Link>
      </div> : null
      }
      {(footerNumber === 2)?<div className={`${coverStyles.footerContainerMobile}`}>
        <div className={coverStyles.footerBlockHeadMobile}>Meet The WIE Team</div>
        <div className={`${coverStyles.footerBlockTextMobile}`}>Meet the <span className={coverStyles.bold}>team of WIE</span> coordinators leading our WIE community.</div>
        <div className={coverStyles.arrowMobile} onClick={props.scrollToMeetTheWieTeam}><BsThreeDots /></div>
      </div> : null
      }

      <div className={coverStyles.socialButtonsMobileContainer}>
        <a href={"https://www.instagram.com/ieeekerala/"} className={`${coverStyles.socialButton} linkWrap`}><AiFillInstagram /></a>
        <a href={"https://www.linkedin.com/company/ieeekerala/"} className={`${coverStyles.socialButton} linkWrap`}><AiFillLinkedin /></a>
        <div onClick={()=>{window.scrollTo({top: document.body.scrollHeight, behaviour: 'smooth'})}} className={`${coverStyles.socialButton} linkWrap`}><FaDev /></div>
      </div>


      <div className={coverStyles.goDownMobileContainer} onClick={props.scrollToWelcomeNote}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};


export default Cover;
