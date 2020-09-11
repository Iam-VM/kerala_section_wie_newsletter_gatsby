import React, { useEffect } from "react"
import Aos from "aos"
import linkReportStyles from "../../../styles/linkReport.module.css";

const LinkReport = () => {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div className={linkReportStyles.first}>
      <section className={linkReportStyles.intro}>
        <div className={linkReportStyles.inner}>
          <div className={linkReportStyles.content}>
            <h1 style={{color: '#16094e'}}>IEEE LINK</h1>
            <a className={linkReportStyles.btn} href={"#start"}>View Works</a>
          </div>
        </div>
      </section>
      
      <section className={linkReportStyles.container} id={"start"}>
        <div className={linkReportStyles.ieeeLinkHeadDegreeTwo}>IEEE LINK</div>
        <div className={linkReportStyles.para}>
          <div className={linkReportStyles.eventHead}> Colloquium Phase 1</div>
          <div className={linkReportStyles.date}>Date: 30th April - 9th May, 2020</div>
          <div className={linkReportStyles.participants}>No. of Participants: 300+</div>
          <div className={linkReportStyles.paraTag}>
            WiE Colloquium is a program focusing on WiE AG members (female engineering
            aspirants) to surge and update the technical knowledge. It is a panel discussion
            with 2 phases of which at the first phase all WiE AGs are divided into 9 groups and
            are given the pillars of Industry 4.0 . The second phase will be on the topic:
            on 28th April 2020, under the supervision of YPs from WiE, phase 1 was
            Industry 4.0 coordinated by IEEE LINK as the final event of WiE Colloquium.
            Grouping of WiE AGs was conducted from 22nd-24th April 2020. Phase 1 started
            is selected for Phase 2 execution.
            WIE Colloquium has catered to bringing together a vast community of technically
            technological development under their wings. The primary aim of the event was
            empowered women who have embraced innovation and shortlisted ideas for
            too engage female engineering aspirants in technical discussions on the latest
            developments. The enthusiasm and participation that the event inspired
            demonstrated that student culture at IEEE. The other outcomes of this event are..
            backbone for the less active WIE AGs of a few Student Branches.
            We believe that this event has ignited many young minds with the latest techs
            and trends and have given a proper insight to the pillars of Industry 4.0.
            successfully completed on 9th May 2020. Best panelist from each of the 9 topics
          </div>
        </div>
        <div className={linkReportStyles.para}>
          <div className={linkReportStyles.eventHead}>WIE Learn</div><br />
          <div className={linkReportStyles.date}>Date:5th April-23rd October,2020.</div>
          <div className={linkReportStyles.participants}>No.of Participants:125</div>
          <div className={linkReportStyles.paraTag}>
            WiE-Learn is an online mentorship programming,exclusively for female engineering aspirants across
            engineering colleges in Kerala.The mentorship
            program is open for all registered students.WiE Learn provides two main domains:
            <span className={linkReportStyles.listElement}>1.Android App development using Android Studio.</span>
            <span className={linkReportStyles.listElement}>2.Full Stack RaspberryPi.</span>
            Teams of five were eligible to apply for the course and total of 25 teams(Total 125 students) were
            shortlisted from the applicants.it contain 3 teams from Malabar Hub,15 teams from Kochi hub and 7 teams from
            Travancore Hub.
            Among them 17 teams are attending Android Development and 8 teams are attending RaspberryPi course.Each team
            is assigned with a mentor.The training program started on 5th April 2020 and continues till 23rd August
            2020.As an
            outcome for this project,a Hackathon during WiEs or as a prevent for WiES will be conducted.Every 3 weeks of
            the mentorship program an assessment task will
            be conducted,inorder to know the follow-up..
          </div>
        </div>
        <div className={linkReportStyles.para}>
          <div className={linkReportStyles.eventHead}>Venus–The Epitome of WiEness</div>
          <div className={linkReportStyles.date}>Date: March 7-13,2020</div>
          <div className={linkReportStyles.participants}>No.of Participants: Various SBs and IEEE Sub sections</div>
          <div className={linkReportStyles.paraTag}>
            Venus–The epitome of WiEness,the WiE week celebration was observed from March7–March13,2020.The event
            brought all Women’s day celebrations
            under a single structure,the Venus.The week was dedicated to celebrate women’s achievements in the
            social,economic,cultural and political spheres.
            The IEEE WiE Community focused on conducting out reach programs at SB Levels,unfortunately many couldn’t
            complete due to the hit by the pandemic COVID19
            Many of the structured WiE week celebrations were then conducted using online platforms.
            Venus have helped girls in excelling in practical living from the classroom to the outerWorld.This is done
            by providing female students with education,exposure,
            and experience.The gender gap that still persists in the society can only be minimized through such
            events.The out reach programs have significantly helped
            the women out there in the society,which turns out to be the highlight of Venus.
          </div>
        </div>
      </section>
    </div>
  );
};


export default LinkReport;