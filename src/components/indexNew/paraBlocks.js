import React from "react";
import paraBlockStyles from "./paraBlockStyles.module.css";

const ParaBlock = (props) => {
  return (
    <div className={paraBlockStyles.container} style={{height: `${props.heightInPX}px`, width: `${props.widthInPX}px`}}>
      <div className={paraBlockStyles.head}>{props.head}</div>
      {props.para.map((para) => <p className={paraBlockStyles.para}>{para}</p>)}
    </div>
  );
};

export default ParaBlock;