import React, { useEffect } from "react"
import welcomeNoteStyles from "./welcomeNote.module.css";
import fromWieCharsDeskStyles from "./fromTheWieChairsDesk.module.css";
import Aos from "aos";


const WelcomeNote = () => {
  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={welcomeNoteStyles.container}>
      {/*for desktop*/}
      <div className={welcomeNoteStyles.topContainer}>
        <div className={welcomeNoteStyles.headAndTopSmallContainer}>
          <div className={welcomeNoteStyles.head}>Welcome Note</div>
          <div className={welcomeNoteStyles.byLine}>Sarada Jayakrishnan - Chair, IEEE Kerala Section</div>
          <div className={`${welcomeNoteStyles.topPara} ${welcomeNoteStyles.hello}`}>Hello dear WIE Kerala friends,</div>
          <div className={welcomeNoteStyles.topPara}>I get excited any time girls are celebrated and that
            too when they are aspiring professionals. Combined
            you are all volunteers of the largest professional
            organisation of the world. What better medium than
            words from those who are fully involved into the
            volunteering activities.</div>
        </div>
        <img src={"/team/ieee-ks-chair.jpg"} className={welcomeNoteStyles.image} />
      </div>
      {/*for mobile*/}
      <div className={welcomeNoteStyles.topContainerMobile} >
        <div className={welcomeNoteStyles.headAndTopSmallContainerMobile}>
          <div className={welcomeNoteStyles.headMobile}>Welcome Note</div>
          <div className={welcomeNoteStyles.byLineMobile}>Sarada Jayakrishnan - Chair, IEEE Kerala Section</div>
          <img src={"/team/ieee-ks-chair.jpg"} className={welcomeNoteStyles.imageMobile} />
          <div className={`${welcomeNoteStyles.topParaMobile} ${welcomeNoteStyles.helloMobile}`}>Hello dear WIE Kerala friends,</div>
          <div className={welcomeNoteStyles.topParaMobile}>I get excited any time girls are celebrated and that
            too when they are aspiring professionals. Combined
            you are all volunteers of the largest professional
            organisation of the world. What better medium than
            words from those who are fully involved into the
            volunteering activities.</div>
        </div>
      </div>
      {/*end of for mobile*/}
      <div className={`${welcomeNoteStyles.para}`}>We are wired to be empathetic, but are we independent thinkers ?</div>
      <div className={`${welcomeNoteStyles.para}`}>Independent thinking leads to innovative thoughts and then new concepts arise.
        Proud that Kerala WiE have a bunch of independent innovative thinkers conceiving
        new programs involving technical and professional content. The new normal has been
        a great equaliser in many ways helping programs to reach a wider audience.</div>
      <div className={`${welcomeNoteStyles.para}`}>Congratulations on this edition of WiE echos which will archive the celebration of
        WiE Kerala volunteers, in their efforts to be passionate engineers with a motto to give
        back to society.</div>
      <div className={`${welcomeNoteStyles.para} ${fromWieCharsDeskStyles.lastParaStyle}`}>Good luck</div>
      <div className={`${welcomeNoteStyles.para} ${welcomeNoteStyles.lastParaStyle}`}>Stay safe</div>
    </div>
  );
};


export default WelcomeNote;