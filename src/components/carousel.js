import React, {useState, CSSProperties} from "react";
import carouselStyles from "../styles/carouselStyles.module.css";
import {FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CustomCarousel = () => {
  return (
    <Carousel className={carouselStyles.carousel} infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} interval={3000} transitionTime={500} swipeScrollTolerance={0.5}>
      <div>
        <img src="wieTeam.png" alt={"WiE Team"} />
        {/*<p className="legend">WiE Team</p>*/}
      </div>
      <div>
        <img src="designTeam.png" alt={"Design Team"}/>
        {/*<p className="legend">Design Team</p>*/}
      </div>
      <div>
        <img src="contentTeam.png" alt={"Content Team"}/>
        {/*<p className="legend">Content Team</p>*/}
      </div>
    </Carousel>
  );
};



export default CustomCarousel;
