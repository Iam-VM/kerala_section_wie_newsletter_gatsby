import React, { useEffect } from "react"
import indexStyles from "../../styles/index.module.css";
import teamStyles from "../../styles/teams.module.css";
import achievementStyles from "./achievement.module.css";
import {FaTrophy} from "react-icons/fa";
import Aos from "aos";

const AchievementsComponent = () => {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800"  className={`${teamStyles.container} ${achievementStyles.container}`}>
      <div className={teamStyles.teamHeadContainer}>
        <div className={teamStyles.teamHeadText}>Achievements</div>
        <div className={teamStyles.headByLine}>Proud of our accomplishments and continual efforts</div>
      </div>
      <div className={achievementStyles.achievementsContainer}>
        <div className={achievementStyles.achievement}>
          <FaTrophy className={achievementStyles.trophyIcon} />
          <div className={achievementStyles.achievementText}>
            Women In Engineering AG of the year - 2019 .
          </div>
        </div>
        <div className={achievementStyles.achievement}>
          <FaTrophy className={achievementStyles.trophyIcon} />
          <div className={achievementStyles.achievementText}>
            R10 Women In Engineering Outstanding Section Award - 2019 .
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsComponent;