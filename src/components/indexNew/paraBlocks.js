import React from "react";
import paraBlockStyles from "./paraBlockStyles.module.css";

const ParaBlock = (props) => {
  return (
    <div className={paraBlockStyles.container} style={{height: `${props.heightInPX}px`, width: `${props.widthInPX}px`}}>
      {
        (props.head) ? <div className={paraBlockStyles.headText}>{props.head}</div> : <div className={paraBlockStyles.headContainer}>
          <div className={paraBlockStyles.headTextPart1}>{props.headPart1}</div>
          <div className={paraBlockStyles.headTextPart2}>{props.headPart2}</div>
          </div>
      }

      {props.para.map((para) => <div className={paraBlockStyles.para}>{para}</div>)}
    </div>
  );
};

export default ParaBlock;