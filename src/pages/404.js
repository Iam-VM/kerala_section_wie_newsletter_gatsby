import React from "react";
import {Link} from "gatsby";
import errorPageStyles from "../styles/errorPage.module.css";
import Footer from "../components/indexNew/footer"

const NotFoundPage = ({location}) => {
  const path = location.pathname ? location.pathname : '';

  return (
    <div className={errorPageStyles.container}>
      <div className={errorPageStyles.head}>
        404 Not Found
      </div>
      <div className={errorPageStyles.text}>
        Aaww... You just hit a wrong route. <span className={errorPageStyles.pathName}>{path}</span> does not exist !
      </div>
      <Link to={'/'} className={'linkWrap'}><div className={errorPageStyles.homeButton}>Home</div></Link>
      <div className={errorPageStyles.space}>

      </div>
      <Footer />
    </div>
  );
};


export default NotFoundPage
