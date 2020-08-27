import React from "react";
import { Link } from "gatsby";
import LinkComponent from "./LinkComponent";
import reportLinkStyles from "./reportLinksAndLink.module.css";


const HubReportLinksComponent = () => {
  return (
    <div className={reportLinkStyles.reportLinksContainer}>
      <div className={reportLinkStyles.linkReportHeadContainer}>
        <div className={reportLinkStyles.headText}>Hub Reports</div>
        <div className={reportLinkStyles.headContentText}>Lorem Ipsum is simply dummy text of the printing</div>
      </div>
      <div className={reportLinkStyles.linkContainer}>
        <Link to={"/malabar-hub"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Malabar Hub"} /></Link>
        <Link to={"/kochi-hub"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Kochi Hub"} /></Link>
        <Link to={"/travancore-hub"} className={`linkWrap ${reportLinkStyles.linkWrapLinkReports}`}><LinkComponent hubName={"Travancore Hub"} /></Link>
      </div>
    </div>
  );
}

export default HubReportLinksComponent;