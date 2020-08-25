import React from "react";
import linkStyles from "./reportLinksAndLink.module.css";
import {FaLink} from "react-icons/fa";


const LinkComponent = (props) => {
  return (
    <div className={linkStyles.linkComponentContainer}>
        <div className={linkStyles.hubName}>{props.hubName}</div>
        <span className={linkStyles.linkIcon}><FaLink /></span>
    </div>
  );
};


export default LinkComponent;