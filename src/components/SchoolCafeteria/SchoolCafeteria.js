import React from "react";
import "./CafeteriaCard.scss";
import CafeteriaHeader1 from "./CafeteriaHeader";
import CafeteriaHeader2 from "./CafeteriaHeaderTitle";
import CafeteriaHeader3 from "./address";
import CafeteriaHeaderLine from "./CafeteriaLine";
import CafeteriaItem from "./CafeteriaList";

const SchoolCafeteria = () => {
  return (
    <div className="cafeteriaCard">
      <CafeteriaHeader1 />
      <CafeteriaHeader2 />
      <CafeteriaHeader3 />
      <CafeteriaHeaderLine />
      <CafeteriaItem />
    </div>
  );
};

export default SchoolCafeteria;
