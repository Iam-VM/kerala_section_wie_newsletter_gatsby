import React from "react";
import indexStyles from "../styles/indexNew.module.css";

//local
import Cover from "../components/indexNew/cover";
import ParaBlock from "../components/indexNew/paraBlocks";

const NewIndexPage = () => {
  return (
    <div className={indexStyles.main}>
      <Cover />
      <div className={indexStyles.textContentBodyContainer}>
        <ParaBlock head={"About IEEE WIE"} para={["IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting\n" +
        "            women engineers and scientists, and inspiring girls around the world to follow their academic interests in a\n" +
        "            career in engineering and science.", "IEEE is the world’s largest technical professional organization dedicated to advancing technology for the\n" +
        "             benefit of humanity."]} heightInPX={60} widthInPX={60} />
        <ParaBlock head={"Mission & Vision"} para={["Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We\n" +
        "            envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for\n" +
        "            the benefit of humanity."]} heightInPX={40} widthInPX={50} />
        <ParaBlock head={"WIE AG - Kerala Section"} para={["Kerala Section WIE affinity group has always been an active and vibrant group with passionate volunteers.\n" +
        "             Membership status and quality of programs have shown a tremendous hike in the last two years.", "Apart Apart from the usual chores of WIE Congress and face to face meetings, WIE Star and WIE Week Celebration are also key\n" +
        "             highlights. Each year is showcased with new initiatives and an ocean of ideas bringing benefits and\n" +
        "             development to the society ."]} />
      </div>
    </div>
  );
};

export default NewIndexPage;