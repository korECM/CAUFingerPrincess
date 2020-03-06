import React from "react";
import "./CafeteriaList.scss";
import CafeteriaHeader2 from "./CafeteriaHeaderTitle";

const CafeteriaItem = () => {
  return (
    <div className="cafeteriaList">
      <span>조식</span>
      <a>08:00 ~ 10:00</a>
      <span>2,000원</span>
    </div>
  );
};

const CafeteriaMenu = () => {
  return (
    <div className="cafeteriaListMenu">
      <span>조식 운영 중단</span>
    </div>
  );
};

const CafeteriaListLine = () => {
  var lineStyle = {
    display: "flex",
    flex: 1,
    height: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 0,
    backgroundColor: "gray"
  };

  return <div style={lineStyle}></div>;
};

export default function CafeteriaList() {
  return (
    <div>
      <CafeteriaItem />
      <CafeteriaMenu />
      <CafeteriaListLine />
    </div>
  );
}
