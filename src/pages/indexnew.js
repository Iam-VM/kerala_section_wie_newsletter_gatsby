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
        <ParaBlock headPart1={"About IEEE"} headPart2={"WOMEN IN ENGINEERING"} para={["IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting\n" +
        "            women engineers and scientists, and inspiring girls around the world to follow their academic interests in a\n" +
        "            career in engineering and science."]} heightInPX={200} widthInPX={300} />
        <ParaBlock headPart1={"Mission & Vision"} headPart2={"OF WOMEN IN ENGINEERING"} para={["Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We\n" +
        "            envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for\n" +
        "            the benefit of humanity."]} heightInPX={200} widthInPX={300} />
        <ParaBlock headPart1={"WOMEN IN ENGINEERING"} headPart2={"Affinity Group Kerala Section"} para={["Kerala Section WIE affinity group has always been an active and vibrant group with passionate volunteers.\n" +
        "             Membership status and quality of programs have shown a tremendous hike in the last two years."]} heightInPX={200} widthInPX={300} />
      </div>
    </div>
  );
};

export default NewIndexPage;