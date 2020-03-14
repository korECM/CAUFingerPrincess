import React from "react";
import "./CafeteriaCard.scss";
import CafeteriaHeader1 from "./CafeteriaHeader";
import CafeteriaHeader2 from "./CafeteriaHeaderTitle";
import CafeteriaHeader3 from "./address";
import CafeteriaHeaderLine from "./CafeteriaLine";
import CafeteriaList from "./CafeteriaList";

const SchoolCafeteria = () => {
  return (
    <div className="cafeteriaCard">
      <CafeteriaHeader1 />
      <CafeteriaHeader2 />
      <CafeteriaHeader3 />
      <CafeteriaHeaderLine />
      <CafeteriaList />
      <CafeteriaList />
      <CafeteriaList />
      <CafeteriaList />
      <CafeteriaList />
    </div>
  );
};

export default SchoolCafeteria;
