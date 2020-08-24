import React from "react";
import indexStyles from "../styles/indexNew.module.css";

//local
import Cover from "../components/indexNew/coverDesktop";

const NewIndexPage = () => {
  return (
    <div className={indexStyles.main}>
      <Cover />
    </div>
  );
};

export default NewIndexPage;