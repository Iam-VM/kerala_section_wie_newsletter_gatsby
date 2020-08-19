import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";
import carouselStyles from "../styles/carouselStyles.module.css";


const ControlledCarousel = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className={`${carouselStyles.carouselImages} d-block w-100`}
          src="wieTeam.png"
          alt="wieTeam"
        />
        {/*<Carousel.Caption>*/}
        {/*  <h3 className={carouselStyles.head}>Wie Team</h3>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${carouselStyles.carouselImages} d-block w-100`}
          src="designTeam.png"
          alt="designTeam"
        />

        {/*<Carousel.Caption>*/}
        {/*  <h3 className={carouselStyles.head}>Design Team</h3>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${carouselStyles.carouselImages} d-block w-100`}
          src="contentTeam.png"
          alt="contentTeam"
        />

        {/*<Carousel.Caption>*/}
        {/*  <h3 className={carouselStyles.head}>Content Team</h3>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel>
  );
};



export default ControlledCarousel;
