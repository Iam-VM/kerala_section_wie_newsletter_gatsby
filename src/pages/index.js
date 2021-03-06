import React, { useEffect, useRef, useState } from "react"
import indexStyles from "../styles/index.module.css";
import teamStyles from "../styles/teams.module.css";

//local
import "../styles/utils.css";
import AchievementsComponent from "../components/indexNew/achievements";
import Cover from "../components/indexNew/cover";
import ParaBlock from "../components/indexNew/paraBlocks";
import HubReportLinksComponent from "../components/indexNew/reportLinkComponent"
import CreditImagesComponent from "../components/indexNew/creditImageComponent";
import WelcomeNote from "../components/indexNew/welcomeNote"
import FromTheWieChairsDesk from "../components/indexNew/fromTheWieChairsDesk"
import Aos from "aos";
import Footer from "../components/indexNew/footer";
import BestWishes from "../components/indexNew/bestWishes";


const scrollToComponent = (ref) => {
  window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'} );
};

const NewIndexPage = () => {


  useEffect(() => {
    Aos.init()
  }, []);

  const meetTheWieTeamRef = useRef(null);
  const reportsRef = useRef(null);
  const welcomeNoteRef = useRef(null);


  return (
    <div className={indexStyles.main} >
      <Cover scrollToMeetTheWieTeam={() => scrollToComponent(meetTheWieTeamRef)} scrollToReports={() => scrollToComponent(reportsRef)} scrollToWelcomeNote={() => scrollToComponent(welcomeNoteRef)} />
      <WelcomeNote welcomeNoteRef={welcomeNoteRef} />
      <FromTheWieChairsDesk />
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
      <AchievementsComponent />
      <BestWishes />
      {/*<ProActivities />*/}
      <HubReportLinksComponent reportsRef={reportsRef} />
      <div ref={meetTheWieTeamRef} data-aos-once="true" data-aos="fade-up" data-aos-duration="1500"  className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>EXECOM</div>
          <div className={teamStyles.headByLine}>IEEE Kerala Section WIE AG Execom</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer} style={{alignSelf: 'center'}}>
          <CreditImagesComponent imgSrc={"/team/wie-ks-chair.jpeg"} name={"Mini Ulanat"} designation={"Chair"} />
          <CreditImagesComponent imgSrc={"/team/meenakshy.jpg"} name={"Meenakshi Kurup"} designation={"Vice Chair"} />
          <CreditImagesComponent imgSrc={"/team/deepa.jpeg"} name={"Deepa A K"} designation={"Secratary"} />
          <CreditImagesComponent imgSrc={"/team/ieee-ks-chair.jpg"} name={"Saradha Jayakrishnan"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/bijuna kunju.jpeg"} name={"Dr. Bijuna Kunju"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/shabeeratp.jpeg"} name={"Dr. Shabeera T P"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/vasanthiv.jpeg"} name={"Dr. Vasanthi V"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/sunitha beevi.jpeg"} name={"Sunitha Beevi"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/priyanka chandran.jpeg"} name={"Priyanka Chandran"} designation={" "} />
          <CreditImagesComponent imgSrc={"/team/jiby krishna.jpeg"} name={"Jiby Krishna"} designation={" "} />
        </div>
      </div>
      <div className={teamStyles.space}> </div>
      <div ref={meetTheWieTeamRef} data-aos-once="true" data-aos="fade-up" data-aos-duration="1500"  className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>WIE Team</div>
          <div className={teamStyles.headByLine}>Coordinators leading our WIE community</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/wieTeam/Ameera Sherin.jpg"} name={"Ameera Sherin"} designation={"Link WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Devika S.jpeg"} name={"Devika S"} designation={"KH WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Dina Valapra.jpg"} name={"Dina Valapra"} designation={"MH WIE Coordinator"} />
          <CreditImagesComponent imgSrc={"/team/wieTeam/Fathima Nazreen.jpg"} name={"Fathima Nazreen"} designation={"TH WIE Coordinator"} />
        </div>
      </div>
      <div className={teamStyles.space}> </div>
      <div data-aos-once="true" data-aos="fade-up" data-aos-duration="1500"  className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>Design Team</div>
          <div className={teamStyles.headByLine}>Team behind the creative vision of Echoes</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/designTeam/ANJANA S IEEE SB CE,PERUMON.jpg"} name={"Anjana S"} collegeName={"CE, Perumon"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Aswathi M IEEE SB GEC PALAKKAD.jpg"} name={"Aswathi M"} collegeName={"GEC, Palakkad"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Aswathi G R, IEEE SB GEC PALAKKAD.png"} name={"Aswathi G R"} collegeName={"GEC, Palakkad"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Hridaya u mallia ieee sb asiet.jpg"} name={"Hridaya Mallia"} collegeName={"ASIET"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/Jeshma Jayadevan IEEE SB NSSCE.jpg"} name={"Jeshma Jayadevan"} collegeName={"NSSCE"} />
          <CreditImagesComponent imgSrc={"/team/designTeam/S Sreevidya, IEEE SB MITS.jpg"} name={"S Sreevidya"} collegeName={"MITS"} />
        </div>
      </div>
      <div className={teamStyles.space}> </div>
      <div data-aos-once="true" data-aos="fade-up" data-aos-duration="1500"  className={teamStyles.container}>
        <div className={teamStyles.teamHeadContainer}>
          <div className={teamStyles.teamHeadText}>Content Team</div>
          <div className={teamStyles.headByLine}>The minds that made magic with their words</div>
        </div>
        <div className={teamStyles.creditImagesComponentContainer}>
          <CreditImagesComponent imgSrc={"/team/contentTeam/Akshara Bruno IEEE SCT SB.jpg"} name={"Akshara Bruno"} collegeName={"SCT"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Amalu A P IEEE SB CE, PERUMON.jpg"} name={"Amalu A P"} collegeName={"CE, Perumon"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/ANJANA S IEEE SB CE,PERUMON.jpg"} name={"ANJANA S"} collegeName={"CE, Perumon"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Aslaha Ali IEEE MACE SB.jpg"} name={"Aslaha Ali"} collegeName={"MACE"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Avanthika A IEEE SB CEV.jpg"} name={"Avanthika A"} collegeName={"CE, Vadakara"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Hridaya u mallia IEEE SB ASIET.jpg"} name={"Hridaya mallia"} collegeName={"ASIET"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Meghana N V Govt College Of Engineering Kannur.jpg"} name={"Meghana N V"} collegeName={"GCE, Kannur"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Nanda K R IEEE FISAT SB.jpg"} name={"Nanda K R"} collegeName={"FISAT"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Rajalakshmi A R IEEE FISAT SB .jpg"} name={"Rajalakshmi A R"} collegeName={"FISAT"} />
          <CreditImagesComponent imgSrc={"/team/contentTeam/Safa V Abdul Ravuf IEEE SB GECI.jpg"} name={"Safa V Abdul Ravuf"} collegeName={"GEC, Idukki"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default NewIndexPage;