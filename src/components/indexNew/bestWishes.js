import React, { useEffect } from "react"
import bestWishesStyles from "./bestWishes.module.css";
import teamStyles from "../../styles/teams.module.css";
import {FaRocket} from "react-icons/fa";
import Aos from "aos";

const BestWishes = () => {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={`${teamStyles.container} ${bestWishesStyles.container}`}>
      <div className={teamStyles.teamHeadContainer}>
        <div className={teamStyles.teamHeadText}>Welcome Wishes</div>
        <div className={teamStyles.headByLine} style={{fontSize: '14px'}}>Proud to welcome the newest members of our family</div>
      </div>
      <div  className={bestWishesStyles.sbNameListContainer}>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem', marginBottom: '-2px'}}/>IEEE WIE AG SJCET</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem', marginBottom: '-2px'}}/>IEEE WIE AG JCET</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem', marginBottom: '-2px'}}/>IEEE WIE AG GECI</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem', marginBottom: '-2px'}}/>IEEE WIE AG GECK</div>
        <div className={bestWishesStyles.sbNameContainer}><FaRocket style={{color: '#ffa200', fontSize: '16px', marginRight: '1rem', marginBottom: '-2px'}}/>IEEE WIE AG CUK</div>
      </div>
    </div>
  );
};


export default BestWishes;