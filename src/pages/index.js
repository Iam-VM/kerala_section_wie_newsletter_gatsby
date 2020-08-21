import React from "react";
import {Link} from "gatsby";
import "../styles/utils.css";
import indexStyles from "../styles/index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HubCard from "../components/hubCards";
import CustomCarousel from "../components/carousel";
import ControlledCarousel from "../components/carousel";


const IndexPage = () => {
  return (
    <div className={indexStyles.main}>
      {/*cover*/}
      <div className={indexStyles.coverContainer}>
        {/*<div className={indexStyles.headDegree1Container}>*/}
        {/*  <div className={indexStyles.coverImage}></div>*/}
        {/*  /!*<div className={indexStyles.underlineDegree1}></div>*!/*/}
        {/*  /!*<div className={indexStyles.underlineDegree1Top}></div>*!/*/}
        {/*  /!*<div className={indexStyles.headDegree1}>WIE</div>*!/*/}
        {/*  /!*<div className={indexStyles.headDegree1}>ECHOES</div>*!/*/}
        {/*  /!*<div className={indexStyles.underlineDegree1Bottom}></div>*!/*/}
        {/*  /!*<div className={indexStyles.underlineDegree1}></div>*!/*/}
        {/*</div>*/}
      </div>

      {/*ieee WIE */}
      <div className={indexStyles.container}>
        <div className={indexStyles.headDegree2Container}>
          <h1 className={indexStyles.headDegree2}>IEEE <span className={indexStyles.blue}>WIE</span></h1>
          <div className={indexStyles.underlineDegree2Top}></div>
          {/*<div className={indexStyles.underlineDegree2Bottom}></div>*/}
        </div>
        <div className={indexStyles.paraContainer}>
          <p className={indexStyles.standardPara}>
            IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting
            women engineers and scientists, and inspiring girls around the world to follow their academic interests in a
            career in engineering and science.
          </p>
          <p className={indexStyles.standardPara}>
             IEEE is the world’s largest technical professional organization dedicated to advancing technology for the
             benefit of humanity.
          </p>
        </div>
      </div>

       {/*mission and vision*/}
      <div className={indexStyles.container}>
        <div className={indexStyles.headDegree2Container}>
          <h1 className={indexStyles.headDegree2}><span className={indexStyles.blue}>M</span>ission & <span className={indexStyles.blue}>V</span>ision</h1>
          <div className={indexStyles.underlineDegree2Top}></div>
          {/*<div className={indexStyles.underlineDegree2Bottom}></div>*/}
        </div>
        <div className={indexStyles.paraContainer}>
          <p className={indexStyles.standardPara}>
            Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We
            envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for
            the benefit of humanity.
          </p>
        </div>
      </div>

       {/*WIE ag - ks*/}
       <div className={indexStyles.container}>
         <div className={indexStyles.headDegree2Container}>
           <h1 className={indexStyles.headDegree2}><span className={indexStyles.blue}>WIE AG</span> - <span className={indexStyles.blue}>K</span>erala <span className={indexStyles.blue}>S</span>ection</h1>
           <div className={indexStyles.underlineDegree2TopLengthy}></div>
           {/*<div className={indexStyles.underlineDegree2BottomLengthy}></div>*/}
         </div>
         <div className={indexStyles.paraContainer}>
           <p className={indexStyles.standardPara}>
             Kerala Section WIE affinity group has always been an active and vibrant group with passionate volunteers.
             Membership status and quality of programs have shown a tremendous hike in the last two years.
           </p>
           <p className={indexStyles.standardPara}>
             Apart Apart from the usual chores of WIE Congress and face to face meetings, WIE Star and WIE Week Celebration are also key
             highlights. Each year is showcased with new initiatives and an ocean of ideas bringing benefits and
             development to the society .
           </p>
         </div>
       </div>
      <div className={indexStyles.container}>
        <div className={`${indexStyles.headDegree2Container} ${indexStyles.headLinkReports}`}>
          <h1 className={indexStyles.headDegree2}><span className={indexStyles.blue}>L</span>ink <span className={indexStyles.blue}>R</span>eports</h1>
          <div className={indexStyles.underlineDegree2Top}></div>
          {/*<div className={indexStyles.underlineDegree2Bottom}></div>*/}
        </div>
        <div className={indexStyles.hubCardContainer}>
          <Link to={"/malabar-hub"} className={indexStyles.linkWrap}><HubCard hubName={"Malabar Hub"} /></Link>
          <Link to={"/kochi-hub"} className={indexStyles.linkWrap}><HubCard hubName={"Kochi Hub"} /></Link>
          <Link to={"/travancore-hub"} className={indexStyles.linkWrap}><HubCard hubName={"Travancore Hub"} /></Link>
        </div>
      </div>


      <div className={indexStyles.carouselContainer}>
        {/*<div className={indexStyles.headDegree2Container}>*/}
        {/*  */}
        {/*  /!*<div className={indexStyles.underlineDegree2Top}></div>*!/*/}
        {/*  /!*<div className={indexStyles.underlineDegree2Bottom}></div>*!/*/}
        {/*</div>*/}
        <h1 className={indexStyles.carouselHead}>Meet the WIE Team</h1>
        <div className={indexStyles.carouselImageContainer}>
          <CustomCarousel />
        </div>
      </div>


      <div className={indexStyles.devFooter}>

      </div>

     </div>
  );
};

export default IndexPage;
