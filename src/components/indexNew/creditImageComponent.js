import React from "react";
import creditImageStyles from "./creditImage.module.css";

const CreditImagesComponent = (props) => {
  return (
    <div className={creditImageStyles.container}>
      {/*<div className={creditImageStyles.imageContainer}>*/}
        <img src={props.imgSrc} alt={`This is ${props.name}`} className={creditImageStyles.creditImage} />
      {/*</div>*/}
      <div className={creditImageStyles.detailsContainer}>
        <div className={creditImageStyles.name}>{props.name}</div>
        {(props.designation)? <div className={creditImageStyles.designation}>{props.designation}</div>:null}
        {(props.collegeName)? <div className={creditImageStyles.collegeName}>{props.collegeName}</div>:null}
      </div>
    </div>
  );
};

export default CreditImagesComponent;