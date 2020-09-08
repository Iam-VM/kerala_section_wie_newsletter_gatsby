import React, { useEffect } from "react"
import welcomeNoteStyles from "./welcomeNote.module.css";
import fromTheWieChairsDesk from "./fromTheWieChairsDesk.module.css";
import Aos from "aos";

const FromTheWieChairsDesk = () => {
  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800"  className={welcomeNoteStyles.container}>
      <div className={welcomeNoteStyles.topContainer} >
        <div className={welcomeNoteStyles.headAndTopSmallContainer}>
          <div className={welcomeNoteStyles.head}>FROM THE WIE CHAIR'S DESK</div>
          <div className={welcomeNoteStyles.byLine}>Mini Ulanat - Chair, IEEE WIE AG Kerala Section</div>
          <div className={welcomeNoteStyles.topPara}>21st Century changed the conventional mode of
            knowledge sharing, information delivery and
            learning experience. COVID -19 pandemic
            impacted everyone’s life forcing us to adopt
            innovative ways including education at all levels.
            There was a sudden shift from traditional
            learning models to adopt digital. This learning
            anywhere anytime has given us tremendous
            opportunity for overcoming barriers in a level
            playing field.</div>
        </div>
        <img src={"/team/wie-ks-chair.jpeg"} className={welcomeNoteStyles.image} />
      </div>
      {/*for mobile*/}
      <div className={welcomeNoteStyles.topContainerMobile} >
        <div className={welcomeNoteStyles.headAndTopSmallContainerMobile}>
          <div className={welcomeNoteStyles.headMobile}>FROM THE WIE CHAIRS DESK</div>
          <div className={welcomeNoteStyles.byLineMobile}>Mini Ulanat - Chair, IEEE WIE AG Kerala Section</div>
          <img src={"/team/wie-ks-chair.jpeg"} className={welcomeNoteStyles.imageMobile} />
          <div className={welcomeNoteStyles.topParaMobile}>21st Century changed the conventional mode of
            knowledge sharing, information delivery and
            learning experience. COVID -19 pandemic
            impacted everyone’s life forcing us to adopt
            innovative ways including education at all levels.
            There was a sudden shift from traditional
            learning models to adopt digital. This learning
            anywhere anytime has given us tremendous
            opportunity for overcoming barriers in a level
            playing field.</div>
        </div>
      </div>
      {/*end of for mobile*/}
      <div className={welcomeNoteStyles.para}>WIE AG Kerala Section, started operations in 2002, has been working silently for
        years. The conduct of WIE International Leadership Summit -2018 in Kochi
        boosted the morale of the volunteers. Our work was globally recognised, resulted
        in WIEC selecting us as the winner of the 2019 WIE Affinity Group of the Year
        Award. We also received R10 Outstanding WIE Chapter of the year for 2019, pride
        for 2300 volunteers across 68 SBs. We welcome the five new student branch AGS
        added in 2020 . The activities have been growing steadily and the focus of
        the year is quality programs from all SBs .</div>
      <div className={welcomeNoteStyles.para}>Our girls have been doing wonderful job, updating themselves with new
        technologies, keeping pace with the fast changing world. VENUS is a special
        initiative with excellent coordination. This effort is praise worthy and certainly
        deserve a special mention. I congratulate the team leaders and members for
        their spirit, active intellectual contributions and hand holding wherever needed.
        We are seeing the emergence of more and more budding leaders.</div>
      <div className={welcomeNoteStyles.para}>This is a new beginning, documenting all the good work done by all our volunteers
        and continue the legacy in years to come. It is reported that WIE Kerala has
        completed 320 activities this year. I would like to record my heartfelt appreciation
        for the great work done by the team in bringing out this compilation in a
        record time. Hope this inspires our community to contribute more value
        to subsequent issues.</div>
      <div className={`${welcomeNoteStyles.para} ${fromTheWieChairsDesk.lastParaStyle}`}>Happy Volunteering</div>
      <div className={`${welcomeNoteStyles.para} ${fromTheWieChairsDesk.lastParaStyle}`}>Stay Safe. Wishing you the very best</div>
    </div>
  );
};

export default FromTheWieChairsDesk;