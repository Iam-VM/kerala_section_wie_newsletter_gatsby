import React from "react";
import hubStyles from "../../../styles/StyleHub.module.css";



const Travancore = () => {
  return (

    <div className={hubStyles.container}>

      <div className={hubStyles.header}>
        <h1 className={hubStyles.gradientText}>IEEE TRAVANCORE HUB</h1>
      </div>


      <div className={hubStyles.cardsWrapper}>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/lbs-institute-of-technology-for-women"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Lal Bahadur Shastri Institute of Technology</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/government-engineering-college-barton-hill"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Government College of Engineering, Barton Hill</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/sree-chitra-thirunal-college of-engineering"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Shree Chitra Thirunal College of Engineering</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/travancore-hub/ukf-college-of-engineering-and-technology"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>UKF College of Engineering and Technology</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/travancore-hub/mar-baselios-college-of-engineering"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>MB College of Engineering and Technology</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/tkmit"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Thangal Kunju Musaliar Institute of Technology</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/travancore-hub/tkm-college-of-engineering"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>TKM College of Engineering</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/college-of-engineering-trivandrum"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>College of Engineering Trivandrum</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/travancore-hub/college-of-engineering-perumon"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>College of Engineering Perumon</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};


export default Travancore;