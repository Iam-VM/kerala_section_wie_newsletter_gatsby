import React, {useEffect} from "react";
import paraBlockStyles from "./paraBlockStyles.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

const ParaBlock = (props) => {
  useEffect(() => {
    Aos.init()
  }, []);
  return (
    <div data-aos-once="true" data-aos="fade-up" data-aos-duration="800" className={paraBlockStyles.container} style={{height: `${props.heightInPX}px`, width: `${props.widthInPX}px`}}>
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