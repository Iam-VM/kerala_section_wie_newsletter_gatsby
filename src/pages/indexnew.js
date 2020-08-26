import React from "react";
import indexStyles from "../styles/indexNew.module.css";
import teamStyles from "../styles/teams.module.css";

//local
import Cover from "../components/indexNew/cover";
import ParaBlock from "../components/indexNew/paraBlocks";
import ReportLinksComponent from "../components/indexNew/reportLinkComponent"
import CreditImagesComponent from "../components/indexNew/creditImageComponent";

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
        <ParaBlock headPart1={"WOMEN IN ENGINEERING"} headPart2={"Affinity Group - Kerala Section"} para={["Kerala Section WIE affinity group has always been an active and vibrant group with passionate volunteers.\n" +
        "             Membership status and quality of programs have shown a tremendous hike in the last two years."]} heightInPX={200} widthInPX={300} />
      </div>
      <ReportLinksComponent />
      <div className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>WIE Team</div>
          <div className={teamStyles.headByLine}>Lorem Ipsum is simply dummy text</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/wieTeam/Ameera Sherin.JPG"} name={"Ameera Sherin"} designation={"Link WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Fathima Nazreen.jpg"} name={"Fathima Nazreen"} designation={"Travancore Hub WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Devika S.jpeg"} name={"Devika S"} designation={"Kochi Hub WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Dina Valapra.jpg"} name={"Dina Valapra"} designation={"Malabar Hub WIE Coordinator"} />
        </div>
      </div>
      <div className={teamStyles.space}> </div>
      <div className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>Design Team</div>
          <div className={teamStyles.headByLine}>Lorem Ipsum is simply dummy text</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/designTeam/S Sreevidya, IEEE SB MITS.jpg"} name={"S Sreevidya"} collegeName={"MITS"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Hridaya u mallia ieee sb asiet.jpg"} name={"Hridaya Mallia"} collegeName={"ASIET"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/ANJANA S IEEE SB CE,PERUMON.jpg"} name={"Anjana S"} collegeName={"CE, Perumon"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Jeshma Jayadevan IEEE SB NSSCE.jpg"} name={"Jeshma Jayadevan"} collegeName={"NSSCE"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Aswathi M IEEE SB GEC PALAKKAD.jpg"} name={"Aswathi M"} collegeName={"GEC, Palakkad"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Aswathi G R, IEEE SB GEC PALAKKAD.png"} name={"Aswathy G R"} collegeName={"GEC, Palakkad"} />
        </div>
      </div>
      <div className={teamStyles.space}> </div>
      <div className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>Content Team</div>
          <div className={teamStyles.headByLine}>Lorem Ipsum is simply dummy text</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/wieTeam/Ameera Sherin.JPG"} name={"Ameera Sherin"} designation={"Link WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Fathima Nazreen.jpg"} name={"Fathima Nazreen"} designation={"Travancore Hub WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Devika S.jpeg"} name={"Devika S"} designation={"Kochi Hub WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Dina Valapra.jpg"} name={"Dina Valapra"} designation={"Malabar Hub WIE Coordinator"} />
        </div>
      </div>
    </div>
  );
};


export default NewIndexPage;