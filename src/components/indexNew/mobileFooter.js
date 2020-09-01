import React, { useEffect, useState } from "react"
import coverStyles from "./mobileFooter.module.css"
import { Link } from "gatsby"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"


const MobileFooter = () => {
  console.log("beginnig component");
  const [footerNumber, setFooterNumber] = useState(0);

  const footerArray = [
    <div className={`${coverStyles.mobileFooter}`}>
      <div className={coverStyles.footerBlockHeadMobile}>Reports</div>
      <div className={coverStyles.footerBlockTextMobile}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <Link to={"#"} className={coverStyles.footerBlockReadTextMobile}><div className={coverStyles.arrowMobile}><AiOutlineArrowRight /></div></Link>
    </div>,
    <div className={`${coverStyles.mobileFooter}`}>
      <div className={coverStyles.footerBlockHeadMobile}>Interview with Emi Yano</div>
      <div className={`${coverStyles.footerBlockTextMobile}`}>Discover what <span className={coverStyles.bold}>Emi Yano</span> has to tell us.</div>
      <Link to={"/emi-yano"} className={coverStyles.footerBlockReadTextMobile}>Read</Link>
    </div>,
    <div className={`${coverStyles.mobileFooter}`}>
      <div className={coverStyles.footerBlockHeadMobile}>Meet The WIE Team</div>
      <div className={`${coverStyles.footerBlockTextMobile}`}>Lorem Ipsum is simply dummy text <span className={coverStyles.bold}>WIE Team.</span></div>
      <Link to={"#"} className={coverStyles.footerBlockReadTextMobile}><div className={coverStyles.arrow}><BsThreeDots /></div></Link>
    </div>
  ];

  useEffect(() => {
    console.log("inside effect");
    const timer = setTimeout(() => {
      console.log("inside timeot");
      if (footerNumber !== footerArray.length) setFooterNumber(footerNumber + 1);
      if (footerNumber === footerArray.length) setFooterNumber(0);
    }, 6000);
    return clearTimeout(timer);
  }, [footerNumber]);

  return (
    footerArray[footerNumber]
  );
}

export default MobileFooter;