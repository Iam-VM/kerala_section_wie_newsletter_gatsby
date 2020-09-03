import React from "react";
import linkStyles from "./reportLinksAndLink.module.css";
import {FaLink} from "react-icons/fa";


const LinkComponent = (props) => {
  return (
    <div className={linkStyles.linkComponentContainer}>
        <div className={linkStyles.hubName} style={(props.hubNameSize)?{fontSize: props.hubNameSize}:null}>{props.hubName}</div>
        <span className={linkStyles.linkIcon} style={(props.iconSize)?{fontSize: props.iconSize}:null}><FaLink /></span>
    </div>
  );
};


export default LinkComponent;