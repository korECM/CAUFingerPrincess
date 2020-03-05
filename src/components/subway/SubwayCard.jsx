import React from "react";
import SubwayHeader from "./SubwayHeader";
import SubwayList from "./SubwayList";
import "./SubwayCard.scss";

export default function SubwayCard({ line }) {
  return (
    <div className="subwayCard">
      <SubwayHeader />
      <SubwayList line={line} />
    </div>
  );
}
