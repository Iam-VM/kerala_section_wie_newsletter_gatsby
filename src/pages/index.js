import React from "react";
import {Link} from "gatsby";
import "../styles/utils.css";
import indexStyles from "../styles/index.module.css";



const IndexPage = () => {
  return (
    <div className={indexStyles.main}>
      {/*cover*/}
      <div className={indexStyles.coverContainer}></div>

      {/*ieee wie */}
      <div className={indexStyles.container}>
        <div className={indexStyles.headContainer}>
          <h1 className={indexStyles.headDegree2}>IEEE WiE</h1>
          <div className={indexStyles.underline}></div>
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
        <div className={indexStyles.headContainer}>
          <h1 className={indexStyles.headDegree2}>Mission & Vision</h1>
          <div className={indexStyles.underline}></div>
        </div>
        <div className={indexStyles.paraContainer}>
          <p className={indexStyles.standardPara}>
            Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We
            envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for
            the benefit of humanity.
          </p>
        </div>
      </div>

       {/*wie ag - ks*/}
       <div className={indexStyles.container}>
         <div className={indexStyles.headContainer}>
           <h1 className={indexStyles.headDegree2}>WiE AG - Kerala Section</h1>
           <div className={indexStyles.underline}></div>
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


      <Link to={"/malabar-hub"}>Malabar Hub</Link>
      <Link to={"/kochi-hub"}>Kochi Hub</Link>
      <Link to={"/travancore-hub"}>Travancore Hub</Link>
      {/*carousel*/}

     </div>
  );
};

export default IndexPage;
