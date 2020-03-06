import React from "react";
import "./CafeteriaCard.scss";
import CafeteriaHeader1 from "./CafeteriaHeader";
import CafeteriaHeader2 from "./CafeteriaHeaderTitle";
import CafeteriaHeader3 from "./address";
import CafeteriaHeaderLine from "./CafeteriaLine";

const SchoolCafeteria = () => {
  return (
    <div className="subwayCard">
      <CafeteriaHeader1 />
      <CafeteriaHeader2 />
      <CafeteriaHeader3 />
      <CafeteriaHeaderLine />
    </div>
  );
};

export default SchoolCafeteria;
