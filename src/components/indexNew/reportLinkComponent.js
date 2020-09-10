import React, { useEffect } from "react"
import { Link } from "gatsby";
import LinkComponent from "./LinkComponent";
import reportLinkStyles from "./reportLinksAndLink.module.css";
import Aos from "aos";

const HubReportLinksComponent = () => {
  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="1500"  className={reportLinkStyles.reportLinksContainer}>
      <div className={reportLinkStyles.linkReportHeadContainer}>
        <div className={reportLinkStyles.headText}>Reports</div>
        <div className={reportLinkStyles.headContentText}>Lorem Ipsum is simply dummy text of the printing</div>
      </div>
      <div className={reportLinkStyles.linkContainer}>
        <Link to={"/report/link"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"LINK"} hubNameSize={'20px'} /></Link>
        <Link to={"/report/hub/malabar"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Malabar Hub"} hubNameSize={'20px'} /></Link>
        <Link to={"/report/hub/kochi"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Kochi Hub"} hubNameSize={'20px'} /></Link>
        <Link to={"/report/hub/travancore"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Travancore Hub"} hubNameSize={'20px'} /></Link>
        <Link to={"/activities/ks"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Professional Activities"} hubNameSize={'20px'} /></Link>
      </div>
    </div>
  );
}

export default HubReportLinksComponent;