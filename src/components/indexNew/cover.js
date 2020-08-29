import React from "react";
import {Link} from "gatsby";
import coverStyles from "./coverComponentStyles.module.css";
import {AiFillInstagram, AiFillFacebook, AiFillCode, AiOutlineArrowRight} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import {RiArrowDropDownFill} from "react-icons/ri";

const Cover = () => {
  return (
    <div className={coverStyles.coverContainer}>
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
          <div className={coverStyles.horizontalNavBarNameElementLeft}>Echoes</div>
          <div className={coverStyles.horizontalNavBarButtonsContainer}>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>IEEE</div></a>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>IEEE Women in Engineering</div></a>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>IEEE Kerala Section</div></a>
            <a href={"#"} className={"linkWrap"}><div className={coverStyles.horizontalNavBarButton}>Linkline</div></a>
          </div>
        </div>
        <div className={coverStyles.bodyMain}>
          <div className={coverStyles.bodyMainHeadContainer}>
            <div className={coverStyles.bodyMainHeadHead}>Lorem</div>
            <div className={`${coverStyles.bodyMainHeadHead} ${coverStyles.bodyMainHeadSecondLine}`}>Ipsum Lorem</div>
            <div className={coverStyles.bodyMainHeadText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
          </div>
        </div>
        <div className={coverStyles.coverFooterContainer}>
          <div className={coverStyles.footerBlock}>
            <div className={coverStyles.footerBlockHead}>Reports</div>
            <div className={coverStyles.footerBlockText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div className={coverStyles.arrow}><AiOutlineArrowRight /></div>
          </div>
          <div className={coverStyles.footerBlock}>
            <div className={`${coverStyles.footerBlockText} ${coverStyles.onlyText}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
            <Link to={"/emi-yano"} className={coverStyles.footerBlockReadText}>Read</Link>
          </div>
          <div className={`${coverStyles.footerBlock} ${coverStyles.smallerFooterBlock}`}>
          </div>
          <div className={`${coverStyles.footerBlock} ${coverStyles.footerBlockWithSwipeLine}`}>
            <div className={coverStyles.scrollText}>scroll</div>
            <div className={coverStyles.footerArrow}><div className={coverStyles.footerLongDownLine}></div><RiArrowDropDownFill className={coverStyles.arrowHead}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cover;