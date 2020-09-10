import React from "react";
import hubStyles from "../../../styles/StyleHub.module.css";
import Footer from "../../../components/indexNew/footer"


const Malabar = () => {
  return (
    <div className={hubStyles.container}>

      <div className={hubStyles.cardsWrapper}>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/central-university-of-kerala-kasargod"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Central University of Kreala, Kasargod</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/government-college-of-engineering-kannur"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Government College of Engineering Kannur</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/government-engineering-college-kozhikode"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Government Engineering College Kozhikode</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/malabar-hub/vimal-jyothi-engineering-college-chemperi"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Vimal Jyothi Enineering College, Chemperi</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/government-engineering-college-palakkad"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Government Engineering College Palakkad</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/college-of-engineering-thalassery"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>College of Engineering Thalassery</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/malabar-hub/college-of-engineering-trikaripur"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>College of Engineering Thrikaripur</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/college-of-engineering-vadakara"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>College of Engineering Vadakara</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/ammini-college-of-engineering"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Ammini College of Engineering</h1>
            </div>
          </a>
        </div>


        <div>
          <a className={hubStyles.card} href={"/malabar-hub/mes-college-of-engineering-kuttipuram"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>MES College of Enineering, Kuttipuram</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/nss-college-of-engineering"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>NSS College of Engineering</h1>
            </div>
          </a>
        </div>

        <div>
          <a className={hubStyles.card} href={"/malabar-hub/alhalia-school-of-engineering-and-technology"}
             style={{textDecoration:  'none', borderRadius: '50% 20% / 10% 40%'}}>
            <div>
              <h1>Ahalia School of Engineering and Technologoy</h1>
            </div>
          </a>
        </div>

      </div>
      <Footer />
    </div>

  );
};

export default Malabar;