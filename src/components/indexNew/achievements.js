import React from "react";
import indexStyles from "../../styles/indexNew.module.css";
import teamStyles from "../../styles/teams.module.css";
import achievementStyles from "./achievement.module.css";
import {FaTrophy} from "react-icons/fa";

const AchievementsComponent = () => {
  return (
    <div className={`${teamStyles.container} ${achievementStyles.container}`}>
      <div className={teamStyles.teamHeadContainer}>
        <div className={teamStyles.teamHeadText}>Achievements</div>
        <div className={teamStyles.headByLine}>Lorem Ipsum is simply dummy text</div>
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