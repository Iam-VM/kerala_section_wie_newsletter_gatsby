import React from "react";
import bestWishesStyles from "./bestWishes.module.css";
import teamStyles from "../../styles/teams.module.css";
import achievementStyles from "./achievement.module.css"
import {FaRocket} from "react-icons/fa";

const BestWishes = () => {
  return (
    <div className={`${teamStyles.container} ${bestWishesStyles.container}`}>
      <div className={teamStyles.teamHeadContainer}>
        <div className={teamStyles.teamHeadText}>Welcome Wishes</div>
        <div className={teamStyles.headByLine} style={{fontSize: '14px'}}>Proud to welcome the newest members of our family</div>
      </div>
      <div  className={bestWishesStyles.sbNameListContainer}>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem'}}/>IEEE WIE AG SJCET</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem'}}/>IEEE WIE AG JCET</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem'}}/>IEEE WIE AG GECI</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem'}}/>IEEE WIE AG GECK</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem'}}/>IEEE WIE AG CUK</div>
      </div>
    </div>
  );
};


export default BestWishes;