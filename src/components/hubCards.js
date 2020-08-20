import React from "react";
import hubCardsStyles from "../styles/hubCardsStyles.module.css";
import {FaAngleDoubleRight} from "react-icons/fa";


const HubCard = (props) => {
  return (
    <div className={hubCardsStyles.container}>
      <div className={hubCardsStyles.simpleApproach}>
        <h3 className={hubCardsStyles.hubName}>{props.hubName}</h3>
        {/*<div className={hubCardsStyles.iconContainer}><FaAngleDoubleRight className={hubCardsStyles.goTriangle} /></div>*/}
      </div>
    </div>
  );
};


export default HubCard;