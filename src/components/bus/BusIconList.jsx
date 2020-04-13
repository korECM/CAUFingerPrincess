import React from "react";
import "./BusIconList.scss";

function BusIconList() {
  let busData = [{}, {}, {}, {}, {}, {}];

  let busIcons = busData.map((data, index) => (
    <svg
      className="busIcon"
      version="1.1"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      key={`data${index}`}
    >
      <rect
        x="0"
        y="0"
        width="26"
        height="39"
        stroke="black"
        strokeWidth="2px"
        fill="none"
      />
    </svg>
  ));

  return <div className="busIconList">{busIcons}</div>;
}

export default BusIconList;
