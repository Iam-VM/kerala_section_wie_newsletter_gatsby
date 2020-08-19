import React from "react";
import hubCardsStyles from "../styles/hubCardsStyles.module.css";
import {FaAngleDoubleRight} from "react-icons/fa";


const HubCard = (props) => {
  return (
    <div className={hubCardsStyles.container}>
      <div className={hubCardsStyles.rectangle}>
        <div className={hubCardsStyles.hubName}>{props.hubName}</div>
        <div className={hubCardsStyles.iconContainer}><FaAngleDoubleRight className={hubCardsStyles.goTriangle} /></div>
      </div>
    </div>
  );
};


export default HubCard;