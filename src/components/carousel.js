import React, {useState, CSSProperties} from "react";
import carouselStyles from "../styles/carouselStyles.module.css";
import {FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa";
import "../styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CustomCarousel = () => {
  return (
    <Carousel style={""}className={carouselStyles.carousel} infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} interval={3000} transitionTime={500} swipeScrollTolerance={0.5}>
      <div className={carouselStyles.slide}>
        <img src="wieTeam.png" alt={"WiE Team"} className={carouselStyles.carouselImage}/>
        {/*<p className="legend">WiE Team</p>*/}
      </div>
      <div className={carouselStyles.slide}>
        <img src="designTeam.png" alt={"Design Team"} className={carouselStyles.carouselImage}/>
        {/*<p className="legend">Design Team</p>*/}
      </div>
      <div className={carouselStyles.slide}>
        <img src="contentTeam.png" alt={"Content Team"} className={carouselStyles.carouselImage}/>
        {/*<p className="legend">Content Team</p>*/}
      </div>
    </Carousel>
  );
};



export default CustomCarousel;
